// import React, { useState,useEffect } from 'react';
import React from 'react';
import { Layout, Menu, Icon,message } from 'antd';
import './index.scss';

const { SubMenu } = Menu;
const { Header } = Layout;

export function BasicLayout(){
  
  const loginOut = () =>{
    //清除cookie，可考虑复用
    let keys=document.cookie.match(/[^ =;]+(?=)/g);
    if (keys) {
        for (let i =  keys.length; i--;)
            document.cookie=keys[i]+'=0;expires=' + new Date( 0).toUTCString()
    }   
    message.success('退出登录')
    setTimeout(() => {
      window.location.hash=`/user/login`
    }, 500);
  }
    
  return (
       <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <SubMenu
          className="setting"
          title={
              <span className="submenu-title-wrapper">
                <Icon type="setting" />
                设置
              </span>
            }
          >
            <Menu.Item key="loginOut" onClick={loginOut}>退出登录</Menu.Item>
          </SubMenu>
        </Menu>
      </Header>
  )

}

export default BasicLayout;