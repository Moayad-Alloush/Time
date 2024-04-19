import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

//import '../../App.css';
import { actionRemoveCart } from '../../redux/actions/actionsChangeCart';

export const ShoppingItem = (props) => {
  const dispatch = useDispatch();
  const removeItem = () => {
    console.log('removed');
    dispatch(actionRemoveCart({ name: props.name, price: props.price }));
    props.updateFunction();
  };
  return (
    
    <Container className='shoplist'>  
      <p>shopping item:  " {props.name} " count: {props.count}</p>
      <img src={props.url} className='shoppingitemimg'></img>
      <button className='rembutton' onClick={removeItem}> remove item</button>
    </Container>
  );
} 