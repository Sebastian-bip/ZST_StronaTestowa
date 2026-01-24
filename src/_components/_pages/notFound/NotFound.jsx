'use client'

import Link from "next/link"
import CurvedLoop from "@/_lib/TextAnimations/CurvedLoop"
import styles from "./not-found.module.css"
import Aurora from "@/_lib/Backgrounds/Aurora/Aurora"
import NotFoundCard from "./NotFoundCard"

export default function NotFound({ children }) {



    return(
        <>
        <div className={styles.notFound}>
            <div className={styles.notFoundPage}>
                <NotFoundCard></NotFoundCard>
                <div className={styles.curvedLoopContainer}>
                    <CurvedLoop
                        marqueeText="Nie można odnaleźć strony ✦ Podany adres jest nie osiągalny ✦ 404 ✦ Witryna nie istnieje ✦ Nie odnaleziono zasobu ✦"
                        curveAmount={0}
                        speed={2.5}
                        className={styles.curvedLoop}
                        classNameCurvedLoopJacket={styles.curvedLoopJacket}
                        classNameCurvedLoopSvg={styles.curvedLoopSvg}
                    />
                </div>
            </div>
            <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
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