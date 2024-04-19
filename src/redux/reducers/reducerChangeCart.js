import { ActionChangeCartTypes } from '../actions/actionType/actionChangeCartTypes';
const intialState = {
  buyedItems: [],
  total: 0,
}; 

export const reducerChangeCart = (state=intialState , action) => {
  switch (action.type) {
    case ActionChangeCartTypes.ADD_To_CART: {
      // console.log({l: action.item});
      let newState = {};
      const index = state.buyedItems.findIndex(item => item.name === action.item.name);
      if (index === -1) {
        newState.buyedItems = state.buyedItems.concat({ ...action.item, count: 1 });
      } else {
        newState.buyedItems = state.buyedItems.map((item, i) => {
          if (i !== index) {
            return { ...item };
          } else {
            return { ...item, count: item.count + 1 };
          }
        });
      }
      newState.total = state.total + action.item.price;
      return newState;
    }
    case ActionChangeCartTypes.REMOVE_FROM_CART: {
      let newState = {};
      const index = state.buyedItems.findIndex(item => item.name === action.item.name);
      if (index === -1) {
        console.log('What!!');
        return state;
      } else {
        const itemRemoved = state.buyedItems[index];
        newState.total = state.total - itemRemoved.price;
        if (itemRemoved.count === 1) {
          const newItems = state.buyedItems.filter(item => item.name !== action.item.name);
          newState.buyedItems = newItems;
        } else {
          const newItems = state.buyedItems.map((item, i) => {
            if (i !== index) {
              return { ...item };
            } else {
              return { ...item, count: item.count - 1 };
            }
          }
          );
          newState.buyedItems = newItems;
        }
        return newState;
      }
    }
    case ActionChangeCartTypes.RESET: {
      return intialState;
    }
    default: {
      return state;
    }
  }
}  