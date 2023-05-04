import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getDictionaryResults } from "./api";
import { DictionaryApiResponse } from "./assets/ApiResponse";
import { Font } from "./assets/fonts";
import { Header } from "./components/Header";
import { SearchField } from "./components/SearchField";
import { SearchResults } from "./components/SearchResults";

export function Page() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || 'light');
    const [font, setFont] = useState<string>(localStorage.getItem('font') || Font.Inter);
    const [search, setSearch] = useState<string>(searchParams.get('word') || '');
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
      updateWordParam(searchText);
      setSearchResults([]);
    }

    const updateWordParam = (searchText: string) => {
        const params = new URLSearchParams(searchParams);
        params.set('word', searchText);
        setSearchParams(params);
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