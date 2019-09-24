import React from 'react';
import { Form, Icon, Input, Button, } from 'antd';
import { loginCheck } from '../../models/common';
import './index.scss'

import { connect } from 'react-redux';
import { compose } from 'redux';
import { bindActionCreators } from 'redux';
import * as loginAction from '../../redux/Login/action'

//any因未知参数
interface From {
    from?: loginCheck;
    [propName: string]: any;
}

function LoginForms(props:From){
    const { getFieldDecorator } = props.form;

    //any因获取antd里form参数，暂不设置
    const handleLogin = (e:any) =>{
        e.preventDefault();
        props.form.validateFields((err:any, values:any) => {
        //   console.log(props,'Received values of form: ', values);
          login(values)
        });
        
      }
    const login = (val:loginCheck) =>{
    const {userLoginReq} = props.actions
    const {username,password} = val
    userLoginReq({
        username,
        password
      })
    }  
    return (
      <div className='login'>
        <Form onSubmit={handleLogin} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入账号!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <div>账号：admin,密码：123</div>
        <Button type="primary" htmlType="submit" className="login-form-button">
            登录
        </Button>
      </Form>
      </div>
    )
}
const LoginPage = Form.create({ name: 'login' })(LoginForms);
 
//any,不要学我啊，这个最好定义下。
const mapStateToProps = (state:any) => {
    return { state:state.login };
  };
  
  const mapDispatchToProps = (dispatch:any) => ({
    actions: bindActionCreators(loginAction, dispatch)
  });
  
  const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
  );
  
  export default compose(
    withConnect
  )(LoginPage);