import { FriendItem } from './FreindItem/FriendItem';

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(item => {
        return <FriendItem key={item.id} item={item} />;
      })}
    </ul>
  );
};
