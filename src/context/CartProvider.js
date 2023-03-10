import { CartContext } from './CartContext';
import { useState, useEffect } from 'react';
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0));
  }, [cart]);
  // Función addItem para agregar productos al carrito.
  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((product) => {
        if (product.id === item.id) {
          product.quantity = product.quantity + quantity;
          return product;
        } else {
          return product;
        }
      });
      setCart(newCart);
    } else {
      const product = {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: quantity,
        description: item.description,
        category: item.category,
        image: item.image,
        stock: item.stock,
        quality: item.quality,
      };
      setCart([...cart, product]);
      // console.log(cart);
    }
  };
  // Funcion clearItem para remover todos los productos del carrito. Actualiza el state a un array vacío.
  const clear = () => {
    setCart([]);
  };

  // Funcion removeItem para remover solo un producto del carrito.
  const removeItem = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  // Funcion para evitar que se dupliquen los productos en el carrito.
  const isInCart = (productId) => {
    if (cart.find((product) => product.id === productId)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <CartContext.Provider value={{ cart, addItem, clear, removeItem, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
