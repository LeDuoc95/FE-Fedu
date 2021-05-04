import React, { useState, useEffect } from "react";
import { Form } from "antd";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getCourseAction, createCourseAction, updateCourseAction, deleteCourseAction, getDetailCourseAction } from "screens/course/action";

import { ShoppingCartOutlined, CloseCircleTwoTone, CheckCircleTwoTone } from "@ant-design/icons";

import { signUpAction } from "screens/signUp/action";
import openNotification from "components/notifination";

import { InputStyle, FormStyle, FormItemStyle, ButtonFormStyle, RowStyle, ColStyle, ButtonStyle, TagAStyle, DetailBillStyle, ImageCommonStyle, NameOfCourseStyle, PriceOfCourseStyle, WapperContentStyle, IconInputStyle } from "screens/style";

import { TOKEN_KEY_BE } from "utils/constant";
import localStorage from "utils/localStorage";

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};

const API_URL = process.env.REACT_APP_HOST;
const authorization = localStorage.getToken(TOKEN_KEY_BE);

const RegisterAccountComponent = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const param = useParams();

  const infoUser = useSelector((state) => state.login);
  const currentCourse = useSelector((state) => state.course.currentCourse);

  const [discount, setDiscount] = useState("");
  const [checkDiscount, setCheckDiscount] = useState("");
  const [inputDiscount, setInputDiscount] = useState(false);
  const [discountIsValid, setDiscountIsValid] = useState("");

  const { id } = param;

  const actions = {
    getCourseAction,
    createCourseAction,
    updateCourseAction,
    deleteCourseAction,
    getDetailCourseAction,
    signUpAction,
  };

  useEffect(() => {
    if (!id) {
      history.push("page-not-found");
    }
    dispatch(actions.getDetailCourseAction({ id }));
  }, [id, param]);

  // useEffect(() => {
  //   form.setFieldsValue({
  //     email: infoUser?.email || "",
  //   });
  // }, [infoUser]);

  const onFinishFailed = (errorInfo) => {
    return openNotification({ message: "Kiểm tra mã khuyến mãi thất bại!" });
  };

  const onFinish = (values) => {
    // dispatch(actions.signUpAction(values));
  };

  const handleCheckDiscount = () => {
    fetch(`${API_URL}course/check-discount`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authorization}`,
      },
      body: JSON.stringify({ discount: checkDiscount }),
    })
      .then((res) => res.json())
      .then((res) => {
        setDiscountIsValid(res.body.is_valid);
        return;
      })
      .catch(function (error) {
        return openNotification({
          message: "Yêu cầu thất bại!!!",
          description: "",
        });
      });
  };

  return (
    <>
      <FormStyle detail_bill="true" form={form} {...layout} name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <FormItemStyle detail_bill="true">Chi tiết đơn hàng</FormItemStyle>
        <FormItemStyle name="payment">
          <DetailBillStyle>
            <ImageCommonStyle src={`${API_URL}${currentCourse?.photo?.photo.slice(1)}` || "https://i.imgur.com/0jk1ek2.jpg"} detail_bill="true" height="70px" width="70px" />
            <NameOfCourseStyle>{currentCourse?.title?.length > 50 ? currentCourse?.title?.slice(50) : currentCourse?.title}</NameOfCourseStyle>
            <PriceOfCourseStyle>
              {currentCourse?.old_price || currentCourse?.old_price}
              {" $"}
            </PriceOfCourseStyle>
          </DetailBillStyle>
        </FormItemStyle>
        <FormItemStyle payment="true">
          {!inputDiscount && (
            <WapperContentStyle title_detail_bill="true" onClick={() => setInputDiscount(true)}>
              <span style={{ paddingRight: "5px" }}>
                <ShoppingCartOutlined />
              </span>
              <span>Thêm mã khuyến mại</span>
            </WapperContentStyle>
          )}
          {inputDiscount && (
            <RowStyle input_detail_bill="true">
              <WapperContentStyle input_detail_bill="true">
                <InputStyle onChange={(e) => setCheckDiscount(e.target.value)} value={checkDiscount} register_payment="true" style={{ width: "80%", maxWidth: "100%" }} placeholder="Vui lòng nhập mã khuyến mại" />
                {discountIsValid !== "" && !discountIsValid && <span style={{ padding: "8px 0 0 22px" }}>{"Mã không đúng hoặc đã được sử dụng"}</span>}
              </WapperContentStyle>
              <IconInputStyle>
                <CheckCircleTwoTone
                  style={{
                    fontSize: "32px",
                    padding: "0 5px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleCheckDiscount()}
                />
                <CloseCircleTwoTone
                  onClick={() => {
                    setInputDiscount(false);
                    setDiscountIsValid("");
                    setCheckDiscount("");
                  }}
                  style={{ fontSize: "32px", cursor: "pointer" }}
                />
              </IconInputStyle>
            </RowStyle>
          )}
        </FormItemStyle>

        <FormItemStyle payment="true">
          <WapperContentStyle total_payment_bill="true">
            <span>Tổng cộng:</span>
            <span>
              {" "}
              {currentCourse?.old_price || currentCourse?.old_price}
              {" $"}
            </span>
          </WapperContentStyle>
        </FormItemStyle>
      </FormStyle>
    </>
  );
};

export default React.memo(RegisterAccountComponent);
