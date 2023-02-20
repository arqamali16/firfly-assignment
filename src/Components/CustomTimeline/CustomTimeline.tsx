import React, { useEffect, useMemo, useState } from "react";
import { Timeline } from "antd";
import { ClockCircleOutlined, CheckCircleTwoTone } from "@ant-design/icons";
import _ from "lodash";

const CutomTimeline = ({ items, setSelectedItem, selectedItem }: any) => {
  const handleItemSelection = (item: any) => {
    setSelectedItem(item);
  };

  const getMappedCommits = useMemo(
    () =>
      _.map(items, (each) => ({
        ...each,
        children: each.message,
        color: each.id === selectedItem.id ? "green" : "blue",
        dot:
          each.id === selectedItem.id ? (
            <CheckCircleTwoTone
              twoToneColor="#52c41a"
              className="timeline-icon-selected"
            />
          ) : (
            <ClockCircleOutlined
              className="timeline-icon"
              onClick={() => handleItemSelection(each)}
            />
          ),
      })),
    [selectedItem, items]
  );

  return <Timeline items={getMappedCommits} mode="left" />;
};

export default CutomTimeline;
