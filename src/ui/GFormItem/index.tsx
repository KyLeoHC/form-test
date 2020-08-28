import React from 'react';
import {
  Form,
  Input
} from 'antd';
import 'antd/dist/antd.css';
import './App.css';

const FormItem = Form.Item;

function GFormItem() {
  return (
    <Form className="form-test"
          layout="horizontal"
    >
      <FormItem label="name">
        <Input/>
      </FormItem>
      <FormItem label="birthday">
        <Input/>
      </FormItem>
    </Form>
  );
}

export default GFormItem;
