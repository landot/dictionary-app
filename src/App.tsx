import { useEffect, useState } from 'react';
import './App.css'
import { Font } from './assets/fonts';


// - Search for words using the input field
// - See the Free Dictionary API's response for the searched word
// - See a form validation message when trying to submit a blank form
// - Play the audio file for a word when it's available
// - Switch between serif, sans serif, and monospace fonts
// - Switch between light and dark themes
// - View the optimal layout for the interface depending on their device's screen size
// - See hover and focus states for all interactive elements on the page
// - **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

function App() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [font, setFont] = useState(localStorage.getItem('font') || Font.Inter);

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

    useEffect(() => {
      localStorage.setItem('theme', theme);
      localStorage.setItem('font', font);
      document.body.className = `${theme} ${font}`;
    }, [theme, font]);

  return (
    <div className={`App ${theme}`}>
      <p>asdf</p>
      <p>Whereas disregard and contempt for human rights have resulted</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={toggleFont}>Toggle Font</button>
      <p>font: {font}</p>
    </div>
  )
}

export default App
