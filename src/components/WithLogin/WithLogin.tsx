import { Layout, Row } from 'antd';
import React from 'react';

interface Props {
  children: any;
}

// 登录态控制
const WithLogin: React.FC<Props> = () => {
  return (
    <Layout>
      <Row></Row>
    </Layout>
  );
};

export default WithLogin;
