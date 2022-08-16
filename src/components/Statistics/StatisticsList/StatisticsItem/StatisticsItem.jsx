import { Item, Label, Numbers } from './StatisticsItem.styled';

export const StatisticsItem = ({ item }) => {
  return (
    <Item>
      <Label>{item.label}</Label>
      <Numbers>{item.percentage}</Numbers>
    </Item>
  );
};
