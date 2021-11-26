import React from 'react';
import { SecondaryButton } from '../..';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const { isAuth } = useSelector((state) => state.auth);
    return (
        <nav className='text-white-100 py-6 px-20 flex items-center justify-between'>
            <div
                id='nav-left'
                className='flex items-center justify-between w-2/5'
            >
                <Link to='/' className='text-lg -mt-1'>
                    <img className='w-20' src='/images/logo.svg' alt='logo' />
                </Link>
                <a href='#features' className='text-lg'>
                    Features
                </a>
                <a href='/about' className='text-lg'>
                    About
                </a>
                <a href='/contact' className='text-lg'>
                    Contact
                </a>
            </div>
            {!isAuth && (
                <div id='nav-right'>
                    <SecondaryButton>Get access</SecondaryButton>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
