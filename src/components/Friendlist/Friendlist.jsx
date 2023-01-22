import { Friend } from '../Friend/Friend';
export const Friendlist = ({ friends }) => {
  return (
    <ul>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Friend key={id} name={name} avatar={avatar} isOnline={isOnline} />
      ))}
    </ul>
  );
};
