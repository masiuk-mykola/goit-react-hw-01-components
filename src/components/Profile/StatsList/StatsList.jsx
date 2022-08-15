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
