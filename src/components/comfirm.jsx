import React from "react";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const ComfirmComponent = ({
  title,
  content,
  onCancel,
  data,
  onOk,
  type,
  okText,
}) => {
  let new_data = data;
  if (type === "set_list_video") {
    new_data = [...data];
    new_data.pop();
  }

  const handleActionOk = (data) => {
    if (type === "use_temporary") {
      onOk({ type: "use_temporary", id: data });
      return false;
    }

    if (type === "course_temporary") {
      onOk({ type: "course_temporary", id: data });
      return false;
    }

    return onOk(new_data);
  };

  return Modal.confirm({
    title: `${title}` || "Xác nhận xóa",
    icon: <ExclamationCircleOutlined />,
    content: `${content || "Có phải bạn muốn xóa item này?"}`,
    okText: `${okText}` || "Xóa",
    cancelText: "Hủy",
    onOk: () => handleActionOk(new_data),
  });
};

export default ComfirmComponent;
