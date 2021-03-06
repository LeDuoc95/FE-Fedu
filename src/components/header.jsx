/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "antd";

import { MenuStyleForHeader, MenuItemStyleForHeader, AccountStyle, AvatarStyle } from "components/styles";
import { refreshTokenAction } from "components/action";
import { logoutAction } from "screens/login/action";
import localStorage from "utils/localStorage";
import { TOKEN_KEY_BE, REFESH_TOKEN_KEY_BE } from "utils/constant";

const API_URL = process.env.REACT_APP_HOST;

const Header = ({ type }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [current, setCurrent] = useState("course");
  const userName = useSelector((state) => state.login.username);
  const photo = useSelector((state) => state.login.photo);
  const infoUser = useSelector((state) => state.login);

  const { position } = infoUser;

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const actions = {
    refreshTokenAction,
    logoutAction,
  };

  useEffect(() => {
    const token = localStorage.getToken(TOKEN_KEY_BE);
    const refreshToken = localStorage.getToken(REFESH_TOKEN_KEY_BE);
    if (token && refreshToken && !userName) {
      dispatch(actions.refreshTokenAction({ refresh: refreshToken }));
    }
  }, [userName]);

  const handleLogout = () => {
    dispatch(actions.logoutAction());
    localStorage.clearToken(TOKEN_KEY_BE);
    localStorage.clearToken(REFESH_TOKEN_KEY_BE);
    history.push("/login");
  };

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="/account-manage"> Thông tin cá nhân </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">
        <Link to="/change-password"> Đổi mật khẩu </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" onClick={handleLogout}>
        Đăng xuất
      </Menu.Item>
    </Menu>
  );

  return (
    <MenuStyleForHeader onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      {type === "payment" && (
        <MenuItemStyleForHeader key="home">
          <Link to="/">Trang chủ</Link>
        </MenuItemStyleForHeader>
      )}

      {!type && (
        <>
          <MenuItemStyleForHeader key="course">
            <Link to="/course">Khóa học</Link>
          </MenuItemStyleForHeader>
          {(position === 1 || position === 0) && (
            <MenuItemStyleForHeader key="create-course">
              <Link to="/course/create">Tạo khóa học</Link>
            </MenuItemStyleForHeader>
          )}
          {position === 0 && (
            <MenuItemStyleForHeader key="browser-user-course">
              <Link to="/browser">Duyệt người dùng và khóa học</Link>
            </MenuItemStyleForHeader>
          )}
          <MenuItemStyleForHeader key="active-course">
            <Link to="/activate">Kích hoạt khóa học</Link>
          </MenuItemStyleForHeader>
          <MenuItemStyleForHeader key="login">
            {!userName ? (
              <Link to="/login">Đăng nhập</Link>
            ) : (
              <Dropdown overlay={menu} trigger={["click"]}>
                <AccountStyle className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                  <AvatarStyle src={`${API_URL}media/${photo?.path}` || "https://i.imgur.com/nexvWcY.jpg"} alt="avatar" />
                  <span>{userName}</span>
                </AccountStyle>
              </Dropdown>
            )}
          </MenuItemStyleForHeader>
        </>
      )}
    </MenuStyleForHeader>
  );
};

export default Header;
