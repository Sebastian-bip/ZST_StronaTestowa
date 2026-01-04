"use client"
import { useSettings } from "@/_lib/Providers/SettingsContext"

export default function ButtonTest({ children }) {
    const { updateSettings, theme } = useSettings()
    return(
        <>
                <button onClick={() => {
            updateSettings("theme", 'dark')
        }}>
            dark
        </button>
                <button onClick={() => {
            updateSettings("theme", 'light')
        }}>
            light
        </button>
        </>
    )
}