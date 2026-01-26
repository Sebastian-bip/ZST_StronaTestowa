
'use client'
import { MENU } from '@/_data/menu/menu.config'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Menu() {
    const pathname = usePathname()
    const [activeSection, setActiveSection] = useState(null)
    const [activeGroup, setActiveGroup] = useState(null)

    const section = MENU.find(s => s.id === activeSection)
    const group = section?.children?.find(g => g.id === activeGroup)

    // Przełączanie widoczności sekcji
    const handleSectionToggle = (sectionId) => {
        setActiveSection(prev => (prev === sectionId ? null : sectionId))
        setActiveGroup(null)
    }

    // Przełączanie widoczności grupy w obrębie sekcji
    const handleGroupToggle = (groupId) => {
        setActiveGroup(prev => (prev === groupId ? null : groupId))
    }

    // Reset przy zmianie ścieżki (np. po nawigacji)
    useEffect(() => {
        setActiveSection(null)
        setActiveGroup(null)
    }, [pathname])

    // Renderowanie menu
    return (
        <>
            {/* Główna lista sekcji */}
            <div>
                {MENU.map(item => (
                    item.children && item.children.length > 0 ? (
                        // Sekcja z podsekcjami — przycisk otwierający sekcję
                        <button
                            key={item.id}
                            onClick={() => handleSectionToggle(item.id)}
                        >
                            {item.label}
                        </button>
                    ) : (
                        // Link bez podsekcji
                        <Link key={item.id} href={item.href || '#'}>
                            {item.label || item.id}
                        </Link>
                    )
                ))}
            </div>

            {/* Podsekcje (grupy) aktywnej sekcji */}
            {section && section.children && section.children.length > 0 && (
                <div>
                    {/* Lista grup w aktywnej sekcji */}
                    {section.children.map(group => (
                        group.children && group.children.length > 0 ? (
                            <button key={group.id} onClick={() => handleGroupToggle(group.id)}>
                                {group.label}
                            </button>
                        ) : (
                            <Link key={group.id} href={group.href || '#'}>
                                {group.label || group.id}
                            </Link>
                        )
                    ))}
                </div>
            )}

            {/* Podgrupy aktywnej grupy */}
            {group && group.children && group.children.length > 0 && (
                <div>
                    {/* Lista podgrup w aktywnej grupie */}
                    {group.children.map(link => (
                        <Link key={link.id} href={link.href || '#'}>
                            {link.label || link.id}
                        </Link>
                    ))}
                </div>
            )}

            {/* Aktualny stan (do testów) */}
            <div style={{ marginTop: '1rem', fontSize: '0.9em', color: '#888' }}>
                <div>Aktywna sekcja: <b>{activeSection || 'brak'}</b></div>
                <div>Aktywna grupa: <b>{activeGroup || 'brak'}</b></div>
            </div>
        </>
    );
}