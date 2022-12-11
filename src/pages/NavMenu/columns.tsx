import { Space } from 'antd';
export const columns = (onEditClick: (record: any) => void) => [
  {
    dataIndex: 'id',
    key: 'id',
    title: 'ID',
  },
  {
    dataIndex: 'label',
    key: 'label',
    title: '菜单显示名称',
  },
  {
    dataIndex: 'name',
    key: 'name',
    title: '菜单英文名',
  },
  {
    dataIndex: 'path',
    key: 'path',
    title: '路径',
  },
  {
    dataIndex: 'is_show',
    title: '是否显示',
    editable: true,
    render(value: boolean) {
      if (value) {
        return '是';
      }
      return '否';
    },
  },
  {
    key: 'operations',
    title: '操作',
    render(_: any, record: any) {
      return (
        <Space size="middle">
          <a
            key={record.id}
            onClick={() => {
              onEditClick(record);
            }}
          >
            编辑
          </a>
        </Space>
      );
    },
  },
];
