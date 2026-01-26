"use client";
import styles from "./navbar.module.css"

import { useState, useEffect } from 'react';

export default function NavbarTitle() {
  const [fullTitle, setFullTitle] = useState(false);
  const user = null; // zaminiec potem na sprawdzianie czy ktos jest zalogowany
  useEffect(() => {
      const checkWidth = () => {
      if (!user) {
      setFullTitle(window.innerWidth < 780);
      }else{
      setFullTitle(true);
      };
    };

    checkWidth();
    window.addEventListener('resize', checkWidth);

    return () => window.removeEventListener('resize', checkWidth);

  }, []);

  return (
    <div className={styles.navbarTitle}>
      {fullTitle ? "ZST" : "Zespół Szkół Technicznych im. 10 Pułku Piechoty w Łowiczu"}
    </div>
  );
}
