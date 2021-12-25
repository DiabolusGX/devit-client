import { useState } from 'react';
import {
    BsArrowRightCircle,
    BsArrowLeftCircle,
    BsArrowRightShort,
} from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { Card, ImgCard } from '../../../../components';
import { setAvatar } from '../../../../store/activateSlice';
const StepAvatar = ({ changeStep, backStep }) => {
    const { username } = useSelector((state) => state.activate);
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [image, setImage] = useState(user.avatar);
    const captureImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImage(reader.result);
            dispatch(setAvatar(reader.result));
        };
    };
    const submit = async () => {
        changeStep();
    };

    return (
        <div>
            <div className='mb-8'>
                <ImgCard
                    heading='Welcome to Devit!'
                    subheading='Follow the following steps to get activated.'
                />
            </div>
            <div className='relative'>
                <Card
                    heading={`What a nice name, ${username}!`}
                    imgPath='./images/bird.svg'
                >
                    <p className='text-grey-200 leading-snug mb-4 '>
                        How's this one?
                    </p>

                    <img
                        className='mb-4 w-16 h-16 border-2 border-yellow-100 rounded-full'
                        src={image}
                        alt='avatar'
                    />
                    <div>
                        <input
                            onChange={captureImage}
                            className='hidden'
                            type='file'
                            id='avatarInput'
                        />
                        <label
                            htmlFor='avatarInput'
                            className='flex items-center text-grey-200 mb-2 cursor-pointer text-md font-medium'
                        >
                            <span>Choose a different photo</span>
                            <BsArrowRightShort size='1.5rem' />
                        </label>
                    </div>

                    <button
                        className=' flex items-center px-6 py-3 bg-black-100 rounded-lg text-yellow-100 drop-shadow-custom-black-100 mb-4'
                        onClick={submit}
                    >
                        <span className='mr-4 text-lg font-medium'>Next</span>
                        <BsArrowRightCircle size='1.5rem' />
                    </button>
                    <button
                        className=' absolute bottom-5 left-5 text-yellow-100 '
                        onClick={backStep}
                    >
                        <BsArrowLeftCircle size='1.5rem' />
                    </button>
                </Card>
            </div>
        </div>
    );
};

export default StepAvatar;
