import { Space, Tag } from 'antd';
export const columns = (onEditClick: (record: any) => void) => [
  {
    dataIndex: 'id',
    key: 'id',
    title: 'ID',
  },
  {
    dataIndex: 'title',
    key: 'title',
    title: '文章标题',
  },
  {
    dataIndex: 'introduce',
    key: 'introduce',
    title: '描述',
  },
  {
    dataIndex: 'types',
    key: 'article-types',
    title: '分类',
    render(type: { label: string }) {
      return type.label;
    },
  },
  {
    dataIndex: 'tags',
    key: 'article-tags',
    title: '标签',
    render(tagList: any) {
      return tagList.map((tag: any) => (
        <Tag key={tag.key} color={tag.value}>
          {tag.label}
        </Tag>
      ));
    },
  },
  {
    dataIndex: 'visited_counts',
    key: 'visited_counts',
    title: '访问量',
  },
  {
    dataIndex: 'liked_counts',
    key: 'liked_counts',
    title: '点赞数',
  },
  {
    dataIndex: 'is_show',
    key: 'article-is-show',
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
        <Space size="middle" key={record.id}>
          <a
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
