import React from 'react';

const RotatingCircleCard = ({ images, text }) => {
    // Styles
    const cardStyle = "relative w-64 h-60 mx-auto bg-lime-200  rounded-lg flex flex-col items-center justify-center";
    const textStyle = "absolute top-2 text-center text-lime-500 font-bold text-xl"; 
    const circleContainerStyle = "relative flex items-center justify-center mt-6";  
    const circleStyle = "w-32 h-32 border-4 border-dotted border-lime-500 rounded-full animate-spin-slow";
    const imageStyle = "w-16 h-16 "; 
    const topImageStyle = "absolute z-10 top-[-24px] left-[50%] transform -translate-x-1/2";
    const bottomLeftImageStyle = "absolute z-10 bottom-[0px] left-[65%]"; 
    const bottomRightImageStyle = "absolute z-10 bottom-[0px] right-[65%]";  

    return (
        <div className={cardStyle}>
            {/* Texte centré au-dessus */}
            <div className={textStyle}>
                {text}
            </div>

            {/* Cercle central */}
            <div className={circleContainerStyle}>
                <div className={circleStyle}></div>
                {/* Image au-dessus du cercle */}
                <img src={images[0][0]} alt={images[0][1]} className={`${imageStyle} ${topImageStyle}`} />
                {/* Image en bas à gauche */}
                <img src={images[1][0]} alt={images[1][1]} className={`${imageStyle} ${bottomLeftImageStyle}`} />
                {/* Image en bas à droite */}
                <img src={images[2][0]} alt={images[2][1]} className={`${imageStyle} ${bottomRightImageStyle}`} />
            </div>
        </div>
    );
};

export default RotatingCircleCard;
