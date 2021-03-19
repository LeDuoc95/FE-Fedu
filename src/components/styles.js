import styled, { css } from "styled-components";
import { Menu, Spin } from "antd";
import { TextColorDescriptions, TextColorBlue } from "components/constants";
import FacebookLogin from "react-facebook-login";

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  /* overflow-x: hidden; */
  background-color: ${(props) => (props.bg ? props.bg : "white")};
  color: ${(props) => (props.color ? props.color : "white")};

  ${(props) =>
    props.card &&
    css`
      min-height: 360px;
      min-width: 180px;
      max-width: 360px;
      box-shadow: 0px 0px 50px 6px rgba(219, 212, 219, 1);
      border-radius: 10px;
      &:hover {
        border: 1px solid black;
      }
    `};

  ${(props) =>
    props.card_text &&
    css`
      align-items: center;
      width: 250px;
      height: 400px;
    `}

  ${(props) =>
    props.footer &&
    css`
      width: 100%;
      height: 300px;
      align-items: center;
    `}
`;

export const ImageCard = styled.img`
  ${(props) =>
    props.card_text &&
    css`
      margin-top: 20px;
      width: 80px;
      height: 80px;
      border-radius: 50%;
    `};

  ${(props) =>
    props.type === "course" &&
    css`
      width: 100%;
      height: 160px;
    `};

  ${(props) =>
    props.type === "choice" &&
    css`
      width: 100%;
      height: 200px;
    `};

  ${(props) =>
    props.icon_footer &&
    css`
      cursor: pointer;
      width: 30px;
      height: 30px;
      padding-left: 10px;
      padding-top: 10px;
      margin-bottom: 20px;
    `};
`;

export const TitleCard = styled.p`
  width: 100%;
  font-weight: ${(props) => (props.type === "course" ? "700" : "600")};
  min-height: ${(props) => (props.type === "course" ? "70px" : "auto")};
  max-height: 100px;
  word-wrap: break-word;
  word-break: break-all;
  font-size: ${(props) => (props.type === "course" ? "20px" : "18px")};
  color: black;
`;

export const ContentCard = styled.div`
  width: 100%;
  padding: 20px;
`;

export const AuthorCard = styled.span`
  color: ${TextColorDescriptions};
  font-size: 11px;
`;

export const PriceCard = styled.span`
  ${(props) =>
    props.old &&
    css`
      color: ${TextColorDescriptions};
      text-decoration: line-through;
    `};

  ${(props) =>
    props.new &&
    css`
      border: 1px solid ${TextColorBlue};
      color: ${TextColorBlue};
      padding: 8px 5px;
      margin-left: 15px;
    `};
`;

export const WrapperPriceCard = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const MenuStyleForHeader = styled(Menu)`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #2a75ab;
  color: #fff;
  min-height: 60px;
  border-bottom: unset;
  .ant-menu-item-selected {
    color: black !important;
  }
  .ant-menu-item {
    border-bottom: none !important;
  }
`;

export const MenuItemStyleForHeader = styled(Menu.Item)`
  &:hover {
    color: black !important;
  }
`;

export const DescriptionCardStyle = styled.p`
  font-size: 14px;
  color: ${TextColorDescriptions};
  ${(props) =>
    props.card_text &&
    css`
      height: 150px;
      word-wrap: break-word;
      word-break: break-all;
    `}
`;

// card text
export const SignCardTextStyle = styled.span`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const NameStyle = styled.span`
  margin-top: 20px;
  font-size: 14px;
  text-align: center;
`;

// Footer
export const TitleComponentStyle = styled.span`
  font-size: ${(props) => (props.size ? props.size : "13px")};
  color: ${(props) => (props.color ? props.color : "black")};
  text-align: center;
  ${(props) =>
    props.footer &&
    css`
      margin-top: 30px;
      margin-bottom: 10px;
    `}
`;

export const SubTitleComponentStyle = styled.span`
  font-size: ${(props) => (props.size ? props.size : "11px")};
  color: ${(props) => (props.color ? props.color : "black")};
  text-align: center;
  margin-bottom: 10px;
`;

export const TagAStyle = styled.a`
  color: ${(props) => (props.color ? props.color : "white")};
  padding-left: 10px;
  &:hover {
    color: ${(props) => (props.color_hover ? props.color_hover : "white")};
  }
`;

export const LoadingStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: black;
  opacity: 0.7;
`;

export const SpinStyle = styled(Spin)`
  color: white;
`;

export const AccountStyle = styled.div`
  width: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AvatarStyle = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

export const SocailStyle = styled.div`
  border-radius: 50%;
`;
