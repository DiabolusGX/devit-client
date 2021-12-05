import React from 'react';
import { Modal } from '..';

const StatusModal = ({ onClose }) => {
    const onStatusSubmit = () => {
        onClose();
    };
    return (
        <div>
            <Modal
                heading='Edit About'
                onClose={onClose}
                onSubmit={onStatusSubmit}
            >
                <div></div>
            </Modal>
        </div>
    );
};

export default StatusModal;
