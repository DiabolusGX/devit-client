import { BsHandThumbsUp, BsChatDots } from 'react-icons/bs';
import { AiOutlineSend } from 'react-icons/ai';
const CommentInput = () => {
    return (
        <div className='flex rounded-full bg-black-300 px-4 py-2'>
            <div className='flex items-center text-yellow-100'>
                <button>
                    <BsHandThumbsUp size='1.5rem' />
                </button>
                <p className=' mx-2 text-lg'>21</p>
                <div style={{ width: '2px' }} className='h-5 bg-grey-200'></div>
            </div>
            <div className='w-full flex items-center'>
                <div className='text-yellow-100 mx-4'>
                    <BsChatDots size='1.5rem' />
                </div>
                <input
                    placeholder='Comment something ...'
                    className='w-full bg-black-300 text-grey-100 focus:outline-none'
                    type='text'
                />
                <button className='text-yellow-100 ml-4 rounded-full p-1 hover:bg-black-200'>
                    <AiOutlineSend size='1.5rem' />
                </button>
            </div>
        </div>
    );
};

export default CommentInput;
