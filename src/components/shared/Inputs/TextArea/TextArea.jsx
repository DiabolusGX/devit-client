import React from 'react';
const TextArea = (props) => {
    return (
        <div className='relative'>
            <textarea
                cols='24'
                rows='2'
                className='w-full bg-black-300 mb-6 py-3 px-6 overflow-hidden text-grey-100  rounded-lg focus:outline-none'
                type='text'
                {...props}
                style={{ width: props.fullWidth ? '100%' : 'inherit' }}
            />
        </div>
    );
};

export default TextArea;
