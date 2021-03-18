/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "antd";
import {
  MenuStyleForHeader,
  MenuItemStyleForHeader,
  AccountStyle,
  AvatarStyle,
} from "components/styles";
import { refreshTokenAction } from "components/action";
import localStorage from "utils/localStorage";
import { TOKEN_KEY_BE, REFESH_TOKEN_KEY_BE } from "utils/constant";

const Header = () => {
  const dispatch = useDispatch();
  const [current, setCurrent] = useState("course");
  const userName = useSelector((state) => state.login.username);
  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const actions = {
    refreshTokenAction,
  };

  useEffect(() => {
    const token = localStorage.getToken(TOKEN_KEY_BE);
    const refreshToken = localStorage.getToken(REFESH_TOKEN_KEY_BE);
    if (token && refreshToken) {
      dispatch(actions.refreshTokenAction({ refresh: refreshToken }));
    }
  }, []);

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="https://www.antgroup.com">Thông tin cá nhân</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">
        <a href="https://www.aliyun.com">Đổi mật khẩu</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">Đăng xuất</Menu.Item>
    </Menu>
  );

  return (
    <MenuStyleForHeader
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
    >
      <MenuItemStyleForHeader key="course">
        <Link to="/course">Khóa học</Link>
      </MenuItemStyleForHeader>
      <MenuItemStyleForHeader key="active-course">
        <Link to="/activate">Kích hoạt khóa học</Link>
      </MenuItemStyleForHeader>
      <MenuItemStyleForHeader key="login">
        {!userName ? (
          <Link to="/login">Đăng nhập</Link>
        ) : (
          <Dropdown overlay={menu} trigger={["click"]}>
            <AccountStyle
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <AvatarStyle src="https://i.imgur.com/nexvWcY.jpg" alt="avatar" />
              <span>{userName}</span>
            </AccountStyle>
          </Dropdown>
        )}
      </MenuItemStyleForHeader>
    </MenuStyleForHeader>
  );
};

export default Header;
