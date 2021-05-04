import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { notification, Modal } from "antd";
import QRCode from "react-qr-code";
import { LoadingOutlined, PlusOutlined, ExclamationCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";

import Header from "components/header";
import Footer from "components/footer";
import Loading from "components/loading";
import { errorAction } from "components/action";

import RegisterAccountComponent from "screens/course/registerAccount";
import DetailCourseComponent from "screens/course/detailBill";

import { WrapperPage, RowStyle, ColStyle, ContentStyle, StepPaymentStyle, TitlePaymentStyle, SpanStyle, ButtonStyle, TagAStyle, TagPStyle, ImplementPaymentStyle, ImageCommonStyle, WapperContentStyle } from "screens/style";

function PaymentComponent() {
  const dispatch = useDispatch();
  const history = useHistory();

  const isLoading = useSelector((state) => state.common.loading);
  const mesError = useSelector((state) => state.common.error.message);
  const desError = useSelector((state) => state.common.error.description);
  const typeError = useSelector((state) => state.common.error.type);
  const [isPaying, setIsPaying] = useState(true);
  const [canPay, setCanPay] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const actions = {
    errorAction,
  };

  useEffect(() => {
    if (mesError !== "") {
      notification.open({
        message: mesError,
        description: desError,
        duration: 2,
        icon: typeError !== "error" ? <ExclamationCircleOutlined style={{ color: "#fc4848" }} /> : <CheckCircleOutlined style={{ color: "#fc4848" }} />,
        onClick: () => dispatch(actions.errorAction({ message: "", description: "", type: "" })),
        onClose: () => dispatch(actions.errorAction({ message: "", description: "", type: "" })),
      });
    }
  }, [mesError]);

  const handleOk = () => {
    history.push("/");
  };

  const handlePaying = () => {
    setIsPaying(true);
    setIsOpenModal(true);
  };

  return (
    <WrapperPage payment="true" bg="lightblue">
      {isLoading && <Loading />}
      <Header type="payment" />
      <StepPaymentStyle paying="true">
        <TitlePaymentStyle paying="true" opacity={!isPaying ? "0.5" : "1"}>
          <SpanStyle paying="true">1</SpanStyle>
          <span style={{ marginRight: "2px" }}>Thanh Toán</span>
          <span>{">"}</span>
        </TitlePaymentStyle>
        <TitlePaymentStyle payment_finish="true" opacity={isPaying ? "0.5" : "1"}>
          <SpanStyle payment_finish="true">2</SpanStyle>
          <span>Hoàn Thành</span>
        </TitlePaymentStyle>
      </StepPaymentStyle>
      <ContentStyle payment="true">
        <RowStyle style={{ width: "100%" }} gutter={[16, 16]}>
          <ColStyle xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <RegisterAccountComponent setCanPay={setCanPay} />
          </ColStyle>
          <ColStyle xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <DetailCourseComponent />
            <ImplementPaymentStyle>
              <span>
                Khi bạn đóng học phí, bạn đã đồng ý với <TagAStyle onClick={() => history.push("/terms-of-use")}>Điều khoản sử dụng</TagAStyle> và <TagAStyle onClick={() => history.push("/privacy-policy")}>Chính sách bảo mật</TagAStyle>
              </span>
              <ButtonStyle disabled={!canPay} style={{ marginTop: "20px" }} submit_login="true" onClick={() => handlePaying()}>
                Thanh Toán
              </ButtonStyle>
            </ImplementPaymentStyle>
          </ColStyle>
        </RowStyle>
      </ContentStyle>
      <Footer />
      <Modal title={"Thanh toán mua khóa học"} visible={isOpenModal} onOk={handleOk} onCancel={() => setIsOpenModal(false)}>
        <WapperContentStyle QA_code="true">
          <QRCode value="ahihi" />
          <TagPStyle QA_code="true">Vui lòng thanh toàn bằng mã QA với nội dung tên khóa học + email mà bạn muốn gửi mã code khóa học đến</TagPStyle>
        </WapperContentStyle>
      </Modal>
    </WrapperPage>
  );
}

export default PaymentComponent;
