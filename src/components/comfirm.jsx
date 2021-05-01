import React from "react";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const ComfirmComponent = ({ content, onCancel, data, onOk, type }) => {
  let new_data = data;
  if (type === "set_list_video") {
    new_data = [...data];
    new_data.pop();
  }
  return Modal.confirm({
    title: "Xác nhận xóa",
    icon: <ExclamationCircleOutlined />,
    content: `${content || "Có phải bạn muốn xóa item này?"}`,
    okText: "Xóa",
    cancelText: "Hủy",
    onOk: () => onOk(new_data),
  });
};

export default ComfirmComponent;
