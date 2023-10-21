import React from "react";
import Slider from "react-slick";
import { useState } from "react";

const datas = [
  {
    name: " TƯ VẤN VIÊN ",
    title:
      "Đảm bảo thông tin về dịch vụ và sản phẩm mà các Tư vấn viên truyền tải đến khách hàng được thực hiện một cách chính xác và lịch sử trị liệu của khách hàng được lưu giữ đầy đủ. Đồng thời theo dõi và hỗ trợ cho đến khi liệu trình kết thúc nhằm đạt được sự hài lòng tuyệt đối từ khách hàng.",
  },
  {
    name: "BÁC SĨ  ",
    title:
      "Trực tiếp thăm khám và điều trị cho khách hàng. Tương tác với các bác sĩ cũng như Trưởng chi nhánh, tạo nên phong cách chăm sóc chuyên nghiệp và chuyên môn cao. Đảm bảo mọi thông tin tư vấn cho khách hàng cũng như việc thực hiện các liệu trình theo đúng quy định của công ty đề ra.",
  },
  {
    name: "KỸ THUẬT VIÊN",
    title:
      "Thực hiện liệu trình trị liệu cho khách hàng và hỗ trợ bác sĩ. Đảm bảo các quy trình trị liệu được thực hiện đúng và chuẩn xác theo tiêu chuẩn của công ty đề ra. Đảm bảo trải nghiệm của khách luôn đạt mức cao nhất kể từ lần đầu tiên khách bước chân vào clinic đến khi khách ra về.",
  },
  {
    name: "CLINIC RECEPTION",
    title:
      "Đảm bảo quy trình tiếp đón khách hàng được thực hiện một cách chuyên nghiệp. Chịu trách nhiệm chăm sóc khách hàng khi khách đến Clinic. Thực hiện thu tiền, xuất invoixe cho khách hàng. Tạo bộ mặt nhằm xây dựng hình ảnh thương hiệu cho Công ty",
  },
];
export default function index() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="w-full h-screen flex" >
     
        {datas.map((data, index) => (
          <div key={index}>
            {" "}
            <div
              style={{
                margin: 0,
                blockSize: "448px",
                boxSizing: "border-box",
                fontFamily: "Comfortaa, Arial",
                fontSize: "16px",
                inlineSize: "366.663px",
                lineHeight: "18.4px",
                listStyleType: "none",
                minBlockSize: "auto",
                minHeight: "auto",
                minInlineSize: "auto",
                minWidth: "auto",
                textAlign: "left",
                textSizeAdjust: "100%",
                width: "366.663px",
                height: "448px",
              }}
              id={"pgc-w4abcce41-0-2"}
              className="panel-grid-cell px-5"
            >
              <div
                style={{
                  blockSize: "448px",
                  boxSizing: "border-box",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: "16px",
                  inlineSize: "366.663px",
                  lineHeight: "18.4px",
                  listStyleType: "none",
                  marginLeft: 0,
                  marginRight: 0,
                  textAlign: "left",
                  textSizeAdjust: "100%",
                }}
                id={"panel-w4abcce41-0-2-0"}
                className={
                  "so-panel widget widget_sow-editor panel-first-child panel-last-child"
                }
                data-index={2}
              >
                <div
                  style={{
                    backgroundColor: "rgb(255, 255, 255)",
                    blockSize: "448px",
                    borderBottomLeftRadius: "24px",
                    borderBottomRightRadius: "24px",
                    borderEndEndRadius: "24px",
                    borderEndStartRadius: "24px",
                    borderStartEndRadius: "24px",
                    borderStartStartRadius: "24px",
                    borderTopLeftRadius: "24px",
                    borderTopRightRadius: "24px",
                    boxShadow: "rgba(255, 103, 152, 0.31) 0px 3px 30px 0px",
                    boxSizing: "border-box",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: "16px",
                    inlineSize: "366.663px",
                    lineHeight: "18.4px",
                    listStyleType: "none",
                    marginLeft: 0,
                    marginRight: 0,
                    maxInlineSize: "398px",
                    maxWidth: "398px",
                    paddingBlockEnd: "30px",
                    paddingBlockStart: "30px",
                    paddingBottom: "30px",
                    paddingInlineEnd: "30px",
                    paddingInlineStart: "30px",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                    paddingTop: "30px",
                    textAlign: "left",
                    textSizeAdjust: "100%",
                  }}
                  className={
                    "vacancy panel-widget-style panel-widget-style-for-w4abcce41-0-2-0"
                  }
                >
                  <div
                    style={{
                      blockSize: "358px",
                      boxSizing: "border-box",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: "16px",
                      inlineSize: "306.663px",
                      lineHeight: "18.4px",
                      listStyleType: "none",
                      marginLeft: 0,
                      marginRight: 0,
                      textAlign: "left",
                      textSizeAdjust: "100%",
                    }}
                    className={"so-widget-sow-editor so-widget-sow-editor-base"}
                  >
                    <div
                      style={{
                        blockSize: "358px",
                        boxSizing: "border-box",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "16px",
                        inlineSize: "306.663px",
                        lineHeight: "18.4px",
                        listStyleType: "none",
                        marginLeft: 0,
                        marginRight: 0,
                        textAlign: "left",
                        textSizeAdjust: "100%",
                      }}
                      className={"siteorigin-widget-tinymce textwidget"}
                    >
                      <h4
                        style={{
                          blockSize: "29px",
                          boxSizing: "border-box",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "17px",
                          inlineSize: "306.663px",
                          lineHeight: "29px",
                          listStyleType: "none",
                          marginBlockEnd: "20px",
                          marginBlockStart: "0px",
                          marginBottom: "20px",
                          marginLeft: 0,
                          marginRight: 0,
                          marginTop: "0px",
                          textAlign: "center",
                          textSizeAdjust: "100%",
                          textTransform: "uppercase",
                        }}
                      >
                        {data.name}
                      </h4>
                      <p
                        style={{
                          blockSize: "234px",
                          boxSizing: "border-box",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "16px",
                          inlineSize: "306.663px",
                          lineHeight: "26px",
                          listStyleType: "none",
                          marginBlockEnd: "25px",
                          marginBlockStart: "0px",
                          marginBottom: "25px",
                          marginLeft: 0,
                          marginRight: 0,
                          marginTop: "0px",
                          textAlign: "center",
                          textSizeAdjust: "100%",
                        }}
                      >
                        {data.title}
                      </p>
                      <p
                        style={{
                          blockSize: "45px",
                          boxSizing: "border-box",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "16px",
                          inlineSize: "306.663px",
                          lineHeight: "26px",
                          listStyleType: "none",
                          marginBlockEnd: "25px",
                          marginBlockStart: "0px",
                          marginBottom: "25px",
                          marginLeft: 0,
                          marginRight: 0,
                          marginTop: "0px",
                          textAlign: "center",
                          textSizeAdjust: "100%",
                        }}
                      >
                        <a
                          style={{
                            alignItems: "center",
                            backgroundColor: "rgb(244, 194, 214)",
                            blockSize: "45px",
                            borderBlockEndColor: "rgb(255, 255, 255)",
                            borderBlockStartColor: "rgb(255, 255, 255)",
                            borderBottomColor: "rgb(255, 255, 255)",
                            borderBottomLeftRadius: "30px",
                            borderBottomRightRadius: "30px",
                            borderEndEndRadius: "30px",
                            borderEndStartRadius: "30px",
                            borderInlineEndColor: "rgb(255, 255, 255)",
                            borderInlineStartColor: "rgb(255, 255, 255)",
                            borderLeftColor: "rgb(255, 255, 255)",
                            borderRightColor: "rgb(255, 255, 255)",
                            borderStartEndRadius: "30px",
                            borderStartStartRadius: "30px",
                            borderTopColor: "rgb(255, 255, 255)",
                            borderTopLeftRadius: "30px",
                            borderTopRightRadius: "30px",
                            boxShadow:
                              "rgba(255, 103, 152, 0.31) 0px 3px 30px 0px",
                            boxSizing: "border-box",
                            caretColor: "rgb(255, 255, 255)",
                            color: "rgb(255, 255, 255)",
                            columnRuleColor: "rgb(255, 255, 255)",
                            cursor: "pointer",
                            display: "flex",
                            fontFamily: "Comfortaa, Arial",
                            fontSize: "17px",
                            inlineSize: "172px",
                            justifyContent: "center",
                            lineHeight: "26px",
                            listStyleType: "none",
                            marginBlockEnd: "30px",
                            marginBlockStart: "30px",
                            marginBottom: "30px",
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginTop: "30px",
                            outlineColor: "rgb(255, 255, 255)",
                            textAlign: "center",
                            textDecoration: "none",
                            textDecorationColor: "rgb(255, 255, 255)",
                            textEmphasisColor: "rgb(255, 255, 255)",
                            textSizeAdjust: "100%",
                            transitionDuration: "0.3s",
                            WebkitBoxAlign: "center",
                            WebkitBoxPack: "center",
                            WebkitTextFillColor: "rgb(255, 255, 255)",
                            WebkitTextStrokeColor: "rgb(255, 255, 255)",
                            width: "172px",
                            height: "45px",
                          }}
                          className={"bc-d pum-trigger"}
                        >
                          ỨNG TUYỂN
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
  
    </div>
  );
}
