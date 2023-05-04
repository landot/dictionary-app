import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Page } from './Page';
import './App.css'


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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Page />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
