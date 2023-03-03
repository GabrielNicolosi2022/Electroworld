import './Loading.css'
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
  return (
    <div className='loading'>
      <Spinner animation='border' variant='success' />
      <h1>LOADING...</h1>
    </div>
  );
};

export default Loading;
