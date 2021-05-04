import { notification } from "antd";
import {
  ExclamationCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

const openNotification = ({
  message,
  description,
  handleClick,
  typeError = "error",
}) => {
  return notification.open({
    message: message,
    description: description,
    onClick: () => {
      // handleClick();
      console.log("Notification Clicked!");
    },
    icon:
      typeError === "error" ? (
        <ExclamationCircleOutlined style={{ color: "#fc4848" }} />
      ) : (
        <CheckCircleOutlined style={{ color: "#fc4848" }} />
      ),
  });
};

export default openNotification;
