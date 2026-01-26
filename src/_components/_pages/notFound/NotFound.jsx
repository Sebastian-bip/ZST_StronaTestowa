'use client'

import Link from "next/link"
import CurvedLoop from "@/_lib/TextAnimations/CurvedLoop"
import styles from "./not-found.module.css"
import Aurora from "@/_lib/Backgrounds/Aurora/Aurora"
import NotFoundCard from "./NotFoundCard"

export default function NotFound({ children }) {

    const loopText = '404 ✦ Nie można odnaleźć strony ✦ 404 ✦ Podany adres jest nie osiągalny ✦ 404 ✦ Zespół Szkół Technicznych im. 10 Pułku Piechoty w Łowiczu ✦ 404 ✦ Witryna nie istnieje ✦ 404 ✦ Nie odnaleziono zasobu ✦'

    

    return(
        <>
        <div className={styles.notFound}>
            <div className={styles.notFoundPage}>
                <NotFoundCard></NotFoundCard>
                <div className={styles.curvedLoopContainer}>
                    <CurvedLoop
                        marqueeText={loopText}
                        curveAmount={0}
                        speed={2.5}
                        className={styles.curvedLoop}
                        classNameCurvedLoopJacket={styles.curvedLoopJacket}
                        classNameCurvedLoopSvg={styles.curvedLoopSvg}
                    />
                </div>
            </div>
            <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', borderRadius: '24px'}}>
                <Aurora
                // colorStops={["#9900ff","#B19EEF","#5227FF"]}
                colorStops={["#9900ff","#B19EEF","#5227FF"]}
                blend={1}
                amplitude={1.0}
                speed={0.2}
                />
            </div>
        </div>
        </>
    )
}