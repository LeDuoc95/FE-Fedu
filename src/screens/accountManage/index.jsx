import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "components/header";
import Footer from "components/footer";
import Loading from "components/loading";
import { Upload, message, Row, Col } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import {
  WrapperPage,
  WarrapperForm,
  TitleContentHome,
  InputStyle,
  FormStyle,
  FormItemStyle,
  ButtonFormStyle,
  RowStyle,
} from "screens/style";

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};

const AccountManage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoading = useSelector((state) => state.common.loading);
  const infoUser = useSelector((state) => state.login);

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [fileList, setFileList] = useState([]);

//   useEffect(() => {
//     form.setFieldsValue({
//       username: infoUser.username
// });
  }, [infoUser])

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handleChange = ({ fileList }) => {
    console.log("fileList :>> ", fileList);
    setFileList(fileList);
  };

  const dummyRequest = ({ file, onSuccess }) => {
    console.log("file :>> ", file);
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };
  console.log("infoUser :>> ", infoUser.username);
  return (
    <WrapperPage login>
      {isLoading && <Loading />}

      <Header />
      <WarrapperForm account_manage="true">
        <TitleContentHome> Thông tin về tài khoản </TitleContentHome>

        <FormStyle
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
              <FormItemStyle
                name="photo"
                // rules={[
                //   {
                //     required: true,
                //     message: "Vui lòng nhập tên đăng nhập",
                //   },
                // ]}
              >
                <Upload
                  listType="picture-card"
                  fileList={fileList}
                  customRequest={({ onSuccess }) => onSuccess("ok")}
                  // onPreview={handlePreview}
                  onChange={handleChange}
                >
                  {fileList.length >= 1 ? null : uploadButton}
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
                <InputStyle placeholder="Vui lòng nhập họ và tên*" />
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
                      if (
                        value === undefined ||
                        value.match(
                          /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{5})$/g
                        )
                      ) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("Không đúng dạng số điện thoại!")
                      );
                    },
                  }),
                ]}
              >
                <InputStyle placeholder="Vui lòng nhập số điện thoại 11 số" />
              </FormItemStyle>
            </Col>
          </RowStyle>

          <FormItemStyle>
            <ButtonFormStyle
              submit_login="true"
              type="primary"
              htmlType="submit"
            >
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
