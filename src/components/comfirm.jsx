import React from "react";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const ComfirmComponent = ({ content, onCancel, data, onOk }) => {
  const new_data = [...data];
  new_data.pop();
  return Modal.confirm({
    title: "Xác nhận xóa",
    icon: <ExclamationCircleOutlined />,
    content: `${content || "Có phải bạn muốn xóa item này?"}`,
    okText: "Xóa",
    cancelText: "Hủy",
    onOk: () => onCancel(new_data),
  });
};

export default ComfirmComponent;
