import MenuItem from "./Item";
import { MENU } from "../../utilities/Constants"
import { useState } from "react";

function Menu() {

    const [menu, setMenu] = useState(MENU)

    return (
        <div className="menu">
            {menu.map(i => <MenuItem name={i.name} path={i.path} current={i.current} key={i.name} />)}
        </div>
    );
}

export default Menu;
