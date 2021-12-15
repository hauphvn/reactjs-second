import {useState} from "react";

const {createContext} = require("react");

const ThemeContext = createContext()
function ThemeProvider({children}) {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    const value = {
        theme,
        toggleTheme
    }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}
export {ThemeContext, ThemeProvider}
