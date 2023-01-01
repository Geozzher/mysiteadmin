import React from 'react';
import { Select, Form } from 'antd';
import { useRequest } from '@umijs/max';
import { getType } from '@/services/api';
interface ITypeSelectProps {
  form: any;
}

const TypeSelect: React.FC<ITypeSelectProps> = () => {
  const { data = [] } = useRequest(getType);

  return (
    <Form.Item name="types" label="分类" rules={[{ required: true }]}>
      <Select
        showArrow
        style={{ width: '100%' }}
        labelInValue={true}
        options={data.map((itm: any) => ({ label: itm.label, value: itm.color, key: itm.id }))}
      />
    </Form.Item>
  );
};

export default TypeSelect;
