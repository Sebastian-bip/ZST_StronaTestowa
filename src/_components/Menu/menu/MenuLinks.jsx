import Link from "next/link";
import styles from './menu.module.css'
import { Icon } from "@/_lib/Icons";

export default function MenuLinks({
    mapItem,
}) {



    // if (mapItem && mapItem.children && mapItem.children.length > 0 && mapItem.children.map(link => link.id === 'archiwumStaraStrona')[0]) {
    //         return (
    //     <>
    //         {/* Podgrupy aktywnej grupy */}
    //         {mapItem && mapItem.href !== undefined && (
    //             <div>
    //                 <Link href={mapItem.href} >
    //                     {mapItem.label || mapItem.id}
    //                 </Link>
    //             </div>
    //         )}
            
    //         {mapItem && mapItem.children && mapItem.children.length > 0 && (
    //             <div className={styles.menuLinksListContainer}>
    //                 <div className={styles.menuLinksDivider}></div>
    //                 {/* Lista podgrup w aktywnej grupie */}
    //                 {mapItem.children.map(link => (
    //                     <>
    //                         <a key={link.id + '-link'} href={'https://zst.lowicz.pl'} className={styles.menuLinksLink}>
    //                             {link.label || link.id}
    //                             <Icon
    //                                 key={link.id + '-icon'}
    //                                 name='arrow-up-right-square'
    //                                 size={22}
    //                                 className={styles.menuLinksLinkIcon}
    //                             />
    //                         </a>
    //                         <div key={link.id + '-divider'} className={styles.menuLinksDivider}></div>
    //                     </>
    //                 ))}
    //             </div>
    //         )}
    //     </>
    // )
    // }

    return (
        <>
            {/* Podgrupy aktywnej grupy */}
            {mapItem && mapItem.href !== undefined && (
                <>
                    <div className={styles.menuLinksHeader}>
                        <Link href={mapItem.href} className={styles.menuLinksHeaderLink}>
                            {mapItem.label || mapItem.id}
                            <Icon
                                name='arrow-right-circle'
                                size={22}
                                className={styles.menuLinksHeaderLinkIcon}
                                />
                        </Link>
                        {mapItem.meta.menuDescription && (
                            <div className={styles.menuLinksHeaderDescription}>
                                {mapItem.meta.menuDescription}
                            </div>
                        )}
                    </div>
                </>
            )}
            
            {mapItem && mapItem.children && mapItem.children.length > 0 && (
                <div className={styles.menuLinksListContainer}>
                    <div className={styles.menuLinksDivider}></div>
                    {/* Lista podgrup w aktywnej grupie */}
                    {mapItem.children.map(link => (
                        <>
                            <Link key={link.id + '-link'} href={link.href || '#'} className={styles.menuLinksLink}>
                                {link.label || link.id}
                                <Icon
                                    key={link.id + '-icon'}
                                    name='arrow-right-circle'
                                    size={22}
                                    className={styles.menuLinksLinkIcon}
                                />
                            </Link>
                            <div key={link.id + '-divider'} className={styles.menuLinksDivider}></div>
                        </>
                    ))}
                </div>
            )}
        </>
    )

}