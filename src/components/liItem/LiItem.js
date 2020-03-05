import React from 'react'
import styles from "../statistics/Statistics.module.css";




const LiItem = ({data}) => (
    <li className={styles.item} style={{backgroundColor:`#${((1<<24)*Math.random()|0).toString(16)}`}}> 

      <span className={styles.label}>{data.label}</span>
      <span className={styles.percentage}>{data.percentage}%</span>
    </li>
);

export default LiItem;
