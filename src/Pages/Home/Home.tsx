/**
 * Home Component
 * @author Mohammed Arqam Ali saad <arqam.ali16@gmail.com>
 */
import React, { useEffect, useState } from "react";
import { Form, Layout, message } from "antd";
import _ from "lodash";
import Items from "../../Constants/configuration_data.json";

import Timeline from "../../Components/CustomTimeline";
import { Content, Header } from "antd/es/layout/layout";
import CustomTimeline from "../../Components/CustomTimeline";
import CustomCollapse from "../../Components/CustomCollapse/CustomCollapse";

/**
 * Home Functional component
 * @Component Home component which cover all the element to be viewed
 * @returns JSX.Element
 */
const Home = () => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
      </Header>
      <Content className="layout-content">
        <CustomTimeline
          items={_.map(Items, (each) => ({ children: each.message }))}
        ></CustomTimeline>
        <CustomCollapse items={Items}></CustomCollapse>
      </Content>
    </Layout>
  );
};

export default Home;
