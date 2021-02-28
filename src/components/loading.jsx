import React from "react";
import { LoadingStyle, SpinStyle } from "components/styles";

const Loading = () => {
  return (
    <LoadingStyle>
      <SpinStyle size="middle" tip="Loading..." />
    </LoadingStyle>
  );
};

export default Loading;
