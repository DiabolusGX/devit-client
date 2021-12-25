import { useState } from 'react';
import { Modal, TextArea, TextInput } from '../../../components';
import { Bounce, toast } from 'react-toastify';
import { addRoomRequest } from '../../../http';
import { useDispatch } from 'react-redux';
import { addRoom } from '../../../store/roomsSlice';
import { BsArrowRightShort } from 'react-icons/bs';
const CreateRoomModal = ({ onClose }) => {
    //input states
    const dispatch = useDispatch();
    const [roomName, setRoomName] = useState('');
    const [roomTopic, setRoomTopic] = useState('');
    const [icon, setIcon] = useState('');
    const captureImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            if (e.target.id === 'avatarInput') {
                setIcon(reader.result);
            } else {
                setIcon(reader.result);
            }
        };
    };
    const onRoomSubmit = async () => {
        if (!roomName || !roomTopic) {
            return toast.error('All fields are mandatory!', {
                transition: Bounce,
                autoClose: 5000,
                theme: 'dark',
            });
        }
        const { data } = await addRoomRequest({
            name: roomName,
            topic: roomTopic,
            icon,
        });

        dispatch(addRoom(data));
        onClose();
    };
    return (
        <div>
            <Modal
                heading='Create a Tech Room'
                onClose={onClose}
                onSubmit={onRoomSubmit}
            >
                <div className='w-96'>
                    <TextInput
                        fullWidth
                        placeholder='Name'
                        value={roomName}
                        onChange={(e) => setRoomName(e.target.value)}
                    />
                    <TextArea
                        fullWidth
                        placeholder='Topic'
                        value={roomTopic}
                        onChange={(e) => setRoomTopic(e.target.value)}
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
                            className='flex items-center text-yellow-100 cursor-pointer text-sm'
                        >
                            <div className='flex items-center'>
                                <span>Upload an icon</span>
                                <BsArrowRightShort size='1.5rem' />
                            </div>
                            <img
                                className='ml-4 w-8 object-cover'
                                src={icon}
                                alt=''
                            />
                        </label>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default CreateRoomModal;
