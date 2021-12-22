import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Loader, Modal, TextInput } from '..';
import { BsArrowRightShort } from 'react-icons/bs';
import { checkUsername, editHeader } from '../../http';
import { editHeaderInfo } from '../../store/userSlice';
import { Bounce, toast } from 'react-toastify';

const HeaderModal = ({ onClose, user }) => {
    const dispatch = useDispatch();
    const { displayName, username, avatar, banner } = user;
    const [editedUsername, setEditedUsername] = useState(username);
    const [loading, setLoading] = useState(false);
    const [editedName, setEditedName] = useState(displayName);
    const [editedAvatar, setEditedAvatar] = useState(avatar);
    const [editedBanner, setEditedBanner] = useState(banner);
    const [usernameIsValid, setUsernameIsValid] = useState(true);

    // on selecting an image
    const captureImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            if (e.target.id === 'avatarInput') {
                setEditedAvatar(reader.result);
            } else {
                setEditedBanner(reader.result);
            }
        };
    };
    // on submission of the final data
    const onUserDataSubmit = async () => {
        //check if some editing has been made

        if (
            displayName === editedName &&
            username === editedUsername &&
            avatar === editedAvatar &&
            banner === editedBanner
        ) {
            //if no editing is there then ---> simply close the modal
            onClose();
        } else {
            //else if there is some edit then --->

            //verify the data
            if (!editedUsername) {
                return toast.error('🐱‍🚀 User name is mandatory!', {
                    transition: Bounce,
                    autoClose: 5000,
                    theme: 'dark',
                });
            }
            if (!usernameIsValid)
                return toast.info('Username is taken', {
                    transition: Bounce,
                    autoClose: 5000,
                    theme: 'dark',
                });

            //make a post call to submit all the data
            const dataToSend = {
                displayName: editedName,
                username: editedUsername,
                avatar: editedAvatar,
                banner: editedBanner,
            };
            console.log(dataToSend);
            setLoading(true);
            const { data } = await editHeader(dataToSend);

            //get the processed data(S3 img urls) and update that in ur redux store
            dispatch(editHeaderInfo(data));
            setLoading(false);

            //close the modal
            onClose();
        }
    };

    useEffect(() => {
        const identifier = setTimeout(async () => {
            if (editedUsername === username) {
                setUsernameIsValid(true);
                return;
            }
            const { data } = await checkUsername({
                username: editedUsername,
            });
            setUsernameIsValid(data.isAvailable);
        }, 1000);
        return () => {
            console.log('Cleanup');
            clearTimeout(identifier);
        };
    }, [editedUsername, setUsernameIsValid, username]);
    if (loading) return <Loader message='Updating.. Please wait!' />;
    return (
        <div>
            <Modal
                heading='Edit Information'
                onClose={onClose}
                onSubmit={onUserDataSubmit}
            >
                <div>
                    <div className='flex flex-col  items-center mb-2'>
                        <img
                            className='mb-1 w-16 h-16 border-2 border-yellow-100 rounded-full'
                            src={editedAvatar}
                            alt='avatar'
                        />
                        <div className='mb-2'>
                            <input
                                onChange={captureImage}
                                className='hidden'
                                type='file'
                                id='avatarInput'
                            />
                            <label
                                htmlFor='avatarInput'
                                className='flex items-center ml-2 text-yellow-100 cursor-pointer text-sm'
                            >
                                <span>Upload a new pic</span>
                                <BsArrowRightShort size='1.5rem' />
                            </label>
                        </div>
                    </div>
                    <div className='flex flex-col items-center mb-2'>
                        <img
                            className='mb-1 w-4/5 h-28 border-2 border-yellow-100 object-cover rounded-lg'
                            // src='/images/optimistic.png'
                            src={editedBanner}
                            alt='avatar'
                        />
                        <div className='mb-2'>
                            <input
                                onChange={captureImage}
                                className='hidden'
                                type='file'
                                id='bannerInput'
                            />
                            <label
                                htmlFor='bannerInput'
                                className='flex items-center ml-2 text-yellow-100 cursor-pointer text-sm'
                            >
                                <span>Upload a new banner</span>
                                <BsArrowRightShort size='1.5rem' />
                            </label>
                        </div>
                    </div>

                    <div className='flex justify-around'>
                        <div className='mr-2'>
                            <p className='mb-1  text-sm text-grey-200'>
                                Username
                            </p>
                            <TextInput
                                placeholder='New username'
                                value={editedUsername}
                                onChange={(e) =>
                                    setEditedUsername(e.target.value)
                                }
                            />

                            {!usernameIsValid &&
                                editedUsername &&
                                editedUsername !== username && (
                                    <div className='p-2 bg-red-10 mb-4 rounded '>
                                        <p className='text-red-100 text-sm '>
                                            Oops! Username is not available😓
                                        </p>
                                    </div>
                                )}
                            {usernameIsValid &&
                                editedUsername &&
                                editedUsername !== username && (
                                    <div className='p-2 bg-green-10 mb-4 rounded '>
                                        <p className='text-green-100 text-sm '>
                                            Yay! Username is available😁
                                        </p>
                                    </div>
                                )}
                        </div>
                        <div>
                            <p className='mb-1 text-grey-200 text-sm'>
                                Display Name
                            </p>
                            <TextInput
                                value={editedName}
                                onChange={(e) => setEditedName(e.target.value)}
                                placeholder='New display name'
                            />
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default HeaderModal;
