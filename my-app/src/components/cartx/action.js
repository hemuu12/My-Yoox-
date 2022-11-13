// action creators related to cart state;
export const addToCart = (data) =>({
    type: "ADD_TO_CART",
    payload: data,
  })
  
  export const removeFromCart = (id) =>({
    type: "REMOVE_FROM_CART",
    payload: id,
  })
  
  export const checkOut = () =>({
    type: "CHECKOUT",
    
  })
  