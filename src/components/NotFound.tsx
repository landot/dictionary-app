import { useContext } from 'react';
import frownIcon from '../assets/images/frown.png';
import { ThemeContext } from '../context/ThemeContext';
import './NotFound.css';

export function NotFound(props: {errorMessage: string}) {
    const theme = useContext(ThemeContext);

    return (
        <div className={`not-found ${theme}`}>
            <img src={frownIcon} alt="frown icon" />
            <h1>No Definitions Found</h1>
            <p>{props.errorMessage}</p>
        </div>
    )
}