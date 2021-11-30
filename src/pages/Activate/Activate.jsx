import { useState } from 'react';
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
    const [step, setStep] = useState(1);
    const Step = steps[step];
    return (
        <>
            <Step
                changeStep={() => setStep(step + 1)}
                backStep={() => setStep(step - 1)}
                step={step}
            />
        </>
    );
};

export default Activate;
