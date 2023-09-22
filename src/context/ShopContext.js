import React, { useContext, useState } from "react";
const ShopContext = React.createContext([]);

const ShopProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);

  const addProductToCart = (newProduct) => {
    setCarts([newProduct, ...carts]);
  };

  const removeProductToCart = (product) => {
    const newCarts = carts.filter((item) => item.id !== product.id);
    setCarts(newCarts);
  };
  return (
    <ShopContext.Provider
      value={{
        carts,
        addProductToCart,
        removeProductToCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

const useShopContext = () => {
  const shopContext = useContext(ShopContext);

  return shopContext;
};
export { ShopProvider, useShopContext };
