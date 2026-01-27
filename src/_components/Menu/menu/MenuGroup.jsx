import Link from "next/link";
import styles from './menu.module.css'
import { Icon } from "@/_lib/Icons";

export default function MenuGroup({ 
    mapItem,
    activeGroup,
    handleGroupToggle,
 }) {

    return (
        <>
            {/* Podsekcje (grupy) aktywnej sekcji */}
            {mapItem && mapItem.href !== undefined && (
                <>
                    <div className={styles.menuGroupHeader}>
                        <Link href={mapItem.href} className={styles.menuGroupHeaderLink}>
                            {mapItem.label || mapItem.id}
                            <Icon
                                name='arrow-right-circle'
                                size={22}
                                className={styles.menuGroupHeaderLinkIcon}
                                />
                        </Link>
                        {mapItem.meta.menuDescription && (
                            <div className={styles.menuGroupHeaderDescription}>
                                {mapItem.meta.menuDescription}
                            </div>
                        )}
                    </div>
                </>
            )}
            <div className={styles.menuGroupHeaderDivider} />
            {mapItem && mapItem.children && mapItem.children.length > 0 && (
                <>
                    {/* Lista grup w aktywnej sekcji */}
                    {mapItem.children.map(group => (
                        group.children && group.children.length > 0 ? (
                            <button key={group.id} onClick={() => handleGroupToggle(group.id)}
                                className={[
                                    styles.menuGroupButton,
                                    activeGroup === group.id ? styles.menuGroupButtonActive : '',
                                ].join(' ')}
                            >
                                {group.label}
                                <Icon
                                    name='chevron-right'
                                    size={22}
                                    className={styles.menuGroupButtonIcon}
                                />
                            </button>
                        ) : (
                            <Link key={group.id} href={group.href || '#'}
                                className={styles.menuGroupLink}
                            >
                                {group.label || group.id}
                                <Icon
                                    name='arrow-right-circle'
                                    size={22}
                                    className={styles.menuGroupLinkIcon}
                                />
                            </Link>
                        )
                    ))}
                </>
            )}
        </>
    )
 }