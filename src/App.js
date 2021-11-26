import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Loader, Navbar } from './components';
import { Activate, Authenticate, Dashboard, Home } from './pages';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAuthorizedUser } from './http';
import { setAuth } from './store/authSlice';
import './App.scss';

function App() {
    const location = useLocation();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            const { data } = await getAuthorizedUser();
            console.log(data);
            dispatch(setAuth(data));
            setLoading(false);
        };
        fetchUser();
    }, []);
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
            </Routes>
        </>
    );
}
const GuestRoute = ({ component }) => {
    const { isAuth } = useSelector((state) => state.auth);

    return isAuth ? <Navigate replace to='/dashboard' /> : component;
};
const SemiProtectedRoute = ({ component }) => {
    const { isAuth, user } = useSelector((state) => state.auth);

    return !isAuth ? (
        <Navigate replace to='/authenticate' />
    ) : isAuth && !user.isActivated ? (
        component
    ) : (
        <Navigate replace to='/rooms' />
    );
};
const ProtectedRoute = ({ component }) => {
    const { isAuth, user } = useSelector((state) => state.auth);
    console.log(isAuth);
    return !isAuth ? (
        <Navigate replace to='/authenticate' />
    ) : isAuth && !user.isActivated ? (
        <Navigate replace to='/activate' />
    ) : (
        isAuth && user.isActivated && component
    );
};
export default App;
