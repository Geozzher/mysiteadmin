import React from 'react';
import { Select, Tag, Form } from 'antd';
import type { CustomTagProps } from 'rc-select/lib/BaseSelect';
import { useRequest } from '@umijs/max';
import { getTag } from '@/services/api';
interface ITagSelectProps {
  form: any;
}

const tagRender = (props: CustomTagProps) => {
  const { label, value, closable, onClose } = props;

  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag color={value} onMouseDown={onPreventMouseDown} closable={closable} onClose={onClose} style={{ marginRight: 3 }}>
      {label}
    </Tag>
  );
};

const TagSelect: React.FC<ITagSelectProps> = () => {
  const { data = [] } = useRequest(getTag);
  return (
    <Form.Item name="tags" label="关联标签" rules={[{ required: true }]}>
      <Select
        showArrow
        mode="tags"
        tagRender={tagRender}
        style={{ width: '100%' }}
        showSearch={false}
        labelInValue={true}
        options={data.map((itm: any) => ({ label: itm.label, value: itm.color, key: itm.id }))}
      />
    </Form.Item>
  );
};

export default TagSelect;
