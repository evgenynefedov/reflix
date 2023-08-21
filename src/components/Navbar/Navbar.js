import Logo from './Logo'
import Menu from "./Menu";
import WelcomeSection from './WelcomeSection';

function Navbar({loggedUser}) {
    return (
        <div className="navbar">
            <Logo />
            <Menu />
            <WelcomeSection loggedUser={loggedUser} />
        </div>
    );
}

export default Navbar;
