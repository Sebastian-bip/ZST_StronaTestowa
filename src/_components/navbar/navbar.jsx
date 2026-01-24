import { Icon } from "@/_lib/Icons"
import styles from "./navbar.module.css"
import NavbarTitle from "./NavbarTitle"
import NavbarUtilsPill from "./NavbarUserPill"
import Link from "next/link"

export default function NavBar() {

    return (
    <div className={styles.navbar}>
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
                    <button className={styles.navbarBtn}>
                        <div className={styles.navbarBtnText}>
                            Menu
                        </div>
                        <div className={styles.navbarBtnIcon}>
                            <Icon name="list"/>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}