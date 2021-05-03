import React, { useState, useEffect } from "react";
import { Form, Checkbox, Radio } from "antd";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { signUpAction } from "screens/signUp/action";
import openNotification from "components/notifination";
import { InputStyle, FormStyle, FormItemStyle, ButtonFormStyle, InputPasswordStyle, ButtonStyle, TagAStyle } from "screens/style";

import { TOKEN_KEY_BE } from "utils/constant";
import localStorage from "utils/localStorage";

const tailLayout = {
  wrapperCol: { offset: 0, span: 16 },
};

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};

const API_URL = process.env.REACT_APP_HOST;
const authorization = localStorage.getToken(TOKEN_KEY_BE);

const RegisterAccountComponent = ({ setCanPay }) => {
  const [form] = Form.useForm();
  const history = useHistory();
  const dispatch = useDispatch();

  const infoUser = useSelector((state) => state.login);

  const [emailCheck, setEmailCheck] = useState("");
  const [emailIsExist, setEmailIsExist] = useState("");

  useEffect(() => {
    form.setFieldsValue({
      email: infoUser?.email || "",
    });
    if (infoUser?.email) {
      setEmailCheck(infoUser.email);
    }
  }, [infoUser]);

  const actions = {
    signUpAction,
  };

  const onFinishFailed = (errorInfo) => {
    console.log(`errorInfo`, errorInfo);
    return openNotification({ message: "Gửi yêu cầu thất bại!" });
  };

  const onFinish = (values) => {
    dispatch(actions.signUpAction(values));
  };

  const onChangeCheckEmail = (value) => {
    setEmailCheck(value.target.value);
  };

  const handleCheckEmail = () => {
    fetch(`${API_URL}user/check-email-exist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authorization}`,
      },
      body: JSON.stringify({ email: emailCheck }),
    })
      .then((res) => res.json())
      .then((res) => {
        setEmailIsExist(res.body.is_exist);
        setCanPay(res.body.is_exist);
        return;
      })
      .catch(function (error) {
        return openNotification({
          message: "Check email thất bại!!!",
          description: "",
        });
      });
  };
  return (
    <>
      <FormStyle register_payment="true" form={form} {...layout} name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <FormItemStyle register_acc="true">Thông tin tài khoản</FormItemStyle>
        <FormItemStyle
          hasFeedback
          validateStatus={emailIsExist === "" ? "" : emailIsExist ? "success" : "error"}
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
          <InputStyle allowClear onChange={onChangeCheckEmail} value={emailCheck} register_payment="true" style={{ width: "100%", maxWidth: "100%" }} placeholder="Vui lòng nhập email của bạn" />
        </FormItemStyle>
        <FormItemStyle>
          <ButtonStyle disabled={!emailCheck && form.getFieldsError().length < 1} onClick={() => handleCheckEmail()}>
            Tiếp tục
          </ButtonStyle>
        </FormItemStyle>
      </FormStyle>
      {!emailIsExist && emailIsExist !== "" && (
        <FormStyle register_payment="true" form={form} {...layout} name="basic" initialValues={{}} onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <FormItemStyle register_acc="true">Tài khoản của bạn không tồn tại. Vui lòng nhập email và đăng ký tài khoản tại đây</FormItemStyle>
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

          <FormItemStyle name="name">
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

          <FormItemStyle>
            <ButtonFormStyle submit_login="true" type="primary" htmlType="submit">
              Đăng ký
            </ButtonFormStyle>
          </FormItemStyle>
        </FormStyle>
      )}
      <FormStyle register_payment="true" form={form} {...layout} name="basic">
        <FormItemStyle register_acc="true">Phương thức thanh toán</FormItemStyle>
        <FormItemStyle name="payment">
          <Radio defaultChecked="true">Thanh toán qua Momo</Radio>
        </FormItemStyle>
      </FormStyle>
    </>
  );
};

export default React.memo(RegisterAccountComponent);
