import { useEffect } from 'react';
import { useLocation } from 'react-router';

const Explore = () => {
    const location = useLocation();

    useEffect(() => {
        localStorage.setItem('currentPath', location.pathname);
    }, []);
    return <div className='px-20 text-white-100'>Explore</div>;
};

export default Explore;
