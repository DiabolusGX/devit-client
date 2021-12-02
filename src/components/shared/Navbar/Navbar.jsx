import React from 'react';
import { SecondaryButton } from '../..';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoNotificationsOutline } from 'react-icons/io5';
import { AiOutlineLogout } from 'react-icons/ai';
import { setAuth } from '../../../store/authSlice';
import { logout } from '../../../http';
const Navbar = () => {
    const { isAuth, user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const onLogout = async () => {
        localStorage.clear();
        await logout();
        dispatch(setAuth(null));
    };
    return (
        <nav className='text-white-100 py-6 px-20 flex items-center justify-between'>
            <div
                id='nav-left'
                className='flex items-center justify-between w-2/5'
            >
                <Link to='/' className='text-lg -mt-1'>
                    <img className='w-20' src='/images/logo.svg' alt='logo' />
                </Link>
                {!isAuth && (
                    <>
                        <a href='#features' className='text-lg'>
                            Features
                        </a>
                        <a href='/about' className='text-lg'>
                            About
                        </a>
                        <a href='/contact' className='text-lg'>
                            Contact
                        </a>
                    </>
                )}
            </div>
            {!isAuth && (
                <div id='nav-right'>
                    <SecondaryButton>Get access</SecondaryButton>
                </div>
            )}
            {isAuth && user.isActivated && (
                <div className='flex'>
                    <button className='text-green-100 p-1 border-2 border-green-100 rounded-full hover:bg-green-10 '>
                        <IoNotificationsOutline size='1.5rem' />
                    </button>
                    <Link
                        to='/profile/1'
                        className='text-lg ml-6 border-2 border-yellow-100 rounded-full'
                    >
                        <img
                            className='w-8 h-8 rounded-full '
                            src={user.avatar}
                            alt=''
                        />
                    </Link>
                    <button
                        onClick={onLogout}
                        className='text-lg text-red-100 ml-6 p-1 border-2 border-red-100 rounded-full hover:bg-red-10'
                    >
                        <AiOutlineLogout size='1.5rem' />
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
