import styles from './hero.module.css';
import VideoBg from './VideoBg';

export default function Hero() {


    return (
        <>
            <section className={styles.heroSection}>
                <div className={styles.heroVideoBgContainer}>
                    <VideoBg className={styles.heroVideoBg}/>
                </div>
                <div className={styles.heroContent}>
                    <div className={styles.heroOverlay}>
                        <div className={styles.heroContentWrapper}>
                            <div className={styles.heroContentContainer}>
                                <img src="/LOGO.png" alt="ZST logo" className={styles.heroLogoZST} />
                                <div className={styles.heroTextContainer}>
                                    <div className={styles.heroTitle}>
                                        Zespół Szkół Technicznych<br />
                                        im. 10 Pułku Piechoty<br />
                                        w Łowiczu
                                    </div>
                                    <div className={styles.heroSubtitle}>
                                        Tradycja, nowoczesność i techniczna przyszłość w jednym miejscu
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                    {/* <div className={styles.heroLogos}>
                        <img src="/LOGO.png" alt="ZST logo" className={styles.heroLogoZST} />
                    </div>
                    <h1 className={styles.heroTitle}>
                        Zespół Szkół Technicznych<br />
                        im. 10 Pułku Piechoty<br />
                        w Łowiczu
                    </h1>
                    <div className={styles.heroSubtitle}>
                        Tradycja, nowoczesność i techniczna przyszłość w jednym miejscu
                    </div> 
                    </div>*/}
                
            </section>
        </>
    )
}