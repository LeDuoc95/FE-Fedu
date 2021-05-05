/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { notification, Checkbox } from "antd";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { ExclamationCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";
import Header from "components/header";
import Footer from "components/footer";
import { loginAction, changePasswordAction } from "screens/login/action";
import { signUpAction } from "screens/signUp/action";
import Loading from "components/loading";
import { errorAction, refreshTokenAction, loginWithAccessTokenAction } from "components/action";
import "./social.css";
import { WrapperPage, WarrapperForm, TitleContentHome, InputStyle, InputPasswordStyle, FormStyle, FormItemStyle, ButtonFormStyle, SubtitleStyle, RowGGFBStyle, TagAStyle, RowStyle } from "screens/style";

const CLIENT_ID_GOOGLE = process.env.REACT_CLIENT_ID_GOOGLE;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailLayout = {
  wrapperCol: { offset: 0, span: 16 },
};

const FromLogin = ({ formType }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [isCheck, setIsCheck] = useState(false);

  const isLoading = useSelector((state) => state.common.loading);
  const mesError = useSelector((state) => state.common.error.message);
  const desError = useSelector((state) => state.common.error.description);
  const typeError = useSelector((state) => state.common.error.type);

  const actions = {
    loginAction,
    errorAction,
    refreshTokenAction,
    loginWithAccessTokenAction,
    signUpAction,
    changePasswordAction,
  };

  useEffect(() => {
    if (mesError !== "") {
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

  const responseGoogle = (response) => {
    if (response && response.profileObj) {
      dispatch(
        actions.signUpAction({
          response,
          type: 1,
        })
      );
    }
  };

  const responseFacebook = (response) => {
    if (response && response.id) {
      dispatch(
        actions.signUpAction({
          response,
          type: 2,
        })
      );
    }
  };

  const onFinish = (values) => {
    if (formType === "login") {
      dispatch(actions.loginAction(values));
    }

    if (formType === "sign_up") {
      values.isTeacher = isCheck;
      dispatch(actions.signUpAction(values));
    }

    if (formType === "change_password") {
      delete values.password_confirm;
      dispatch(actions.changePasswordAction(values));
    }

    if (formType === "reset_password") {
      console.log(`values`, values);
      // dispatch(actions.signUpAction(values));
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <WrapperPage login>
      {isLoading && <Loading />}

      <Header />
      <WarrapperForm>
        <TitleContentHome>
          {formType === "login" && "Đăng nhập"}
          {formType === "sign_up" && "Đăng ký tài khoản"}
          {formType === "reset_password" && "Đặt lại mật khẩu"}
          {formType === "change_password" && "Thay đổi mật khẩu"}
        </TitleContentHome>

        <FormStyle
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          {formType === "login" && (
            <>
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
            </>
          )}

          {formType === "sign_up" && (
            <>
              <FormItemStyle
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập tên đăng nhập",
                  },
                ]}
              >
                <InputStyle placeholder="Vui lòng nhập tên đăng nhập*" />
              </FormItemStyle>

              <FormItemStyle
                name="name"
                // rules={[
                //   {
                //     required: true,
                //     message: "Vui lòng nhập họ và tên",
                //   },
                // ]}
              >
                <InputStyle placeholder="Vui lòng nhập họ và tên*" />
              </FormItemStyle>

              <FormItemStyle
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "Không đúng dạng E-mail!",
                  },
                  {
                    required: true,
                    message: "Vui lòng nhập email",
                  },
                ]}
              >
                <InputStyle placeholder="Vui lòng nhập email*" />
              </FormItemStyle>

              <FormItemStyle
                name="phone"
                rules={[
                  // {
                  //   required: true,
                  //   message: "Vui lòng nhập số điện thoại",
                  // },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (value === undefined || value.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{5})$/g)) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error("Không đúng dạng số điện thoại!"));
                    },
                  }),
                ]}
              >
                <InputStyle placeholder="Vui lòng nhập số điện thoại 11 số" />
              </FormItemStyle>

              <FormItemStyle
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập mật khẩu",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");
                      if (value.match(strongRegex)) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error("Định dạng mật khẩu không đúng! - Mật khẩu gồm: chữ in hoa, chữ in thường, số, kí tự đặc biệt, dài hơn 7 kí tự và có số"));
                    },
                  }),
                ]}
              >
                <InputPasswordStyle placeholder="Vui lòng nhập mật khẩu*" />
              </FormItemStyle>

              <FormItemStyle
                name="password_confirm"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Vui lòng xác nhận mật khẩu!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error("Không trùng với mật khẩu!"));
                    },
                  }),
                ]}
              >
                <InputPasswordStyle placeholder="Vui lòng xác nhận mật khẩu*" />
              </FormItemStyle>

              <FormItemStyle
                {...tailLayout}
                name="agreement"
                rules={[
                  {
                    validator: (_, value) => (value ? Promise.resolve() : Promise.reject(new Error("Vui lòng chập nhận các điều khoản!"))),
                  },
                ]}
                valuePropName="checked"
              >
                <Checkbox>
                  Tôi đã đọc và đồng ý với <TagAStyle onClick={() => history.push("/terms-of-use")}>Điều khoản sử dụng</TagAStyle> và <TagAStyle onClick={() => history.push("/privacy-policy")}>Chính sách bảo mật</TagAStyle>{" "}
                </Checkbox>
              </FormItemStyle>

              <FormItemStyle
                {...tailLayout}
                name="isTeacher"

                // valuePropName="checked"
              >
                <Checkbox defaultChecked={isCheck} onChange={() => setIsCheck(!isCheck)}>
                  Bạn muốn đăng ký làm giảng viên?
                </Checkbox>
              </FormItemStyle>
            </>
          )}

          {formType === "reset_password" && (
            <FormItemStyle
              name="username"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên đăng nhập",
                },
              ]}
            >
              <InputStyle placeholder="Vui lòng nhập tên đăng nhập*" />
            </FormItemStyle>
          )}

          {formType === "change_password" && (
            <>
              <FormItemStyle
                name="old_password"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập mật khẩu cũ",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");
                      if (value.match(strongRegex)) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error("Định dạng mật khẩu không đúng! - Mật khẩu gồm: chữ in hoa, chữ in thường, số, kí tự đặc biệt, dài hơn 7 kí tự và có số"));
                    },
                  }),
                ]}
              >
                <InputPasswordStyle placeholder="Vui lòng nhập mật khẩu cũ" />
              </FormItemStyle>

              <FormItemStyle
                name="new_password"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập mật khẩu mới",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");
                      if (value.match(strongRegex)) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error("Định dạng mật khẩu không đúng! - Mật khẩu gồm: chữ in hoa, chữ in thường, số, kí tự đặc biệt, dài hơn 7 kí tự và có số"));
                    },
                  }),
                ]}
              >
                <InputPasswordStyle placeholder="Vui lòng nhập mật khẩu mới" />
              </FormItemStyle>

              <FormItemStyle
                name="password_confirm"
                dependencies={["new_password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Vui lòng xác nhận mật khẩu!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("new_password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error("Không trùng với mật khẩu!"));
                    },
                  }),
                ]}
              >
                <InputPasswordStyle placeholder="Vui lòng xác nhận mật khẩu*" />
              </FormItemStyle>
            </>
          )}

          <FormItemStyle>
            <ButtonFormStyle submit_login="true" type="primary" htmlType="submit">
              {formType === "login" && "Đăng nhập"}
              {formType === "sign_up" && "Tạo Tài Khoản"}
              {formType === "reset_password" && "Đặt lại mật khẩu"}
              {formType === "change_password" && "Thay đổi mật khẩu"}
            </ButtonFormStyle>
          </FormItemStyle>
        </FormStyle>

        {formType === "login" && (
          <>
            <SubtitleStyle login>Hoặc đăng nhập với tài khoản</SubtitleStyle>
            <RowGGFBStyle login>
              <TagAStyle gg>
                <GoogleLogin clientId="951710861951-pgkacjov6dinl1s9dbulfsusgkco1t2u.apps.googleusercontent.com" buttonText="Sign In With Google" onSuccess={responseGoogle} onFailure={responseGoogle} className="btnGoogle" cookiePolicy={"single_host_origin"} />
              </TagAStyle>
              <TagAStyle fb>
                <FacebookLogin style={{ background: "black" }} appId="185834732669634" autoLoad={false} fields="name,email,picture" textButton="     Sign In With Facebook" cssClass="btnFacebook" callback={responseFacebook} icon="fa-facebook">
                  Facebook
                </FacebookLogin>
              </TagAStyle>
            </RowGGFBStyle>
            <TagAStyle onClick={() => history.push("/reset-password")} forget_pass>
              Quên mật khẩu?
            </TagAStyle>
          </>
        )}

        <RowStyle sign_up="true">
          {formType === "login" && (
            <>
              Nếu bạn chưa đăng ký? <TagAStyle onClick={() => history.push("/sign-up")}>Đăng ký?</TagAStyle>
            </>
          )}

          {formType === "sign_up" && (
            <>
              Bạn đã có tài khoản? <TagAStyle onClick={() => history.push("/login")}>Đăng nhập</TagAStyle>
            </>
          )}
        </RowStyle>
      </WarrapperForm>
      <Footer />
    </WrapperPage>
  );
};

export default FromLogin;
