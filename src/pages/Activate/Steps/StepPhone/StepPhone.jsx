import { useState, useEffect } from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import {
    Card,
    CheckButton,
    ImgCard,
    Loader,
    TextArea,
    TextInput,
} from '../../../../components';
import { setAuth } from '../.././../../store/authSlice';
import { setPersonalInfo } from '../../../../store/activateSlice';
import { activate } from '../../../../http';

const StepPhone = ({ changeStep }) => {
    const dispatch = useDispatch();
    const activateState = useSelector((state) => state.activate);
    const { phone, bio, gender } = activateState;
    const [userInfo, setUserInfo] = useState({ phone, bio, gender });
    const [loading, setLoading] = useState(false);
    const [unmounted, setUnmounted] = useState(false);

    const genderChange = (e) => {
        setUserInfo((prevState) => {
            return {
                ...prevState,
                gender: e.target.name,
            };
        });
    };
    const submit = async () => {
        setLoading(true);
        dispatch(setPersonalInfo(userInfo));
        try {
            const { data } = await activate(activateState);
            if (data.auth) {
                //check if component has unmounted
                if (!unmounted) {
                    dispatch(setAuth(data));
                }
            }
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        return () => {
            setUnmounted(true);
        };
    }, []);
    if (loading) return <Loader message='Activation in Progress' />;
    return (
        <div className='relative'>
            <div className='mb-8'>
                <ImgCard
                    heading='Welcome to Devit!'
                    subheading='Follow the following steps to get activated.'
                />
            </div>
            <div>
                <Card heading='🎉You are almost ready!'>
                    <TextInput
                        placeholder='Phone number..'
                        value={userInfo.phone}
                        onChange={(e) =>
                            setUserInfo((prevState) => {
                                return {
                                    ...prevState,
                                    phone: e.target.value,
                                };
                            })
                        }
                    />
                    <TextArea
                        placeholder='Your bio...'
                        value={userInfo.bio}
                        onChange={(e) =>
                            setUserInfo((prevState) => {
                                return {
                                    ...prevState,
                                    bio: e.target.value,
                                };
                            })
                        }
                    />
                    <div className='flex'>
                        <CheckButton
                            onChange={genderChange}
                            name='Male'
                            isChecked={userInfo.gender === 'Male'}
                        />
                        <CheckButton
                            onChange={genderChange}
                            name='Female'
                            isChecked={userInfo.gender === 'Female'}
                        />
                        <CheckButton
                            onChange={genderChange}
                            name='Others'
                            isChecked={userInfo.gender === 'Others'}
                        />
                    </div>
                    <button
                        className=' flex items-center px-6 py-3 bg-black-100 rounded-lg text-yellow-100 drop-shadow-custom-black-100'
                        onClick={submit}
                    >
                        <span className='mr-4 text-lg font-medium'>Finish</span>
                        <BsArrowRightCircle size='1.5rem' />
                    </button>
                </Card>
            </div>
        </div>
    );
};

export default StepPhone;
