'use client'

import { MenuProvider } from "./Providers/MenuContext"
import { SettingsProvider } from "./Providers/SettingsContext"

export function Providers({ children }) {
    return (
        <SettingsProvider>
            <MenuProvider>
                {children}
            </MenuProvider>
        </SettingsProvider>
    )
}