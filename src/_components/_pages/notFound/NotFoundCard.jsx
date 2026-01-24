'use client'
import styles from "./not-found.module.css"
import NotFoundFuzzyText from "@/_components/_pages/notFound/NotFoundFuzzyText"
import Button from "@/_components/Buttons/Button"
import Link from "next/link"
import { useRouter } from 'next/navigation'


export default function NotFoundCard({ children }) {

    const router = useRouter();

    const handleGoHome = () => router.push('/');
    const handleContactAdmin = () => router.push('/administracja');

    return (
        <div className={styles.notFoundCard}>
            <div className={styles.notFoundContainer}>
                <NotFoundFuzzyText>404</NotFoundFuzzyText>
                <div className={styles.notFoundTextContainer}>
                    {/* <h1 className={styles.notFoundTitle}>Nie można odnaleźć strony</h1> */}
                    {/* <p className={styles.notFoundSubtitle}>Podany adres jest nie osiągalny</p> */}
                    
                    <Button
                        onClick={handleGoHome}
                        content="textIcon"
                        iconName="arrow-up-right-square"
                        iconSize={16}
                        transparent={true}
                    >
                        Powrót do strony głównej
                    </Button>
                    <Button
                        onClick={handleContactAdmin}
                        variant="secondary"
                        content="textIcon"
                        textSize="sm"
                        iconName="arrow-up-right-square"
                        iconSize={14}
                        transparent={true}
                    >
                        W razie problemów skontaktuj się z administracją
                    </Button>
                    
                    {/* <Link href="/" className={styles.notFoundBtn}>Powrót do strony głównej</Link> */}
                    {/* <Link href="/administracja" className={styles.notFoundBtnSecondary}>W razie problemów skontaktuj się z administracją</Link> */}
                </div>
            </div>
        </div>
    )
}