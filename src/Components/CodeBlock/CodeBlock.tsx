/**
 * Home Component
 * @author Mohammed Arqam Ali saad <arqam.ali16@gmail.com>
 */
import React, { useState } from "react";
import { Card, Button, message, Modal, Input } from "antd";
import _ from "lodash";
import { UnControlled as CodeMirror } from "react-codemirror2";

const { TextArea } = Input;

const CodeBlock = ({ commit, commitCode }: any) => {
  const [edit, setEdit] = useState(false);
  const [codeChange, setCodeChange] = useState(commit.code_block);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [commitMessage, setCommitMessage] = useState("");

  const handleEdit = () => {
    setEdit(!edit);
  };

  const onExport = () => {
    const element = document.createElement("a");
    //@ts-ignore
    const textFile = new Blob([commit.code_block]); //pass data from localStorage API to blob
    element.href = URL.createObjectURL(textFile);
    element.download = commit.file_name;
    document.body.appendChild(element);
    element.click();
  };

  const handleEditSubmit = () => {
    if (codeChange !== commit.code_block) {
      setIsModalOpen(true);
    }
  };

  const confirmCommit = () => {
    setIsModalOpen(false);
    setEdit(false);
    commitCode(codeChange, commitMessage);
    message.success("Code commited successful!");
  };

  const onCodeChange = (p1: any, p2: any, value: string) => {
    setCodeChange(value);
  };

  return (
    <Card
      className="code-block"
      size="small"
      extra={
        <div className="extra-buttons">
          {edit ? (
            <>
              <Button type="dashed" size="small" onClick={handleEdit}>
                Cancel
              </Button>
              <Button
                type="primary"
                size="small"
                onClick={handleEditSubmit}
                disabled={codeChange === commit.code_block}
              >
                Commit
              </Button>
            </>
          ) : (
            <Button type="primary" size="small" onClick={handleEdit}>
              Edit
            </Button>
          )}
          <Button type="primary" size="small" onClick={onExport}>
            Export
          </Button>
        </div>
      }
    >
      {edit ? (
        <CodeMirror
          options={{
            mode: "javascript",
            theme: "material",
            lineNumbers: true,
          }}
          onChange={onCodeChange}
          value={commit.code_block}
        />
      ) : (
        <span className="code-block">{commit.code_block}</span>
      )}
      <Modal
        title="Commit message"
        open={isModalOpen}
        onOk={confirmCommit}
        onCancel={() => setIsModalOpen(false)}
      >
        <TextArea
          rows={4}
          onChange={(event: any) => setCommitMessage(event.target.value)}
        />
      </Modal>
    </Card>
  );
};

export default CodeBlock;
