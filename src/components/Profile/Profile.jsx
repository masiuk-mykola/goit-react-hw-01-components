import PropTypes from 'prop-types';
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
    <Box boxShadow="10px 10px 5px 0px rgba(0,0,0,0.55)" width="300px" mb={3}>
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

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};
