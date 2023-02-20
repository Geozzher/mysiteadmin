import { ARTICLE_PREVIEW } from '@/constants';
import { queryArticle } from '@/services/api';
import { PageContainer } from '@ant-design/pro-components';
import { useLocation, useMatch } from '@umijs/max';
import { Button, Typography } from 'antd';
import { useEffect, useState } from 'react';

const { Paragraph } = Typography;
const ArticlePreview: React.FC = () => {
  const match = useMatch(`${ARTICLE_PREVIEW}/:articleId`);
  const articleId = match?.params.articleId;
  const [previewHTML, setPreviewHTML] = useState<string>('<></>');
  const location = useLocation();
  const title = (
    <Button
      onClick={() => {
        history.back();
      }}
    >
      返回
    </Button>
  );
  const initPreviewHTML = async () => {
    if (articleId) {
      const {
        data: { content_html },
      } = await queryArticle({ id: articleId });
      return setPreviewHTML(content_html);
    }
    setPreviewHTML(location.state?.previewHTML as string);
  };
  useEffect(() => {
    initPreviewHTML();
  }, []);
  return (
    <PageContainer ghost header={{ title }}>
      <Paragraph>
        <div className="article-content" dangerouslySetInnerHTML={{ __html: previewHTML }}></div>
      </Paragraph>
    </PageContainer>
  );
};

export default ArticlePreview;
