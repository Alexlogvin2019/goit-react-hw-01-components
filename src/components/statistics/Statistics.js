import React from "react";
import LiItem from "../liItem/LiItem";
import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ stats, title }) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>{title}</h2>
    <ul className={styles.statlist}>
      {/* {console.log(stats)}   */}
      {stats.map(elem => (
        <LiItem data={elem} key={elem.id} />
      ))}
    </ul>
  </section>
);

export default Statistics;

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number
};
