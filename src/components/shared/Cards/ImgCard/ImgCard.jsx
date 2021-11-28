import React from 'react';

const ImgCard = ({ heading, subheading }) => {
    return (
        <div className='container mx-auto w-2/5 flex items-center justify-around drop-shadow-custom-black-200 bg-black-200 rounded-2xl py-4 px-6  '>
            <img
                className='w-16'
                src='/images/avatar-default.png
                '
                alt=''
            />

            <div>
                <h2 className='text-red-100 font-medium mb-1 text-2xl'>
                    {heading}
                </h2>
                <p className='text-grey-200'>{subheading}</p>
            </div>
        </div>
    );
};

export default ImgCard;
