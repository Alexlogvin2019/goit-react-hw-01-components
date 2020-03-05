import React from "react";
import LiFriend from "../lifriend/LiFriend";
import styles from "./FriendList.module.css";
import PropTypes from "prop-types";

const FriendList = ({ friends }) => (
  <ul className={styles.friendlist}>
    {friends.map(elem => (
      <LiFriend data={elem} key={elem.id} />
    ))}
  </ul>
);

export default FriendList;

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number
};
