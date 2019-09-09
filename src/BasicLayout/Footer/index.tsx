import React from 'react';
import './index.scss';
import { Layout } from 'antd';
const {  Footer } = Layout;

export function DdFooter(){
  return (
      <Footer className='footer'>
        <div>
          <span>Allen Desgin@2019-9</span>
        </div>
      </Footer>
  )

}

export default DdFooter;