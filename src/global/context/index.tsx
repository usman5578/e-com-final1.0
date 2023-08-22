import { ReactNode, createContext, useReducer, useEffect } from "react";
import { cartReducer } from "../reducer";
import { useCookies } from "react-cookie";


export const cartContext = createContext<any>(null);

const ContextWrapper = ({ children }: { children: ReactNode }) => {
  const initializerOfCart = {
    cart: []
  };

  const [state, dispatch] = useReducer(cartReducer, initializerOfCart);
  const [cookies, setCookies] = useCookies();

  useEffect(() => {
    // let cart = localStorage.getItem("cart") as string;
    let cart = cookies.products || []
    if (cart === null) {
      // localStorage.setItem("cart", JSON.stringify(state.cart));
      setCookies("products", JSON.stringify(state.cart));
    } else {
      initializerOfCart.cart =cart;
    }
  });

  useEffect(() => {
    // localStorage.setItem("cart", JSON.stringify(state.cart))
    setCookies("products", JSON.stringify(state.cart));
  }, [state.cart])
  

  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

export default ContextWrapper;