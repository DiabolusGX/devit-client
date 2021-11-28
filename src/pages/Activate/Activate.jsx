import { useState } from 'react';
import { logout } from '../../http';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../store/authSlice';
import StepName from './Steps/StepName/StepName';
import StepAvatar from './Steps/StepAvatar/StepAvatar';
import StepLinks from './Steps/StepLinks/StepLinks';
import StepPhone from './Steps/StepPhone/StepPhone';
const steps = {
    1: StepName,
    2: StepAvatar,
    3: StepLinks,
    4: StepPhone,
};
const Activate = () => {
    const dispatch = useDispatch();
    const onLogout = async () => {
        await logout();
        dispatch(setAuth(null));
    };
    const [step, setStep] = useState(1);
    const Step = steps[step];
    return (
        <>
            <Step changeStep={() => setStep(step + 1)} />
            <button className='text-grey-300' onClick={onLogout}>
                Logout
            </button>
        </>
    );
};

export default Activate;
