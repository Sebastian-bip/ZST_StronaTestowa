import Link from 'next/link'
import Menu from "@/_components/Menu/menu/Menu";
import styles from './TestMenu.module.css'

export default function TestMenuPage() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2 className={styles.title}>Testowe Menu — widok testowy</h2>
                <div className={styles.menuWrapper}>
                    <Menu />
                </div>
                {/* Link powrotny do strony głównej - tylko w widoku testowym */}
                <div style={{textAlign: 'center'}}>
                    <Link href="/" className={styles.homeLink}>Strona główna</Link>
                </div>
            </div>
        </div>
    )
}