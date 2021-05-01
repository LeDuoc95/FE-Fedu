import React from "react";
import Header from "components/header";
import Footer from "components/footer";

import { WrapperPage } from "screens/style";
import { ImagesStyle } from "components/styles";

export default function PageNotFound() {
  return (
    <WrapperPage page_not_found="true">
      <Header />
      <ImagesStyle
        page_not_found="true"
        height="90vh"
        src="/images/page_not_found.jpg"
        alt="page-not-found"
      />
      <Footer />
    </WrapperPage>
  );
}
