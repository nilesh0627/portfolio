import { Link } from "react-router-dom";
function NavItem({ Icon, name, to }) {
    return (
        <Link
            className="navbar-menu-item"

            to={to}
            onClick={() => { }}
        >
            <li className="nav-item-wrapper">
                <Icon />
                <span>{name}</span>
            </li>
        </Link>
    )
}

export default NavItem;