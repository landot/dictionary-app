import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout';
import { ThemeContext, ThemeContextType } from './context/ThemeContext';
import { useState } from 'react';
import { SearchResults } from './components/SearchResults';


// - See hover and focus states for all interactive elements on the page
// add hyperlinks to synonyms and antonyms using url search parameters
// clean up desktop styling
// clean up mobile styling
// - View the optimal layout for the interface depending on their device's screen size
// fix up storybook
// add unit tests
// fix up bad types
// - **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

// https://api.dictionaryapi.dev/api/v2/entries/en/hello

function App() {
  const [theme, setTheme] = useState<ThemeContextType>(localStorage.getItem('theme') as ThemeContextType  || 'light');

  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout setTheme={setTheme}/>}>
            <Route path="/:word" element={<SearchResults />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  )
}

export default App
