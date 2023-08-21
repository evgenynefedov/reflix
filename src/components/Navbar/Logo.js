import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Logo() {
    return (
        <div className="logo">
            <Link to="/">📺 Reflix</Link>
        </div>
    );
}

export default Logo;
