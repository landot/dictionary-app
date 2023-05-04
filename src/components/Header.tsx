import { DarkModeToggle } from "./DarkModeToggle";
import { FontSelect } from "./FontSelect";
import logo from '../assets/images/logo.svg';
import './Header.css';

export function Header(props: {theme: string, toggleTheme: any, toggleFont: any}) {
    return (
        <div className="header">
            <img src={logo} alt="logo" />
            <div className="header-right">
                <FontSelect toggleFont={props.toggleFont} theme={props.theme}/>
                <hr />
                <DarkModeToggle theme={props.theme} toggleTheme={props.toggleTheme}/>
            </div>
        </div>
    )
}