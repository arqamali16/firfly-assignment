import { Avatar, Collapse } from "antd";
import React from "react";
import _ from "lodash";
import { UnControlled as CodeMirror } from "react-codemirror2";
import moment from "moment";

const { Panel } = Collapse;

const CustomCollapse = ({ items }: any) => {
  return (
    <Collapse
      defaultActiveKey={["1"]}
      activeKey={"b6ca1f6c01c8f1d7c2950e54252bca9e8dfe27c7"}
      accordion={true}
    >
      {_.map(items, (each) => (
        <Panel
          header={
            <>
              <Avatar
                style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}
                size="small"
              >
                U
              </Avatar>
              <span>{each.message}</span>
            </>
          }
          key={each.id}
          extra={moment(each.timestamp * 1000).fromNow()}
        >
          <CodeMirror
            options={{
              mode: "javascript",
              theme: "material",
              lineNumbers: true,
            }}
            onChange={(editor, data, value) => {
              console.log(value === each.code_block);
            }}
            value={each.code_block}
            //   onChange={(editor, data, value) => {}}
          />
        </Panel>
      ))}
    </Collapse>
  );
};

export default CustomCollapse;
