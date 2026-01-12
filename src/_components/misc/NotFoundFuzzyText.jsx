'use client'

import { useEffect, useState } from "react"
import FuzzyText from "@/_lib/TextAnimations/FuzzyText"
import styles from "@/app/not-found.module.css"

export default function NotFoundFuzzyText({ children }) {
    const [addedFontSize, setAddedFontSize] = useState(0)

    useEffect(() => {
        const handleResize = () => {
            setAddedFontSize(window.innerWidth > 780 ? 32 : 0)
        }

        handleResize() // initial check
        window.addEventListener("resize", handleResize)
        console.log("addedFontSize", addedFontSize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    

    return (
        <div className={styles.fuzzyTextContainer}>
            <FuzzyText
                baseIntensity={0.2}
                hoverIntensity={0.5}
                enableHover={true}
                //fontSize={128 - 16 + addedFontSize}
                fontSize={96 + addedFontSize}
            >
                {children}
            </FuzzyText>
        </div>
    )
}