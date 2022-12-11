import { addTag, getTag, setTag } from '@/services/api/tag';
import { PageContainer } from '@ant-design/pro-components';
import { useRequest } from '@umijs/max';
import { Table, Button } from 'antd';
import CreateForm from '@/components/CreateForm';
import { columns } from './columns';
import './index.less';
import { useEffect, useRef, useState } from 'react';
import { failMsg, successMsg } from '@/utils';

const mtype = {
  CREATE: 'create',
  EDIT: 'edit',
};
const mtitle: Record<string, string> = {
  [mtype.CREATE]: '新建标签',
  [mtype.EDIT]: '编辑标签',
};

const AccessPage: React.FC = () => {
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const [initialState, setInitialState] = useState({});
  const [modalType, setModalType] = useState(mtype.CREATE);
  const [modalTitle, setModalTitle] = useState(mtitle[mtype.CREATE]);
  const pageInfoRef = useRef({ current: 1, pageSize: 10 });
  const { data, run } = useRequest(() => getTag(pageInfoRef.current), {
    manual: true,
  });

  const handleCreateClick = () => {
    setModalType(mtype.CREATE);
    setModalTitle(mtitle[mtype.CREATE]);
    setInitialState({});
    setShowCreateModal(true);
  };

  const handleOnEditClick = (record: any) => {
    setModalType(mtype.EDIT);
    setModalTitle(mtitle[mtype.EDIT]);
    setInitialState(record);
    setShowCreateModal(true);
  };

  const handleOnModalConfrirm = async (value: any) => {
    let result = null;
    if (modalType === mtype.CREATE) {
      result = await addTag(value);
    } else {
      result = await setTag(value);
    }
    setShowCreateModal(false);
    if (result.code !== 0) {
      failMsg(result.msg);
      return;
    }
    successMsg();
    run();
  };

  const handleOnModalCancel = () => {
    setShowCreateModal(false);
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
    <PageContainer ghost header={{ title: '标签管理' }}>
      <div className="table-wrapper">
        <Table
          dataSource={data?.list || []}
          columns={columns(handleOnEditClick)}
          size="middle"
          title={renderTableTitle}
          pagination={{
            current: data?.pageInfo.current || 1,
            pageSize: data?.pageInfo.pageSize || 10,
            // hideOnSinglePage: true,
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
      <CreateForm
        visible={showCreateModal}
        title={modalTitle}
        initialState={initialState}
        onCancel={handleOnModalCancel}
        onConfirm={handleOnModalConfrirm}
      ></CreateForm>
    </PageContainer>
  );
};

export default AccessPage;
