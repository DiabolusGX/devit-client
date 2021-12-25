import { useState } from 'react';
import { CheckButton, Modal } from '../../../components';
import { GiSwordsPower } from 'react-icons/gi';
import { joinRoomRequest } from '../../../http';
import { useDispatch } from 'react-redux';
import { joinRoom } from '../../../store/userSlice';
const JoinRoomModal = ({ onClose, roomId }) => {
    const dispatch = useDispatch();
    const [userLevel, setUserLevel] = useState('LEARNING');
    const levelChange = (e) => {
        setUserLevel(e.target.value);
    };
    const onSubmit = async () => {
        //joined a room
        const { data } = await joinRoomRequest(roomId, { level: userLevel });
        console.log(data);
        dispatch(joinRoom(data.joinedRooms));
        onClose();
    };
    return (
        <div>
            <Modal
                icon={
                    <div className='text-red-100'>
                        <GiSwordsPower size='2rem' />
                    </div>
                }
                heading='Choose your level in this tech!'
                onClose={onClose}
                onSubmit={onSubmit}
            >
                <div className='flex'>
                    <div className='mr-4'>
                        <CheckButton
                            onChange={levelChange}
                            name='LEARNING'
                            isChecked={userLevel === 'LEARNING'}
                        />
                        <p className='w-48 text-sm text-green-100'>
                            New and recently started learning this technology.
                        </p>
                    </div>
                    <div className='mr-4'>
                        <CheckButton
                            onChange={levelChange}
                            name='GROWING'
                            isChecked={userLevel === 'GROWING'}
                        />
                        <p className='w-48 text-sm text-yellow-100 '>
                            Experienced and well versed in it.
                        </p>
                    </div>
                    <div className='flex-1'>
                        <CheckButton
                            onChange={levelChange}
                            name='MASTER'
                            isChecked={userLevel === 'MASTER'}
                        />
                        <p className='w-48 text-sm text-red-100'>
                            Have a lot of experience and a veteran.
                        </p>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default JoinRoomModal;
