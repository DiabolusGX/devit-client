import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components';
import { Activate, Authenticate, Dashboard, Home } from './pages';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAuthorizedUser } from './http';
import { setAuth } from './store/authSlice';
function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchUser = async () => {
            const { data } = await getAuthorizedUser();
            console.log(data);
            dispatch(setAuth(data));
        };
        fetchUser();
    }, []);

    return (
        <>
            <Navbar />
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
    return !isAuth ? (
        <Navigate replace to='/' />
    ) : isAuth && !user.isActivated ? (
        <Navigate replace to='/activate' />
    ) : (
        component
    );
};
export default App;
