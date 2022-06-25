import styles from './FriendList.module.css';

export const FriendListItem = ({ friends }) => {
  return friends.map(friend => (
    <li className={styles.item} key={friend.id}>
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
  ));
};
