import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Select } from "antd";
import { uid } from "uid";

import Card from "components/card";
import Header from "components/header";
import Footer from "components/footer";
import {
  getCourseAction,
  getCourseSuccessAction,
  createCourseAction,
  updateCourseAction,
  deleteCourseAction,
} from "screens/course/action";

import {
  WrapperPage,
  InputSearchStyle,
  TagAStyle,
  RowStyle,
  PaginationStyle,
  ContentStyle,
  ColStyle,
} from "screens/style";

const { Option } = Select;

const Course = () => {
  const dispatch = useDispatch();
  const allCourse = useSelector((state) => state.course.course);

  const onSearch = (value) => console.log(value);

  const actions = { getCourseAction };

  useEffect(() => {
    dispatch(actions.getCourseAction());
  }, []);

  const renderCard = () => {
    const contentCard = allCourse.map((item) => (
      <Col key={uid(5)} xs={24} sm={12} md={12} lg={8} xl={8} xxl={6}>
        <Card
          type="course"
          img={"https://i.imgur.com/nexvWcY.jpg"}
          author={"Johon Doe"}
          title={item.title}
          old_price={`${item?.old_price} $`}
          new_price={`${item?.new_price} $`}
        />
      </Col>
    ));
    return contentCard;
  };

  return (
    <WrapperPage>
      <Header />
      <ContentStyle>
        <RowStyle course="true">
          <ColStyle
            course_table_content="true"
            xxl={5}
            xl={5}
            lg={5}
            md={24}
            sm={24}
            xs={24}
            className="gutter-row"
          >
            <TagAStyle course>Tất cả khóa học</TagAStyle>
            <TagAStyle course>Thiết kế đồ họa</TagAStyle>
            <TagAStyle course>Font-end</TagAStyle>
            <TagAStyle course>Back-end dùng Wordpress</TagAStyle>
            <TagAStyle course>Back-end dùng PHP</TagAStyle>
            <TagAStyle course>Back-end dùng Nodejs + Reactjs</TagAStyle>
            <TagAStyle course>Làm code bằng Wordpress(không code)</TagAStyle>
            <TagAStyle course>Văn phòng cơ bản cho người mới</TagAStyle>
          </ColStyle>
          <ColStyle
            xs={24}
            sm={24}
            md={24}
            lg={19}
            xl={19}
            xxl={19}
            className="gutter-row"
            course_list_card="true"
          >
            <RowStyle course_search="true">
              <Col span="12">
                <InputSearchStyle
                  placeholder="Nhập tên khóa học tìm kiếm"
                  onSearch={onSearch}
                  style={{ minWidth: "250px" }}
                />
              </Col>
              <Col span="12">
                <Select
                  showSearch
                  style={{ width: 200, textAlign: "start" }}
                  placeholder="Search to Select"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
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
              </Col>
            </RowStyle>
            <RowStyle card_course="true" wrap="true" gutter={[16, 16]}>
              {renderCard()}
            </RowStyle>
            <PaginationStyle defaultCurrent={6} total={500} />
          </ColStyle>
        </RowStyle>
      </ContentStyle>
      <Footer />
    </WrapperPage>
  );
};

export default Course;
