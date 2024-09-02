import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import Typewriter from './typewriter';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const ContactForm = () => {
  // Styles
  const containerStyle = 'relative mt-10 w-full flex flex-col justify-center p-2';
  const formStyle = 'bg-backgroundDark p-6 rounded-lg w-2/3 mx-auto';
  const labelStyle = 'mt-2 block text-neon';
  const inputStyle = 'mt-1 p-2 block w-full bg-lime-200 text-backgroundDark border-neon rounded-md focus:bg-backgroundDark focus:text-textNeon focus:outline-none focus:ring-2 focus:ring-borderNeon';
  const buttonStyle = 'border-neon font-dos mt-5 mx-auto w-1/2 hover-effect';
  const errorStyle = 'text-red-500 mt-2';

  // Référence pour l'élément de titre pour l'animation
  const titleRef = useRef(null);
  // État pour démarrer l'animation de la machine à écrire
  const [startTyping, setStartTyping] = useState(false);

  // Utilisation du hook pour lancer l'animation lors de l'affichage du titre
  useAnimateOnScroll(titleRef, () => setStartTyping(true));

  // État pour gérer les données du formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // État pour gérer les erreurs de validation des champs du formulaire
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  // État pour les messages d'erreur spécifiques
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [messageError, setMessageError] = useState('');

  // Fonction pour gérer le changement des champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Validation du champ email avec une expression régulière
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validation du champ nom avec une expression régulière
  const validateName = (name) => {
    const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]+$/;
    return nameRegex.test(name);
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérification du champ Nom
    if (!validateName(formData.name)) {
      setNameError('Le nom ne doit contenir que des lettres.');
      return;
    } else {
      setNameError('');
    }

    // Vérification du champ Message
    if (formData.message.length < 50) {
      setMessageError('Le message doit contenir au moins 50 caractères.');
      return;
    } else {
      setMessageError('');
    }

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
        {/* Texte par défaut pour l'accessibilité */}
        {!startTyping && 'Formulaire de contact'}
        
        {/* Titre animé avec la machine à écrire */}
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
          {nameError && <p className={errorStyle}>{nameError}</p>}
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
          {messageError && <p className={errorStyle}>{messageError}</p>}
        </div>
        <button type="submit" className={buttonStyle}>
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
