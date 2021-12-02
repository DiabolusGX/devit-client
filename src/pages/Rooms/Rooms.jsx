import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

const Rooms = () => {
    const location = useLocation();

    useEffect(() => {
        localStorage.setItem('currentPath', location.pathname);
    }, []);
    return <div className='px-20 text-white-100'>Tech Rooms</div>;
};

export default Rooms;
