import React from 'react';
import { logout } from '../../http';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../store/authSlice';
const Dashboard = () => {
    const dispatch = useDispatch();
    const onLogout = async () => {
        await logout();
        dispatch(setAuth(null));
    };
    return (
        <div className='text-white-100'>
            <h1>Dashboard</h1>
            <button onClick={onLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;
