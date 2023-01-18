import './Profile.css';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <div className="text-left border w-[200px] m-3">
      <ul>
        <li>{username}</li>
        <li>{tag}</li>
        <li>{location}</li>
      </ul>
      <img src={avatar} alt={username} title={username} className="w-32" />
      <ul>
        <li>Followers: {followers}</li>
        <li>Views: {views}</li>
        <li>Likes: {likes}</li>
      </ul>
    </div>
  );
};
