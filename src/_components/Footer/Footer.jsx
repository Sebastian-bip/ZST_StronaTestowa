import styles from './footer.module.css';
import FooterLastSection from './FooterLastSection';

export default function FooterRenderer() {
  return (
    <>
        <div className={styles.footer}>
            <div className={styles.footerWrapper}>
                <FooterLastSection />
            </div>
        </div>
    </>
  );
}