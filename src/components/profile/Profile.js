import React from "react";
import styles from "./Profile.module.css";
import PropTypes from "prop-types";

const Profile = props => (
  <>
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={props.avatar} alt="user avatar" className={styles.avatar} />
        <p className={styles.name}>{props.name}</p>
        <p className={styles.tag}>{props.tag}</p>
        <p className={styles.location}>{props.location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.li}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{props.stats.followers}</span>
        </li>
        <li className={styles.li}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{props.stats.views}</span>
        </li>
        <li className={styles.li}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  </>
);

export default Profile;

Profile.propTypes = {
  props: PropTypes.object,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
  })
};
