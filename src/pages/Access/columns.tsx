import { Tag, Space } from 'antd';
export const columns = (onEditClick: (record: any) => void) => [
  {
    dataIndex: 'id',
    key: 'id',
    title: 'ID',
  },
  {
    dataIndex: 'label',
    key: 'label',
    title: '标签名称',
    editable: true,
  },
  {
    dataIndex: 'name',
    key: 'name',
    title: '标签英文名',
    editable: true,
  },
  {
    key: 'example',
    title: '展示效果',
    render(_: any, record: any) {
      return (
        <Tag key={record.id} color={record.color}>
          {record.label}
        </Tag>
      );
    },
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
