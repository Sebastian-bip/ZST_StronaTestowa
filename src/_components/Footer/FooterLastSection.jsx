import Link from 'next/link';
import styles from './footer.module.css';
import ScrambledText from '@/_lib/TextAnimations/ScrambledText';

export default function FooterLastSection() {
  return (
    <>
        <div className={styles.footerLastSection}>
            <div className={styles.footerLastSectionWrapper}>
                <div className={styles.footerLastSectionContainer}>
                    <div className={styles.footerLastSectionCopyrightContainer}>
                        <div className={styles.footerLastSectionCopyrightText}>
                            {/* <ScrambledText
                                className={styles.footerLastSectionCopyrightTextScrambled}
                                radius={60}
                                speed={0.2}
                                duration={4.0}
                                scrambleChars=".:"
                            > */}
                                Copyright © 2026 <br/> Zespół Szkół Technicznych im. 10 Pułku Piechoty w Łowiczu
                            {/* </ScrambledText> */}
                        </div>
                    </div>
                    <div className={styles.footerLastSectionAuthorContainer}>
                        <div className={styles.footerLastSectionAuthorTeitle}>
                            Stworzono z pa$ją:
                        </div>
                        <div className={styles.footerLastSectionAuthorDetails}>
                            <Link href="https://www.instagram.com/loox_17?igsh=cjJuOW56NzE5bnFx" target="_blank" className={styles.footerLastSectionAuthorDetailsLink}>Maksymialian Sławiński</Link>
                            <div className={styles.footerLastSectionAuthorDetailsSeparator}/>
                            <Link href="https://www.instagram.com/sebastan.jpg?igsh=MWxzYzVwa2ljaG1teQ==" target="_blank" className={styles.footerLastSectionAuthorDetailsLink}>Sebastian Kramarz</Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}