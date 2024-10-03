import { useState } from "react";
import Crescent from "../Icons/crescent";
import Sun from "../Icons/sun";


export default function DarkModeToggler() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <button
          onClick={() => setDarkMode(prev => !prev)}
          className="ml-auto"
        >
            {darkMode ? <Sun /> : <Crescent />}
        </button>
    )
}
