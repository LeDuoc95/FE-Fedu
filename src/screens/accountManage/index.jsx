import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Upload, Col, Form } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

import Header from "components/header";
import Footer from "components/footer";
import Loading from "components/loading";
import { changeAccountAction } from "screens/accountManage/action";
import openNotification from "components/notifination";

import { TOKEN_KEY_BE } from "utils/constant";
import localStorage from "utils/localStorage";

import { WrapperPage, WarrapperForm, TitleContentHome, InputStyle, FormStyle, FormItemStyle, ButtonFormStyle, RowStyle } from "screens/style";

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};

const API_URL = process.env.REACT_APP_HOST;

const AccountManage = () => {
  const [form] = Form.useForm();
  const location = useLocation();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.common.loading);
  const infoUser = useSelector((state) => state.login);

  const [loading, setLoading] = useState(false);
  const [listFile, setListFile] = useState(() => {
    const avatar = [];
    if (infoUser.photo.id) {
      avatar.push({
        uid: infoUser.photo.id || "",
        name: "image.png",
        status: "done",
        url: `${API_URL}media/${infoUser.photo.path}`,
      });
    }
    return avatar;
  });

  const actions = { changeAccountAction };
  const { photo, position, temporary_user } = infoUser;

  useEffect(() => {
    if (location.pathname === "/account-manage") {
      const avatar = [];
      if (infoUser.photo.id) {
        avatar.push({
          uid: infoUser.photo.id || "",
          name: "image.png",
          status: "done",
          url: `${API_URL}media/${infoUser?.photo?.path}`,
        });
      }
      setListFile(avatar);
    }
  }, [infoUser]);

  useEffect(() => {
    form.setFieldsValue({
      ...infoUser,
    });
  }, [form, infoUser]);

  const onFinish = (values) => {
    const data = { ...values };
    if (listFile[0]?.uid) {
      data.photo = listFile[0].uid;
    } else {
      data.photo = "";
    }
    dispatch(actions.changeAccountAction({ ...data }));
  };

  const onFinishFailed = (errorInfo) => {
    return openNotification({ message: "Cập nhật thất bại!" });
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handleChange = ({ fileList, file }) => {
    if (fileList.length && file.uid && file.thumbUrl === "") {
      const authorization = localStorage.getToken(TOKEN_KEY_BE);
      const formData = new FormData();
      formData.append("imagesUser", fileList[0].originFileObj);

      fetch(`${API_URL}user/upload-images`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + `${authorization}`,
        },
        body: formData,
      })
        .then((res) => res.json())
        .then((res) => {
          setListFile([
            {
              uid: res.body.id,
              name: "image.png",
              status: "done",
              url: `${API_URL}media/${res.body.photo}`,
            },
          ]);
          return;
        })
        .catch(function (error) {
          console.log("Request failed", error);
          return openNotification({ message: "Request failed!" });
        });
    }
    setListFile(fileList);
  };

  return (
    <WrapperPage login>
      {isLoading && <Loading />}

      <Header />
      <WarrapperForm account_manage="true">
        <TitleContentHome> Thông tin về tài khoản </TitleContentHome>

        <FormStyle
          form={form}
          {...layout}
          name="basic"
          initialValues={{
            username: infoUser.username,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <RowStyle account_manage="true">
            <Col style={{ textAlign: "center" }} span="8">
              <FormItemStyle name="photo">
                <Upload listType="picture-card" fileList={listFile} customRequest={({ onSuccess }) => onSuccess("ok")} onChange={handleChange}>
                  {listFile.length >= 1 ? null : uploadButton}
                </Upload>
              </FormItemStyle>
            </Col>
            <Col span="16">
              <FormItemStyle
                label="Username"
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
                label="name"
                name="name"
                // rules={[
                //   {
                //     required: true,
                //     message: "Vui lòng nhập họ và tên",
                //   },
                // ]}
              >
                <InputStyle placeholder="Vui lòng nhập họ và tên" />
              </FormItemStyle>

              <FormItemStyle
                label="email"
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
                label="phone"
                name="phone"
                rules={[
                  // {
                  //   required: true,
                  //   message: "Vui lòng nhập số điện thoại",
                  // },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (value === "" || value.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{5})$/g)) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error("Không đúng dạng số điện thoại!"));
                    },
                  }),
                ]}
              >
                <InputStyle placeholder="Vui lòng nhập số điện thoại 11 số" />
              </FormItemStyle>
              {!temporary_user && position === 2 && (
                <FormItemStyle label="slogan" name="slogan">
                  <InputStyle placeholder="Vui lòng nhập slogan cho bạn" />
                </FormItemStyle>
              )}

              {!temporary_user && position === 2 && (
                <FormItemStyle label="description" name="description">
                  <InputStyle placeholder="Vui lòng mô tả về bạn" />
                </FormItemStyle>
              )}
            </Col>
          </RowStyle>

          <FormItemStyle>
            <ButtonFormStyle submit_login="true" type="primary" htmlType="submit">
              Cập nhật tài khoản
            </ButtonFormStyle>
          </FormItemStyle>
        </FormStyle>
      </WarrapperForm>
      <Footer />
    </WrapperPage>
  );
};

export default AccountManage;
