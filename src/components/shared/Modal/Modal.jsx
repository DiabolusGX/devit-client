import { IoIosCloseCircleOutline } from 'react-icons/io';
import './Modal.scss';

const Modal = ({ heading, onClose, children, onSubmit }) => {
    return (
        <div className='mask_og fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center '>
            <div className='top-0 bg-black-200 rounded-2xl py-4 relative'>
                <div className=' py-6  px-8 border-b-2 border-grey-200  '>
                    <div className='mb-4 flex items-center justify-between text-yellow-100'>
                        <h3 className='font-medium text-2xl'>{heading}</h3>
                        <button
                            className=' rounded-full p-2 hover:bg-black-200'
                            onClick={onClose}
                        >
                            <IoIosCloseCircleOutline size='2rem' />
                        </button>
                    </div>

                    {children}
                </div>

                <div className='py-6 px-8 flex flex-col items-center'>
                    <button
                        className='gradient_og_global flex items-center py-3 px-6 text-white rounded-full hover:opacity-80 '
                        onClick={onSubmit}
                    >
                        <span className='text-lg text-white-100'>Submit</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
