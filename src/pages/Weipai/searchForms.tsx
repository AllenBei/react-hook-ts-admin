import React from 'react';
// import React,{useState} from 'react';
import {Form, Row, Col, Input, Button} from 'antd';
import './index.scss';
import {SearchInfo} from '../../models/searchInfo'

interface From {
  from?: SearchInfo;
  [propName: string]: any;
}


const WeipaiSearchForms = (props:From) => {
  // const [value,setVal] = useState({})

  const { getFieldDecorator } = props.form;

  const handleSearch = (e:any) =>{
    e.preventDefault();
    props.form.validateFields((err:any, values:any) => {
      console.log('Received values of form: ', values);
    });
  }
  
  return (
    <div className="weipai">
      <Form className="ant-advanced-search-form" onSubmit={handleSearch}>
        <Row gutter={24}>
        <Col span={8}>
          <Form.Item label={`手机号码`}>
            {getFieldDecorator(`tel`, {
              rules: [
                {
                  required: true,
                  message: '请输入信息',
                },
              ],
            })(<Input placeholder="请输入手机号" />)}
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label={`真实姓名`}>
            {getFieldDecorator(`realname`, {
              rules: [
                {
                  required: true,
                  message: '请输入信息',
                },
              ],
            })(<Input placeholder="请输入真实姓名" />)}
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label={`用户昵称`}>
            {getFieldDecorator(`nickname`, {
              rules: [
                {
                  required: true,
                  message: '请输入信息',
                },
              ],
            })(<Input placeholder="请输入用户昵称" />)}
          </Form.Item>
        </Col>
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">
              搜索
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

const WeipaiSearch = Form.create({ name: 'WeipaiSearch' })(WeipaiSearchForms);




export default WeipaiSearch;
