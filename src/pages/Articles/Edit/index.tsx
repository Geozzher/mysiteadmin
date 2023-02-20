import { ARTICLE_ADD, ARTICLE_LIST } from '@/constants';
import { PageContainer } from '@ant-design/pro-components';
import { history } from '@umijs/max';
import { Button, Form, Input, Switch } from 'antd';
import Editor from '@/components/Form/Editor';
import TagSelect from '@/components/Form/TagSelect';
import TypeSelect from '@/components/Form/TypeSelect';
import './index.less';
import { useParams } from '@umijs/max';
import { addArticle, modifyArticle, queryArticle } from '@/services/api';
import BraftEditor from 'braft-editor';
import { useEffect } from 'react';
import { failMsg, successMsg } from '@/utils';
import { DEFAULT_ARTICLE_COVER } from '@/constants/common';

const MODE = {
  ADD: 'add',
  EDIT: 'edit',
};

const PAGE_CONTAINER_TITLE = {
  [MODE.ADD]: '新建文章',
  [MODE.EDIT]: '修改文章',
};

const FORM_LAYOUT = {
  wrapperCol: { span: 18, offset: 1 },
  labelCol: { span: 4, offset: 0 },
  require: true,
};

const SUBMIT_LAYOUT = {
  wrapperCol: { span: 20, offset: 5 },
};

const ArticleInfo: React.FC = () => {
  // 新建 || 修改
  const mode = history.location.pathname === ARTICLE_ADD ? MODE.ADD : MODE.EDIT;
  const title = mode === MODE.ADD ? PAGE_CONTAINER_TITLE[MODE.ADD] : PAGE_CONTAINER_TITLE[MODE.EDIT];
  const { articleId } = useParams();
  const [form] = Form.useForm();
  let submitAction = addArticle;

  const getArticleDetail = async () => {
    if (mode === MODE.EDIT && articleId) {
      submitAction = modifyArticle;
      const {
        data: { content_raw, ...articleDetail },
      } = await queryArticle({ id: articleId });
      const editorState = BraftEditor.createEditorState(content_raw);
      form.setFieldsValue({ content: editorState, ...articleDetail });
      return articleDetail;
    }
    return {};
  };
  useEffect(() => {
    getArticleDetail();
  }, []);

  const handleOnSubmit = async (fieldsValue: any) => {
    const { content, ...submitValues } = fieldsValue;
    if (content) {
      submitValues.content_html = content.toHTML();
      submitValues.content_raw = content.toRAW();
    }

    const { code } = await submitAction({ ...submitValues, cover: DEFAULT_ARTICLE_COVER });
    if (code === 0) {
      history.replace(ARTICLE_LIST);
      return successMsg();
    }
    failMsg();
  };

  return (
    <PageContainer ghost header={{ title }} breadcrumb={undefined}>
      <Form form={form} {...FORM_LAYOUT} onFinish={handleOnSubmit}>
        {/* 新建时不显示 */}
        {mode === MODE.EDIT && (
          <Form.Item name="id" label="文章ID">
            <Input type="text" readOnly />
          </Form.Item>
        )}
        <Form.Item name="title" label="文章标题" rules={[{ required: true }]}>
          <Input type="text" />
        </Form.Item>
        <Form.Item name="introduce" label="文章简介" rules={[{ required: true }]}>
          <Input.TextArea maxLength={100} autoSize={{ minRows: 2, maxRows: 4 }} />
        </Form.Item>

        <TypeSelect form={form}></TypeSelect>
        <TagSelect form={form}></TagSelect>
        <Form.Item name="is_show" label="是否显示" rules={[{ required: true }]} valuePropName="checked">
          <Switch />
        </Form.Item>
        <Editor form={form} />
        <Form.Item {...SUBMIT_LAYOUT}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </PageContainer>
  );
};

export default ArticleInfo;
