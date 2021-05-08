import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { notification, Checkbox } from "antd";
import { useHistory } from "react-router-dom";
import {
  ExclamationCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";

import { errorAction } from "components/action";
import Header from "components/header";
import Footer from "components/footer";
import Loading from "components/loading";
import ComfirmComponent from "components/comfirm";
import { changeAccountAction } from "screens/accountManage/action";
import {
  getCourseTemporaryAction,
  getUserTemporaryAction,
  changeUserTemporaryAction,
  changeCourseTemporaryAction,
} from "screens/browserUserAndCourse/actions";

import openNotification from "components/notifination";
import {
  getCourseAction,
  createCourseAction,
  updateCourseAction,
  deleteCourseAction,
  getDetailCourseAction,
} from "screens/course/action";

import {
  WrapperPage,
  ContentStyle,
  RowStyle,
  ColStyle,
  TitleStyle,
  ImageCommonStyle,
  SpanStyle,
  TagDivStyle,
  NoCourseStyle,
} from "screens/style";

const API_URL = process.env.REACT_APP_HOST;

const BrowserUserAndCourse = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const history = useHistory();

  const isLoading = useSelector((state) => state.common.loading);
  const mesError = useSelector((state) => state.common.error.message);
  const desError = useSelector((state) => state.common.error.description);
  const typeError = useSelector((state) => state.common.error.type);
  const listCourseTemporary = useSelector(
    (state) => state.adminBrowser.course_temporary
  );
  const listUserTemporary = useSelector(
    (state) => state.adminBrowser.user_temporary
  );

  const infoUser = useSelector((state) => state.login);

  const { position, username } = infoUser;

  const actions = {
    errorAction,
    changeAccountAction,
    getCourseAction,
    createCourseAction,
    updateCourseAction,
    deleteCourseAction,
    getDetailCourseAction,
    getCourseTemporaryAction,
    getUserTemporaryAction,
    changeUserTemporaryAction,
    changeCourseTemporaryAction,
  };

  useEffect(() => {
    if (username && position !== 0) {
      // openNotification({ message: "Bạn không có quyền vào trang này!" });
      history.push("/page-not-found");
    }
  }, [infoUser, param]);

  // useEffect(() => {
  //   if (position !== 0) {
  //     // openNotification({ message: "Bạn không có quyền vào trang này!" });
  //     history.push("/page-not-found");
  //   }
  // }, [infoUser]);

  useEffect(() => {
    dispatch(actions.getCourseTemporaryAction({}));
    dispatch(actions.getUserTemporaryAction({}));
  }, []);

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

  const handleConfirmOk = ({ type, id }) => {
    if (type === "use_temporary") {
      return dispatch(actions.changeUserTemporaryAction(id));
    }

    if (type === "course_temporary") {
      return dispatch(actions.changeCourseTemporaryAction(id));
    }
  };

  const onCheckTemporary = ({ type, id }) => {
    let text = "người dùng";
    if (type === "course_temporary") {
      text = "khóa học";
    }

    return ComfirmComponent({
      data: id,
      okText: "Change",
      title: "Xác nhận thay đổi",
      content: `Xác nhận thay đổi ${text} tạm`,
      type: type === "course_temporary" ? "course_temporary" : "use_temporary",
      onOk: handleConfirmOk,
    });
  };

  const renderTemporary = (typeTemporary) => {
    if (typeTemporary === "user_temporary") {
      let contenListtUsers = listUserTemporary.map((user) => {
        return (
          <TagDivStyle key={uuidv4()} admin_browser="true">
            <SpanStyle user_username="true">{user.username}</SpanStyle>
            <SpanStyle user_email="true">{user.email}</SpanStyle>
            <SpanStyle user_name="true">{user.name}</SpanStyle>
            <Checkbox
              checked={false}
              onChange={() =>
                onCheckTemporary({ type: "user_temporary", id: user.id })
              }
            >
              Duyệt
            </Checkbox>
          </TagDivStyle>
        );
      });

      if (listUserTemporary.length < 1) {
        contenListtUsers = (
          <NoCourseStyle>Không có user tạm nào!</NoCourseStyle>
        );
      }
      return contenListtUsers;
    }

    if (typeTemporary === "course_temporary") {
      let contentListCourses = listCourseTemporary.map((course) => {
        return (
          <TagDivStyle key={uuidv4()} admin_browser="true">
            <div style={{ flexGrow: 1 }}>
              <ImageCommonStyle
                admin_browser="true"
                src={
                  `${API_URL}${course?.photo?.photo?.slice(1)}` ||
                  "https://i.imgur.com/0jk1ek2.jpg"
                }
                height="45px"
                width="45px"
                alt=""
              />
            </div>
            <SpanStyle course_username="true">{course.title}</SpanStyle>
            <SpanStyle course_user_email="true">{course.user}</SpanStyle>
            <Checkbox
              checked={false}
              onChange={() =>
                onCheckTemporary({ type: "course_temporary", id: course.id })
              }
            >
              Duyệt
            </Checkbox>
          </TagDivStyle>
        );
      });
      if (listCourseTemporary.length < 1) {
        contentListCourses = (
          <NoCourseStyle>Không có khóa học nào!</NoCourseStyle>
        );
      }
      return contentListCourses;
    }
  };

  return (
    <WrapperPage admin_browser="true">
      {isLoading && <Loading />}
      <Header />
      <ContentStyle admin_browser="true">
        <RowStyle gutter={[8, 8]} width="100%">
          <ColStyle
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
            xxl={12}
            // className="gutter-row"
            admin_browser="true"
          >
            <TitleStyle admin_browser="true">User Temporary</TitleStyle>
            {renderTemporary("user_temporary")}
          </ColStyle>
          <ColStyle
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
            xxl={12}
            // className="gutter-row"
            admin_browser="true"
          >
            <TitleStyle admin_browser="true">Course Temporary</TitleStyle>
            {renderTemporary("course_temporary")}
          </ColStyle>
        </RowStyle>
      </ContentStyle>
      <Footer />
    </WrapperPage>
  );
};
export default BrowserUserAndCourse;
