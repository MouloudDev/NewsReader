import { useEffect, useState } from "react";
import Crescent from "../Icons/crescent";
import Sun from "../Icons/sun";


export default function DarkModeToggler() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const htmlDoc = document.documentElement;
        if (darkMode) htmlDoc.classList.add("dark");
        else htmlDoc.classList.remove("dark");
    }, [darkMode]);

    return (
        <button
          onClick={() => setDarkMode(prev => !prev)}
          className="ml-auto"
        >
            {darkMode ? <Sun /> : <Crescent />}
        </button>
    )
}
