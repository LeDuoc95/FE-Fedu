import styled, { css } from "styled-components";
import { Row, Button, Input, Form, Pagination, Col, Upload, Select } from "antd";
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
      /* border: 1px solid #ccc;
      box-shadow: ${BoxShawdow}; */
    `};

  ${(props) =>
    props.account_manage &&
    css`
      width: 80%;
    `};

  ${(props) =>
    props.course_search &&
    css`
      width: 100%;
      margin: 20px 0;
      & .ant-col.ant-col-12:nth-last-child(1) {
        text-align: end;
      }
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

  ${(props) =>
    props.course_upload &&
    css`
      max-width: 75%;
      width: 100%;
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
  ${(props) =>
    props.account_manage &&
    css`
      margin: 0;
      padding: 50px 0;
      width: 100%;
      justify-content: space-between;
    `}
  ${(props) =>
    props.course_upload &&
    css`
      max-width: unset;
      width: 100%;
      min-height: unset;
      margin: unset;
      justify-content: space-between;
    `}
`;

export const InputStyle = styled(Input)`
  border-radius: 20px;
  width: 100%;
`;

export const SelectStyle = styled(Select)`
  & .ant-select-selector {
    border-radius: 20px !important;
    width: 100%;
    & .ant-select-selection-overflow {
      display: flex;
      align-items: center;
    }
  }
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
  max-width: 1000px;
  ${(props) =>
    props.course_upload &&
    css`
      width: 100%;
      max-width: unset;
      & .ant-col.ant-col-18.ant-form-item-control {
        width: 100%;
      }
    `}
`;

export const FormItemStyle = styled(Form.Item)`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const FormItemCourseStyle = styled(Form.Item)`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const UploadImageCourse = styled(Upload)`
  width: 100%;
  height: 350px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  & .ant-upload-list.ant-upload-list-picture-card {
    width: 100%;
    height: 100%;
    & .ant-upload.ant-upload-select.ant-upload-select-picture-card,
    .ant-upload-list-picture-card-container {
      width: 100% !important;
      height: 100% !important;

      & .ant-upload,
      .ant-upload-list-item.ant-upload-list-item-done.ant-upload-list-item-list-type-picture-card {
        width: 100% !important;
        height: 100% !important;
        padding: 0px;
        & .ant-upload-list-item-info {
          & .ant-upload-span {
            & a {
              & img {
                object-fit: cover;
              }
            }
          }
          &:before {
            width: 100%;
            height: 100%;
            left: 0px !important;
          }
        }
      }
    }
  }
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
      justify-content: space-between;
      margin: 20px 0;
      width: 60%;
    `}
`;

export const TagAStyle = styled.a`
  text-align: center;
  ${(props) =>
    props.gg &&
    css`
      height: 45px;
      background-color: red;
      padding: 5px 8px;
      border-radius: 12px;
      width: 50%;
      color: white;
      margin-right: 10px;
    `};

  ${(props) =>
    props.fb &&
    css`
      opacity: 0.8;
      /* background-color: rgba(9, 30, 66); */
      background-color: blue;
      padding: 5px 4px;
      border-radius: 10px;
      width: 50%;
      color: white;
      height: 45px;
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
`;

export const ColCardTextStyle = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapCarouselCardTextStyle = styled.div`
  & div {
    margin: 0 auto!important;
    & span {
      color: mediumvioletred;
      font-weight: 600;
    }
  }
  }
`;

export const ContentStyle = styled.div`
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 20px;
  ${(props) =>
    props.course_list_card &&
    css`
      max-width: 1600px;
    `}
`;

export const ColStyle = styled(Col)`
  ${(props) =>
    props.course_table_content &&
    css`
      box-shadow: 0 8px 20px #e3e7ea;
      padding: 15px;
      height: fit-content;
      border-radius: 7px;
      margin-top: 40px;
      border: 1px solid #d5d0d0;
      & a {
        margin: 1em 0;
      }
    `}

  ${(props) =>
    props.course_list_card &&
    css`
      padding: 20px;
      background: #e3e7ea40;
    `}
`;
