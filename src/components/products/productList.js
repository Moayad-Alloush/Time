import { Row } from 'react-bootstrap';
import '../../App.css';
import { ProductItem } from './productItem';

const classicItems = [
  { id: 1, price: 169000, name: 'Classic Ranger', url:'./images/Pictures/clas1.jfif ' },
  { id: 2, price: 200000, name: 'ReDn', url:'./images/Pictures/clas2.jfif' },
  { id: 3, price: 255000, name: 'ProV Girl', url:'./images/Pictures/clas3.jfif' },
];
const digitalItems = [
  { id: 4, price: 320000, name: 'Cassio', url: './images/Pictures/dig1.jfif'},
  { id: 5, price: 380000, name: 'Smart Green', url: './images/Pictures/dig2.jfif'},
  { id: 6, price: 410000, name: 'SnOw', url: './images/Pictures/dig3.jfif'},
];
const whaleItems = [
  { id: 7, price: 150000, name: 'Wall-Flower', url:  './images/Pictures/wall1.jfif'},
  { id: 8, price: 170000, name: 'Coins-Wall', url:  './images/Pictures/wall2.jfif'},
  { id: 9, price: 120000, name: 'WEEL4Wall', url:  './images/Pictures/wall3.jfif'},
];
export const ProductList = (props) => {
  let items = classicItems;
  if (props.name === 'Digital watches') { 
    items = digitalItems;
  } else if (props.name === 'Wall watches') {
    items = whaleItems;
  }
  return (
    <div className='' id=''>
      <p>{props.name}</p>
      <Row>
      { items.map(item => <ProductItem id={item.id} name={item.name} price={item.price} key={item.id} url={item.url}></ProductItem>) }
         
      </Row>
      <hr/> 
    </div>
  )
}