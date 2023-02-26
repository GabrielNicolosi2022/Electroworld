import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Cart from './pages/Cart/Cart';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import CartProvider from './context/CartProvider';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="content-wrap">
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/category/:categoryId"
                element={<ItemListContainer />}
              />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </CartProvider>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
