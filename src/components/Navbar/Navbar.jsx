import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/profile" className={styles.link}> Profile </Link>
      <Link to="/friend-list" className={styles.link}> FriendList </Link>
      <Link to="/transaction-history" className={styles.link}> TransactionHistory </Link>
    </nav>
  );
};