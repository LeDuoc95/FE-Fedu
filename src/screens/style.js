import styled, { css } from "styled-components";
import { Row, Button, Input, Form, Pagination, Col, Upload, Select, Tree } from "antd";
import { BoxShawdow, DarkColor } from "components/constants";

export const WrapperPage = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  ${(props) =>
    props.course &&
    css`
      width: 100%;
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
    (props.login || props.payment) &&
    css`
      min-height: 100vh;
      align-items: center;
      width: 100%;
      background: ${(props) => (props.bg ? props.bg : "white")};
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
    props.input_detail_bill &&
    css`
      display: flex;
      justify-content: space-between;
      padding-bottom: 20px;
      border-bottom: 1px solid rgb(205 177 205);
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
    (props.card_course || props.course_upload_video) &&
    css`
      display: flex;
      align-items: center;
      justify-content: flex-start;
      max-width: 1599px;
      margin-bottom: 50px;
    `};

  ${(props) =>
    props.course_upload_video &&
    css`
      padding: 10px;
      background: #ebe0e0;
      height: fit-content;
      width: 100%;
      max-width: 1599px;
      display: flex;
      justify-content: center;
      align-items: center;
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

  ${(props) =>
    props.row_children &&
    css`
      margin: 5px 0;
    `};
`;

export const ImageCommonStyle = styled.img`
  ${(props) =>
    (props.home || props.detail_bill) &&
    css`
      width: ${(props) => (props.width ? props.width : "100vw")};
      height: ${(props) => (props.height ? props.height : "100vh")};
    `}/* ${(props) => props.detail_bill && css``} */
`;

export const ButtonUploadVideo = styled(Button)`
  ${(props) =>
    props.upload_video_course &&
    css`
      border: none;
      border-radius: 10px;
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
  display: flex;
  align-items: center;
  &:hover {
    color: white;
    background-color: #2a75ab;
  }
  ${(props) =>
    props.register_payment &&
    css`
      padding: 5px 15px;
    `}
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
  ${(props) =>
    props.register_payment &&
    css`
      background: "red";
    `}
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
  ${(props) =>
    (props.register_payment || props.detail_bill) &&
    css`
      border: 1px solid blanchedalmond;
      border-radius: 10px;
      background: white;
      padding: 10px 0;
      box-shadow: 0px 0px 30px 0px rgb(219 92 219);
      margin-top: 20px;
      width: 100%;
    `}
`;

export const FormItemStyle = styled(Form.Item)`
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: ${(props) => (props.bb ? props.bb : "unset")};
  ${(props) =>
    (props.register_acc || props.detail_bill) &&
    css`
      margin-bottom: 10px;
      font-weight: 600;
      font-size: 20px;
    `}
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

  ${(props) =>
    (props.add_row || props.remove_row || props.add_children_row || props.remove_children_row) &&
    css`
      border-radius: 5px;
      margin: 10px 10px 10px 0;
    `};

  ${(props) =>
    props.add_children_row &&
    css`
      margin: 0 10px;
      z-index: 100;
    `};

  ${(props) =>
    props.remove_children_row &&
    css`
      margin: 0;
      z-index: 100;
    `};
`;

export const ParentStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
    `};

  ${(props) =>
    props.payment &&
    css`
      margin-top: 15px;
      max-width: 1400px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: lightblue;
    `};
`;

export const ColStyle = styled(Col)`
  ${(props) =>
    props.course_home &&
    css`
      cursor: pointer;
    `}

  ${(props) =>
    props.course_table_content &&
    css`
      overflow-y: auto;
      box-shadow: 0 8px 20px #e3e7ea;
      padding: 15px;
      max-height: 300px;
      /* height: fit-content; */
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
      /* background: #e3e7ea40; */
    `}

  ${(props) =>
    props.row_children &&
    css`
      font-size: ${(props) => (props.font_size ? props.font_size : "14px")};
    `}

  ${(props) =>
    props.name_video &&
    css`
      padding-left: 20px;
    `}
  ${(props) =>
    props.payer &&
    css`
      min-height: 150px;
      display: flex;
    `}
`;

export const UploadVideoCourseStyle = styled(Upload)`
  width: 100%;
`;

export const TreeCourseStyle = styled(Tree)`
  width: 100%;
  margin-top: 20px;
  padding: 20px 0;
  background: #e8e8e8;
  & .ant-tree-list-holder-inner {
    width: 100%;
    & .ant-tree-treenode {
      width: 100%;
      & .ant-tree-node-content-wrapper {
        width: 100%;
      }
    }
  }
`;

export const TitleStyle = styled.div`
  width: 100%;
  text-align: center;
  margin: 20px 0;
  ${(props) =>
    props.register_acc &&
    css`
      text-align: start;
      margin: 10px 0;
      font-weight: 600;
    `}
`;

export const NoCourseStyle = styled.div`
  font-weight: 600;
  color: #1890ff;
  font-size: 30px;
  height: 500px;
  text-align: center;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StepPaymentStyle = styled.div`
  width: 100%;
  height: 100px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background: lightblue;
  border-bottom: 1px solid paleturquoise;
`;

export const TitlePaymentStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: 700;
  opacity: ${(props) => (props.opacity ? props.opacity : 1)};
  margin-right: 5px;
  ${(props) =>
    props.paying &&
    css`
      justify-content: flex-end;
    `}
  ${(props) =>
    props.payment_finish &&
    css`
      justify-content: flex-start;
    `}
`;

export const SpanStyle = styled.span`
  ${(props) =>
    (props.paying || props.payment_finish) &&
    css`
      margin-right: 4px;
      border: 2px solid black;
      border-radius: 50%;
      padding: 2px 8px;
    `}
`;

export const TagPStyle = styled.p`
  ${(props) =>
    props.QA_code &&
    css`
      font-style: italic;
      margin-top: 20px;
    `}
`;

export const DetailBillStyle = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  align-items: center;
  border-bottom: 1px solid rgb(205 177 205);
  padding-bottom: 10px;
`;

export const NameOfCourseStyle = styled.div`
  font-weight: 600;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 10px;
`;

export const PriceOfCourseStyle = styled.div`
  font-weight: 600;
`;

export const WapperContentStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${(props) =>
    props.input_detail_bill &&
    css`
      display: flex;
      flex-direction: column;
      color: peru;
      width: 78%;
    `}

  ${(props) =>
    props.title_detail_bill &&
    css`
      border-bottom: 1px solid rgb(205 177 205);
      padding-bottom: 20px;
    `}

  ${(props) =>
    props.total_payment_bill &&
    css`
      padding-bottom: 20px;
      justify-content: space-between;
      cursor: unset;
      font-weight: 600;
    `}

  ${(props) =>
    props.QA_code &&
    css`
      flex-direction: column;
    `}
`;

export const IconInputStyle = styled.div`
  display: flex;
  width: 20%;
`;

export const ImplementPaymentStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px 0;
`;
