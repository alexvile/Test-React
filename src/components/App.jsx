import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { Friendlist } from './Friendlist/Friendlist';
import { Transactions } from './Transactions/Transactions';

import user from '../Data/user.json';
import dataStat from '../Data/data.json';
import friends from '../Data/friends.json';
import transactions from '../Data/transactions.json';

export const App = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div>
      <h1 className="text-3xl">Transactions</h1>

      <Transactions items={transactions} />

      <h1 className="text-3xl">Profile</h1>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <h1 className="text-3xl">Statistic</h1>
      <Statistics stats={dataStat} />
      <h1 className="text-3xl">Friendlist</h1>
      <Friendlist friends={friends} />
    </div>
  );
};
