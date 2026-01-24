import { Icon } from "@/_lib/Icons"
import styles from "./Button.module.css";

export const BUTTON_CONTENT_PRESETS = {
    text: ({ children }) => (
        <>
            <div className={`${styles.buttonContentText} ${styles.buttonContent}`}>
                <div className={styles.buttonContentTextInner}>
                    {children}
                </div>
            </div>
        </>
    ),

    textIcon: ({ children, iconName, iconSize }) => (
        <>
            <div className={`${styles.buttonContentTextIcont} ${styles.buttonContent}`}>
                <div className={styles.buttonContentTextInner}>
                    {children}
                </div>
                <Icon name={iconName} size={iconSize} />
            </div>
        </>
    )

}