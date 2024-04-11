import React, { useState, useEffect } from 'react';
import { ReactComponent as SunIcon} from "../images/icon-sun.svg";
import { ReactComponent as MoonIcon} from "../images/icon-moon.svg";

function Header() {
    const [togClass, setTogClass] = useState('light');
    
    const setTheme = () => {
        const theme = (togClass === 'light' ? 'dark' : 'light');
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
        setTogClass(theme);
    }

    useEffect(() => {
        // The first time the page is loaded, the color mode is set 
        // according to the system preference. (Use light theme if no preference is set)
        if (!localStorage.getItem("theme")) {    
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.documentElement.className = 'dark';
                setTogClass('dark');
            } else {
                document.documentElement.className = 'light';
            }                            
        } else {
            document.documentElement.className = localStorage.getItem("theme");
            setTogClass(localStorage.getItem("theme"))
        }    
    }, [])

    return (
        <div className='Header'>
            <h1>TODO</h1>
            <button onClick={setTheme} className='theme-btn'>
                {
                    togClass === 'light'
                        ? <SunIcon />
                        : <MoonIcon />                         
                }
            </button>
        </div>
    )
}

export default Header