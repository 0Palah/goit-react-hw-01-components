import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, isOnline, name, id }) => (
        <li className={css.friendItem} key={id}>
          {isOnline ? (
            <span className={`${css.friendStatus} ${css.isOnline}`}></span>
          ) : (
            <span className={`${css.friendStatus} ${css.isOffline}`}></span>
          )}
          <img
            className={css.friendAvatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.friendName}>{name}</p>
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
