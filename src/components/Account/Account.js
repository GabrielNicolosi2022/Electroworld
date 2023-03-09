import { VscAccount } from 'react-icons/vsc';
import './Account.css';
import { Link } from 'react-router-dom';
const Account = () => {
  return (
    <div>
      <Link className='linkAccount'>
        <VscAccount className='iconAccount' />
        Ingresar
      </Link>
    </div>
  );
};

export default Account;
