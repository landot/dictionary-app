import { useState } from "react";
import arrowDown from '../assets/images/icon-arrow-down.svg';
import './FontSelect.css';

export function FontSelect(props: {toggleFont: any, theme: string}) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [fontFamily, setFontFamily] = useState('Sans Serif');
    const [fontType, setFontType] = useState('Inter');

    function handleDropdownItemClick(fontFamily: string, fontType: string) {
        setFontFamily(fontFamily);
        setFontType(fontType);
        setShowDropdown(false);
        props.toggleFont(fontType);
    }

    function handleDropdownClick() {
        setShowDropdown(prev => !prev);
    }

    return (
        <div className={`font-selector ${props.theme}`}>
            <div className='current-font' onClick={handleDropdownClick}>
                <button style={{
                    fontFamily: fontFamily
                }}>{fontType}</button>
                <img src={arrowDown} alt="arrow down icon" />
            </div>
            <div className={`font-dropdown ${showDropdown ? 'open': 'closed'}`}>
                <button className='font-sans-serif' onClick={() => handleDropdownItemClick('Inter', 'Sans Serif')}>Sans Serif</button>
                <button className='font-serif' onClick={() => handleDropdownItemClick('Lora', 'Serif')}>Serif</button>
                <button className='font-mono' onClick={() => handleDropdownItemClick('Inconsolata', 'Mono')}>Mono</button>
            </div>
        </div>
    )
}