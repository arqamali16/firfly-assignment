/**
 * Home Component
 * @author Mohammed Arqam Ali saad <arqam.ali16@gmail.com>
 */
import React, { useState } from "react";
import { Layout } from "antd";
import _ from "lodash";
import moment from "moment";

import Items from "../../Constants/configuration_data.json";

import { Content, Header } from "antd/es/layout/layout";
import CustomTimeline from "../../Components/CustomTimeline";
import CustomCollapse from "../../Components/CustomCollapse";

const sortedItems = _.sortBy(Items, "timestamp");

/**
 * Home Functional component
 * @Component Home component which cover all the element to be viewed
 * @returns JSX.Element
 */
const Home = () => {
  const [commits, setCommits]: any = useState(sortedItems);
  const [selectedItem, setSelectedItem]: any = useState(_.first(sortedItems));

  const commitCode = (commitedCode: string, commitMessage: string) => {
    const newCommit = {
      ...selectedItem,
      id: Math.random().toString(16).slice(2),
      code_block: commitedCode,
      timestamp: moment().unix() * 1000,
      message: commitMessage,
    };

    const sortedCommits = _.reverse(
      _.sortBy([...Items, newCommit], "timestamp")
    );

    setCommits(sortedCommits);
    setSelectedItem(newCommit);
  };

  return (
    <Layout className="layout">
      <Header>
        <div className="logo">
          <img
            src="https://uploads-ssl.webflow.com/6166f5ce8dcfdb67799143af/6166f5ce8dcfdb72539143de_Group%2042.svg"
            alt=""
          />
        </div>
      </Header>
      <Content className="layout-content">
        <CustomTimeline
          items={commits}
          setSelectedItem={setSelectedItem}
          selectedItem={selectedItem}
        ></CustomTimeline>
        <CustomCollapse
          items={commits}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          commitCode={commitCode}
        ></CustomCollapse>
      </Content>
    </Layout>
  );
};

export default Home;
