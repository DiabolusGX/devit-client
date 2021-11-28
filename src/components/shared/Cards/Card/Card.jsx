import React from 'react';

const Card = ({ children, heading }) => {
    return (
        <div className='container w-2/5 mx-auto bg-black-200 rounded-2xl p-8 text-center flex flex-col items-center drop-shadow-custom-black-200 '>
            {heading && (
                <h2 className='text-white-100 text-xl mb-4 '>{heading}</h2>
            )}
            {children}
        </div>
    );
};

export default Card;
