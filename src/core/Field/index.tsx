import React, {useCallback, useEffect} from 'react';
import {Form, Input} from "antd";
import {FormItemProps} from "antd/es/form/FormItem";

const FormItem = Form.Item;

interface FieldProps {
  value?: any;
  onChange?: (...args: any[]) => void;
  children?: React.ReactElement;
}

const InputField: React.FC<FieldProps> = props => {
  const {
    value,
    onChange,
    children,
    ...restProps
  } = props;
  const handleChange = useCallback(value => {
    console.log('InputField: handleChange', value);
    onChange && onChange(value);
  }, [onChange]);
  let returnChildNode: React.ReactNode;
  if (React.isValidElement(children)) {
    returnChildNode = React.cloneElement(
      children as React.ReactElement,
      {
        value,
        onChange: handleChange,
        ...restProps
      },
    );
  }

  useEffect(() => {
    console.log('InputField value:', value);
  }, [value]);

  return (
    <React.Fragment>
      {returnChildNode}
    </React.Fragment>
  );
};

export const InternalField: React.FC<FieldProps> = props => {
  const {
    children,
    ...restProps
  } = props;
  let returnChildNode: React.ReactNode;
  if (React.isValidElement(children)) {
    returnChildNode = React.cloneElement(
      children as React.ReactElement,
      {
        children: <InputField>
          {children.props.children}
        </InputField>,
        ...restProps
      },
    );
  }

  return (
    <React.Fragment>
      {returnChildNode}
    </React.Fragment>
  );
}

export const Field: React.FC<FormItemProps> = props => {
  return (
    <InternalField>
      <FormItem {...props}>
        <Input/>
      </FormItem>
    </InternalField>
  );
}
