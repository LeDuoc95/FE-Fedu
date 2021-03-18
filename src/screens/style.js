import styled, { css } from "styled-components";
import { Row, Button, Input, Form, Pagination } from "antd";
import { BoxShawdow, DarkColor } from "components/constants";

export const WrapperPage = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  ${(props) =>
    props.course &&
    css`
      /* background: #f7f7f7;
      justify-content: center;
      align-items: center; */
      width: 100%;
      /* background: white;
      color: black; */
    `};

  ${(props) =>
    props.home &&
    css`
      background: #f7f7f7;
      justify-content: center;
      align-items: center;
      width: 100%;
      background: white;
      color: black;
    `};

  ${(props) =>
    props.login &&
    css`
      min-height: 100vh;
      align-items: center;
      width: 100%;
    `}
`;

export const TitleContentHome = styled.div`
  margin-top: 40px;
  font-weight: 600;
  font-size: 25px;
  text-align: center;
`;

export const RowStyle = styled(Row)`
  ${(props) =>
    props.course &&
    css`
      border: 1px solid #ccc;
      box-shadow: ${BoxShawdow};
      padding: 10px;
    `};

  ${(props) =>
    props.search &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
    `};

  ${(props) =>
    props.home &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 1599px;
      padding: 50px;
    `};

  ${(props) =>
    props.card_course &&
    css`
      display: flex;
      align-items: center;
      justify-content: flex-start;
      max-width: 1599px;
    `};

  ${(props) =>
    props.sign_up &&
    css`
      display: flex;
      margin-bottom: 30px;
    `};
`;

export const ImageCommon = styled.img`
  ${(props) =>
    props.home &&
    css`
      width: 100vw;
      height: 100vh;
    `}
`;

export const ButtonStyle = styled(Button)`
  background: white;
  border: 1px solid #2a75ab;
  color: #2a75ab;
  font-size: 15px;
  padding: 10px 30px;
  border-radius: 50px;
  line-height: 1.5;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  &:hover {
    color: white;
    background-color: #2a75ab;
  }
`;

export const WhyChoiceUsStyle = styled.div`
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// login
export const WarrapperForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 600px;
  max-width: 70%;
  box-shadow: ${BoxShawdow};
  margin: 50px 0;
  border-radius: 10px;
  min-height: 60vh;
`;

export const InputStyle = styled(Input)`
  border-radius: 20px;
  width: 100%;
`;

export const InputPasswordStyle = styled(Input.Password)`
  border-radius: 20px;
  width: 100%;
`;

export const InputSearchStyle = styled(Input.Search)`
  border-radius: 20px;
  width: 30%;
`;

export const FormStyle = styled(Form)`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  width: 90%;
`;

export const FormItemStyle = styled(Form.Item)`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ButtonFormStyle = styled(Button)`
  ${(props) =>
    props.submit_activate &&
    css`
      border-radius: 20px;
      width: 100%;
      margin-bottom: 40px;
    `};

  ${(props) =>
    props.submit_login &&
    css`
      border-radius: 20px;
      width: 100%;
    `};
`;

export const SubtitleStyle = styled.span`
  ${(props) =>
    props.login &&
    css`
      font-size: 12px;
    `}
`;

export const RowGGFBStyle = styled.span`
  ${(props) =>
    props.login &&
    css`
      display: flex;
      justify-content: center;
      margin: 20px 0;
      width: 60%;
    `}
`;

export const TagAStyle = styled.a`
  text-align: center;
  ${(props) =>
    props.gg &&
    css`
      /* background-color: #dd4b39; */
      background-color: red;
      opacity: 0.8;
      padding: 5px 8px;
      border-radius: 10px;
      width: 50%;
      color: white;
      &:hover {
        background-color: #dd4b39;
        opacity: 1;
      }
    `};

  ${(props) =>
    props.fb &&
    css`
      opacity: 0.8;
      /* background-color: rgba(9, 30, 66); */
      background-color: blue;
      padding: 5px 8px;
      border-radius: 10px;
      width: 50%;
      color: white;
      &:hover,
      ::active {
        background-color: rgba(9, 30, 66);
        opacity: 1;
      }
    `}

  ${(props) =>
    props.course &&
    css`
      /* opacity: 0.8; */
      display: block;
      width: 100%;
      text-overflow: ellipsis;
      text-align: start;
      /* &:hover {
        background-color: #dd4b39;
        opacity: 1;
      } */
    `};
`;

export const PaginationStyle = styled(Pagination)`
  text-align: center;
  margin: 20px 0;
`;

export const WrapperTermAndPrivacyPolicyStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 70vw;
  color: ${DarkColor};
  margin: 50px 0;
`;

export const TitleTermAndPrivacyPolicyStyle = styled.h1`
  color: ${DarkColor};
  text-align: center;
`;

export const TermOfTermAndPrivacyPolicyStyle = styled.h2`
  color: ${DarkColor};
`;

export const DescriptionTermAndPrivacyPolicyStyle = styled.p`
  color: ${DarkColor};
  text-align: justify;
  text-justify: inter-word;
`;

export const SmallWrapperStyle = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  /* height: 50vh; */
`;
