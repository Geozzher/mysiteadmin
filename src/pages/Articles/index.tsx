import { PageContainer } from '@ant-design/pro-components';
import { useRequest } from '@umijs/max';
import { Table, Button } from 'antd';
import { columns } from './columns';
import './index.less';
import { useEffect, useRef } from 'react';
import { getArticleList } from '@/services/api';
import { history } from '@umijs/max';
import { ARTICLE_ADD, ARTICLE_EDIT } from '@/constants';

const AccessPage: React.FC = () => {
  const pageInfoRef = useRef({ current: 1, pageSize: 10 });
  const { data, run } = useRequest(() => getArticleList(pageInfoRef.current), {
    manual: true,
  });

  const handleCreateClick = () => {
    history.push(ARTICLE_ADD);
  };

  const handleOnEditClick = (record: any) => {
    history.push(`${ARTICLE_EDIT}/${record.id}`);
  };

  const renderTableTitle = () => {
    return (
      <div className="table-title">
        <Button type="primary" onClick={handleCreateClick}>
          新建
        </Button>
      </div>
    );
  };

  useEffect(() => {
    run();
  }, []);

  return (
    <PageContainer ghost header={{ title: '文章列表' }} breadcrumb={undefined}>
      <div className="table-wrapper">
        <Table
          dataSource={data?.list || []}
          columns={columns(handleOnEditClick)}
          size="middle"
          title={renderTableTitle}
          pagination={{
            current: data?.pageInfo.current || 1,
            pageSize: data?.pageInfo.pageSize || 10,
            showSizeChanger: true,
            showTotal: () => `共${data?.pageInfo.total}条数据`,
            total: data?.pageInfo.total,
            onChange(current, pageSize) {
              pageInfoRef.current = { current, pageSize };
              run();
            },
          }}
        ></Table>
      </div>
    </PageContainer>
  );
};

export default AccessPage;
