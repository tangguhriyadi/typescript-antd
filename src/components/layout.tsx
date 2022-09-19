import { Layout } from "antd";
import React, { FC } from "react";

const { Header, Footer, Content , Sider} = Layout;

const Layouts: FC = () => {
  return (
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default Layouts;
