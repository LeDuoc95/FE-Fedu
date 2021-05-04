import React from "react";
import { Radio, Button } from "antd";
import { useHistory } from "react-router-dom";

import { ColStyle, WrapperPageStyle } from "components/styles";

const PaymentComponent = ({ course }) => {
  const history = useHistory();
  return (
    <WrapperPageStyle payer="true">
      <ColStyle span="2" payer="true">
        <Radio checked="true" defaultChecked="true" />
      </ColStyle>
      <ColStyle span="16" payer="true">
        <p>Thanh toán một lần</p>
      </ColStyle>
      <ColStyle payer="true" span="6">
        <p>{`${course?.old_price} $` || "0 $"}</p>
        <Button
          type="primary"
          onClick={() => history.push(`/payment/${course?.id}`)}
        >
          Đăng ký
        </Button>
      </ColStyle>
    </WrapperPageStyle>
  );
};

export default React.memo(PaymentComponent);
