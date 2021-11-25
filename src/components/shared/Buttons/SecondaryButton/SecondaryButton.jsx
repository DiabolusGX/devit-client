const SecondaryButton = ({ onClick, children }) => {
    return (
        <button
            onClick={onClick}
            className='bg-black-200 text-yellow-100 py-2 px-4 rounded'
        >
            {children}
        </button>
    );
};

export default SecondaryButton;
