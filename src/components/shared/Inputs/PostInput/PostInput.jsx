import React from 'react';
import { useSelector } from 'react-redux';
import { OutlinedButton } from '../../..';
import { BsCardImage } from 'react-icons/bs';
const PostInput = () => {
    const { user } = useSelector((state) => state.auth);
    return (
        <div className='bg-black-400 rounded-2xl py-3 px-5'>
            <div className='flex items-center'>
                <img
                    className='w-10 h-10 rounded-full border-2 border-yellow-100 '
                    src={user.avatar}
                    alt='user pic'
                />
                <input
                    className='inline-block bg-black-400 w-full  py-3 px-6 text-lg text-grey-100  rounded-lg focus:outline-none'
                    placeholder='Share something...'
                    type='text'
                />
            </div>
            <hr className='text-grey-200 border-dashed my-4  ' />
            <div className='flex items-center justify-between'>
                <OutlinedButton>
                    <span className='px-2'>Share</span>
                </OutlinedButton>
                <OutlinedButton circular>
                    <BsCardImage size='1.3rem' />
                </OutlinedButton>
            </div>
        </div>
    );
};

export default PostInput;
