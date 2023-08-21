import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function MenuItem({name, path, current}) {
    return (
        <Link className="menu-item" to={path} key={name}>{name}</Link>
    );
}

export default MenuItem;
