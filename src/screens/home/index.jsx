import React from "react";
import { Col, Carousel } from "antd";
import { v4 as uuidv4 } from "uuid";

import Header from "components/header";
import Card from "components/card";
import Footer from "components/footer";
import CardText from "components/cardText";
import { sliceText } from "utils/ultils";

import {
  WrapperPage,
  ImageCommon,
  RowStyle,
  TitleContentHome,
  ButtonStyle,
  ColCardTextStyle,
  WhyChoiceUsStyle,
  WrapCarouselCardTextStyle,
} from "screens/style";

const dataFeeling = [
  [
    {
      avatar: "https://i.imgur.com/lRm5HGe.jpg",
      name: "Nguyễn Linh",
      des:
        "Sau khi học xong khóa thiết kế UI/ UX của thầy Nguyễn Đức Việt mình đã áp dụng được rất dễ dàng, cách truyền đạt của thầy rất dễ hiểu, giọng nói dễ nghe và vui tính ^^ bạn nào có ý định học về cái này thì nên đăng ký khóa học này nhé, cực dễ hiểu luôn. Mong thầy tạo ra nhiều khóa học bổ ích hơn nữa ạ> ",
    },
    {
      avatar: "https://i.imgur.com/dCFjii5.jpg",
      name: "Xóm bánh bèo",
      des:
        "Các khóa học vảu thày Nguyễn Đức Việt rất gần với nội dung mình cần . đối với 1 người mới học làm website như mình mình thấy rất bổ ích. Mong thầy ra nhiều khóa nữa để mình có thể học hỏi nhiều hơn nữa.",
    },
    {
      avatar: "https://i.imgur.com/lTjYvRP.jpg",
      name: "Bùi Quang Hưng",
      des:
        "Cuối năm ngoái, mình đăng ký mua khóa học Bootstrap của thầy Nguyễn Đức Việt. Thấy khóa học của thầy rất thực tế, dễ hiểu, support nhiệt tình nên mình đã quyết định mua hết các khóa học của thầy liên quan đến học thiết kế Website (từ Bootstrap, jQuery, WordPress và cả Photoshop nữa), các khóa học rất logic và bài bản. ",
    },
  ],
  [
    {
      avatar: "https://i.imgur.com/MOTYFqr.jpg",
      name: "Nguyễn Thành Nam",
      des:
        "Fedu là một môi trường tốt để cho những ai chưa biết gì về lập trình theo học. Bên cạnh đó, đội ngũ giảng viên rất chất lượng, nhiệt tình chỉ bảo cả trên lớp lẫn ở nhà. Ngoài ra tôi rất thích chính sách giới thiệu việc làm cho học viên sau khi tốt nghiệp để có thể tiếp với các doanh nghiệp uy tín. Sau hơn 4 tháng học tập tại công ty, tôi đã hoàn toàn tự tin rằng mình có thể tự học hỏi và bắt đầu làm việc ở một công ty mới với vai trò Web Developer. Cảm ơn Fedu vì tất cả!!",
    },
    {
      avatar: "https://i.imgur.com/JI14ZuV.jpg",
      name: "Lưu Quang Thưởng",
      des:
        "-Thầy giáo rất nhiệt tình trong công tác giảng dạy , cũng như vui tính , thầy luôn giúp đỡ bọn e rất nhiệt tình ! Tuy chỉ học với lớp 1 thời gian không quá dài nhưng e cũng cảm thấy tuyệt vời vì đã từng là học trò của thầy ! - Chị Hằng và Chị Quyên rất vui tính và nhiệt tình giúp đỡ bọn e nữa ạ - e chúc trung tâm ngày càng đông học viên hơn nữa",
    },
    {
      avatar: "https://i.imgur.com/upqL8UK.jpg",
      name: "Lã Quang Hưng",
      des:
        "Sau khi học xong khóa thiết kế UI/ UX của thầy Nguyễn Đức Việt mình đã áp dụng được rất dễ dàng, cách truyền đạt của thầy rất dễ hiểu, giọng nói dễ nghe và vui tính ^^ bạn nào có ý định học về cái này thì nên đăng ký khóa học này nhé, cực dễ hiểu luôn. Mong thầy tạo ra nhiều khóa học bổ ích hơn nữa ạ> ",
    },
  ],
];

const dataChoiceUs = [
  {
    image: "https://i.imgur.com/d5bZBXc.png",
    title: "HỌC PHÍ RẺ BẰNG 1/10",
    des:
      "Tại Fedu đây, chỉ từ 270,000đ. Bạn có thể học được các khóa học chất lượng về tin học, lập trình và mỹ thuật đa phương tiện được giảng dạy bởi giảng viên chất lượng quốc tế.",
  },
  {
    image: "https://i.imgur.com/2grWIXU.png",
    title: "HỌC MỌI LÚC - MỌI NƠI - KHÔNG GIỚI HẠN",
    des:
      "Bạn sẽ được học đi học lại nhiều lần nếu chưa hiểu. Lợi thế của các video bạn có thể thực hành và làm theo các bài giảng đã được quay sẵn",
  },
  {
    image: "https://i.imgur.com/vdIMAVX.png",
    title: "KIẾN THỨC THỰC TẾ",
    des:
      "Các bài giảng trong khóa học là những kiến thức thực tế được làm việc trong môi trường quốc tế, giúp học viên có thể làm được việc sau khóa học",
  },
];

const Home = () => {
  const renderFeelOfStudent = () => {
    const content = dataFeeling.map((item) => (
      <WrapCarouselCardTextStyle key={uuidv4()}>
        <RowStyle home="true" gutter={[16, 16]}>
          {item.map((val) => (
            <ColCardTextStyle
              key={uuidv4()}
              xs={24}
              sm={12}
              md={8}
              lg={8}
              xl={8}
              xxl={8}
            >
              <CardText
                name={val.name}
                img={val.avatar}
                description_card_text={sliceText(200, val.des)}
              />
            </ColCardTextStyle>
          ))}
        </RowStyle>
      </WrapCarouselCardTextStyle>
    ));
    return content;
  };

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
        <TitleContentHome> Tại sao chọn chúng tôi? </TitleContentHome>
        <RowStyle home="true" gutter={[16, 16]}>
          {dataChoiceUs.map((item) => (
            <Col key={uuidv4()} xs={24} sm={12} md={7} lg={7} xl={7} xxl={7}>
              <Card
                type="choice"
                description_choice_us={item.des}
                img={item.image}
                title={item.title}
              />
            </Col>
          ))}
        </RowStyle>
        <TitleContentHome>Cảm nhận của học viên</TitleContentHome>
        <Carousel style={{ width: "100vw" }} autoplay>
          {renderFeelOfStudent()}
        </Carousel>
      </WhyChoiceUsStyle>
      <Footer />
    </WrapperPage>
  );
};

export default Home;
