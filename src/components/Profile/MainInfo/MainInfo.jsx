import { Box } from 'components/Box';
import { Image, UserLocation, UserName, UserNickName } from './MainInfo.styled';

export const MainInfo = ({ username, tag, location, avatar }) => {
  return (
    <Box textAlign="center" pt="space[3]">
      <Image src={avatar} alt={username} />
      <UserName>{username}</UserName>
      <UserNickName>{tag}</UserNickName>
      <UserLocation>{location}</UserLocation>
    </Box>
  );
};
