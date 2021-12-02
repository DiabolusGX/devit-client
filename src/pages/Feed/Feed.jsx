import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

const Feed = () => {
    const location = useLocation();

    useEffect(() => {
        localStorage.setItem('currentPath', location.pathname);
    }, []);
    return <div className='px-20 text-white-100'>My Feed</div>;
};

export default Feed;
