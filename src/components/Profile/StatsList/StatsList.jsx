import PropTypes from 'prop-types';
import { ListItem } from './ListItem/Stats';
import { List } from './StatsList.styled';

export const StatsList = ({ followers, views, likes }) => {
  return (
    <List>
      <ListItem stats={followers}>Followers</ListItem>
      <ListItem stats={views}>Views</ListItem>
      <ListItem stats={likes}>Likes</ListItem>
    </List>
  );
};

StatsList.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
