import React from 'react';
import {Button} from 'antd';
import './index.scss';

const Home: React.FC = () => {
  return (
    <div className="Home">
      <Button type="primary">你好</Button>
      <div className='all'>The Bay</div>
    </div>
  );
}

export default Home;
