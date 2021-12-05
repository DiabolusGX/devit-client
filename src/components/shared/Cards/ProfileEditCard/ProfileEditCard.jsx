import React from 'react';
import { AiFillEdit } from 'react-icons/ai';
const ProfileEditCard = ({ children, heading, light, onClick }) => {
    return (
        <div
            className={`w-full py-4 px-5 rounded-2xl ${
                light ? 'bg-black-200' : 'bg-black-400'
            }`}
        >
            <div className='flex items-center justify-between mb-2'>
                <h3 className='text-lg font-medium'>{heading}</h3>
                <button onClick={onClick} className='text-grey-200'>
                    <AiFillEdit size='1.3rem' />
                </button>
            </div>
            {children}
        </div>
    );
};

export default ProfileEditCard;
