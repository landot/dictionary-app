import { useEffect, useState } from 'react';
import { getDictionaryResults } from './api';
import './App.css'
import { DictionaryApiResponse } from './assets/ApiResponse';
import { Font } from './assets/fonts';
import { Header } from './components/Header';
import { SearchField } from './components/SearchField';
import { SearchResults } from './components/SearchResults';


// - Play the audio file for a word when it's available
// - See hover and focus states for all interactive elements on the page
// add url search parameters
// add hyperlinks to synonyms and antonyms using url search parameters
// clean up desktop styling
// clean up mobile styling
// - View the optimal layout for the interface depending on their device's screen size
// fix up storybook
// add unit tests
// fix up bad types
// add theme handler
// - **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

// https://api.dictionaryapi.dev/api/v2/entries/en/hello

function App() {
    const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || 'light');
    const [font, setFont] = useState<string>(localStorage.getItem('font') || Font.Inter);
    const [search, setSearch] = useState<string>('');
    const [searchResults, setSearchResults] = useState<DictionaryApiResponse[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const toggleTheme = () => {
      if (theme === 'light') {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    };

    const toggleFont = () => {
      if(font === Font.Inconsolata) {
        setFont(Font.Inter)
      } else if(font === Font.Inter) {
        setFont(Font.Lora)
      } else {
        setFont(Font.Inconsolata)
      }
    }

    const handleSearch = (searchText: string) => {
      setSearch(searchText);
      setSearchResults([]);
    }

    useEffect(() => {
      localStorage.setItem('theme', theme);
      localStorage.setItem('font', font);
      document.body.className = `${theme} ${font}`;
    }, [theme, font]);

    useEffect(() => {
      async function loadSearchResults() {
        setLoading(true);
        setError('');

        try {
          const data = await getDictionaryResults(search);
          setSearchResults(data);
        } catch (err: any) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }
      if(search) {
        loadSearchResults();
      }
    }, [search]);

  return (
    <div className={`App ${theme}`}>
      <div className='content'>
        <Header theme={theme} toggleTheme={toggleTheme} toggleFont={toggleFont}/>
        <SearchField theme={theme} handleSearch={handleSearch}/>
        {!loading && 
          <SearchResults theme={theme} searchResults={searchResults} errorMessage={error}/>
        }
      </div>
    </div>
  )
}

export default App
