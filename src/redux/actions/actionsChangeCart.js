import { ActionChangeCartTypes } from './actionType/actionChangeCartTypes';


export const actionAddToCart = (item) => {
  return {
    type: ActionChangeCartTypes.ADD_To_CART,
    item,
  }
}

export const actionRemoveCart = (item) => {
  return {
    type: ActionChangeCartTypes.REMOVE_FROM_CART,
    item,
  }
}

export const actionResetCart = () => {
  return {
    type: ActionChangeCartTypes.RESET,
  }
}
