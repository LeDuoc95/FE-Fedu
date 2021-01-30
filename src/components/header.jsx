import React, { useState } from "react";
import { Menu, Button } from "antd";
import { MenuStyleForHeader, MenuItemStyleForHeader } from "components/styles";
import { Link } from "react-router-dom";

export default function Header() {
  const [current, setCurrent] = useState("course");

  const handleClick = (e) => {
    setCurrent(e.key);
  };
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
        <Link to="/login">Đăng nhập</Link>
      </MenuItemStyleForHeader>
    </MenuStyleForHeader>
  );
}
