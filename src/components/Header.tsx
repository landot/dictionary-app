import { DarkModeToggle } from "./DarkModeToggle";
import { FontSelect } from "./FontSelect";
import logo from '../assets/images/logo.svg';
import './Header.css';

export function Header() {
    return (
        <div className="header">
            <img src={logo} alt="logo" />
            <div className="header-right">
                <FontSelect />
                <hr />
                <DarkModeToggle />
            </div>
        </div>
    )
}