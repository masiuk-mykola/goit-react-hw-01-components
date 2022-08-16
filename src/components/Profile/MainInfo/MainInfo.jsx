import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Image, UserLocation, UserName, UserNickName } from './MainInfo.styled';

export const MainInfo = ({ username, tag, location, avatar }) => {
  return (
    <Box textAlign="center" pt={3} pb={3}>
      <Image src={avatar} alt={username} />
      <UserName>{username}</UserName>
      <UserNickName>{tag}</UserNickName>
      <UserLocation>{location}</UserLocation>
    </Box>
  );
};

MainInfo.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
