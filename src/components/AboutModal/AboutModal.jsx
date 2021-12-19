import React, { useState } from 'react';
import { CheckButton, Modal, TextArea, TextInput } from '..';
import { useSelector, useDispatch } from 'react-redux';
import { editAboutInfo } from '../../store/userSlice';
import { Bounce, toast } from 'react-toastify';
const AboutModal = ({ onClose, user }) => {
    const dispatch = useDispatch();
    const { links, bio, phone, gender, roomAddress } = user;
    //creating states for inputs
    const [userLinks, setUserLinks] = useState(links);
    const [userBio, setUserBio] = useState(bio);
    const [userPhone, setUserPhone] = useState(phone);
    const [userRoomAddress, setUserRoomAddress] = useState(roomAddress);
    const [userGender, setUserGender] = useState(gender);

    const onAboutSubmit = () => {
        //verification
        if (!userPhone || !userBio || !userGender) {
            return toast.error('All fields are mandatory!', {
                transition: Bounce,
                autoClose: 5000,
                theme: 'dark',
            });
        }
        if (userPhone.length !== 10) {
            return toast.info('Phone no must have 10 digits', {
                transition: Bounce,
                autoClose: 5000,
                theme: 'dark',
            });
        }
        //set new data in redux store
        dispatch(
            editAboutInfo({
                links: userLinks,
                bio: userBio,
                phone: userPhone,
                roomAddress: userRoomAddress,
                gender: userGender,
            })
        );
        //make the backend api call for submitting new data here

        onClose();
    };
    const genderChange = (e) => {
        setUserGender(e.target.value);
    };

    return (
        <div>
            <Modal
                heading='Edit About'
                onClose={onClose}
                onSubmit={onAboutSubmit}
            >
                <div>
                    <TextArea
                        fullWidth
                        placeholder='Bio'
                        value={userBio}
                        onChange={(e) => setUserBio(e.target.value)}
                    />
                    <div className='flex items-center'>
                        <div className='mr-4'>
                            <TextInput
                                placeholder='Github link'
                                value={userLinks?.github}
                                onChange={(e) =>
                                    setUserLinks((prevState) => {
                                        return {
                                            ...prevState,
                                            github: e.target.value,
                                        };
                                    })
                                }
                            />
                            <TextInput
                                placeholder='Linkedin link'
                                value={userLinks?.linkedin}
                                onChange={(e) =>
                                    setUserLinks((prevState) => {
                                        return {
                                            ...prevState,
                                            linkedin: e.target.value,
                                        };
                                    })
                                }
                            />
                        </div>
                        <div>
                            <TextInput
                                placeholder='Phone'
                                value={userPhone}
                                onChange={(e) => setUserPhone(e.target.value)}
                            />
                            <TextInput
                                placeholder='Room Address'
                                value={userRoomAddress}
                                onChange={(e) =>
                                    setUserRoomAddress(e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div className='flex'>
                        <CheckButton
                            onChange={genderChange}
                            name='MALE'
                            isChecked={userGender === 'MALE'}
                        />
                        <CheckButton
                            onChange={genderChange}
                            name='FEMALE'
                            isChecked={userGender === 'FEMALE'}
                        />
                        <CheckButton
                            onChange={genderChange}
                            name='OTHERS'
                            isChecked={userGender === 'OTHERS'}
                        />
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default AboutModal;
