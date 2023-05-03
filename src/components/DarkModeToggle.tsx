import moonIcon from '../assets/images/icon-moon.svg';
import moonIconPurple from '../assets/images/icon-moon-purple.svg';
import './DarkModeToggle.css';
import { useState } from 'react';

export function DarkModeToggle() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    function toggleTheme() {
        if (theme === 'light') {
          setTheme('dark');
        } else {
          setTheme('light');
        }
    }

    return (
        <div className='dark-mode-toggle'>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round" onClick={toggleTheme}></span>
            </label>
            <img src={theme === 'dark' ? moonIconPurple : moonIcon} alt="dark mode icon" />
        </div>
    )
}