import { useState } from 'react';
import searchIcon from '../assets/images/icon-search.svg';
import './SearchField.css';

export function SearchField(props: {theme: string, handleSearch: any}) {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    function handleTextUpdate(e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value);
    }

    function handleSearch() {
        if(inputValue === '') {
            setError('Whoops, can’t be empty…');
        } else {
            setError('');
            props.handleSearch(inputValue);
        }
    }

    function handleKeyDown(e:  React.KeyboardEvent) {
        if (e.key === 'Enter') {
            handleSearch();
          }
    }

    return (
        <div className={`search-field ${props.theme}`}>
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