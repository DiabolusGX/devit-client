import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Loader, Navbar } from './components';
import {
    Activate,
    Authenticate,
    Dashboard,
    Explore,
    Feed,
    Home,
    Rooms,
} from './pages';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAuthorizedUser } from './http';
import { setAuth } from './store/authSlice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import Profile from './pages/Profile/Profile';

function App() {
    const location = useLocation();
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            const { data } = await getAuthorizedUser();
            dispatch(setAuth(data));
            setLoading(false);
        };
        fetchUser();
    }, [dispatch]);
    if (loading) return <Loader message='Fetching data..' />;
    return (
        <>
            {location.pathname !== '/authenticate' && <Navbar />}

            <Routes>
                <Route path='/' element={<Home />} />
                <Route
                    path='/authenticate'
                    element={<GuestRoute component={<Authenticate />} />}
                />
                <Route
                    path='/activate'
                    element={<SemiProtectedRoute component={<Activate />} />}
                />
                <Route
                    path='/dashboard'
                    element={<ProtectedRoute component={<Dashboard />} />}
                />
                <Route
                    path='/tech-rooms'
                    element={<ProtectedRoute component={<Rooms />} />}
                />
                <Route
                    path='/feed'
                    element={<ProtectedRoute component={<Feed />} />}
                />
                <Route
                    path='/explore'
                    element={<ProtectedRoute component={<Explore />} />}
                />
                <Route
                    path='/profile/:id'
                    element={<ProtectedRoute component={<Profile />} />}
                />
            </Routes>
            <ToastContainer />
        </>
    );
}
const GuestRoute = ({ component }) => {
    const { isAuth } = useSelector((state) => state.auth);
    let currentPath = localStorage.getItem('currentPath');
    if (!currentPath) {
        currentPath = '/dashboard';
    }
    return isAuth ? <Navigate to={currentPath} /> : component;
};
const SemiProtectedRoute = ({ component }) => {
    const { isAuth, user } = useSelector((state) => state.auth);

    return !isAuth ? (
        <Navigate replace to='/authenticate' />
    ) : isAuth && !user.isActivated ? (
        component
    ) : (
        <Navigate replace to='/dashboard' />
    );
};
const ProtectedRoute = ({ component }) => {
    const { isAuth, user } = useSelector((state) => state.auth);

    return !isAuth ? (
        <Navigate replace to='/authenticate' />
    ) : isAuth && !user.isActivated ? (
        <Navigate replace to='/activate' />
    ) : (
        isAuth && user.isActivated && component
    );
};
export default App;
