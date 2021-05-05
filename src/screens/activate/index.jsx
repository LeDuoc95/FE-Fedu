import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { notification } from "antd";

import Header from "components/header";
import Footer from "components/footer";
import { WrapperPage, WarrapperForm, TitleContentHome, InputStyle, FormStyle, FormItemStyle, ButtonFormStyle } from "screens/style";
import { activeCourseAction } from "screens/activate/actions";
import { ExclamationCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";

import { errorAction } from "components/action";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const ActivateCourse = () => {
  const dispatch = useDispatch();

  const mesError = useSelector((state) => state.common.error.message);
  const desError = useSelector((state) => state.common.error.description);
  const typeError = useSelector((state) => state.common.error.type);

  const actions = {
    activeCourseAction,
    errorAction,
  };
  console.log(`typeError`, typeError);
  useEffect(() => {
    if (mesError !== "" && typeError !== "success") {
      notification.open({
        message: mesError,
        description: desError,
        duration: 2,
        icon: typeError === "error" ? <ExclamationCircleOutlined style={{ color: "#fc4848" }} /> : <CheckCircleOutlined style={{ color: "#fc4848" }} />,
        onClick: () => dispatch(actions.errorAction({ message: "", description: "", type: "" })),
        onClose: () => dispatch(actions.errorAction({ message: "", description: "", type: "" })),
      });
    }
  }, [mesError]);

  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(actions.activeCourseAction({ key_active: values.code }));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <WrapperPage login>
      <Header />
      <WarrapperForm>
        <TitleContentHome> Nhập mã kích hoạt</TitleContentHome>
        <FormStyle
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <FormItemStyle
            name="code"
            rules={[
              {
                required: true,
                message: "Nhập mã kích hoạt",
              },
            ]}
          >
            <InputStyle />
          </FormItemStyle>
          <FormItemStyle>
            <ButtonFormStyle submit_activate="true" type="primary" htmlType="submit">
              Kích hoạt
            </ButtonFormStyle>
          </FormItemStyle>
        </FormStyle>
      </WarrapperForm>
      <Footer />
    </WrapperPage>
  );
};

export default ActivateCourse;
