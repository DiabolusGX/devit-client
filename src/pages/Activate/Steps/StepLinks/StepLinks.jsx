import { useState } from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Card, ImgCard, TextInput } from '../../../../components';

import { setLinks } from '../../../../store/activateSlice';

const StepLinks = ({ changeStep }) => {
    const dispatch = useDispatch();
    const { links } = useSelector((state) => state.activate);
    const [socialLinks, setSocialLinks] = useState(links);
    const submitLinks = () => {
        if (!socialLinks) return;
        dispatch(setLinks(socialLinks));
        changeStep();
    };
    return (
        <div className='relative'>
            <div className='mb-8'>
                <ImgCard
                    heading='Welcome to Devit!'
                    subheading='Follow the following steps to get activated.'
                />
            </div>
            <div>
                <Card heading='😎 Showcase your social success'>
                    <TextInput
                        placeholder='LinkedIn Link.'
                        value={socialLinks.linkedin}
                        onChange={(e) =>
                            setSocialLinks((prevState) => {
                                return {
                                    ...prevState,
                                    linkedin: e.target.value,
                                };
                            })
                        }
                    />
                    <TextInput
                        placeholder='Github Link.'
                        value={socialLinks.github}
                        onChange={(e) =>
                            setSocialLinks((prevState) => {
                                return {
                                    ...prevState,
                                    github: e.target.value,
                                };
                            })
                        }
                    />

                    <div className='px-10'>
                        <p className='text-grey-200 text-sm leading-snug mb-4 '>
                            We will showing some of your repos and other data in
                            your profile for authenticity.
                        </p>
                    </div>
                    <button
                        className=' flex items-center px-6 py-3 bg-black-100 rounded-lg text-yellow-100 drop-shadow-custom-black-100 mb-4'
                        onClick={submitLinks}
                    >
                        <span className='mr-4 text-lg font-medium'>Next</span>
                        <BsArrowRightCircle size='1.5rem' />
                    </button>
                </Card>
            </div>
        </div>
    );
};

export default StepLinks;
