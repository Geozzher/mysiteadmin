import { Modal, Button, Form, Input, Switch } from 'antd';
import React, { useEffect } from 'react';
import './index.less';
interface Props {
  visible: boolean;
  title: string;
  onConfirm: (e: any) => void;
  onCancel: () => void;
  initialState?: any;
}
const CreateForm: React.FC<Props> = (props) => {
  const { visible, title, onConfirm, onCancel, initialState } = props;
  const [form] = Form.useForm();

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        onConfirm({ ...values, ...{ id: initialState?.id } });
      })
      .catch((error) => console.log('校验失败', error));
  };

  const handleCancel = () => {
    onCancel();
  };

  useEffect(() => {
    form.setFieldsValue({ color: '#000000', is_show: false, ...initialState });
  }, [initialState, visible]);

  return (
    <Modal
      getContainer={false}
      open={visible}
      title={title}
      onCancel={handleCancel}
      destroyOnClose={true}
      footer={[
        <Button key="back" onClick={handleCancel}>
          取消
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={handleOk}
          htmlType="submit"
        >
          确定
        </Button>,
      ]}
    >
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 12, offset: 2 }}
        preserve={false}
        layout="horizontal"
        component={false}
        onFinish={handleOk}
        form={form}
      >
        <Form.Item label="标签名" name="label" rules={[{ required: true }]}>
          <Input></Input>
        </Form.Item>
        <Form.Item label="标签英文名" name="name" rules={[{ required: true }]}>
          <Input></Input>
        </Form.Item>
        <Form.Item
          label="标签颜色"
          name="color"
          rules={[{ required: true }]}
          wrapperCol={{ span: 6, offset: 2 }}
        >
          <Input type="color" className="color-input"></Input>
        </Form.Item>
        <Form.Item
          label="是否显示"
          name="is_show"
          valuePropName="checked"
          rules={[{ required: true }]}
        >
          <Switch />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateForm;
