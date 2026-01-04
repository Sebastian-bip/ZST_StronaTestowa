'use client'

import { SettingsProvider } from "./Providers/SettingsContext"

export function Providers({ children }) {
    return (
        <SettingsProvider>
            {children}
        </SettingsProvider>
    )
}