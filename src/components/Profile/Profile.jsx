import { Box } from 'components/Box';
import { MainInfo } from './MainInfo/MainInfo';
import { StatsList } from './StatsList/StatsList';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Box boxShadow="10px 10px 5px 0px rgba(0,0,0,0.55)" width="300px">
      <MainInfo
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <StatsList followers={followers} views={views} likes={likes} />
    </Box>
  );
};
