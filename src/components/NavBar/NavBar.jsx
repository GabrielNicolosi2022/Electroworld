import './NavBar.css';
import { Link } from 'react-router-dom';
import logo from '../../logo-electro-world-bt.png';
import Categories from '../Categories/Categories';
import CartWidget from '../CartWidget/CartWidget';

export default function NavBar() {

  return (
    <div className="NavBar">
      <Link to={'/'}>
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <Categories />
      <CartWidget />
    </div>
  );
}
