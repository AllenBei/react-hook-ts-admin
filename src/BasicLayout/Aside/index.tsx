// import React, { useState,useEffect } from 'react';
import React from 'react';
import {  Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import './index.scss';
import { asideData } from '../../router/aside';

const { SubMenu } = Menu;

export function Aside(){
  
  const hash = window.location.hash.split('#')[1]
  const defaultSelectedKeys = hash.split('?')[0]

  //二级栏（因不清楚需求，any）
  const mapNav = (child:any):any  =>{
    return(
      child.map((obj:any)=>{
        console.log(obj);
        return(
        <Menu.Item key={obj.url}>
          <Link  to={`${obj.url}`} >
          {obj.item}
          </Link>
        </Menu.Item>
       )
      })
    )
  }
  //一级栏（因不清楚需求，any）
  const mapAside= ():any =>{
    return(
      asideData.map((obj,index)=>{
        // console.log(obj,index);
        if(obj.child!==null){
          return(
            <SubMenu
              key={obj.url}
              title={
                <span>{obj.menu}</span>
              }
            >
              {mapNav(obj.child)}
            </SubMenu>
          )
        }else{
          return(
            <Menu.Item key={obj.url}>
            <span>{obj.menu}</span>
            <Link  to={`${obj.url}`}></Link>
            </Menu.Item>
          )
        }
      })
    )
  }

    
  return (
    <div className='aside'>
      <div className='logo'>
        <span>叮咚收藏</span>
      </div>
    <Menu
      defaultSelectedKeys={[defaultSelectedKeys]}
      mode="inline"
      theme="dark"
    >
      {mapAside()}
    </Menu>
  </div>
  )

}

export default Aside;