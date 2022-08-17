import PropTypes from 'prop-types';
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

FriendList.protoTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
