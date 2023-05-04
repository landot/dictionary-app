import moonIcon from '../assets/images/icon-moon.svg';
import moonIconPurple from '../assets/images/icon-moon-purple.svg';
import './DarkModeToggle.css';

export function DarkModeToggle(props: {theme: string, toggleTheme: any}) {

    function toggleTheme() {
        if (props.theme === 'light') {
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
                    checked={props.theme === 'dark'}
                />
                <span className="slider round" onClick={toggleTheme}></span>
            </label>
            <img src={props.theme === 'dark' ? moonIconPurple : moonIcon} alt="dark mode icon" />
        </div>
    )
}