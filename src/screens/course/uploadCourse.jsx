/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useLayoutEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Col, Form, notification, Tag, message, Modal, Input } from "antd";
// import createHistory from "history/createBrowserHistory";
import { useLastLocation } from "react-router-last-location";
import { useHistory } from "react-router-dom";

import {
  LoadingOutlined,
  PlusOutlined,
  ExclamationCircleOutlined,
  CheckCircleOutlined,
  CarryOutOutlined,
  PlusCircleTwoTone,
  VideoCameraTwoTone,
  PlayCircleTwoTone,
} from "@ant-design/icons";

import { errorAction } from "components/action";
import Header from "components/header";
import Footer from "components/footer";
import Loading from "components/loading";
import ComfirmComponent from "components/comfirm";

import { changeAccountAction } from "screens/accountManage/action";

import {
  getCourseAction,
  createCourseAction,
  updateCourseAction,
  deleteCourseAction,
  getDetailCourseAction,
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
  ColStyle,
  FormItemCourseStyle,
  UploadImageCourse,
  SelectStyle,
  UploadVideoCourseStyle,
  TreeCourseStyle,
  TitleStyle,
  ParentStyle,
  ButtonUploadVideo,
} from "screens/style";

const API_URL = process.env.REACT_APP_HOST;
const authorization = localStorage.getToken(TOKEN_KEY_BE);

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};

const treeData = [
  {
    title: "parent 1",
    key: "0",
    parent: true,
    children: [
      // {
      //   title: "parent 1-0",
      //   key: "0-0",
      //   path: "",
      //   uid: "",
      // },
      {
        id: 53,
        key: "0-0",
        path: "upload_path/Day_of_the_Dead_Vocab_OaVQEJg.mp3",
        title: "name",
        uid: "45eb449e-227c-4ab6-8839-faf4035b194b",
      },
      // {
      //   title: "parent 1-2",
      //   key: "0-0-2",
      //   path: "",
      //   uid: "",
      // },
    ],
  },
  {
    title: "parent 2",
    key: "1",
    icon: <CarryOutOutlined />,
    parent: true,
    children: [
      {
        title: "parent 2-0",
        key: "1-0",
        icon: <CarryOutOutlined />,
      },
    ],
  },
];

const UploadCourseurse = (props) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const param = useParams();
  // const history = createHistory();
  const history = useHistory();

  const location = useLocation();
  const lastLocation = useLastLocation();

  const { id } = param;
  const isLoading = useSelector((state) => state.common.loading);
  const currentCourse = useSelector((state) => state.course.currentCourse);
  const mesError = useSelector((state) => state.common.error.message);
  const desError = useSelector((state) => state.common.error.description);
  const typeError = useSelector((state) => state.common.error.type);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [updateTitle, setUpdateTitle] = useState(false);
  const [loading, setLoading] = useState(false);
  const [listVideo, setListVideo] = useState([]);
  const [positionSelected, setPositionSelected] = useState(0);
  const [listFile, setListFile] = useState([]);

  const actions = {
    errorAction,
    changeAccountAction,
    getCourseAction,
    createCourseAction,
    updateCourseAction,
    deleteCourseAction,
    getDetailCourseAction,
  };

  useEffect(() => {
    if (!id && lastLocation) {
      const pathName = lastLocation.pathname.split("/");
      if (pathName[1] === "course" && Number.isInteger(Number(pathName[2]))) {
        // window.location.reload();
        history.go(0);
      }
    }
  }, [param]);

  useEffect(() => {
    if (id) {
      dispatch(actions.getDetailCourseAction({ id }));
    }
  }, [id, param]);

  useEffect(() => {
    if (mesError !== "") {
      notification.open({
        message: mesError,
        description: desError,
        duration: 2,
        icon:
          typeError === "error" ? (
            <ExclamationCircleOutlined style={{ color: "#fc4848" }} />
          ) : (
            <CheckCircleOutlined style={{ color: "#fc4848" }} />
          ),
        onClick: () =>
          dispatch(
            actions.errorAction({ message: "", description: "", type: "" })
          ),
        onClose: () =>
          dispatch(
            actions.errorAction({ message: "", description: "", type: "" })
          ),
      });
    }
  }, [mesError]);

  useEffect(() => {
    if (currentCourse.photo && id) {
      const { photo, list_video } = currentCourse;
      const { id, uid } = photo;
      setListFile([
        {
          id: id,
          uid: uid,
          name: "image.png",
          status: "done",
          url: `${API_URL}${photo.photo.slice(1)}`,
        },
      ]);
      setListVideo(JSON.parse(list_video));
    }
  }, [currentCourse]);

  const tagRender = (props) => {
    const { label, closable, onClose } = props;
    return (
      <Tag closable={closable} onClose={onClose}>
        {label}
      </Tag>
    );
  };

  useEffect(() => {
    if (id) {
      form.setFieldsValue({
        ...currentCourse,
      });
    }
  }, [form, currentCourse, id]);

  const onFinish = (values) => {
    if (!values.photo) {
      return notification.open({
        message: "photo is require",
        description: "",
      });
    }
    if (!currentCourse.id && !id) {
      values.photo = listFile[0].uid;
      values.list_video = JSON.stringify(listVideo);
      dispatch(actions.createCourseAction({ ...values }));
    } else {
      values.photo = currentCourse.photo.id;
      if (!values.photo.id) {
        values.photo = listFile[0].id;
      }
      values.list_video = JSON.stringify(listVideo);
      values.id = currentCourse.id;
      dispatch(actions.updateCourseAction({ ...values }));
    }
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
      const formData = new FormData();
      formData.append("imagesUser", fileList[0].originFileObj);

      fetch(`${API_URL}user/upload-images`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${authorization}`,
        },
        body: formData,
      })
        .then((res) => res.json())
        .then((res) => {
          setListFile([
            {
              id: res.body.id,
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
        });
    }
    setListFile(fileList);
  };

  const onSelect = (selectedKeys, info) => {
    const { node } = info;
    if (!node.parent && node.path && node.uid) return;
    if (info.node.parent) {
      setIsModalVisible(true);
      setNewTitle(node.title);
      setUpdateTitle(true);
      return setPositionSelected(parseInt(node.key));
    }
    return setPositionSelected(parseInt(node.key.split("-")[0]));
  };

  const uploadVideo = {
    name: "file",
    action: `${API_URL}` + "course/upload-videos",
    headers: {
      Authorization: `Bearer ${authorization}`,
    },
    onChange(info) {
      if (info.fileList.length === 0) {
        return setListVideo([]);
      }

      if (info.file.status !== "uploading") {
      }

      if (info.file.type === "video/mp4") {
        return message.error(`Định dạng file phải là .mp4`);
      }

      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
        const new_data = listVideo.map((value, index) => {
          if (index === positionSelected) {
            value.children[value.children.length - 1] = {
              title: info.file.response.body.title,
              id: info.file.response.body.id,
              key: `${positionSelected}-${value.children.length - 1}`,
              path: info.file.response.body.video,
              uid: info.file.response.body.uid,
            };
          }
          return value;
        });
        setListVideo(new_data);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const addChildrenRow = (event, key) => {
    event.stopPropagation();
    const new_data = [...listVideo];
    const position = new_data[key].children.length;
    new_data[key].children.push({
      id: "",
      key: `${key}-${position}`,
      path: "",
      title: "",
      uid: "",
    });
    setListVideo(new_data);
  };

  const removeChildrenRow = (event, key) => {
    event.stopPropagation();
    const new_data = [...listVideo];
    new_data[key].children.pop();
    setListVideo(new_data);
  };

  const watchingVideo = (event, path) => {
    event.stopPropagation();
    const urlVideo = `${API_URL}media/${path}`;
    window.open(urlVideo);
  };

  const titleRender = (item) => {
    const { parent, path, uid, key, children } = item;
    if (parent) {
      let isAddChildrenRow = true;
      let isRemoveChildrenRow = true;
      if (!children.length) isRemoveChildrenRow = false;
      children.map((value) => {
        if (!value.path && !value.uid) {
          isAddChildrenRow = false;
        }
        return value;
      });
      return (
        <ParentStyle>
          {item.title}
          <div>
            <ButtonFormStyle
              add_children_row="true"
              type="primary"
              onClick={(event) => addChildrenRow(event, parseInt(key))}
              disabled={!isAddChildrenRow}
            >
              Add children row
            </ButtonFormStyle>
            <ButtonFormStyle
              type="danger"
              remove_children_row="true"
              onClick={(event) => removeChildrenRow(event, parseInt(key))}
              disabled={!isRemoveChildrenRow}
            >
              Remove children row
            </ButtonFormStyle>
          </div>
        </ParentStyle>
      );
    }

    if (path && uid) {
      return (
        <RowStyle row_children="true">
          <ColStyle row_children="true" span="1" font_size="28px">
            <VideoCameraTwoTone />
          </ColStyle>
          <ColStyle span="22" name_video="true">
            {item.title}
          </ColStyle>
          <ColStyle
            row_children="true"
            span="1"
            font_size="28px"
            onClick={(event) => watchingVideo(event, path)}
          >
            <PlayCircleTwoTone />
          </ColStyle>
        </RowStyle>
      );
    }

    return (
      <UploadVideoCourseStyle {...uploadVideo}>
        <ButtonUploadVideo
          upload_video_course="true"
          icon={<PlusCircleTwoTone />}
        >
          Upload Video
        </ButtonUploadVideo>
      </UploadVideoCourseStyle>
    );
  };

  const handleOk = () => {
    let new_data = [];
    if (!newTitle) {
      return notification.open({
        message: "title không để trống!",
        description: "",
        icon: <ExclamationCircleOutlined style={{ color: "#fc4848" }} />,
      });
    }

    if (updateTitle) {
      new_data = listVideo.map((item, index) => {
        if (index === positionSelected) {
          item.title = newTitle;
        }
        return item;
      });
    } else {
      new_data = [
        ...listVideo,
        {
          title: newTitle,
          key: listVideo.length,
          parent: true,
          children: [],
        },
      ];
    }

    setListVideo(new_data);
    setNewTitle("");
    setUpdateTitle(false);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setNewTitle("");
    setUpdateTitle(false);
    setIsModalVisible(false);
  };

  const handleChangeTitle = (e) => {
    setNewTitle(e.target.value);
  };

  const handleDeleteCourse = (id) => {
    dispatch(actions.deleteCourseAction(id));
  };
  return (
    <WrapperPage login>
      {isLoading && <Loading />}

      <Header />
      <WarrapperForm course_upload="true">
        <TitleContentHome>{"Thông tin về khóa học"}</TitleContentHome>
        <FormStyle
          course_upload="true"
          form={form}
          {...layout}
          name="basic"
          initialValues={{}}
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
                name="old_price"
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
                  // defaultValue={[]}
                  style={{ width: "100%" }}
                  options={TYPE_COURSE_OPTION}
                />
              </FormItemStyle>
            </Col>
          </RowStyle>

          <RowStyle course_upload_video="true">
            <TitleStyle>
              <b>Video khóa học</b>
            </TitleStyle>

            <ButtonFormStyle
              add_row="true"
              type="primary"
              onClick={() => setIsModalVisible(true)}
            >
              Add row
            </ButtonFormStyle>
            <ButtonFormStyle
              remove_row="true"
              type="danger"
              onClick={() =>
                ComfirmComponent({
                  content: "",
                  onOk: setListVideo,
                  data: listVideo,
                  type: "set_list_video",
                })
              }
            >
              Remove row
            </ButtonFormStyle>

            <TreeCourseStyle
              className="ahihi"
              defaultExpandedKeys={["0"]}
              treeData={listVideo}
              onSelect={onSelect}
              titleRender={titleRender}
            />
          </RowStyle>

          <FormItemStyle>
            <ButtonFormStyle
              submit_login="true"
              type="primary"
              htmlType="submit"
            >
              {currentCourse.id && id
                ? "Cập nhật khóa học"
                : "Tạo mới khóa học"}
            </ButtonFormStyle>
          </FormItemStyle>

          <FormItemStyle>
            <ButtonFormStyle
              submit_login="true"
              type="danger"
              onClick={() =>
                ComfirmComponent({
                  content: "",
                  onOk: handleDeleteCourse,
                  data: { id },
                })
              }
            >
              {id && "Xóa khóa học"}
            </ButtonFormStyle>
          </FormItemStyle>
        </FormStyle>
      </WarrapperForm>

      <Footer />
      <Modal
        title={updateTitle ? "Cập nhật tiêu đề" : "Tạo mới tiêu đề"}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input onChange={handleChangeTitle} value={newTitle} />
      </Modal>
    </WrapperPage>
  );
};

export default UploadCourseurse;
