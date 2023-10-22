import { AiFillShop } from 'react-icons/ai';
import styles from './Shop.module.css';

const ShopItems = [
  {
    id: '1',
    name: 'Sandwich',
    price: 2,
  },
  {
    id: '2',
    name: 'Burger',
    price: 5,
  },
  {
    id: '3',
    name: 'Cola',
    price: 3,
  },
  {
    id: '4',
    name: 'Apple',
    price: 4,
  },
];

const Shop = ({ totalPrice, setTotalPrice, homeItems, setHomeItems }) => {
  // console.log('🚀 -> file: Shop.jsx:28 -> Shop -> homeItems:', homeItems);

  const addHandler = (price, name) => {
    setTotalPrice(totalPrice + price);

    const updateState = homeItems.map((item) => {
      if (item.name === name) {
        return { ...item, amount: item.amount + 1 };
      } else {
        return { ...item };
      }
    });
    // console.log('🚀 -> file: Shop.jsx:51 -> newState -> newState:', newState);
    setHomeItems(updateState);
    // setHomeItems(homeItems.amount + 1);
  };

  const getItemList = ShopItems.map((item) => (
    <li key={item.id}>
      <button onClick={() => addHandler(item.price, item.name)}>
        {item.name}
      </button>
      <span>$ {item.price}</span>
    </li>
  ));
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <AiFillShop size={100} />
        <h2>For Sale</h2>
      </div>
      <ul className={styles.list}>{getItemList}</ul>
    </div>
  );
};

export default Shop;
