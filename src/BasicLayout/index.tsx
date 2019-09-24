import React from 'react';
import { Layout } from 'antd';
import Header from './Header'
import Footer from './Footer'
import Aside from './Aside'
import MainRoutes from './MainRoutes'
const {  Sider, Content } = Layout;

export function BasicLayout(){
  
    
  return (
    <Layout style={{minHeight:"100%"}}>
      <Sider>
        <Aside />
      </Sider>
      <Layout>
      <Header />
        <Content>
          <MainRoutes />
        </Content>
      <Footer/>
      </Layout>
    </Layout>
  )

}

export default BasicLayout;