import React from "react";
import { useSelector, useDispatch } from "react-redux";

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
import { activeCourseAction } from "screens/activate/actions";

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

  const actions = {
    activeCourseAction,
  };

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
            <ButtonFormStyle
              submit_activate="true"
              type="primary"
              htmlType="submit"
            >
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
