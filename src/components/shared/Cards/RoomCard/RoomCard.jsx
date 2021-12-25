import { useState } from 'react';
import { BsFillPeopleFill } from 'react-icons/bs';
import { MdAddCircleOutline } from 'react-icons/md';
import JoinRoomModal from '../../../../pages/Rooms/JoinRoomModal/JoinRoomModal';
const RoomCard = ({ room, light }) => {
    const [joinRoomModal, setJoinRoomModal] = useState(false);
    return (
        <>
            <div
                className={`w-80 h-42 py-4 px-5 rounded-2xl ${
                    light ? 'bg-black-200' : 'bg-black-400'
                }`}
            >
                <div>
                    <div className='flex items-center justify-between mb-2'>
                        <div className='flex items-center'>
                            {room?.icon && (
                                <img
                                    className='w-6 mr-2 object-cover rounded-full '
                                    src={room?.icon}
                                    alt='icon'
                                />
                            )}
                            <h3 className='text-lg text-yellow-100 font-medium '>
                                {room.name}
                            </h3>
                        </div>

                        <div
                            onClick={() => setJoinRoomModal(true)}
                            className='text-yellow-100 hover:text-green-100'
                        >
                            <MdAddCircleOutline size='1.3rem' />
                        </div>
                    </div>

                    <p className='text-grey-100 text-sm mb-2'>
                        {room.topic.substring(0, 60)}
                    </p>
                    <div className='flex justify-end'>
                        <div className='flex text-grey-200'>
                            <BsFillPeopleFill size='1.3rem' />
                            <span className='ml-1'>01</span>
                        </div>
                    </div>
                </div>
            </div>
            {joinRoomModal && (
                <JoinRoomModal
                    roomId={room.id}
                    onClose={() => setJoinRoomModal(false)}
                />
            )}
        </>
    );
};

export default RoomCard;
