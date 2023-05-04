import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Font } from "../assets/fonts";
import { ThemeContext } from "../context/ThemeContext";
import { Header } from "./Header";
import { SearchField } from "./SearchField";


export function Layout(props: {setTheme: any}) {
    const [font, setFont] = useState<string>(localStorage.getItem('font') || Font.Inter);

    const theme = useContext(ThemeContext);

    function toggleTheme() {
        if (theme === 'light') {
            props.setTheme('dark');
        } else {
            props.setTheme('light');
        }
    }

    function toggleFont() {
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
        <div className="site-wrapper">
            <Header toggleTheme={toggleTheme} toggleFont={toggleFont}/>
            <SearchField/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}