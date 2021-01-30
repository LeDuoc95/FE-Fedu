import React from "react";
import Header from "components/header";
import Footer from "components/footer";
import {
  WrapperPage,
  WarrapperForm,
  TitleContentHome,
  InputStyle,
  FormStyle,
  FormItemStyle,
  ButtonFormStyle,
} from "screens/style";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const ActivateCourse = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
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
            name="username"
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
            <ButtonFormStyle submit_activate type="primary" htmlType="submit">
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
