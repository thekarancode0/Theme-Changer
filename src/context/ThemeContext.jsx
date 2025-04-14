//ThemeContex.jsx
import React, { createContext, useState } from "react";
export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) =>{
    const [theme, setTheme] = useState(true)  //true == light theme
    return(
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children} 
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider