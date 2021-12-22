import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
    BsFillPeopleFill,
    BsLinkedin,
    BsGithub,
    BsFillTelephoneFill,
    BsGenderMale,
    BsGenderFemale,
} from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai';
import { MdOutlineHouseSiding, MdDeleteOutline } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { GiStarMedal, GiProcessor } from 'react-icons/gi';
import PostInput from '../../components/shared/Inputs/PostInput/PostInput';
import {
    AboutModal,
    ExperienceModal,
    HeaderModal,
    LevelModal,
    Loader,
    Post,
    ProfileEditCard,
} from '../../components';
import { getUserProfile, removeExperience } from '../../http';
import { removeExperienceInfo, setBasicUserData } from '../../store/userSlice';

const Profile = () => {
    const dispatch = useDispatch();
    //fetching data from the user
    const { user } = useSelector((state) => state.user);

    //for differnt sections ---> such as Profile, Friends, Github etc
    const [page, setPage] = useState('Profile');
    const location = useLocation();

    //Modal states

    const [showAboutModal, setShowAboutModal] = useState(false);
    const [showExperienceModal, setShowExperienceModal] = useState(false);
    const [showLevelModal, setShowLevelModal] = useState(false);
    const [showHeaderModal, setShowHeaderModal] = useState(false);

    //for reload problem
    useEffect(() => {
        localStorage.setItem('currentPath', location.pathname);
        const fetchUser = async () => {
            const { data } = await getUserProfile();
            if (data.banner) {
                dispatch(
                    setBasicUserData({
                        ...data,
                    })
                );
            } else {
                dispatch(
                    setBasicUserData({
                        ...data,
                        banner: 'https://devit-files.s3.amazonaws.com/profile-banner',
                    })
                );
            }
        };
        fetchUser();
    }, []);

    //deleting a particular experience
    const deleteExperienceHandler = async (e) => {
        const experienceId = e.target.key;
        //now make a call to delete that experience
        try {
            const { data } = await removeExperience(experienceId);
            dispatch(removeExperienceInfo(data));
        } catch (err) {
            console.log(err);
        }
    };

    //action functions for opening the modals
    const editAbout = () => {
        setShowAboutModal(true);
    };
    const editName = () => {
        setShowHeaderModal(true);
    };
    const addExperiences = () => {
        setShowExperienceModal(true);
    };
    const editLevel = () => {
        setShowLevelModal(true);
    };

    //selecting the section to show
    const optionHandler = (e) => {
        setPage(e.target.name);
    };

    if (!user) return <Loader message='Loading' />;

    return (
        <>
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
                                        {user?.friendsCountData.friendCount}
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
                                        {user?.batch}
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
                                <div>
                                    <h3 className='text-grey-200 text-xl font-medium'>
                                        {user?.learningLevel?.growing.length +
                                            user?.learningLevel?.learning
                                                .length +
                                            user?.learningLevel?.master.length}
                                    </h3>
                                    <h5 className='text-white-100 font-light text-sm'>
                                        Rooms
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <ProfileEditCard
                            onClick={editLevel}
                            light
                            heading='Status'
                        >
                            <div className='mb-2 text-grey-200'>
                                <h4 className='text-red-100 text-base mb-2 font-medium'>
                                    Mastering
                                </h4>
                                {user?.learningStatus?.master.map(
                                    (room, idx) => (
                                        <p
                                            key={idx}
                                            className='text-sm mb-1 font-medium'
                                        >
                                            {room.name}
                                        </p>
                                    )
                                )}
                            </div>
                            <div className='mb-2 text-grey-200'>
                                <h4 className='text-yellow-100 text-base mb-2 font-medium'>
                                    Growing
                                </h4>
                                {user?.learningStatus?.growing.map(
                                    (room, idx) => (
                                        <p
                                            key={idx}
                                            className='text-sm mb-1 font-medium'
                                        >
                                            {room.name}
                                        </p>
                                    )
                                )}
                            </div>
                            <div className='mb-2 text-grey-200'>
                                <h4 className='text-green-100 text-base mb-2 font-medium'>
                                    Learning
                                </h4>
                                {user?.learningStatus?.learning.map(
                                    (room, idx) => (
                                        <p
                                            key={idx}
                                            className='text-sm mb-1 font-medium'
                                        >
                                            {room.name}
                                        </p>
                                    )
                                )}
                            </div>
                        </ProfileEditCard>
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
                                    src={user?.banner}
                                    // src='https://images.unsplash.com/photo-1637867833022-ea5730935fb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=849&q=80'
                                    alt='bg-pic'
                                />
                                <div className='absolute flex items-end top-3/4 left-20'>
                                    <img
                                        className='w-28 h-28 rounded-xl border-2 border-yellow-100 mr-4 '
                                        // src='/images/profilepic.png'
                                        src={user?.avatar}
                                        alt='dp'
                                    />
                                    <div>
                                        <h3 className='text-lg capitalize'>
                                            {user?.displayName}
                                        </h3>
                                        <p className='text-sm text-grey-200'>
                                            {user?.username}
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
                                    name='Friend Requests'
                                    className={`mr-16  font-medium ${
                                        page === 'Friend Requests'
                                            ? 'text-grey-100 border-b-2'
                                            : 'text-grey-200'
                                    }`}
                                >
                                    Friend Requests
                                </button>
                                <button
                                    onClick={optionHandler}
                                    name='Github'
                                    className={`mr-16 font-medium ${
                                        page === 'Github'
                                            ? 'text-grey-100 border-b-2'
                                            : 'text-grey-200'
                                    }`}
                                >
                                    Github
                                </button>
                                <button
                                    onClick={editName}
                                    className='text-grey-200 hover:text-yellow-100'
                                >
                                    <AiFillEdit size='1.3rem' />
                                </button>
                            </div>
                        </div>
                        {page === 'Profile' ? (
                            <div>
                                <div className='flex justify-between'>
                                    <div className='w-3/5'>
                                        <div>
                                            <div className='mb-8'>
                                                <PostInput />
                                            </div>
                                            <Post />
                                        </div>
                                    </div>
                                    <div style={{ width: '36%' }}>
                                        <div className='mb-4'>
                                            <ProfileEditCard
                                                onClick={editAbout}
                                                heading='About'
                                            >
                                                <p className='text-sm text-grey-200'>
                                                    {user?.bio}
                                                </p>
                                                <hr className='my-6 border-dashed text-grey-200' />
                                                <div>
                                                    <div className='text-blue-200 flex mb-3'>
                                                        <BsLinkedin size='1.3rem' />
                                                        <a
                                                            className='text-sm ml-4 text-grey-200'
                                                            href={
                                                                user?.links
                                                                    .linkedin
                                                            }
                                                        >
                                                            {user?.links.linkedin.substring(
                                                                0,
                                                                32
                                                            )}
                                                            ...
                                                        </a>
                                                    </div>
                                                    <div className='text-red-100 flex mb-3'>
                                                        <BsGithub size='1.3rem' />
                                                        <a
                                                            className='text-sm ml-4 text-grey-200'
                                                            href={
                                                                user?.links
                                                                    .github
                                                            }
                                                        >
                                                            {user?.links.github.substring(
                                                                0,
                                                                32
                                                            )}
                                                            ...
                                                        </a>
                                                    </div>
                                                    <div className='text-green-100 flex mb-3'>
                                                        <BsFillTelephoneFill size='1.2rem' />
                                                        <p className='text-sm ml-4 text-grey-200'>
                                                            {user?.phone}
                                                        </p>
                                                    </div>
                                                    <div className='text-yellow-200 flex mb-3'>
                                                        <MdOutlineHouseSiding size='1.2rem' />
                                                        <p className='text-sm ml-4 text-grey-200'>
                                                            {user?.roomAddress}
                                                        </p>
                                                    </div>
                                                    <div className='text-yellow-100 flex mb-3'>
                                                        {user?.gender ===
                                                        'MALE' ? (
                                                            <BsGenderMale size='1.2rem' />
                                                        ) : (
                                                            <BsGenderFemale size='1.2rem' />
                                                        )}

                                                        <p className='text-sm ml-4 text-grey-200'>
                                                            {user?.gender}
                                                        </p>
                                                    </div>
                                                </div>
                                            </ProfileEditCard>
                                        </div>
                                        <div>
                                            {user?.experiences ? (
                                                <ProfileEditCard
                                                    onClick={addExperiences}
                                                    heading='Experience'
                                                >
                                                    {user?.experiences.map(
                                                        (experience) => (
                                                            <div
                                                                key={
                                                                    experience.uuid
                                                                }
                                                                className='mb-2'
                                                            >
                                                                <div className='flex items-center justify-between'>
                                                                    <h3
                                                                        id='role'
                                                                        className='text-yellow-100 font-medium'
                                                                    >
                                                                        {
                                                                            experience?.title
                                                                        }
                                                                    </h3>
                                                                    <button
                                                                        key={
                                                                            experience?.uuid
                                                                        }
                                                                        onClick={
                                                                            deleteExperienceHandler
                                                                        }
                                                                        className='text-grey-200 hover:text-yellow-100'
                                                                    >
                                                                        <MdDeleteOutline size='1.2rem' />
                                                                    </button>
                                                                </div>

                                                                <h5
                                                                    id='company'
                                                                    className='text-grey-100'
                                                                >
                                                                    {
                                                                        experience?.company
                                                                    }
                                                                </h5>
                                                                <div className='flex items-center'>
                                                                    <h5
                                                                        id='joiningDate'
                                                                        className='text-sm text-grey-200 '
                                                                    >
                                                                        {new Date(
                                                                            experience?.startDate
                                                                        ).toDateString()}
                                                                    </h5>
                                                                    <h5 className='text-sm text-grey-200 mx-2'>
                                                                        -
                                                                    </h5>
                                                                    {experience.isCurrent ? (
                                                                        <h5 className='text-sm text-grey-200'>
                                                                            Current
                                                                        </h5>
                                                                    ) : (
                                                                        <h5
                                                                            id='leaving date'
                                                                            className='text-sm text-grey-200'
                                                                        >
                                                                            {new Date(
                                                                                experience?.endDate
                                                                            ).toDateString()}
                                                                        </h5>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        )
                                                    )}
                                                </ProfileEditCard>
                                            ) : (
                                                <ProfileEditCard
                                                    onClick={addExperiences}
                                                    heading='Add experience'
                                                ></ProfileEditCard>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : page === 'Github' ? (
                            <div>Github</div>
                        ) : page === 'Friends' ? (
                            <div>Friends</div>
                        ) : (
                            <div>Friend Requests</div>
                        )}
                    </div>
                </div>
            </div>
            {showAboutModal && (
                <AboutModal
                    user={user}
                    onClose={() => setShowAboutModal(false)}
                />
            )}
            {showExperienceModal && (
                <ExperienceModal
                    user={user}
                    onClose={() => setShowExperienceModal(false)}
                />
            )}
            {showLevelModal && (
                <LevelModal onClose={() => setShowLevelModal(false)} />
            )}
            {showHeaderModal && (
                <HeaderModal
                    user={user}
                    onClose={() => setShowHeaderModal(false)}
                />
            )}
        </>
    );
};

export default Profile;
