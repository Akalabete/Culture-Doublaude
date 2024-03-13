import React from 'react';
import styles from './footer.module.scss';
const Footer: React.FC = () => {
  return (
    <footer>
      {
        <div className={styles.footer}>
          <div className={styles.footer__content}>
            <div className={styles.footer__content__logo}>
            
            </div>
            <div className={styles.footer__content__text}>
              <p>
                <span>©</span> 2024 Culture Doublaude - Tous droits réservés
              </p>
            </div>
            <div className={styles.footer__content__webmaster}>
              <p>by <a href="https://www.lacouralexandre.tech" target="_blank" rel="noopener noreferrer">Dev&apos;your Synergy</a></p>
            </div>
          </div>
        </div>
      }
    </footer>
  );
}

export default Footer;