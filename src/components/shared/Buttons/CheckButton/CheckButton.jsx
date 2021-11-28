const CheckButton = (props) => {
    return (
        <div>
            <input
                {...props}
                className='hidden'
                type='checkbox'
                id={props.name}
                value={props.name}
            />
            <label
                className='flex items-center bg-black-300 mb-6 mr-4 py-3 px-6 text-grey-100 inline-block  rounded-lg focus:outline-none'
                for={props.name}
            >
                <span>{props.name}</span>
                <div
                    className={`w-5 h-5 rounded-full border-2 border-yellow-100 ml-2 ${
                        props.isChecked && 'bg-yellow-100'
                    }`}
                ></div>
            </label>
        </div>
    );
};

export default CheckButton;
