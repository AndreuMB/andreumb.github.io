import portrait from '/src/assets/portrait.jpg'

function Portrait() {
    return (
        <div className="w-full h-full">
            <img
                src={portrait}
                alt="profile-picture"
                className="h-full w-full object-cover"
            />
        </div>
    );
}

export default Portrait;
