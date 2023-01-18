import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

import user from '../Data/user.json';
import dataStat from '../Data/data.json';

export const App = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics stats={dataStat} />
    </div>
  );
};
