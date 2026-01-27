'use client'
import { Icon } from "@/_lib/Icons"
import styles from "./navbar.module.css"
import NavbarTitle from "./NavbarTitle"
import NavbarUtilsPill from "./NavbarUserPill"
import Link from "next/link"
import { useMenu } from "@/_lib/Providers/MenuContext";
import Button from "@/_components/Buttons/Button"



export default function NavBar() {
    const { isOpen, toggleMenu, closeMenu } = useMenu()

    


    return (
    <div className={`${styles.navbar} ${isOpen && styles.navbarMenuOpen}`}>
        <div className={styles.navbarWrapper}>
            <div className={styles.navbarPillWrapper}>
                <div className={styles.navbarPillContainer}>
                    <Link href="/" style={{textDecoration: "none"}}>
                    <div className={styles.navbarTitleContainer}>
                        <img src="/LOGO.png" alt="" className={styles.NavbarTitleIcon} />
                        <NavbarTitle></NavbarTitle>
                    </div>
                    </Link>
                </div>
            </div>
            <div className={styles.navbarPillWrapper}>
                <NavbarUtilsPill></NavbarUtilsPill>
                <div className={styles.navbarPillContainer}>
                    <Button
                        variant="navbar"
                        content="textIcon"
                        iconName={isOpen ? 'x-circle' : 'list'}
                        size="custom"
                        onClick={toggleMenu}
                        className={styles.navbarMenuBtn}
                    >
                        {isOpen ? 'Zamknij' : 'Menu'}
                    </Button>
                </div>
            </div>
        </div>
    </div>
    )
}