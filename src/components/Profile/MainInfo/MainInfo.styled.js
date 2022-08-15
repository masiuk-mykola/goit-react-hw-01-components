import styled from 'styled-components';

export const Image = styled.img`
  display: block;
  width: 200px;
  margin: 0 auto;
`;

export const UserName = styled.p`
  font-size: ${p => p.theme.fontSizes[3]};
  font-weight: ${p => p.theme.fontWeights.heading};
`;

export const UserNickName = styled.p`
  color: ${p => p.theme.colors.textSecondary};
`;
export const UserLocation = styled.p`
  color: ${p => p.theme.colors.textSecondary};
`;
