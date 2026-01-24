'use client'

import { useEffect, useState } from "react"
import FuzzyText from "@/_lib/TextAnimations/FuzzyText"
import styles from "./not-found.module.css"

export default function NotFoundFuzzyText({ children }) {
    const [addedFontSize, setAddedFontSize] = useState(0)

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth > 780){
                setAddedFontSize(window.innerWidth > 780 ? 64 : 0)
                return
            }
            setAddedFontSize(window.innerWidth > 500 ? 32 : 0)
        }

        handleResize() // initial check
        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    

    return (
        <div className={styles.fuzzyTextContainer}>
            <FuzzyText
                baseIntensity={0.2}
                hoverIntensity={0.5}
                enableHover={true}
                transitionDuration={10}
                clickEffect={true}
                glitchMode={true}
                letterSpacing={12}
                //fontSize={128 - 16 + addedFontSize}
                fontSize={96 + addedFontSize}
                // fontSize='clamp(40px, 10vw, 156px)'
            >
                {children}
            </FuzzyText>
        </div>
    )
}