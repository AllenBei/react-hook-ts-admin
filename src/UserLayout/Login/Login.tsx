import React from 'react';
import { Form, Icon, Input, Button, } from 'antd';
import { loginCheck } from '../../models/common';
import './index.scss'

import { connect } from 'react-redux';
import { compose } from 'redux';
import { bindActionCreators } from 'redux';
import * as loginAction from '../../redux/Login/action'

interface From {
    from?: loginCheck;
    [propName: string]: any;
}

function LoginForms(props:From){
    const { getFieldDecorator } = props.form;
    
    const handleLogin = (e:any) =>{
        e.preventDefault();
        props.form.validateFields((err:any, values:any) => {
        //   console.log(props,'Received values of form: ', values);
          login(values)
        });
        
      }
    const login = (val:loginCheck) =>{
    const {userLoginReq} = props.actions
    const {mobile,password} = val
    console.log(val);
    userLoginReq({
        mobile,
        password
        })
    }  
    return (
      <div className='login'>
        <Form onSubmit={handleLogin} className="login-form">
        <Form.Item>
          {getFieldDecorator('mobile', {
            rules: [{ required: true, message: '请输入账号!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="mobile"
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
        {/* <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item> */}
        <Button type="primary" htmlType="submit" className="login-form-button">
            登录
        </Button>
      </Form>
      </div>
    )
}
const LoginPage = Form.create({ name: 'login' })(LoginForms);
  
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