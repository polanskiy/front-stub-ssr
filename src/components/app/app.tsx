import * as React from 'react';
import logo from '@/assets/images/test.png';
import './app';
import axios from 'axios';

const App: React.FC = () => {
  const fetchData = async () => {
    const res = await axios({
      method: 'get',
      url: '/api/products',
    });
    console.log('res', res);
  };
  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="wrapper">
      <img src={logo} alt="" />
      <h1 className="test">This is react-stub</h1>
    </div>
  );
};

export default App;
