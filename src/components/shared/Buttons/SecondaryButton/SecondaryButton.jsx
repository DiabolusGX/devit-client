const SecondaryButton = ({ onClick, children }) => {
    return (
        <button
            onClick={onClick}
            className='bg-black-200 text-yellow-100 py-2 px-4 rounded hover:bg-black-300'
        >
            {children}
        </button>
    );
};

export default SecondaryButton;
