import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import {
    FeatureCard,
    InformationCard,
    SecondaryButton,
} from '../../components';
import { GiProcessor, GiCompass, GiThunderball } from 'react-icons/gi';
import { CgFeed } from 'react-icons/cg';
const Dashboard = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        localStorage.setItem('currentPath', location.pathname);
    }, []);
    return (
        <div
            id='dashboard'
            className='relative px-20 height_minus_nav_og_global text-white-100 '
        >
            <div className='mb-8 pt-4'>
                <h1 className='heading_og_global'>Dashboard</h1>
            </div>

            <div id='focusPoints' className='py-10 flex mb-10'>
                <div>
                    <FeatureCard
                        color='text-red-100'
                        icon={<GiProcessor size='3rem' />}
                        heading='Tech Rooms'
                        description='There are many rooms on different technologies where you can discuss, ask doubts and know about others you are following the same tech.'
                    />
                    <div className='mt-4'>
                        <SecondaryButton
                            onClick={() => navigate('/tech-rooms')}
                        >
                            Tech Rooms
                        </SecondaryButton>
                    </div>
                </div>
                {/* <div className='w-2 h-32 bg-grey-300'></div> */}
                <div>
                    <FeatureCard
                        color='text-yellow-200'
                        icon={<CgFeed size='3rem' />}
                        heading='Feed'
                        description='Post about your projects, achievements or anything you want to share with your followers, see other devs posts who are following the same tech and more. '
                    />
                    <div className='mt-4'>
                        <SecondaryButton onClick={() => navigate('/feed')}>
                            Your Feed
                        </SecondaryButton>
                    </div>
                </div>

                <div>
                    <FeatureCard
                        color='text-green-100'
                        icon={<GiCompass size='3rem' />}
                        heading='Explore'
                        description='Explore other tech stacks, projects and learn about other developers you are no following and the field they are working on.'
                    />
                    <div className='mt-4'>
                        <SecondaryButton onClick={() => navigate('/explore')}>
                            Explore
                        </SecondaryButton>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <InformationCard
                    heading='Upcoming Features.'
                    icon={<GiThunderball size='2rem' />}
                >
                    <p className='text-sm'>
                        Something exciting like clubhouse is also coming.
                    </p>
                </InformationCard>
            </div>
            <img
                className='absolute -bottom-2 right-20 w-60'
                src='/images/office.png'
                alt='office'
            />
        </div>
    );
};

export default Dashboard;
