import { ProductList } from './productList';
import '../../App.css'
const productLists = [
  { id: 1, name: 'Classic watches' },
  { id: 2, name: 'Digital watches' },
  { id: 3, name: 'Wall watches'}
  
];

export const Products = (props) => {

  return (
    <div className='nnmenu' id='' >
       { productLists.map((list) => <ProductList id={list.id} name={list.name} key={list.id}></ProductList>)}
    </div>
  )
}