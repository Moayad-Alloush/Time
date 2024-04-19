import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { ShoppingItem } from './shoppingItem';
import '../../App.css';
import store from '../../redux/store';

export const Shopping = (props) => {
  const [update, setUpdate] = useState(true);
  const items = store.getState().cart.buyedItems;

  const updateFunction = () => { setUpdate(!update); }

  console.log(items);
  const show = (items && items.length > 0)
    ? items.map((itemC, index) => <ShoppingItem key={index} name={itemC.name} count={itemC.count} updateFunction={updateFunction} url={itemC.url}></ShoppingItem>)
    : <p>No item now</p>
  return (
    
    <Container className='text-center fs-4  '>  
      <p>Shopping</p>
      { show }
    </Container>
  );
}

