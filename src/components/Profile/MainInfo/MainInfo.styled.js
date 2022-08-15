import styled from 'styled-components';

export const Image = styled.img`
  display: block;
  height: auto;
  width: 200px;
  margin: 0 auto;
  margin-bottom: ${props => props.theme.space[2]};
`;

export const UserName = styled.p`
  font-size: ${p => p.theme.fontSizes[3]};
  font-weight: ${p => p.theme.fontWeights.heading};
  margin-bottom: ${props => props.theme.space[2]};
`;

export const UserNickName = styled.p`
  color: ${p => p.theme.colors.textSecondary};
  margin-bottom: ${props => props.theme.space[2]};
`;
export const UserLocation = styled.p`
  color: ${p => p.theme.colors.textSecondary};
  margin-bottom: ${props => props.theme.space[2]};
`;
