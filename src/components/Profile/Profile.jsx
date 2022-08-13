import { MainInfo } from './MainInfo/MainInfo';
import { StatElem } from './Stats/Stats';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div>
      <MainInfo
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <StatElem stats={followers} />
      <StatElem stats={views} />
      <StatElem stats={likes} />
      {/* <ul>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul> */}
    </div>
  );
};
