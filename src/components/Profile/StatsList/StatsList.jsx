import { StatElem } from '../Stats/Stats';
import { List } from './StatsList.styled';

export const StatsList = ({ followers, views, likes }) => {
  return (
    <List>
      <StatElem stats={followers}>Followers</StatElem>
      <StatElem stats={views}>Views</StatElem>
      <StatElem stats={likes}>Likes</StatElem>
    </List>
  );
};
