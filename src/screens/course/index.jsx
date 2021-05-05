import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Select } from "antd";
import { uid } from "uid";

import Card from "components/card";
import Header from "components/header";
import Footer from "components/footer";
import { getCourseAction, getTeacherAction } from "screens/course/action";
import { TYPE_COURSE_OPTION } from "utils/constant";

import { WrapperPage, InputSearchStyle, TagAStyle, RowStyle, PaginationStyle, ContentStyle, ColStyle, NoCourseStyle } from "screens/style";

const { Option } = Select;

const Course = () => {
  const dispatch = useDispatch();
  const allCourse = useSelector((state) => state.course.course);
  const paging = useSelector((state) => state.course.paging);
  const listTeacher = useSelector((state) => state.course.listTeacher);

  const actions = { getCourseAction, getTeacherAction };

  useEffect(() => {
    dispatch(actions.getCourseAction({}));
    dispatch(actions.getTeacherAction({ search: [{ key: "position", value: 1 }] }));
  }, []);

  const onSearch = (value) => {
    dispatch(actions.getCourseAction({ search: [{ key: "title", value: value }] }));
  };

  const renderListTypeOfCourse = () => {
    const contentListTypeOfCourse = TYPE_COURSE_OPTION.map((item) => (
      <TagAStyle
        key={uid(5)}
        onClick={() =>
          dispatch(
            actions.getCourseAction({
              search: [{ key: "type", value: item.value }],
            })
          )
        }
        course
      >
        {item.label}
      </TagAStyle>
    ));
    return contentListTypeOfCourse;
  };

  const renderCard = () => {
    let contentCard = allCourse.map((item) => (
      <Col key={uid(5)} xs={24} sm={12} md={12} lg={8} xl={8} xxl={6}>
        <Card type="course" img={item?.photo?.photo || "https://i.imgur.com/0jk1ek2.jpg"} author={item.user} title={item.title} old_price={item?.old_price} new_price={item?.new_price} />
      </Col>
    ));
    if (contentCard.length < 1) {
      contentCard = <NoCourseStyle>Không có khóa học nào!</NoCourseStyle>;
    }
    return contentCard;
  };

  const renderListTeacher = () => {
    const contentListTeacher = listTeacher.map((item) => (
      <Option key={uid(5)} value={item.id}>
        {item.username}
      </Option>
    ));
    return contentListTeacher;
  };

  const onSearchTeacher = (value) => {
    dispatch(actions.getCourseAction({ search: [{ key: "user_id", value: value }] }));
  };

  const onChange = (value) => {
    dispatch(actions.getCourseAction({ page: value }));
  };

  return (
    <WrapperPage>
      <Header />
      <ContentStyle>
        <RowStyle course="true">
          <ColStyle course_table_content="true" xxl={5} xl={5} lg={5} md={24} sm={24} xs={24} className="gutter-row">
            {renderListTypeOfCourse()}
          </ColStyle>
          <ColStyle xs={24} sm={24} md={24} lg={19} xl={19} xxl={19} className="gutter-row" course_list_card="true">
            <RowStyle course_search="true">
              <Col span="12">
                <InputSearchStyle placeholder="Nhập tên khóa học tìm kiếm" onSearch={onSearch} style={{ minWidth: "250px" }} />
              </Col>
              <Col span="12">
                <Select
                  showSearch
                  style={{ width: 200, textAlign: "start" }}
                  onChange={onSearchTeacher}
                  placeholder="Search to Select"
                  optionFilterProp="children"
                  filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                  filterSort={(optionA, optionB) => optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())}
                >
                  {renderListTeacher()}
                </Select>
              </Col>
            </RowStyle>
            <RowStyle card_course="true" wrap="true" gutter={[16, 16]}>
              {renderCard()}
            </RowStyle>
            {allCourse.length > 0 && <PaginationStyle current={paging.page} onChange={onChange} total={paging.total_record} />}
          </ColStyle>
        </RowStyle>
      </ContentStyle>
      <Footer />
    </WrapperPage>
  );
};

export default Course;
