import React from "react";
import "./App.css";
import Profile from "./components/profile/Profile";
import user from "./components/user.json";
import Statistics from "./components/statistics/Statistics";
import statisticalData from "./components/statistical-data.json";
import friends from './components/friends.json';
import FriendList from './components/friendList/FriendList';
import transactions from './components/transactions.json';
import TransactionHistory from './components/transactionHistory/TransactionHistory'

const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
