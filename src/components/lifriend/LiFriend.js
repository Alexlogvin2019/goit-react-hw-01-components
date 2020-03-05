import React from "react";
import styles from "../friendList/FriendList.module.css"


const LiFriend = ({ data }) => (
  <li className={styles.item}>
    {/* {console.log(data.isOnline ? 'red' : 'green')} */}
    <span className={styles.status} style= {{backgroundColor:`${data.isOnline ? 'red' : 'green'}`}}></span>
    <img className="avatar" src={data.avatar} alt="img" width="48" />
    <p className="name">{data.name}</p>
  </li>
);

export default LiFriend;
//#${data.isOnline ? 'red' : 'green'}}