import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: "",
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.setGoods = (data) => {
    dispatch({ type: "SET_GOODS", payload: data });
  };

  value.closeAlert = () => {
    dispatch({ type: "CLOSE_ALERT" });
  };

  value.removeFromBasket = (itemId) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: { id: itemId } });
  };

  value.addToBasket = (item) => {
    dispatch({ type: "ADD_TO_BASKET", payload: item });
  };

  value.handleBasketShow = () => {
    dispatch({ type: "TOGGLE_BUSKET" });
  };

  value.incQuantity = (itemId) => {
    dispatch({ type: "INC_QUANTITY", payload: { id: itemId } });
  };

  value.decQuantity = (itemId) => {
    dispatch({ type: "DEC_QUANTITY", payload: { id: itemId } });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
