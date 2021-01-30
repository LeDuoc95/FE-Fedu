import React from "react";
import { Row } from "antd";
import {
  WrapperCard,
  TitleComponentStyle,
  SubTitleComponentStyle,
  ImageCard,
  TagAStyle,
} from "components/styles";

const Footer = () => {
  return (
    <WrapperCard bg={"#292c2f"} color={"white"} footer>
      <TitleComponentStyle footer size={"36px"} color={"white"}>
        What is Lorem Ipsum?
      </TitleComponentStyle>
      <SubTitleComponentStyle color={"white"}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. Lorem
        Ipsum is not simply random text.
      </SubTitleComponentStyle>
      <Row>Email: vietndj@gmail.com</Row>
      <Row>
        <ImageCard icon_footer src="/icon/facebook.svg" alt="facebook" />{" "}
        <ImageCard icon_footer src="/icon/skype.svg" alt="skype" />
      </Row>
      <Row>
        <TagAStyle color_hover={"#428bca"} href="/">
          Điều khoản sử dụng{" "}
        </TagAStyle>
        <TagAStyle color_hover={"#428bca"} href="/">
          • Chat trực tiếp với giáo viên{" "}
        </TagAStyle>
        <TagAStyle color_hover={"#428bca"} href="/">
          • Chính sách riệng tư{" "}
        </TagAStyle>
        <TagAStyle color_hover={"#428bca"} href="/">
          • Facebook group hỗ trợ khóa lập trình web backend và frontend{" "}
        </TagAStyle>
        <TagAStyle color_hover={"#428bca"} href="/">
          • Facebook group hỗ trợ khóa thiết kế
        </TagAStyle>
      </Row>
    </WrapperCard>
  );
};

export default Footer;
