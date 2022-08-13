export const MainInfo = ({ username, tag, location, avatar }) => {
  return (
    <div>
      <div>
        <img src={avatar} alt={username} />
        <p>{username}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>
    </div>
  );
};
