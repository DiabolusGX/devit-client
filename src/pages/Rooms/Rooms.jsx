import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { BiSearch } from 'react-icons/bi';
import { MdAddCircleOutline } from 'react-icons/md';
import CreateRoomModal from './CreateRoomModal/CreateRoomModal';
import { useSelector } from 'react-redux';
import { RoomCard } from '../../components';

const Rooms = () => {
    const location = useLocation();
    const [showRoomModal, setShowRoomModal] = useState(false);
    const { rooms } = useSelector((state) => state.rooms);
    useEffect(() => {
        localStorage.setItem('currentPath', location.pathname);
    }, []);
    return (
        <>
            <div className='px-20 height_minus_nav_og_global '>
                <div className='flex justify-between items-center'>
                    <div className='flex mb-8 pt-4 items-center'>
                        <h1 className='heading_og_global mr-10 text-white-100 '>
                            Tech Rooms
                        </h1>
                        <div id='searchRooms' className='relative mt-2'>
                            <div className='absolute translateY_50_og right-4 text-white-100'>
                                <BiSearch size='1.5rem' />
                            </div>

                            <input
                                className='bg-black-300 border-2 border-black-300 py-2 px-4 text-grey-100 placeholder-grey-200 rounded-full focus:border-yellow-100 focus:outline-none'
                                type='text'
                                name='searchRoom'
                                id='searchRoom'
                            />
                        </div>
                    </div>

                    <button
                        onClick={() => setShowRoomModal(true)}
                        className='flex items-center bg-red-100 hover:bg-red-200 py-2 px-4 text-white-100 font-medium rounded-full'
                    >
                        Add new room
                        <span className='ml-2'>
                            <MdAddCircleOutline size='1.5rem' />
                        </span>
                    </button>
                </div>
                <div className='flex flex-wrap'>
                    {rooms.map((room, idx) => (
                        <div className='m-4' key={idx}>
                            <RoomCard room={room} light />
                        </div>
                    ))}
                </div>
            </div>
            {showRoomModal && (
                <CreateRoomModal onClose={() => setShowRoomModal(false)} />
            )}
        </>
    );
};

export default Rooms;
