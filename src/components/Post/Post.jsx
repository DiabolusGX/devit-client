import { CommentInput } from '..';

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
            <div className='mb-4'>
                <p className='text-base text-grey-200 mb-2'>
                    We owe a lot to our volunteers! Like many charities, our
                    volunteers are crucial to Sea Smart’s continued growth and
                    widespread impact.
                </p>
                <img
                    className='w-full h-48 rounded-xl object-cover'
                    src='https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                    alt=''
                />
            </div>
            <div>
                <CommentInput />
            </div>
        </div>
    );
};

export default Post;
