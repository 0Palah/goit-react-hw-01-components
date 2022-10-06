import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.friendItem}>
      <span
        className={`${css.friendStatus} ${
          isOnline ? css.isOnline : css.isOffline
        }`}
      ></span>
      <img
        className={css.friendAvatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.friendName}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
