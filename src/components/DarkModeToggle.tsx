import moonIcon from '../assets/images/icon-moon.svg';
import moonIconPurple from '../assets/images/icon-moon-purple.svg';
import './DarkModeToggle.css';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export function DarkModeToggle(props: {toggleTheme: any}) {
    const theme = useContext(ThemeContext);

    function toggleTheme() {
        if (theme === 'light') {
          props.toggleTheme('dark');
        } else {
          props.toggleTheme('light');
        }
    }

    return (
        <div className='dark-mode-toggle'>
            <label className="switch">
                <input 
                    type="checkbox" 
                    checked={theme === 'dark'}
                />
                <span className="slider round" onClick={toggleTheme}></span>
            </label>
            <img src={theme === 'dark' ? moonIconPurple : moonIcon} alt="dark mode icon" />
        </div>
    )
}