import { useState } from 'react';
import './App.css';
import Shop from './components/Shop';
import Total from './components/Total';
import Home from './components/home';

function App() {
  const HomeItems = [
    {
      id: '1',
      name: 'Sandwich',
      amount: 1,
    },
    {
      id: '2',
      name: 'Burger',
      amount: 10,
    },
    {
      id: '3',
      name: 'Cola',
      amount: 3,
    },
    {
      id: '4',
      name: 'Apple',
      amount: 5,
    },
  ];

  const [totalPrice, setTotalPrice] = useState(0);
  const [homeItems, setHomeItems] = useState(HomeItems);
  return (
    <div className='container'>
      <Shop
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        homeItems={homeItems}
        setHomeItems={setHomeItems}
      />
      <Total totalPrice={totalPrice} />
      <Home homeItems={homeItems} />
    </div>
  );
}

export default App;
