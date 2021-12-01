import React from 'react';

const OutlinedButton = ({ onClick, children, circular }) => {
    return (
        <button
            onClick={onClick}
            className={` text-yellow-100 p-2 ${
                circular ? 'rounded-full ' : 'rounded-md'
            } border-2 transition-all hover:bg-yellow-100 hover:text-black-100`}
        >
            {children}
        </button>
    );
};

export default OutlinedButton;
