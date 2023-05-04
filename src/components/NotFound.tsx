import frownIcon from '../assets/images/frown.png';
import './NotFound.css';

export function NotFound(props: {theme: string, errorMessage: string}) {
    return (
        <div className={`not-found ${props.theme}`}>
            <img src={frownIcon} alt="frown icon" />
            <h1>No Definitions Found</h1>
            <p>{props.errorMessage}</p>
        </div>
    )
}