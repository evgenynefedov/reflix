
function WelcomeSection({loggedUser}) {
    return (
        <div className="welcome">
            Welcome{loggedUser ? <b> {loggedUser}</b> : "" }!
        </div>
    );
}

export default WelcomeSection;
