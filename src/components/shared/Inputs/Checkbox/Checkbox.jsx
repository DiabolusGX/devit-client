import React from 'react';
import './Checkbox.scss';
const Checkbox = ({ checked, onClick }) => {
    return (
        <div>
            <input
                onClick={onClick}
                type='checkbox'
                id='check'
                class={`agree_checkbox ${checked && 'is_checked'} hidden`}
            />
            <label htmlFor='check'></label>
        </div>
    );
};

export default Checkbox;
