import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import searchIcon from '../assets/images/icon-search.svg';
import { ThemeContext } from '../context/ThemeContext';
import './SearchField.css';

export function SearchField() {
    const theme = useContext(ThemeContext);
    const navigate = useNavigate();
    const { word } = useParams()
    const [inputValue, setInputValue] = useState(word || '');
    const [error, setError] = useState('');

    function handleTextUpdate(e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value);
    }

    function handleSearch() {
        if(inputValue === '') {
            setError('Whoops, can’t be empty…');
        } else {
            setError('');
            navigate(inputValue);
        }
    }

    function handleKeyDown(e:  React.KeyboardEvent) {
        if (e.key === 'Enter') {
            handleSearch();
          }
    }

    return (
        <div className={`search-field ${theme}`}>
            <div className={`search-bar${error ? ' error': ''}`}>
                <input 
                    type="text" 
                    placeholder="Search for any word..." 
                    value={inputValue} 
                    onChange={handleTextUpdate}
                    onKeyDown={handleKeyDown}
                />
                <img src={searchIcon} alt="search icon" onClick={handleSearch} />
            </div>
            {error && <p className='search-validation'>{error}</p>}
        </div>
    )
}