import React from 'react';
import { BsFillPeopleFill } from 'react-icons/bs';
const RoomCard = ({ room, light }) => {
    return (
        <div
            className={`w-80 h-42 py-4 px-5 rounded-2xl ${
                light ? 'bg-black-200' : 'bg-black-400'
            }`}
        >
            <div>
                <div className='flex items-center mb-2'>
                    {room?.icon && (
                        <img
                            className='w-8 mr-2 object-cover '
                            src={room?.icon}
                            alt='icon'
                        />
                    )}
                    <h3 className='text-lg text-yellow-100 font-medium '>
                        {room.name}
                    </h3>
                </div>

                <p className='text-grey-100 mb-2'>
                    {room.topic.substring(0, 60)}...
                </p>
                <div className='flex justify-end'>
                    <div className='flex text-grey-200'>
                        <BsFillPeopleFill size='1.3rem' />
                        <span className='ml-1'>01</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;
