import './Friend.css';
export const Friend = ({ name, avatar, isOnline }) => {
  return (
    <li>
      <p>{name}</p>
      <div
        className="friend-status inline-block w-4 h-4 bg-red-700 rounded-full"
        data-status={isOnline}
      ></div>
      <img src={avatar} alt={name} className="w-20" />
      <p>{!isOnline}</p>
    </li>
  );
};
