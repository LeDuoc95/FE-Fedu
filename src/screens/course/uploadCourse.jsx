import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Upload, Col, Form, notification, Tag } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

import Header from "components/header";
import Footer from "components/footer";
import Loading from "components/loading";
import { changeAccountAction } from "screens/accountManage/action";
import {
  getCourseAction,
  createCourseAction,
  updateCourseAction,
  deleteCourseAction,
} from "screens/course/action";

import { TOKEN_KEY_BE, TYPE_COURSE_OPTION } from "utils/constant";
import localStorage from "utils/localStorage";
import {
  WrapperPage,
  WarrapperForm,
  TitleContentHome,
  InputStyle,
  FormStyle,
  FormItemStyle,
  ButtonFormStyle,
  RowStyle,
  FormItemCourseStyle,
  UploadImageCourse,
  SelectStyle,
} from "screens/style";

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};

const API_URL = process.env.REACT_APP_HOST;

const UploadCourseurse = (props) => {
  const [form] = Form.useForm();
  const location = useLocation();
  const dispatch = useDispatch();

  const { id } = useParams();
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
        url: `${API_URL}` + "media/" + `${infoUser.photo.path}`,
      });
    }
    return avatar;
  });

  const actions = {
    changeAccountAction,
    getCourseAction,
    createCourseAction,
    updateCourseAction,
    deleteCourseAction,
  };

  const tagRender = (props) => {
    const { label, closable, onClose } = props;
    return (
      <Tag closable={closable} onClose={onClose}>
        {label}
      </Tag>
    );
  };

  //   useEffect(() => {
  //     form.setFieldsValue({
  //       ...infoUser,
  //     });
  //   }, [form, infoUser]);

  const onFinish = (values) => {
    if (!values.photo) {
      return notification.open({
        message: "photo is require",
        description: "",
      });
    }
    values.photo = listFile[0].uid;
    dispatch(actions.createCourseAction({ ...values }));
  };

  const onFinishFailed = (errorInfo) => {
    console.log(`errorInfo`, errorInfo);
  };

  const uploadButton = (
    <div style={{ width: "100%" }}>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handleChange = ({ fileList, file }) => {
    if (fileList.length && file.uid && file.thumbUrl === "") {
      const authorization = localStorage.getToken(TOKEN_KEY_BE);
      const formData = new FormData();
      formData.append("imagesUser", fileList[0].originFileObj);

      fetch(`${API_URL}` + "user/upload-images", {
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
              url: `${API_URL}` + "media/" + `${res.body.photo}`,
            },
          ]);
          return;
        })
        .catch(function (error) {
          console.log("Request failed", error);
        });
    }
    setListFile(fileList);
  };

  return (
    <WrapperPage login>
      {isLoading && <Loading />}

      <Header />
      <WarrapperForm course_upload="true">
        {/* <TitleContentHome> {"Thông tin về khóa học" || "Tạo khóa học" || "Cập nhật khóa học"} </TitleContentHome> */}
        <TitleContentHome> hhhhhhhhhhhh </TitleContentHome>

        <FormStyle
          course_upload="true"
          form={form}
          {...layout}
          name="basic"
          //   initialValues={{
          //     username: infoUser.username,
          //   }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <FormItemCourseStyle name="photo">
            <UploadImageCourse
              listType="picture-card"
              fileList={listFile}
              customRequest={({ onSuccess }) => onSuccess("ok")}
              onChange={handleChange}
            >
              {listFile.length >= 1 ? null : uploadButton}
            </UploadImageCourse>
          </FormItemCourseStyle>

          <RowStyle gutter={[24, 24]} course_upload="true">
            <Col span="12">
              <FormItemStyle
                label="Tên"
                labelAlign="left"
                name="title"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập tên khóa",
                  },
                ]}
              >
                <InputStyle placeholder="Vui lòng nhập tên khóa học" />
              </FormItemStyle>
              <FormItemStyle
                label="Mô tả"
                labelAlign="left"
                name="description"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập họ mô tả về khóa học",
                  },
                ]}
              >
                <InputStyle placeholder="Vui lòng nhập mô tả về khóa học" />
              </FormItemStyle>
            </Col>
            <Col span="12">
              <FormItemStyle
                label="Giá"
                labelAlign="left"
                name="new_price"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập giá bán của khóa học",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (value && !Number.isInteger(Number(value))) {
                        return Promise.reject(
                          new Error("Chưa đúng định dạng!")
                        );
                      }
                      return Promise.resolve();
                    },
                  }),
                ]}
              >
                <InputStyle
                  type="number"
                  placeholder="Vui lòng nhập giá bán của khóa học"
                />
              </FormItemStyle>
              <FormItemStyle
                label="Loại"
                labelAlign="left"
                name="type"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập loại khóa học",
                  },
                ]}
              >
                <SelectStyle
                  mode="multiple"
                  showArrow
                  tagRender={tagRender}
                  defaultValue={[]}
                  style={{ width: "100%" }}
                  options={TYPE_COURSE_OPTION}
                />
              </FormItemStyle>
            </Col>
          </RowStyle>

          <FormItemStyle>
            <ButtonFormStyle
              submit_login="true"
              type="primary"
              htmlType="submit"
            >
              {"Tạo" || "Tạo mới khóa học" || "Cập nhật khóa học"}
            </ButtonFormStyle>
          </FormItemStyle>
        </FormStyle>
      </WarrapperForm>
      <Footer />
    </WrapperPage>
  );
};

export default UploadCourseurse;
