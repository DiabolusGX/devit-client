import React from 'react';
const TextInput = (props) => {
    return (
        <div className='relative'>
            <input
                className='bg-black-300 mb-6 py-3 px-6 text-grey-100  rounded-lg focus:outline-none'
                type='text'
                {...props}
                style={{ width: props.fullWidth ? '100%' : 'inherit' }}
            />
        </div>
    );
};

export default TextInput;
