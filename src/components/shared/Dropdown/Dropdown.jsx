import { useState } from 'react';

function Dropdown({ title, updateLevel, list }) {
    const [open, setOpen] = useState(false);
    return (
        <div className='cursor-pointer w-full'>
            <div
                className='text-grey-100 relative bg-black-300 p-3 rounded-lg w-40'
                onClick={() => setOpen(!open)}
            >
                <span>{title}</span>
            </div>
            {open && (
                <div className='bg-black-300 mt-1 w-40 rounded-lg absolute z-50 '>
                    {list.map((item, index) => (
                        <p
                            key={index}
                            className={`${
                                item === 'Mastering'
                                    ? 'text-red-100'
                                    : item === 'Growing'
                                    ? 'text-yellow-100'
                                    : 'text-green-100'
                            } px-3 py-2 hover:bg-black-100`}
                            onClick={() => {
                                setOpen(false);
                                updateLevel(item);
                            }}
                        >
                            {item}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dropdown;
