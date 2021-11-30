import React from 'react';

const Card = ({ children, heading, imgPath }) => {
    return (
        <div className='relative container w-2/5 mx-auto bg-black-200 rounded-2xl p-8 text-center flex flex-col items-center drop-shadow-custom-black-200 '>
            {heading && (
                <h2 className='flex items-center text-white-100 text-xl mb-4 '>
                    <img className='mr-3 w-7 h-7' src={imgPath} alt='emoji' />
                    <span>{heading}</span>
                </h2>
            )}
            {children}
        </div>
    );
};

export default Card;
