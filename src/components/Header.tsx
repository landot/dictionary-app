import { DarkModeToggle } from "./DarkModeToggle";
import { FontSelect } from "./FontSelect";
import logo from '../assets/images/logo.svg';
import './Header.css';
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export function Header(props: {toggleTheme: any, toggleFont: any}) {
    const theme = useContext(ThemeContext);

    return (
        <div className="header">
            <img src={logo} alt="logo" />
            <div className="header-right">
                <FontSelect toggleFont={props.toggleFont} theme={theme}/>
                <hr />
                <DarkModeToggle toggleTheme={props.toggleTheme}/>
            </div>
        </div>
    )
}