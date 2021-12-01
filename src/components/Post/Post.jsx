const Post = () => {
    return (
        <div className='bg-black-400 rounded-2xl py-3 px-5'>
            <div className='flex items-center mb-4'>
                <img
                    className='w-10 h-10 rounded-full border-2 border-yellow-100 '
                    src='/images/abhay.png'
                    alt='user pic'
                />
                <div className='ml-4'>
                    <h3 className='text-lg'>Abhay Gupta</h3>
                    <p className='text-xs text-grey-200'>22 mins ago</p>
                </div>
            </div>
            <div>
                <p className='text-sm text-grey-200 mb-4'>
                    Fusce blandit est nec nisi iaculis dictum. Phasellus dapibus
                    faucibus sem id vehicula. Maecenas in condimentum dolor,
                    vitae volutpat metus.
                </p>
                <img
                    className='w-full h-48 rounded-xl object-cover'
                    src='https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                    alt=''
                />
            </div>
        </div>
    );
};

export default Post;
