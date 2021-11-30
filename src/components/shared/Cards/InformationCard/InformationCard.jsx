import React from 'react';

const InformationCard = ({ children, heading, icon }) => {
    return (
        <div className='w-auto px-4 py-2 inline-block purple_gradient_og_global rounded-full'>
            <div className='flex items-center'>
                {icon}
                <div className='ml-2'>
                    <h2 className='text-white-100 text-base font-medium '>
                        {heading}
                    </h2>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default InformationCard;
