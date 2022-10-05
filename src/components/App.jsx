import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import Transactions from 'components/Transactions/Transactions';

import user from '../user.json';
import data from '../data.json';
import friends from '../friends';
import transactions from '../transactions';

export const App = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        gap: 30,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics data={data} titleText="Upload stats" />
      <FriendList friends={friends} />
      <Transactions transactions={transactions} />
    </div>
  );
};
