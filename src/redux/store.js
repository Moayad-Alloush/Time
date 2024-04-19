import { configureStore } from '@reduxjs/toolkit';
import { reducerChangeCart } from './reducers/reducerChangeCart'
export default configureStore({
  reducer: {
    cart: reducerChangeCart,
  },
}) 