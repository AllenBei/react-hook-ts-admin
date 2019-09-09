// import React, { useState,useEffect } from 'react';
import React from 'react';
import {  Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import './index.scss';

const { SubMenu } = Menu;

export function Aside(){
  
    
  return (
    <div className='aside'>
      <div className='logo'>
        <span>叮咚收藏</span>
      </div>
    <Menu
      defaultSelectedKeys={['1']}
      // defaultOpenKeys={['sub1']}
      mode="inline"
      theme="dark"
      inlineCollapsed={false}
    >
      <Menu.Item key="1">
        <Icon type="pie-chart" />
        <span>首页</span>
        <Link  to="/home"></Link>
      </Menu.Item>
      <SubMenu
        key="sub1"
        title={
          <span>
            <Icon type="mail" />
            <span>管理</span>
          </span>
        }
      >
        <Menu.Item key="5">
          <Link  to="/weipai" >
            微拍
          </Link>
        </Menu.Item>
      </SubMenu>
      
    </Menu>
  </div>
  )

}

export default Aside;