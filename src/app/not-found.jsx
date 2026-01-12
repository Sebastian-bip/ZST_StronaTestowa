import Link from "next/link"
import CurvedLoop from "@/_lib/TextAnimations/CurvedLoop"
import NotFoundFuzzyText from "@/_components/misc/NotFoundFuzzyText"
import styles from "./not-found.module.css"
import GradientBlinds from "@/_lib/Backgrounds/GradientBlinds"

export const metadata = {
    title: "404"
}

export default function NotFound() {
    return(
        <>
        <div>
            <div className={styles.notFoundContainer}>
                <NotFoundFuzzyText>404</NotFoundFuzzyText>
                <p>Page: <b></b> does not exists!!!</p>
                <Link href="/">storna glowna</Link>
                <Link href="/test">/test</Link>
            </div>
            <div className={styles.curvedLoopContainer}>
                <CurvedLoop
                    marqueeText="Nie można odnaleźć strony ✦ Podany adres jest nie osiągalny ✦ 404 ✦ Witryna nie istnieje ✦ Nie odnaleziono zasobu ✦"
                    curveAmount={0}
                    speed={3}
                    className=''
                    classNameCurvedLoopJacket={styles.curvedLoopJacket}
                    classNameCurvedLoopSvg={styles.curvedLoopSvg}
                />
            </div>
            {/* <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
                <GradientBlinds
                    gradientColors={['#FF9FFC', '#5227FF']}
                    angle={0}
                    noise={0.3}
                    blindCount={12}
                    blindMinWidth={50}
                    spotlightRadius={0.5}
                    spotlightSoftness={1}
                    spotlightOpacity={1}
                    mouseDampening={0.15}
                    distortAmount={0}
                    shineDirection="left"
                    mixBlendMode="lighten"
                />
            </div> */}
        </div>
        </>
    )
}

