import React from 'react';
import { FeatureCard, TestimonialSlider } from '../../components';
import { GiTriorb, GiAbstract097, GiTrinacria } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Home = () => {
    const { isAuth } = useSelector((state) => state.auth);
    return (
        <div id='home' className='text-grey-100 pt-6 relative'>
            <img
                className='absolute w-20 -top-24 left-2/4'
                src='/images/lamp.png'
                alt='lamp'
            />
            {/* -------------Bannner------------- */}
            <div
                id='banner'
                className='flex items-center justify-between mb-12 px-20'
            >
                <div id='banner-left' className='w-1/2'>
                    <h1 className='gradient_text_og_global font-extrabold text-6xl leading-tight mb-8'>
                        The platform <br /> for local first developers.
                    </h1>
                    <p className='w-4/5 mb-8 text-lg leading-normal'>
                        We have all you need as a developer in an organization
                        to grow. Join the community and meet with hundreds of
                        developers in your area.
                    </p>
                    <Link
                        to='/authenticate'
                        className='bg-red-100 text-white-100 py-3 px-10 rounded inline-block mb-6 transition-all hover:bg-red-200 relative'
                    >
                        {isAuth
                            ? 'Go to your dashboard'
                            : '  Get your early access'}

                        <img
                            className='absolute -top-7 -left-12'
                            src='/images/red-spikes.png'
                            alt='red-spikes'
                        />
                    </Link>
                    <p className='text-sm text-grey-200'>
                        Only for VIT Bhopal Students for now.
                    </p>
                </div>
                <div id='banner-right' className='w-2/5'>
                    <img src='/images/right-man.png' alt='' />
                </div>
            </div>
            {/* ------------- Testimonial------------- */}
            <div
                id='testimonials-section'
                className='pt-6 mb-32 px-20
            '
            >
                <h2 className='gradient_text_og_global text-center text-6xl mb-16 font-bold'>
                    Built for devs
                </h2>
                <div className='flex justify-around items-center mb-12'>
                    <TestimonialSlider />
                    <div
                        id='t-right'
                        className=' w-1/2 flex justify-center items-center'
                    >
                        <img className='' src='/images/code.png' alt='code' />
                    </div>
                </div>
                <div id='focusPoints' className='flex mb-14'>
                    <FeatureCard
                        color='text-green-100'
                        icon={<GiTriorb size='3rem' />}
                        heading='Easy to use'
                        description='A very simple and easy user interface for you to just hop on and enjoy the 100% of dev experience.'
                    />
                    <FeatureCard
                        color='text-yellow-200'
                        icon={<GiAbstract097 size='3rem' />}
                        heading='Collaborative'
                        description='Collaborate with tons of developers, clear queries and connect with alumni of your college. '
                    />
                    <FeatureCard
                        color='text-red-100'
                        icon={<GiTrinacria size='3rem' />}
                        heading='Customizable'
                        description='Create your own tech room if not already present. Customize your thread and profile and much more. '
                    />
                </div>
                <div
                    id='features'
                    className='flex justify-between items-center pt-6 mb-24 '
                >
                    <div id='f-left' className='w-1/2'>
                        <img
                            className='ml-8 w-11/12'
                            src='/images/left-image.png'
                            alt=''
                        />
                    </div>
                    <div id='f-right' className='w-5/12'>
                        <FeatureCard
                            heading='Multiple tech rooms.'
                            description='Devit have multiple tech rooms, where you can join and discuss your doubts and query. Create threads. Know about others follwing the same tech around you and much more. You can also create your own tech room if not already present.'
                        />
                        <div
                            style={{ height: '2px' }}
                            className='bg-grey-200 w-4/5  mt-3 mb-4'
                        ></div>
                        <FeatureCard
                            heading='User Feed.'
                            description='You can post your dev stuff and showcase your skills or any kind of project development. See other developers growing and doing there work related to the technologies you follow and the room that you have joined.'
                        />
                        <div
                            style={{ height: '2px' }}
                            className='bg-grey-200 w-4/5 mt-3 mb-4'
                        ></div>
                        <FeatureCard
                            heading='Explore.'
                            description='Explore all other developers in your organization(college) and the technologies they have been working on. Chat with them personally and get to know each other so you can work together on your next big thing.'
                        />
                        <div
                            style={{ height: '2px' }}
                            className='bg-grey-200 w-4/5 mt-3 mb-4'
                        ></div>
                    </div>
                </div>
            </div>
            {/* ------------- Showcase-1------------- */}
            <div className='h-screen flex items-center justify-between bg-white-200 px-20'>
                <div className='w-5/12'>
                    <h2 className='font-extrabold text-6xl leading-tight mb-8 text-black-100'>
                        Create a <br />
                        place where you belong.
                    </h2>
                    <p className='text-grey-300 text-lg'>
                        Devit servers are organized into topic-based channels
                        where you can collaborate, share, and just talk about
                        your day without clogging up a group chat.
                    </p>
                </div>
                <div className='w-1/2'>
                    <img src='/images/channel.png' alt='channel' />
                </div>
            </div>
            {/* ------------- Showcase-2------------- */}
            <div
                style={{ backgroundImage: "url('/images/orangebg.png')" }}
                className='h-screen flex items-center justify-between px-20 bg-cover bg-left'
            >
                <div className='w-5/12'>
                    <img src='/images/stages.png' alt='stages' />
                </div>
                <div className='w-5/12'>
                    <h2 className='font-extrabold text-6xl leading-tight mb-8 text-white-100'>
                        Know all <br /> about your devmate.
                    </h2>
                    <p className='text-white-200 text-lg font-medium'>
                        Your mastery in a technology is categorized in multiple
                        stages for you to become comfortable with peers who are
                        in your stage of learning. You can check all the details
                        in user’s profile from github repos to featured
                        projects.
                    </p>
                </div>
            </div>
            {/* ------------- Showcase-3------------- */}
            <div className='h-screen flex items-center justify-between bg-white-200 px-20'>
                <div className='w-1/2'>
                    <h2 className='relative font-extrabold text-5xl leading-tight mb-8 text-black-100'>
                        Clear all your <br />
                        doubts with <br /> threads.
                        <img
                            className='absolute -top-10'
                            src='/images/green-wave.png'
                            alt='wave'
                        />
                    </h2>
                    <p className='text-grey-300 text-lg'>
                        Devit threads are very customizable and help you ask for
                        help from your peers and have discussion about it. No
                        need to go and post your doubts somewhere else when your
                        mates here can help.
                    </p>
                </div>
                <div className='w-5/12'>
                    <img src='/images/threads-green.png' alt='channel' />
                </div>
            </div>
            {/* ------------- Call to action------------- */}
            <div className='h-screen flex items-center justify-around flex-col px-20'>
                <div className='flex flex-col items-center'>
                    <h1 className=' text-grey-100 text-center text-8xl font-bold opacity-20 z-0'>
                        Join. Learn. Grow
                    </h1>
                    <Link
                        to='/authenticate'
                        className='gradient_og_global py-4 px-10 text-2xl font-semibold rounded-full mt-14 '
                    >
                        Join the community
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
