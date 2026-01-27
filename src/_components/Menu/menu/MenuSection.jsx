import Link from 'next/link'
import styles from './menu.module.css'
import { Icon } from "@/_lib/Icons";

export default function MenuSection({
    mapItem,
    activeSection,
    handleSectionToggle,
}) {

    return (
        <>
        {/* Główna lista sekcji */}
            <>
                {mapItem.map(item => (
                    item.children && item.children.length > 0 ? (
                        // Sekcja z podsekcjami — przycisk otwierający sekcję
                        <button
                            className={[
                                styles.menuSectionButton,
                                activeSection === item.id ? styles.menuSectionButtonActive : '',
                            ].join(' ')}
                            key={item.id}
                            onClick={() => handleSectionToggle(item.id)}
                        >
                            {item.label}
                            <Icon
                                name='chevron-right'
                                size={32}
                                className={styles.menuSectionButtonIcon}
                            />
                        </button>
                    ) : (
                        // Link bez podsekcji
                        <Link key={item.id} href={item.href || '#'} className={styles.menuSectionLink}>
                            {item.label || item.id}
                            <Icon
                                name='arrow-right-circle'
                                size={32}
                                className={styles.menuSectionLinkIcon}
                            />
                        </Link>
                    )
                ))}
            </>
        </>
    )
}