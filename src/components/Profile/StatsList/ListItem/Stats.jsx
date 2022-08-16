import PropTypes from 'prop-types';
import { Item, Label, Numbers } from './Stats.styled';

export const ListItem = ({ stats, children }) => {
  return (
    <Item>
      <Label>{children}</Label>
      <Numbers>{stats}</Numbers>
    </Item>
  );
};

ListItem.propTypes = {
  children: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired,
};
