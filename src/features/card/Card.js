import React, { useState } from 'react';
import styles from './Card.module.css';

export function Card() {
  return (
    <div className={styles.card}>
        <div className={styles.card__title}>
            <div className={styles["card__name-sity"]}>Moscow</div>
            <div className={styles.card__img} style={{backgroundImage: "url('https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png')"}}></div>
        </div>
        <div className="card__body">

        </div>
    </div>
  );
}
