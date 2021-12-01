import React, { useState } from 'react';
import {
    BsFillPeopleFill,
    BsLinkedin,
    BsGithub,
    BsFillTelephoneFill,
    BsGenderMale,
} from 'react-icons/bs';
import { GiStarMedal, GiProcessor } from 'react-icons/gi';
import { AiFillEdit } from 'react-icons/ai';
import PostInput from '../../components/shared/Inputs/PostInput/PostInput';
import { Post } from '../../components';
const Profile = () => {
    const [page, setPage] = useState('Profile');
    const optionHandler = (e) => {
        setPage(e.target.name);
    };
    return (
        <div
            id='profile'
            className='height_minus_nav_og_global text-white-100 '
        >
            <div className='flex'>
                <div
                    id='p-left'
                    className='w-1/5 height_minus_nav_og_global pl-10 pr-5 mb-8 pt-5'
                >
                    <h1 className='heading_og_global'>Profile</h1>
                    <div className='mt-8 mb-4 w-full py-3 px-5 rounded-2xl bg-black-200'>
                        <div className='flex items-center mb-2'>
                            <div className='text-yellow-100 mr-14'>
                                <BsFillPeopleFill size='1.8rem' />
                            </div>
                            <div>
                                <h3 className='text-grey-200 text-xl font-medium'>
                                    123
                                </h3>
                                <h5 className='text-white-100 font-light text-sm'>
                                    Friends
                                </h5>
                            </div>
                        </div>

                        <div className='flex items-center mb-2'>
                            <div className='text-yellow-200  mr-14'>
                                <GiStarMedal size='1.8rem' />
                            </div>
                            <div className='text-left'>
                                <h3 className='text-grey-200 text-xl font-medium'>
                                    2018
                                </h3>
                                <h5 className='text-white-100 font-light text-sm'>
                                    Batch
                                </h5>
                            </div>
                        </div>

                        <div className='flex items-center mb-2 '>
                            <div className='text-red-100  mr-14'>
                                <GiProcessor size='1.8rem' />
                            </div>
                            <div className=''>
                                <h3 className='text-grey-200 text-xl font-medium'>
                                    05
                                </h3>
                                <h5 className='text-white-100 font-light text-sm'>
                                    Rooms
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className='w-full py-3 px-5 rounded-2xl bg-black-200'>
                        <div className='flex items-center justify-between mb-2'>
                            <h3 className='text-lg font-medium'>Status</h3>
                            <button className='text-grey-200'>
                                <AiFillEdit size='1.3rem' />
                            </button>
                        </div>
                        <div className='mb-2 text-grey-200'>
                            <h4 className='text-red-100 text-base mb-2 font-medium'>
                                Mastering
                            </h4>
                            <p className='text-sm mb-1 font-medium'>React</p>
                            <p className='text-sm mb-1 font-medium'>CSS</p>
                        </div>
                        <div className='mb-2 text-grey-200'>
                            <h4 className='text-yellow-100 text-base mb-2 font-medium'>
                                Growing
                            </h4>
                            <p className='text-sm mb-1 font-medium'>Node</p>
                            <p className='text-sm mb-1 font-medium'>MongoDB</p>
                        </div>
                        <div className='mb-2 text-grey-200'>
                            <h4 className='text-green-100 text-base mb-2 font-medium'>
                                Learning
                            </h4>
                            <p className='text-sm mb-1 font-medium'>NextJs</p>
                        </div>
                    </div>
                </div>
                <div
                    id='p-right'
                    className='w-4/5 height_minus_nav_og_global px-10 pt-5 text-white-100 bg-black-500 rounded-tl-2xl'
                >
                    <div className=' relative w-full  rounded-xl pt-3 pb-20 px-5 bg-black-400 mb-8'>
                        <div className='relative w-full h-52'>
                            <img
                                className='w-full h-full rounded-2xl object-cover'
                                // src='/images/optimistic.png'
                                src='https://images.unsplash.com/photo-1637867833022-ea5730935fb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=849&q=80'
                                alt='bg-pic'
                            />
                            <div className='absolute flex items-end top-3/4 left-20'>
                                <img
                                    className='w-28 h-28 rounded-xl border-2 border-yellow-100 mr-4 '
                                    src='/images/profilepic.png'
                                    alt='dp'
                                />
                                <div>
                                    <h3 className='text-lg '>Abhay Gupta</h3>
                                    <p className='text-sm text-grey-200'>
                                        @abhay_07
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='absolute bottom-0 left-1/3'>
                            <button
                                onClick={optionHandler}
                                name='Profile'
                                className={`mx-16  font-medium ${
                                    page === 'Profile'
                                        ? 'text-grey-100 border-b-2'
                                        : 'text-grey-200'
                                }`}
                            >
                                Profile
                            </button>
                            <button
                                onClick={optionHandler}
                                name='Friends'
                                className={`mr-16  font-medium ${
                                    page === 'Friends'
                                        ? 'text-grey-100 border-b-2'
                                        : 'text-grey-200'
                                }`}
                            >
                                Friends
                            </button>
                            <button
                                onClick={optionHandler}
                                name='Github'
                                className={`mr-16  font-medium ${
                                    page === 'Github'
                                        ? 'text-grey-100 border-b-2'
                                        : 'text-grey-200'
                                }`}
                            >
                                Github
                            </button>
                            <button
                                onClick={optionHandler}
                                name='Projects'
                                className={` font-medium ${
                                    page === 'Projects'
                                        ? 'text-grey-100 border-b-2'
                                        : 'text-grey-200'
                                }`}
                            >
                                Projects
                            </button>
                        </div>
                    </div>

                    <div className='flex justify-between'>
                        <div className='w-3/5'>
                            {page === 'Profile' ? (
                                <div>
                                    <div className='mb-8'>
                                        <PostInput />
                                    </div>
                                    <Post />
                                </div>
                            ) : page === 'Github' ? (
                                <div>Github</div>
                            ) : page === 'Friends' ? (
                                <div>Friends</div>
                            ) : (
                                <div>Projects</div>
                            )}
                        </div>
                        <div className='w-1/3'>
                            <div className='w-full py-4 px-5 rounded-2xl bg-black-400'>
                                <div className='flex items-center justify-between mb-2'>
                                    <h3 className='text-lg font-medium'>
                                        About
                                    </h3>
                                    <button className='text-grey-200'>
                                        <AiFillEdit size='1.3rem' />
                                    </button>
                                </div>
                                <p className='text-sm text-grey-200'>
                                    Laboris non ad et aute sint aliquip mollit
                                    voluptate velit dolore magna fugiat ex.
                                    Commodo amet veniam nostrud mollit quis sint
                                    qui nulla elit esse excepteur.
                                </p>
                                <hr className='my-6 border-dashed text-grey-200' />
                                <div>
                                    <div className='text-blue-200 flex mb-3'>
                                        <BsLinkedin size='1.3rem' />
                                        <a
                                            className='text-sm ml-4 text-grey-200'
                                            href='https://linkedin.com/abhay'
                                        >
                                            https://linkedin.com/abhay
                                        </a>
                                    </div>
                                    <div className='text-red-100 flex mb-3'>
                                        <BsGithub size='1.3rem' />
                                        <a
                                            className='text-sm ml-4 text-grey-200'
                                            href='https://github.com/abhay'
                                        >
                                            https://github.com/abhay
                                        </a>
                                    </div>
                                    <div className='text-green-100 flex mb-3'>
                                        <BsFillTelephoneFill size='1.2rem' />
                                        <p className='text-sm ml-4 text-grey-200'>
                                            7905809434
                                        </p>
                                    </div>
                                    <div className='text-yellow-100 flex mb-3'>
                                        <BsGenderMale size='1.2rem' />
                                        <p className='text-sm ml-4 text-grey-200'>
                                            Male
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
