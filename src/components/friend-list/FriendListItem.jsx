import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ friend }) => {
  return (
    <li className={styles.item}>
      <span
        className={friend.isOnline ? styles.statusOnline : styles.statusOffline}
      ></span>
      <img
        className={styles.avatar}
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className={styles.name}>{friend.name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
