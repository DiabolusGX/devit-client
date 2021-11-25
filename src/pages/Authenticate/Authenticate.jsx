const Authenticate = () => {
    return (
        <div>
            <h1 className='text-2xl text-white-100 mb-4'>
                Sign In with google
            </h1>
            <h2 className='text-xl text-white-100 mb-4'>
                Use your VIT Bhopal email id
            </h2>
            <a
                href='http://localhost:4000/auth/google'
                className='px-10 py-4 bg-red-100 inline-block rounded text-white-100'
            >
                SignIn with google
            </a>
        </div>
    );
};

export default Authenticate;
