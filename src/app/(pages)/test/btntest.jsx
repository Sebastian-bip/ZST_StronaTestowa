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
        <div>
            <button onClick={() => {
                updateSettings("saturationModifier", 0)
            }}>
                saturacja 0
            </button>
                    <button onClick={() => {
                updateSettings("saturationModifier", 1)
            }}>
                saturacja 1
            </button>
        </div>
        <div>
            <button onClick={() => {
                updateSettings("isSandpaperMode", true)
            }}>
                sandpaper on
            </button>
                    <button onClick={() => {
                updateSettings("isSandpaperMode", false)
            }}>
                sandpaper off
            </button>
        </div>
        </>
    )
}