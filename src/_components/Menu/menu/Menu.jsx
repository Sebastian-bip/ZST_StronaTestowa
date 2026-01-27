
'use client'
import { MENU } from '@/_data/menu/menu.config'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import MenuSection from './MenuSection'
import MenuGroup from './MenuGroup'
import MenuLinks from './MenuLinks'
import styles from './menu.module.css'
import { Aurora } from '@/_lib/Backgrounds/Aurora'

export default function Menu({
    isOpen,
}) {
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
    }, [isOpen, pathname])



    // Renderowanie menu
    return (
        <>
            <div className={[styles.menu, 
                isOpen ? styles.menuOpen : styles.menuClosed,
                Boolean(activeSection) ? styles.menuSectionActive : '',
                Boolean(activeGroup) ? styles.menuGroupActive : '',
                ].join(' ')}>
                <div className={styles.menuWrapper}>
                        <div className={[
                            styles.menuBackground,
                            Boolean(activeSection) ? styles.menuSectionActiveBackground : '',
                        ].join(' ')}>
                        {isOpen && <Aurora
                                colorStops={["#9900ff","#8876c4","#5227FF"]}
                                blend={1}
                                amplitude={1.0}
                                speed={0.2}
                                style={{transition: 'none'}}
                            />}
                        </div>
                    <div className={styles.menuSections} style={{zIndex: '4', position: 'relative'}}>
                        <div className={styles.menuSectionContainer}>
                            <MenuSection
                                mapItem={MENU}
                                activeSection={activeSection}
                                handleSectionToggle={handleSectionToggle}
                            ></MenuSection>
                        </div>
                        <div className={styles.menuGroupContainer}>
                            <MenuGroup
                                mapItem={section}
                                activeGroup={activeGroup}
                                handleGroupToggle={handleGroupToggle}
                            >
                            </MenuGroup>
                        </div>
                        <div className={styles.menuLinksContainer}>
                            <MenuLinks mapItem={group}></MenuLinks>
                        </div>
                    </div>
                </div>
            </div>







            {/* Aktualny stan (do testów) */}
            {/* <div style={{ marginTop: '1rem', fontSize: '0.9em', color: '#888' }}>
                <div>Aktywna sekcja: <b>{activeSection || 'brak'}</b></div>
                <div>Aktywna grupa: <b>{activeGroup || 'brak'}</b></div>
            </div> */}
        </>
    );
}