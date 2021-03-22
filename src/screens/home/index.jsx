import React from "react";
import Header from "components/header";
import Card from "components/card";
import Footer from "components/footer";
import CardText from "components/cardText";
import {
  WrapperPage,
  ImageCommon,
  RowStyle,
  TitleContentHome,
  ButtonStyle,
  WhyChoiceUsStyle,
} from "screens/style";
import { Col } from "antd";

export default function Home() {
  return (
    <WrapperPage home="true">
      <Header />
      <ImageCommon home="true" src="/images/banner.png" alt="banner" />
      <TitleContentHome>Lorem Ipsum</TitleContentHome>
      <RowStyle home="true" gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8} lg={6} xl={5} xxl={5}>
          <Card
            type="course"
            img={"https://i.imgur.com/nexvWcY.jpg"}
            author={"Johon Doe"}
            title={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            }
            old_price={"123456$"}
            new_price={"123456$"}
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={5} xxl={5}>
          <Card
            type="course"
            img={"https://i.imgur.com/nexvWcY.jpg"}
            author={"Johon Doe"}
            title={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            }
            old_price={"123456$"}
            new_price={"123456$"}
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={5} xxl={5}>
          <Card
            type="course"
            img={"https://i.imgur.com/nexvWcY.jpg"}
            author={"Johon Doe"}
            title={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            }
            old_price={"123456$"}
            new_price={"123456$"}
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={5} xxl={5}>
          <Card
            type="course"
            img={"https://i.imgur.com/nexvWcY.jpg"}
            author={"Johon Doe"}
            title={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            }
            old_price={"123456$"}
            new_price={"123456$"}
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={5} xxl={5}>
          <Card
            type="course"
            img={"https://i.imgur.com/nexvWcY.jpg"}
            author={"Johon Doe"}
            title={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            }
            old_price={"123456$"}
            new_price={"123456$"}
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={5} xxl={5}>
          <Card
            type="course"
            img={"https://i.imgur.com/nexvWcY.jpg"}
            author={"Johon Doe"}
            title={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            }
            old_price={"123456$"}
            new_price={"123456$"}
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={5} xxl={5}>
          <Card
            type="course"
            img={"https://i.imgur.com/nexvWcY.jpg"}
            author={"Johon Doe"}
            title={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            }
            old_price={"123456$"}
            new_price={"123456$"}
          />
        </Col>
      </RowStyle>
      <ButtonStyle>Xem tất cả</ButtonStyle>
      <WhyChoiceUsStyle>
        <TitleContentHome>Lorem Ipsum is simply dummy</TitleContentHome>
        <RowStyle home="true" gutter={[16, 16]}>
          <Col xs={24} sm={12} md={7} lg={7} xl={7} xxl={7}>
            <Card
              type="choice"
              description_choice_us={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ips dummy text ever since the 1700s, when an unknown printer took a galley"
              }
              img={"https://i.imgur.com/nexvWcY.jpg"}
              title={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              }
            />
          </Col>
          <Col xs={24} sm={12} md={7} lg={7} xl={7} xxl={7}>
            <Card
              type="choice"
              description_choice_us={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ips dummy text ever since the 1700s, when an unknown printer took a galley"
              }
              img={"https://i.imgur.com/nexvWcY.jpg"}
              title={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              }
            />
          </Col>
          <Col xs={24} sm={12} md={7} lg={7} xl={7} xxl={7}>
            <Card
              type="choice"
              description_choice_us={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ips dummy text ever since the 1500s, when an unknown printer took a galley"
              }
              img={"https://i.imgur.com/nexvWcY.jpg"}
              title={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              }
            />
          </Col>
        </RowStyle>
        <TitleContentHome>Lorem Ipsum is simply dummy</TitleContentHome>
        <RowStyle home="true" gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8}>
            <CardText
              name={"john Doe"}
              img={"https://i.imgur.com/nexvWcY.jpg"}
              description_card_text={
                "Lorem Ipsum is simply dummy text of 1500 make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in"
              }
            />
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8}>
            <CardText
              name={"john Doe"}
              img={"https://i.imgur.com/nexvWcY.jpg"}
              description_card_text={
                "Lorem Ipsum is simply dummy text of thype specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in"
              }
            />
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8}>
            <CardText
              name={"john Doe"}
              img={"https://i.imgur.com/nexvWcY.jpg"}
              description_card_text={
                "Lorem Ipsum is simply dummy text oke a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in"
              }
            />
          </Col>
        </RowStyle>
      </WhyChoiceUsStyle>
      <Footer />
    </WrapperPage>
  );
}
