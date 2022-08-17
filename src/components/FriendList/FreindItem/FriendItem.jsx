import PropTypes from 'prop-types';
import { UserName } from 'components/Profile/MainInfo/MainInfo.styled';
import { Img, Item, Marker } from './FreindItem.styled';

export const FriendItem = ({ item }) => {
  return (
    <Item>
      <Marker isOnline={item.isOnline}></Marker>
      <Img src={item.avatar} alt={item.name} width="48" />
      <UserName>{item.name}</UserName>
    </Item>
  );
};

FriendItem.protoTypes = {
  item: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
