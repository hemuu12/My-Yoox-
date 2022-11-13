import React,{useReducer} from "react";
import { Reducer } from "../cartx/reducer";

export const CartContext = React.createContext();
const initState = [];

const CartContextProvider = ({children}) => {
  const [state,dispatch] = useReducer(Reducer,initState);
  return (
    <CartContext.Provider value={{state , dispatch}}>
      {children}  
    </CartContext.Provider>
  )
};

export default CartContextProvider;
