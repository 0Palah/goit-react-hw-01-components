import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, isOnline, name, id }) => (
        <li className="friend-item" key={id}>
          {isOnline ? (
            <span className="friend-status isOnline "></span>
          ) : (
            <span className="friend-status isOffline "></span>
          )}
          <img
            className="friend-avatar"
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className="friend-name">{name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
