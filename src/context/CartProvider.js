import { CartContext } from './CartContext';
import { useState } from 'react';
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const product = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: quantity,
      description: item.description,
      category: item.category,
      image: item.image,
      stock: item.stock,
    };
      setCart([...cart, product]);
      console.log(cart);
  };
// crear funcion clearItem
  return (
    <CartContext.Provider value={{ cart, addItem }}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
