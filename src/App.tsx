import React, {useCallback} from 'react';
import {
  Form,
  Input,
  Select,
  Button
} from 'antd';
import {
  Field,
  InternalField
} from './core/Field';
import 'antd/dist/antd.css';
import './App.css';

const FormItem = Form.Item;

function App() {
  const [form] = Form.useForm();
  const handleRandomValue = useCallback(() => {
    form.setFieldsValue({
      name: Math.random() * 100,
      birthday: Math.random() * 100
    });
    console.log(form.getFieldsValue());
  }, [form]);
  console.log('-----');

  return (
    <Form className="form-test"
          form={form}
          layout="horizontal">
      <InternalField>
        <FormItem label="name"
                  name="name"
                  rules={[{required: true}]}>
          <Input/>
        </FormItem>
      </InternalField>
      <Field label="birthday" name="birthday"/>
      <FormItem label="sex" name="sex">
        <Select/>
      </FormItem>
      <FormItem>
        <Button onClick={handleRandomValue}>random</Button>
      </FormItem>
    </Form>
  );
}

export default App;
