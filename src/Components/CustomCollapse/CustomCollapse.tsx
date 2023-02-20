import { Avatar, Collapse, Tooltip } from "antd";
import _ from "lodash";
import moment from "moment";
import CodeBlock from "../CodeBlock";

const { Panel } = Collapse;

const CustomCollapse = ({
  items,
  selectedItem,
  setSelectedItem,
  commitCode,
}: any) => {
  const handleChange = (e: any) => {
    if (!_.isEmpty(e)) {
      const selectItem = _.find(items, ["id", _.first(e)]);
      setSelectedItem(selectItem);
    }
  };

  return (
    <Collapse
      defaultActiveKey={["1"]}
      activeKey={selectedItem.id}
      accordion={true}
      onChange={handleChange}
    >
      {_.map(items, (each) => (
        <Panel
          header={
            <>
              <Tooltip title={each.username}>
                <Avatar
                  className="avatar"
                  style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}
                  size="small"
                >
                  {_.upperCase(_.first(each.username))}
                </Avatar>
              </Tooltip>

              <span>{each.message}</span>
            </>
          }
          key={each.id}
          extra={moment(each.timestamp * 1000).fromNow()}
        >
          <CodeBlock
            selectedItem={selectedItem}
            commit={each}
            commitCode={commitCode}
          />
        </Panel>
      ))}
    </Collapse>
  );
};

export default CustomCollapse;
