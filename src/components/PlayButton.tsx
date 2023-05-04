import PlayIcon from '../assets/images/icon-play.svg';
import PlayIconHover from '../assets/images/icon-play-hover.svg';
import './PlayButton.css';
import { useState } from 'react';

export function PlayButton(props: {onClick: any}) {
    const [isHover, setIsHover] = useState(false);

    return (
        <>
            <img 
                src={isHover ? PlayIconHover: PlayIcon} 
                alt="play button" 
                className='play-icon' 
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                onClick={props.onClick}
            />
        </>
    )
}