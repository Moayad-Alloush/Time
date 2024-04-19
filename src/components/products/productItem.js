import { useDispatch } from 'react-redux';
import { actionAddToCart } from '../../redux/actions/actionsChangeCart';
import '../../App.css'
export const ProductItem = (props) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    console.log('we buy item', props.name, props.price);
    dispatch(actionAddToCart({name: props.name, price: props.price, url: props.url}));
  }
  return (
    <div className='col-3' id=''>
      <p>{props.name}</p>
      <img src={ props.url} className='watchclass '> 
      </img>
       <p className='nmenu'>{props.price} </p>
      <button className='addbutton' onClick={addToCart}>Add to cart</button>
      
    </div>
  )
}