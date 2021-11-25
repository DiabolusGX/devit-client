const FeatureCard = ({ color, icon, heading, description }) => {
    return (
        <div>
            {icon && <div className={`${color} mb-2 `}>{icon}</div>}
            <h3 className='text-lg text-white-100 font-semibold mb-2'>
                {heading}
            </h3>
            <p className='text-grey-200 w-4/5'>{description}</p>
        </div>
    );
};

export default FeatureCard;
