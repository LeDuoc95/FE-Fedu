import React from "react";
import Header from "components/header";
import Footer from "components/footer";
import { useDispatch, useSelector } from "react-redux";
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
import { addProductToWishlistAction } from "screens/login/action";

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

  const actions = {
    addProductToWishlistAction,
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(actions.addProductToWishlistAction(values));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <WrapperPage login>
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
                message: "Nhập Email hoặc số điện thoại",
              },
            ]}
          >
            <InputStyle placeholder="Please input your Email or your phone" />
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
            <ButtonFormStyle submit_login type="primary" htmlType="submit">
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
        <RowStyle sign_up>
          Nếu bạn chưa đăng ký? <TagAStyle>Đăng ký?</TagAStyle>
        </RowStyle>
      </WarrapperForm>
      <Footer />
    </WrapperPage>
  );
};

export default Login;
