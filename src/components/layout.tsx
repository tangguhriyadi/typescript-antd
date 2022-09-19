import { Layout } from "antd";
import React, { FC } from "react";

import { addExtra, plus } from "../features/cake/cake";
import { useAppDispatch, useAppSelector } from "../features/hooks";

const { Header, Content, Sider, Footer } = Layout;
interface Props {
  title: string;
}

const Layouts: FC<Props> = ({ title }: Props) => {
  const dispatch = useAppDispatch();
  const cake = useAppSelector((state) => state.cake.cake);
  const extra = useAppSelector((state) => state.cake.extra);
  return (
    <Layout>
      <Header style={{ color: "red" }}>Header</Header>
      <Layout>
        <Sider width={300} className="site-layout-background">
          Sider
        </Sider>
        <Content>
          <div>{title}</div>
          <div>{cake}</div>
          <div>{extra}</div>
          <button type="button" onClick={() => dispatch(plus())}>
            plus
          </button>
          <button type="button" onClick={() => dispatch(addExtra(1))}>
            extra
          </button>
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default Layouts;
