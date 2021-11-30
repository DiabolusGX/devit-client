import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.scss';
const TestimonialSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
    };

    return (
        <div className='w-2/5'>
            <Slider {...settings}>
                <div id='t-left'>
                    <div className='flex items-center mb-4'>
                        <img
                            className='w-14 mr-8'
                            src='/images/abhay.png'
                            alt='avatar'
                        />
                        <div>
                            <h5 className='text-lg'>
                                Abhay Gupta/
                                <span className='text-grey-200'>
                                    Co-founder & developer
                                </span>
                            </h5>
                            <h4>
                                <img
                                    className='w-16'
                                    src='/images/logo.svg'
                                    alt='logo'
                                />
                            </h4>
                        </div>
                    </div>
                    <p className='text-grey-200 leading-normal text-lg'>
                        “Students are competitive creature, they want to learn
                        together, share their success, even the slightest one.
                        All they need is a platform where they can share with
                        their peers and show case their skills as well and that
                        is Devit.”
                    </p>
                </div>
                <div id='t-left'>
                    <div className='flex items-center mb-4'>
                        <img
                            className='w-14 mr-8'
                            src='/images/ankit.png'
                            alt='avatar'
                        />
                        <div>
                            <h5 className='text-lg'>
                                Ankit Malik/
                                <span className='text-grey-200'>
                                    Co-founder & developer
                                </span>
                            </h5>
                            <h4>
                                <img
                                    className='w-16'
                                    src='/images/logo.svg'
                                    alt='logo'
                                />
                            </h4>
                        </div>
                    </div>
                    <p className='text-grey-200 leading-normal text-lg'>
                        “I always felt lack of motivation as I did not know many
                        people who are working on the same technologies, so that
                        we can grow and work together on some project. Devit
                        will help with that.”
                    </p>
                </div>
                <div id='t-left'>
                    <div className='flex items-center mb-4'>
                        <img
                            className='w-14 mr-8'
                            src='/images/sparsh.png'
                            alt='avatar'
                        />
                        <div>
                            <h5 className='text-lg'>
                                Sparsh Gupta/
                                <span className='text-grey-200'>
                                    Co-founder & developer
                                </span>
                            </h5>
                            <h4>
                                <img
                                    className='w-16'
                                    src='/images/logo.svg'
                                    alt='logo'
                                />
                            </h4>
                        </div>
                    </div>
                    <p className='text-grey-200 leading-normal text-lg'>
                        “Always felt there should be an easy way to communicate
                        with your alumni for guidance rather than requesting
                        them on linkedIn and waiting for their reply.”
                    </p>
                </div>
                <div id='t-left'>
                    <div className='flex items-center mb-4'>
                        <img
                            className='w-14 mr-8'
                            src='/images/ayush.png'
                            alt='avatar'
                        />
                        <div>
                            <h5 className='text-lg'>
                                Ayush Dwivedi/
                                <span className='text-grey-200'>
                                    Co-founder & analyst
                                </span>
                            </h5>
                            <h4>
                                <img
                                    className='w-16'
                                    src='/images/logo.svg'
                                    alt='logo'
                                />
                            </h4>
                        </div>
                    </div>
                    <p className='text-grey-200 leading-normal text-lg'>
                        “Classrooms don’t need tech geeks who can teach. We need
                        teaching geeks who can use tech.”
                    </p>
                </div>
                <div id='t-left'>
                    <div className='flex items-center mb-4'>
                        <img
                            className='w-14 mr-8'
                            src='/images/lalit.png'
                            alt='avatar'
                        />
                        <div>
                            <h5 className='text-lg'>
                                Lalit Wagh/
                                <span className='text-grey-200'>
                                    Co-founder & research analyst
                                </span>
                            </h5>
                            <h4>
                                <img
                                    className='w-16'
                                    src='/images/logo.svg'
                                    alt='logo'
                                />
                            </h4>
                        </div>
                    </div>
                    <p className='text-grey-200 leading-normal text-lg'>
                        “Students should be exposed to ecosystem where they will
                        learn, cause learning helps man to make decisions. Devit
                        will provide a path for achieving certain academic
                        challenges and activities.”
                    </p>
                </div>
            </Slider>
        </div>
    );
};

export default TestimonialSlider;
