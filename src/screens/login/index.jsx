/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Header from "components/header";
import Footer from "components/footer";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { loginAction } from "screens/login/action";
import Loading from "components/loading";
import {
  errorAction,
  refreshTokenAction,
  loginWithAccessTokenAction,
} from "components/action";

import {
  WrapperPage,
  WarrapperForm,
  TitleContentHome,
  InputStyle,
  InputPasswordStyle,
  FormStyle,
  FormItemStyle,
  ButtonFormStyle,
  SubtitleStyle,
  RowGGFBStyle,
  TagAStyle,
  RowStyle,
} from "screens/style";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const Login = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.common.loading);
  const mesError = useSelector((state) => state.common.error.message);
  const desError = useSelector((state) => state.common.error.description);

  const actions = {
    loginAction,
    errorAction,
    refreshTokenAction,
    loginWithAccessTokenAction,
  };

  useEffect(() => {
    if (mesError !== "") {
      notification.open({
        message: mesError,
        description: desError,
        duration: 2,
        icon: <ExclamationCircleOutlined style={{ color: "#fc4848" }} />,
        onClick: () =>
          dispatch(actions.errorAction({ message: "", description: "" })),

        onClose: () =>
          dispatch(actions.errorAction({ message: "", description: "" })),
      });
    }
  }, [mesError]);

  const onFinish = (values) => {
    dispatch(actions.loginAction(values));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <WrapperPage login>
      {isLoading && <Loading />}

      <Header />
      <WarrapperForm>
        <TitleContentHome> Đăng Nhập</TitleContentHome>
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
            // label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Nhập tên đăng nhập",
              },
            ]}
          >
            <InputStyle placeholder="Please input your username" />
          </FormItemStyle>

          <FormItemStyle
            name="password"
            rules={[
              {
                required: true,
                message: "Nhập password của bạn!",
              },
            ]}
          >
            <InputPasswordStyle placeholder="Please input your pasword" />
          </FormItemStyle>
          <FormItemStyle>
            <ButtonFormStyle
              submit_login="true"
              type="primary"
              htmlType="submit"
            >
              Đăng nhập
            </ButtonFormStyle>
          </FormItemStyle>
        </FormStyle>
        <SubtitleStyle login>Hoặc đăng nhập với tài khoản</SubtitleStyle>
        <RowGGFBStyle login>
          <TagAStyle gg>Google</TagAStyle>
          <TagAStyle fb>Facebook</TagAStyle>
        </RowGGFBStyle>
        <TagAStyle forget_pass>Quên mật khẩu?</TagAStyle>
        <RowStyle sign_up="true">
          Nếu bạn chưa đăng ký? <TagAStyle>Đăng ký?</TagAStyle>
        </RowStyle>
      </WarrapperForm>
      <Footer />
    </WrapperPage>
  );
};

export default Login;
