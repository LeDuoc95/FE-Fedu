import React from "react";

import { ColStyle, WrapperPageStyle, ImagesStyle } from "components/styles";

const API_URL = process.env.REACT_APP_HOST;

const AuthorComponent = ({ user }) => {
  let src = "https://marsurl.com/images/2021/05/03/images.png";
  if (user?.photo) {
    src = `${API_URL}${user?.photo?.photo?.slice(1)}`;
  }

  return (
    <WrapperPageStyle author="true">
      <ColStyle span="8" author="true">
        <h2>Tác Giả</h2>
        <ImagesStyle author="true" src={src} />
        <h3>{user?.name || "Anonymous"}</h3>
        <p>{user?.slogan}</p>
      </ColStyle>
      <ColStyle author="true" span="16">
        {user?.description || "Không có mô tả nào!"}
      </ColStyle>
    </WrapperPageStyle>
  );
};

export default React.memo(AuthorComponent);
