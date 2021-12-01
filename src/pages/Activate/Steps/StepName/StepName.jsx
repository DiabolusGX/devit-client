import { useState, useEffect } from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Card, ImgCard, TextInput } from '../../../../components';
import { checkUsername } from '../../../../http';
import { setUsername } from '../../../../store/activateSlice';
import { Bounce, toast } from 'react-toastify';
const StepName = ({ changeStep }) => {
    const dispatch = useDispatch();
    const { username } = useSelector((state) => state.activate);
    const [usernameIsValid, setUsernameIsValid] = useState(false);
    const [fullname, setFullname] = useState(username);

    useEffect(() => {
        const identifier = setTimeout(async () => {
            console.log('Checking for validity');
            const { data } = await checkUsername({ username: fullname });
            console.log(data);
            setUsernameIsValid(data.isAvailable);
        }, 1000);

        return () => {
            console.log('Cleanup');
            clearTimeout(identifier);
        };
    }, [fullname, setUsernameIsValid]);

    const submitName = () => {
        if (!fullname) {
            return toast.error('🐱‍🚀 User name is mandatory!', {
                transition: Bounce,
                autoClose: 5000,
            });
        }
        if (!usernameIsValid)
            return toast.info('Username is taken', {
                transition: Bounce,
                autoClose: 5000,
                theme: 'dark',
            });
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
                <Card
                    heading='Enter your username'
                    imgPath='./images/handwave.svg'
                >
                    <TextInput
                        placeholder='Make it unique...'
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                    />
                    {!usernameIsValid && fullname && (
                        <div className='p-2 bg-red-10 mb-4 rounded '>
                            <p className='text-red-100 text-sm '>
                                Oops! Username is not available😓
                            </p>
                        </div>
                    )}
                    {usernameIsValid && fullname && (
                        <div className='p-2 bg-green-10 mb-4 rounded '>
                            <p className='text-green-100 text-sm '>
                                Yay! Username is available😁
                            </p>
                        </div>
                    )}
                    <button
                        className=' flex items-center px-6 py-3 bg-black-100 rounded-lg text-yellow-100 drop-shadow-custom-black-100 mb-4'
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
