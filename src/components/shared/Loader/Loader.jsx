import React from 'react';
import './Loader.scss';
const Loader = ({ message }) => {
    return (
        <div className='flex justify-center items-center w-screen h-screen overflow-x-hidden'>
            <div className='bg-black-200 rounded-2xl px-8 py-4 text-center flex flex-col items-center'>
                <div className='flex flex-col items-center'>
                    <svg
                        className='spinner'
                        width='42'
                        height='42'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <circle
                            cx='21'
                            cy='21'
                            r='18'
                            stroke='#C4C5C5'
                            strokeWidth='4'
                        />
                        <path
                            d='M20.778 1.001A20 20 0 111.542 25.627l3.876-.922a16.016 16.016 0 1015.404-19.72l-.044-3.984z'
                            fill='#E0565F'
                        />
                    </svg>
                    {message && (
                        <p className='text-grey-300 text-lg leading-snug font-medium mt-5 '>
                            {message}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Loader;
