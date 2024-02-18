import './header.scss';
import {NavLink} from "react-router-dom";
import {ROUTE_PATH} from "../../router.tsx";
export const Header = (): React.ReactElement => {

    return (
        <div className="header-container">
            <nav>
                <NavLink to={ROUTE_PATH.home}>home</NavLink>
                <NavLink to={ROUTE_PATH.admin}>admin</NavLink>
            </nav>
        </div>
    );
}