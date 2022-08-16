import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: ${props => props.theme.space[3]};
  margin-bottom: ${props => props.theme.space[3]};
  border: ${props => props.theme.borders.normal};
  width: 300px;
  box-shadow: 10px 10px 5px 0px rgb(0 0 0 / 55%);
  border-radius: 5px;
`;

export const Img = styled.img`
  margin-right: ${props => props.theme.space[4]};
`;

export const Marker = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: ${props => props.theme.space[4]};
  background-color: ${props => (props.isOnline === true ? 'green' : 'red')};
`;
