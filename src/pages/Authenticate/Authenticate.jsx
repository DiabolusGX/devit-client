import { AiFillGoogleCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Authenticate = () => {
    return (
        <div id='auth-page' className='h-screen flex items-center relative '>
            <div
                id='left'
                className='w-1/3 py-6 px-20 h-screen bg-black-200 flex flex-col '
            >
                <Link to='/' className='text-lg -mt-1 '>
                    <img className='w-20' src='/images/logo.svg' alt='logo' />
                </Link>
                <div className='mt-24'>
                    <h1 className='gradient_text_og_global font-extrabold text-5xl leading-tight mb-6'>
                        Get early <br /> access.
                    </h1>
                    <p className='mb-6 text-lg leading-normal text-white-200'>
                        A seamless way to grow together.
                    </p>
                    <a
                        href='http://localhost:4000/auth/google'
                        className=' flex items-center px-6 py-3 bg-black-100 rounded-lg text-yellow-100 drop-shadow-custom-black-100 mb-4'
                    >
                        <AiFillGoogleCircle size='2.5rem' />
                        <span className='ml-4'>Sign in with Google</span>
                    </a>
                    <p className='text-grey-200 text-sm'>
                        By clicking “Sign In”, you agree to our{' '}
                        <a className='text-yellow-100' href='/terms'>
                            Terms of Services
                        </a>{' '}
                        and{' '}
                        <a className='text-yellow-100' href='/privacy'>
                            Privacy Policy.
                        </a>
                    </p>
                </div>
            </div>
            <div
                id='right'
                className=' h-screen py-6 px-20 flex flex-col  w-2/3 z-10'
            >
                <div className='mt-24'>
                    <h1 className='font-extrabold text-9xl text-grey-100 opacity-20 '>
                        DEVIT.
                    </h1>
                    <p className=' w-3/5 text-lg text-grey-100'>
                        For now devit is only accessible to VIT Bhopal Students.
                        So please use your{' '}
                        <span className='text-yellow-100'>
                            VIT Bhopal College Id
                        </span>{' '}
                        to Sign In.
                    </p>
                </div>
            </div>
            <img
                className='absolute bottom-10 right-0 z-0 w-96'
                src='/images/mail-man.png'
                alt='mail-man'
            />
        </div>
    );
};

export default Authenticate;
