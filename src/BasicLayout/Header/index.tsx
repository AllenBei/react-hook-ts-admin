// import React, { useState,useEffect } from 'react';
import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import './index.scss';

const { SubMenu } = Menu;
const { Header } = Layout;

export function BasicLayout(){
  
    
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
            <Menu.Item key="loginOut">退出登录</Menu.Item>
          </SubMenu>
        </Menu>
      </Header>
  )

}

export default BasicLayout;