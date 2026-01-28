
import styles from './hero.module.css';
import VideoBg from './VideoBg';

import HeroTextAni from './HeroTextAni';

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
                                    <HeroTextAni className={styles.heroTitle}>
                                        Zespół Szkół Technicznych<br />
                                        im. 10 Pułku Piechoty<br />
                                        w Łowiczu
                                    </HeroTextAni>
                                    <div className={styles.heroSubtitle}>
                                        <HeroTextAni>
                                            Tradycja, nowoczesność i techniczna przyszłość w jednym miejscu
                                        </HeroTextAni>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}