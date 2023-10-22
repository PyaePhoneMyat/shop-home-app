import { AiFillHome } from 'react-icons/ai';
import styles from './Home.module.css';

const Home = ({ homeItems }) => {
  const getItemList = homeItems.map((item) => (
    <li key={item.id}>
      <p>{item.name}</p>
      <span>{item.amount}</span>
    </li>
  ));
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <AiFillHome size={100} />
        <h2>At Home</h2>
      </div>
      <ul className={styles.list}>{getItemList}</ul>
    </div>
  );
};

export default Home;
