import { useState } from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Card, ImgCard, TextInput } from '../../../../components';

import { setUsername } from '../../../../store/activateSlice';

const StepName = ({ changeStep }) => {
    const dispatch = useDispatch();
    const { username } = useSelector((state) => state.activate);
    const [fullname, setFullname] = useState(username);
    const submitName = () => {
        if (!fullname) return;
        dispatch(setUsername(fullname));
        changeStep();
    };
    return (
        <div className='relative'>
            <div className='mb-8'>
                <ImgCard
                    heading='Welcome to Devit!'
                    subheading='Follow the following steps to get activated.'
                />
            </div>
            <div>
                <Card heading='👋 Enter your username'>
                    <TextInput
                        placeholder='Make it unique...'
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                    />
                    <button
                        className=' flex items-center px-6 py-3 bg-black-100 rounded-lg text-yellow-100 drop-shadow-custom-black-100 mb-4 mt-2'
                        onClick={submitName}
                    >
                        <span className='mr-4 text-lg font-medium'>Next</span>
                        <BsArrowRightCircle size='1.5rem' />
                    </button>
                    <div className='px-10'>
                        <p className='text-grey-200 text-sm leading-snug '>
                            By clicking Next, you agree to our Terms of Services
                            and Privacy Policy.
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default StepName;
