import 'braft-editor/dist/index.css';
import React from 'react';
import BraftEditor from 'braft-editor';
import { Form, Input } from 'antd';
import { history } from '@umijs/max';
import { ARTICLE_PREVIEW } from '@/constants';
interface IEditorProps {
  form: any;
}

const Editor: React.FC<IEditorProps> = ({ form }) => {
  const handleOnEditorChange = () => {
    console.log('=======handleOnEditorChange');
  };

  // const preview = () => {
  //   history.push(ARTICLE_PREVIEW, { previewHTML: form.getFieldValue('content').toHTML() });
  // };

  return (
    <>
      <Form.Item name="content" label="文章正文" rules={[{ required: true }]}>
        <BraftEditor className="my-editor" placeholder="请输入正文内容" onChange={handleOnEditorChange} />
      </Form.Item>
      <Form.Item name={'content_html'}>
        <Input type="hidden" />
      </Form.Item>
      <Form.Item name={'content_raw'}>
        <Input type="hidden" />
      </Form.Item>
    </>
  );
};

export default Editor;
