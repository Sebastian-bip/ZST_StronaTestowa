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

    textIcon: ({ children, iconName, iconSize, iconClassName }) => (
        <>
            <div className={`${styles.buttonContentTextIcon} ${styles.buttonContent}`}>
                <div className={styles.buttonContentTextInner}>
                    {children}
                </div>
                <Icon name={iconName} size={iconSize} svgClassName={iconClassName}/>
            </div>
        </>
    ),
    icon: ({iconName, iconSize, iconClassName }) => (
        <>
            <div className={`${styles.buttonContentIcon} ${styles.buttonContent}`}>
                <Icon name={iconName} size={iconSize} svgClassName={iconClassName}/>
            </div>
        </>
    )

}