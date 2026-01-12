'use client'
import { createContext, useContext, useEffect, useState } from "react";

// instrukcja obslugi
//
// przyklad:
//
//   const { theme, isHighContrast, fontSize, updateSetting } = useSettings();
//
//  gdzies: updateSetting("theme", e.target.value)
//


// tworzenie kontekstu ustawien na stronie
const SettingsContext = createContext();

// nazwa zmiennej w localstorage
const _localStorageVarible = "app-settings"

// funkcja dajaca ustawienia 
export const SettingsProvider = ({ children }) => {

    // stany ustawien
    const [settings, setSettings] = useState({
        theme: "system",
        isHighContrast: false,
        isSandpaperMode: false,
        saturationModifier: 1,
        isReduceMotion: false,
        isReduceBlur: false,
        
        // utils
        isNavbarHidden: false,

        fontSize: "normal",

        layout: "normal" // for testing
    });

    // sprawdzanie czy strona jest zaladowana (wyrenderowana juz)
    const [isLoaded, setIsLoaded] = useState(false)

    // ladownie danych z localstorage danych na starcie
    useEffect(() => {
        const saved = localStorage.getItem(_localStorageVarible)
        console.log(saved)
        if (saved) {
            setSettings(JSON.parse(saved));
        }
        setIsLoaded(true)
    }, []);

    // aktualizacja danych
    const updateSettings = (key, value) => {
        setSettings((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    // aktualizacja w localstorage
    useEffect(() => {
        if (!isLoaded) return;

        localStorage.setItem(
            _localStorageVarible,
            JSON.stringify(settings)
        );
    }, [settings, isLoaded]);

    // synchronizacja stanu z DOM i CSS
    useEffect(() => {
        // nie robi dopoki stronie nie jest wyrenderowana
        if (!isLoaded) return;

        const root = window.document.documentElement;


        // motyw
        const activeTheme = settings.theme === "system" 
            ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") 
            : settings.theme;

        root.setAttribute("data-theme", activeTheme)

        root.classList.remove("theme-light", "theme-dark")
        root.classList.add(`theme-${activeTheme}`)
        
        // kontrast
        root.classList.toggle("high-contrast", settings.isHighContrast)

        // tryb sandpaper colors
        root.classList.toggle("sandpaper-colors", settings.isSandpaperMode)

        //saturacja
        if (settings.saturationModifier != 1){
            root.style.setProperty("--saturation-factor", `${settings.saturationModifier}`)
        }else{
            root.style.removeProperty("--saturation-factor")
        }
        
        // to do >> reduce motion oraz blur

        // to do >> font size


        // layout for testing
        root.setAttribute("data-layout", settings.layout)
        
            // jesli wicej niz 3 dodac swith
        root.classList.remove("layout-normal")
        root.classList.add(`layout-${settings.layout}`)

        
    }, [settings, isLoaded])

    return (
        <SettingsContext.Provider value={{...settings, updateSettings}}>
            {/* zapobieganie blyskaniu strony */}
            <div style={{ visibility: isLoaded ? "visible" : "hidden"}}>
                {children}
            </div>
        </SettingsContext.Provider>
    );
};

export const useSettings = () => useContext(SettingsContext)