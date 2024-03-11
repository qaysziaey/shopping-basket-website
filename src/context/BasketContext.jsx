import { createContext, useState } from "react";

export const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [basketNumOfItems, setBasketNumOfItems] = useState(0);
  // Add product to basket
  function addToBasket() {
    setBasketNumOfItems(basketNumOfItems + 1);
  }

  // Remove product from basket
  function removeFromBasket() {
    setBasketNumOfItems(basketNumOfItems - 1);
  }

  return (
    <BasketContext.Provider
      value={{ basketNumOfItems, addToBasket, removeFromBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
}
