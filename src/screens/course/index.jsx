import React from "react";
import Card from "components/card";
import Header from "components/header";
import Footer from "components/footer";
import { Col, Select } from "antd";

import {
  WrapperPage,
  WarrapperForm,
  TitleContentHome,
  InputStyle,
  InputPasswordStyle,
  FormStyle,
  FormItemStyle,
  ButtonFormStyle,
  SubtitleStyle,
  RowGGFBStyle,
  InputSearchStyle,
  TagAStyle,
  RowStyle,
  PaginationStyle,
} from "screens/style";

const { Option } = Select;

const Course = () => {
  const onSearch = (value) => console.log(value);

  return (
    <WrapperPage>
      <Header />
      <RowStyle course>
        <Col xs={24} sm={12} md={8} lg={5} xl={5} xxl={5}>
          <TagAStyle course>Tất cả khóa học</TagAStyle>
          <TagAStyle course>Thiết kế đồ họa</TagAStyle>
          <TagAStyle course>Font-end</TagAStyle>
          <TagAStyle course>Back-end dùng Wordpress</TagAStyle>
          <TagAStyle course>Back-end dùng PHP</TagAStyle>
          <TagAStyle course>Back-end dùng Nodejs + Reactjs</TagAStyle>
          <TagAStyle course>Làm code bằng Wordpress(không code)</TagAStyle>
          <TagAStyle course>Văn phòng cơ bản cho người mới</TagAStyle>
        </Col>
        <Col
          xs={24}
          sm={12}
          md={8}
          lg={19}
          xl={19}
          xxl={19}
          style={{ background: "white" }}
        >
          <RowStyle search="true">
            <InputSearchStyle
              placeholder="input search text"
              onSearch={onSearch}
              enterButton
            />
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              filterSort={(optionA, optionB) =>
                optionA.children
                  .toLowerCase()
                  .localeCompare(optionB.children.toLowerCase())
              }
            >
              <Option value="1">Not Identified</Option>
              <Option value="2">Closed</Option>
              <Option value="3">Communicated</Option>
              <Option value="4">Identified</Option>
              <Option value="5">Resolved</Option>
              <Option value="6">Cancelled</Option>
            </Select>
          </RowStyle>
          <RowStyle card_course="true" gutter={[16, 16]}>
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
          <PaginationStyle defaultCurrent={6} total={500} />
        </Col>
      </RowStyle>
      <Footer />
    </WrapperPage>
  );
};

export default Course;
