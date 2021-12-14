import { useEffect, useState } from 'react';
import { Dropdown, Modal } from '..';

const LevelModal = ({ onClose }) => {
    const onLevelSubmit = () => {
        //submit logic
        onClose();
    };
    const [rooms, setRooms] = useState([]);
    const levels = {
        mastering: [
            { id: 1, roomName: 'React', inLevel: 'Mastering' },
            { id: 2, roomName: 'CSS', inLevel: 'Mastering' },
        ],
        learning: [{ id: 3, roomName: 'MongoDB', inLevel: 'Learning' }],
        growing: [{ id: 4, roomName: 'Node', inLevel: 'Growing' }],
    };

    //======> transform into
    // rooms = [{
    //     id: room ki Id
    //     roomName : room ka Name,
    //     level : level in that room,
    // }]

    useEffect(() => {
        for (let level in levels) {
            for (let levelRoom of levels[level]) {
                setRooms((prevRooms) => {
                    return [
                        ...prevRooms,
                        {
                            id: levelRoom.id,
                            roomName: levelRoom.roomName,
                            inLevel: levelRoom.inLevel,
                        },
                    ];
                });
            }
        }
    }, []);

    const levelList = ['Mastering', 'Growing', 'Learning'];

    return (
        <div>
            <Modal
                heading='Edit Room Level'
                onClose={onClose}
                onSubmit={onLevelSubmit}
            >
                <div className=''>
                    {rooms.map((room) => (
                        <div
                            key={room?.id}
                            className='flex items-center justify-between mb-2'
                        >
                            <h4 className='text-lg font-semibold text-yellow-100 mr-20'>
                                {room?.roomName}
                            </h4>
                            <div>
                                <Dropdown
                                    title={room.inLevel}
                                    list={levelList}
                                    updateLevel={(level) => {
                                        const updatedRooms = rooms.reduce(
                                            (accumulator, currentValue) => {
                                                if (
                                                    currentValue.roomName ===
                                                    room.roomName
                                                ) {
                                                    accumulator = [
                                                        ...accumulator,
                                                        {
                                                            ...room,
                                                            inLevel: level,
                                                        },
                                                    ];
                                                } else {
                                                    accumulator = [
                                                        ...accumulator,
                                                        currentValue,
                                                    ];
                                                }
                                                return accumulator;
                                            },
                                            []
                                        );
                                        setRooms(updatedRooms);
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </Modal>
        </div>
    );
};

export default LevelModal;
