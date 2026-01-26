
'use client' // Komponent klienta React

// Importy potrzebnych hooków i narzędzi z React oraz Next.js
import { createContext, use, useContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'


// Tworzenie kontekstu Menu, który będzie przechowywał stan i metody obsługi menu
const MenuContext = createContext(null)


// Provider kontekstu Menu – udostępnia stan i metody do obsługi menu w całej aplikacji
export function MenuProvider({ children }) {
    // Stan określający, czy menu jest otwarte (true) czy zamknięte (false)
    const [isOpen, setIsOpen] = useState(false)
    // Aktualna ścieżka (pathname) – wykorzystywana do zamykania menu przy zmianie strony
    const pathname = usePathname()

    // Funkcja otwierająca menu
    const openMenu = () => setIsOpen(true)
    // Funkcja zamykająca menu
    const closeMenu = () => setIsOpen(false)
    // Funkcja przełączająca stan menu (otwórz/zamknij)
    const toggleMenu = () => setIsOpen(prev => !prev)

    // Efekt: automatyczne zamknięcie menu po zmianie ścieżki (np. po przejściu na inną stronę)
    useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    // (Opcjonalnie) Można dodać efekt do zarządzania klasami na root w zależności od stanu menu
    // useEffect(() => {
    //     // Dodaj/usuń klasę na <body> lub <html> jeśli menu jest otwarte
    // }, [isOpen])

    // Efekt: zamykanie menu po naciśnięciu klawisza Escape
    useEffect(() => {
        if (!isOpen) return

        // Funkcja obsługująca zdarzenie naciśnięcia klawisza
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                closeMenu()
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        // Sprzątanie: usunięcie nasłuchiwania po zamknięciu menu lub odmontowaniu komponentu
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isOpen])

    // Efekt: blokowanie przewijania strony, gdy menu jest otwarte (body overflow: hidden)
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
    }, [isOpen])

    // Zwracanie providera kontekstu Menu z udostępnionymi wartościami i metodami
    return (
        <MenuContext.Provider
            value={{
                isOpen,      // Czy menu jest otwarte
                openMenu,    // Funkcja otwierająca menu
                closeMenu,   // Funkcja zamykająca menu
                toggleMenu   // Funkcja przełączająca menu
            }}
        >
            {children}
        </MenuContext.Provider>
    )
}


// Własny hook do pobierania kontekstu Menu
// Zapewnia dostęp do stanu i metod menu w komponentach potomnych
export function useMenu() {
    const context = useContext(MenuContext)

    // Jeśli hook został użyty poza MenuProviderem, rzuca błąd
    if (!context) {
        throw new Error('useMenu must be used inside MenuProvider')
    }

    return context
}