import { DarkModeToggle } from "./DarkModeToggle";
import { FontSelect } from "./FontSelect";
import logo from '../assets/images/logo.svg';
import './Header.css';
import { useNavigate } from "react-router-dom";

export function Header(props: {
    toggleTheme: () => void, 
    toggleFont: (fontType: string) => void
}) {
    const navigate = useNavigate();

    function handleHomeNavigation() {
        navigate('/');
    }

    return (
        <div className="header">
            <img src={logo} alt="logo" onClick={handleHomeNavigation}/>
            <div className="header-right">
                <FontSelect toggleFont={props.toggleFont}/>
                <hr />
                <DarkModeToggle toggleTheme={props.toggleTheme}/>
            </div>
        </div>
    )
}