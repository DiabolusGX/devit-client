import React, { useState } from 'react';
import { CheckButton, Modal, TextArea, TextInput } from '..';

const AboutModal = ({ onClose }) => {
    const onAboutSubmit = () => {
        onClose();
    };
    const [aboutInfo, setAboutInfo] = useState({});
    const genderChange = (e) => {
        setAboutInfo((prevState) => {
            return {
                ...prevState,
                gender: e.target.name,
            };
        });
    };
    return (
        <div>
            <Modal
                heading='Edit About'
                onClose={onClose}
                onSubmit={onAboutSubmit}
            >
                <div>
                    <TextArea fullWidth placeholder='Bio' />
                    <div className='flex items-center'>
                        <div className='mr-4'>
                            <TextInput placeholder='Github link' />
                            <TextInput placeholder='Linkedin link' />
                        </div>
                        <div>
                            <TextInput placeholder='Phone' />
                            <TextInput placeholder='Room Address' />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <CheckButton
                            onChange={genderChange}
                            name='Male'
                            isChecked={aboutInfo.gender === 'Male'}
                        />
                        <CheckButton
                            onChange={genderChange}
                            name='Female'
                            isChecked={aboutInfo.gender === 'Female'}
                        />
                        <CheckButton
                            onChange={genderChange}
                            name='Others'
                            isChecked={aboutInfo.gender === 'Others'}
                        />
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default AboutModal;
