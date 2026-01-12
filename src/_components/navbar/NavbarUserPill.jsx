import styles from "./navbar.module.css"
import { Icon } from "@/_lib/Icons";

export default function NavbarUtilsPill() {

    let User = {
        name: "Jan Kowalski",
        role: "admin",
        id: 324356435
    }; //zamienic potem na sprawdzianie czy ktos jest zalogowany

    User = null; // --- IGNORE ---

    if (!User) {return null;}
    else{return (
        <div className={styles.navbarPillContainer}>
            <div className={styles.navbarUtilsPill}>
                Narzędzia:
                { User.role === "admin" && <Icon name="gear-wide" size={20}/>}
                <Icon name="tools" size={20}/>
                Zalogowano jako: {User.name}
                <Icon name="person-circle" size={20}/>
                <Icon name="box-arrow-right" size={20}/>
            </div>
        </div>
    );}
}