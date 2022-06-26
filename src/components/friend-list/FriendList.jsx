import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import { FriendListItem } from './FriendListItem.jsx';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friend_list}>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};

FriendList.defaultProps = {
  friends: [],
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
