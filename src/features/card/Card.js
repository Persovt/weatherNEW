import React, { useState } from 'react';
import styles from './Card.module.css';

export function Card({sity}) {
    console.log(sity.weather[0].icon)
  return (
    <div className={styles.card}>
        <div className={styles.card__title}>
            <div className={styles["card__name-sity"]}>{sity.name}</div>
            <div className={styles.card__img} style={{backgroundImage: `url('http://openweathermap.org/img/wn/${sity.weather[0].icon}.png')`}}></div>
        </div>
        <div className="card__body">

        </div>
    </div>
  );
}
