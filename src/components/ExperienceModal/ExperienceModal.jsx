import { useState } from 'react';
import { Checkbox, Modal, TextInput } from '..';
import { useDispatch } from 'react-redux';
import { addExperienceInfo } from '../../store/userSlice';
import { addExperience } from '../../http';
import { Bounce, toast } from 'react-toastify';
//To get the current date in desired format
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd;
}
if (mm < 10) {
    mm = '0' + mm;
}
today = yyyy + '-' + mm + '-' + dd;
const ExperienceModal = ({ onClose }) => {
    const dispatch = useDispatch();
    const [currentlyWorking, setCurrentlyWorking] = useState(false);
    const [userRole, setUserRole] = useState('');
    const [userCompany, setUserCompany] = useState('');
    const [userJoiningDate, setUserJoiningDate] = useState('');
    const [userLeavingDate, setUserLeavingDate] = useState('');

    const onExperienceSubmit = async () => {
        if (
            !userRole ||
            !userCompany ||
            !userJoiningDate ||
            (!currentlyWorking && !userLeavingDate)
        ) {
            return toast.error('All fields are mandatory!', {
                transition: Bounce,
                autoClose: 5000,
                theme: 'dark',
            });
        }
        //make backend call
        const { data } = await addExperience({
            title: userRole,
            company: userCompany,
            isCurrent: currentlyWorking,
            startDate: userJoiningDate,
            endDate: userLeavingDate,
        });
        dispatch(addExperienceInfo(data));
        onClose();
    };

    return (
        <div>
            <Modal
                heading='Add experience'
                onClose={onClose}
                onSubmit={onExperienceSubmit}
            >
                <div>
                    <div className='px-10'>
                        <TextInput
                            fullWidth
                            placeholder='Enter your Role'
                            value={userRole}
                            onChange={(e) => setUserRole(e.target.value)}
                        />
                        <TextInput
                            fullWidth
                            placeholder="Enter company's name"
                            value={userCompany}
                            onChange={(e) => setUserCompany(e.target.value)}
                        />
                        <div className=' mb-4 flex items-center'>
                            <Checkbox
                                checked={currentlyWorking}
                                onClick={() =>
                                    setCurrentlyWorking(!currentlyWorking)
                                }
                            />
                            <p className='ml-4 text-green-100'>
                                Currently working here.
                            </p>
                        </div>
                        <div className='flex'>
                            <div className='mr-2'>
                                <TextInput
                                    type='date'
                                    min='1899-01-01'
                                    max={today}
                                    value={userJoiningDate}
                                    onChange={(e) =>
                                        setUserJoiningDate(e.target.value)
                                    }
                                />
                            </div>

                            <div className=''>
                                <TextInput
                                    disabled={currentlyWorking}
                                    type='date'
                                    min='1899-01-01'
                                    max={today}
                                    value={userLeavingDate}
                                    onChange={(e) =>
                                        setUserLeavingDate(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default ExperienceModal;
