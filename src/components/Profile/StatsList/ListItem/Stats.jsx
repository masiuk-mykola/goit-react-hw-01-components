import { Item, Label, Numbers } from './Stats.styled';

export const ListItem = ({ stats, children }) => {
  return (
    <Item>
      <Label>{children}</Label>
      <Numbers>{stats}</Numbers>
    </Item>
  );
};
