const PrimaryButton = ({ onClick, children }) => {
    return (
        <button
            onClick={onClick}
            className='bg-red-100 text-white-100 py-2 px-4 rounded hover:bg-red-200'
        >
            {children}
        </button>
    );
};

export default PrimaryButton;
