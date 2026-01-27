import Button from "@/_components/Buttons/Button";
import { Icon } from "@/_lib/Icons";
import styles from "./navbar.module.css"
import { useMenu } from "@/_lib/Providers/MenuContext";

export default function NavbarUtilsPill() {
    const {isOpen} = useMenu();

    let User = {
        name: "Jan Kowalski",
        role: "admin",
        id: 324356435
    }; //zamienic potem na sprawdzianie czy ktos jest zalogowany

    User = null; // --- IGNORE ---
    if (!User && !isOpen) return null;
    if (!User) return null;

    return (
        <div className={styles.navbarPillContainer}>
            <div className={styles.navbarUtilsPill}>
                {/* Dostepne narzedzia:
                { User.role === "admin" && <Icon name="gear-wide" size={20}/>}
                <Icon name="tools" size={20}/>
                Zalogowano jako: {User.name}
                <Icon name="person-circle" size={20}/>
                <Icon name="box-arrow-right" size={20}/> */}
                <Button
                    variant="navbar"
                    content="icon"
                    iconName="person-circle"
                    iconSize={18}
                    className={styles.userUtilsBtn}
                    iconClassName={styles.userUtilsBtnIcon}
                >

                </Button>
            </div>
        </div>
    );
}