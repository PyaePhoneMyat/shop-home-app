import { FaMoneyCheckDollar } from 'react-icons/fa6';
import styles from './Total.module.css';

const Total = ({ totalPrice }) => {
  return (
    <div className={styles.total}>
      <div>
        <p className={styles.totalText}>
          Total Spent Today: <span>$ {totalPrice}</span>
        </p>
      </div>
      <FaMoneyCheckDollar size={100} />
    </div>
  );
};

export default Total;
