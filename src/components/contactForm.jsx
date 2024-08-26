import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import Typewriter from './typewriter';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const ContactForm = () => {
  const titleRef = useRef(null);
  const [startTyping, setStartTyping] = useState(false);

  // Utilisation du hook pour lancer l'animation lors de l'affichage du titre
  useAnimateOnScroll(titleRef, () => setStartTyping(true));

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  const [emailError, setEmailError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérification des champs obligatoires
    const newErrors = {
      name: formData.name === '',
      email: formData.email === '' || !validateEmail(formData.email),
      message: formData.message === ''
    };

    setErrors(newErrors);

    // Si des erreurs sont présentes, ne pas soumettre le formulaire
    if (newErrors.name || newErrors.email || newErrors.message) {
      setEmailError(
        newErrors.email && formData.email !== '' ? 'Veuillez entrer une adresse email valide.' : ''
      );

      // Retirer les erreurs après 3 secondes
      setTimeout(() => {
        setErrors({ name: false, email: false, message: false });
      }, 3000);
      return;
    }

    // Envoi de l'email via EmailJS
    const serviceID = 'service_4hl1ap3';
    const templateIDMessage = 'template_mj5erfx';
    const templateIDReception = 'template_y0wjtkw';
    const userID = 'mV9an-H4FiuEcQJ-p';

    // Envoi de l'email à vous-même
    emailjs.send(serviceID, templateIDMessage, formData, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert("Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.");
      });

    // Envoi de l'accusé de réception à l'utilisateur
    emailjs.send(serviceID, templateIDReception, formData, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Votre message a été envoyé avec succès et un accusé de réception vous a été envoyé.');
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert("Une erreur s'est produite lors de l'envoi de l'accusé de réception. Veuillez réessayer.");
      });

    // Réinitialiser le formulaire après soumission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    setEmailError('');
  };

  // Variables de style utilisant les classes définies dans tailwind.config.js
  const containerStyle = 'relative mt-10 w-full flex flex-col justify-center p-8';
  const formStyle = 'bg-backgroundDark p-6 rounded-lg w-1/2 mx-auto';
  const labelStyle = 'mt-2 block text-neon';
  const inputStyle = 'mt-1 p-2 block w-full bg-lime-200 text-backgroundDark border-neon rounded-md focus:bg-backgroundDark focus:text-textNeon focus:outline-none focus:ring-2 focus:ring-borderNeon';
  const buttonStyle = 'border-neon font-dos mt-5 mx-auto w-1/2 hover-effect';
  const errorStyle = 'text-red-500 mt-2';

  // Animation pour le titre H2
  const titleVariants = {
    hidden: { opacity: 0, width: '0%' },
    visible: {
      opacity: 1,
      width: '100%',
      transition: { duration: 1, ease: 'easeInOut' },
    },
  };

  return (
    <div className={containerStyle}>
      <motion.h2
        ref={titleRef}
        initial="hidden"
        animate={startTyping ? 'visible' : 'hidden'}
        variants={titleVariants}
      >
        {startTyping && <Typewriter text="Formulaire de contact" speed={50} />}
      </motion.h2>
      <form onSubmit={handleSubmit} className={formStyle}>
        <div>
          <label htmlFor="name" className={labelStyle}>
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputStyle}
          />
          {errors.name && <p className={errorStyle}>Ce champ est requis.</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelStyle}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputStyle}
          />
          {errors.email && <p className={errorStyle}>{emailError || 'Ce champ est requis.'}</p>}
        </div>
        <div>
          <label htmlFor="message" className={labelStyle}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className={inputStyle}
            rows="4"
          />
          {errors.message && <p className={errorStyle}>Ce champ est requis.</p>}
        </div>
        <button type="submit" className={buttonStyle}>
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
