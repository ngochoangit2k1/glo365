import React, { useState } from "react";

const data = [
  {
    name: "LIỆU TRÌNH ĐỘC QUYỀN",
    imageurl:
      "https://glo365.vn/wp-content/uploads/2019/09/fastetics-Small.svg",
    title:
      "Chăm sóc da công nghệ cao độc quyền chuẩn y khoa được thực hiện nhanh chóng, an toàn và mang đến hiệu quả cải thiện rõ rệt sau mỗi lần điều trị, phù hợp với nhịp sống hiện đại",
    block: [
      { titlename: "P+ LASER", link: "/services/p-plus-laser-promo/" },
      { titlename: "PHOTO FACIAL", link: "/services/photo-facial/" },
      { titlename: "FACE GYM", link: "/services/face-gym-promo/" },
      { titlename: "HYDRA GLOW", link: "/services/hydrafacial-promo/" },
    ],
  },
  {
    name: "TRẺ HOÁ DA",
    imageurl:
      "https://glo365.vn/wp-content/uploads/2019/09/skin-Revolution-Small.svg",
    title:
      "Bước tiến mới trong ngành thẩm mỹ nội khoa với các công nghệ điều trị chuyên sâu, mang đến hiệu quả cải thiện bề mặt da, làn da được thay mới với kết cấu mịn màng và đàn hồi hơn",
    block: [
      { titlename: "PICO SMOOTH", link: "" },
      { titlename: "MICRONEEDLING", link: "" },
      { titlename: "GLAMOUR PEEL", link: "" },
    ],
  },
  {
    name: "TIÊM THẨM MỸ",
    imageurl:
      "https://glo365.vn/wp-content/uploads/2019/09/walk-in-glow-out-big-small.svg",
    title:
      "Tổng hợp các liệu trình tiêm trẻ hoá đỉnh cao cho hiệu quả nâng cơ, xoá nhăn, làm đầy thể tích da và tạo hình thẩm mỹ được FDA Hoa Kỳ chứng nhận an toàn, trực tiếp thực hiện bởi đội ngũ bác sĩ giàu chuyên môn và kinh nghiệm được đào tạo tại nước ngoài.",
    block: [
      { titlename: "BOTOX", link: "" },
      { titlename: "DERMA FILLER", link: "" },
      { titlename: "YOUTH SAVANT", link: "" },
      { titlename: "MESOTHERAPY", link: "" },
      { titlename: "SCULPTRA", link: "" },
      { titlename: "CHIN UP", link: "" },
    ],
  },
  {
    name: "XOÁ NHĂN NÂNG CƠ",
    imageurl:
      "https://glo365.vn/wp-content/uploads/2019/09/young-lift-small.svg",
    title:
      "Trị liệu không xâm lấn hiện đại giúp căng da, xoá nhăn, nâng cơ chùng nhão, mang đến hiệu quả trẻ hoá ngay tức thì, cho một diện mạo năng động hơn, thích hợp với độ tuổi từ 30 trở đi. ",
    block: [
      { titlename: "THERMAGE FLX", link: "" },
      { titlename: "THREAD LIFT", link: "" },
      { titlename: "HIFU SYGMALIFT", link: "" },
      { titlename: "ULTHERAPY", link: "" },
    ],
  },
  {
    name: "TRẺ HOÁ MẮT",
    imageurl:
      "https://glo365.vn/wp-content/uploads/2019/09/glow-eyes-small.svg",
    title:
      "Các điều trị chuyên sâu cho vùng mắt giúp phục hồi ánh nhìn trẻ trung đúng chuẩn 'yêu từ cái nhìn đầu tiên.",
    block: [
      { titlename: "GOLDEN EYE", link: "" },
      { titlename: "THERMAGE EYE", link: "" },
      { titlename: "REVITALIFT EYE", link: "" },
    ],
  },
  {
    name: "FACIAL CÔNG NGHỆ CAO",
    imageurl:
      "https://glo365.vn/wp-content/uploads/2019/09/facialistic-small.svg",
    title:
      "Facial cao cấp thế hệ mới ứng dụng máy móc công nghệ giúp tối ưu hoá hiệu quả điều trị mà vẫn đảm bảo sự tinh tế, thư giãn và nhẹ nhàng. ",
    block: [
      { titlename: "HYDRAFACIAL", link: "" },
      { titlename: "RED CARPET", link: "" },
      { titlename: "CLEAR BLUE", link: "" },
    ],
  },
  {
    name: "ĐIỀU TRỊ CƠ THỂ ",
    imageurl:
      "https://glo365.vn/wp-content/uploads/2019/09/bodiology-small.svg",
    title:
      "Giải pháp chuyên biệt giúp chăm sóc toàn diện, giảm mỡ và thon gọn các vùng trên cơ thể, mang đến thân hình lý tưởng mà bạn hằng mong ước mà không cần đến các biện pháp phẫu thuật.",
    block: [
      { titlename: "BODY CONTOUR", link: "" },
      { titlename: "FAT FREEZING", link: "" },
    ],
  },
  {
    name: "ĐIỀU TRỊ TÓC",
    imageurl:
      "https://glo365.vn/wp-content/uploads/2019/09/all-about-hair-small.svg",
    title:
      "Ứng dụng công nghệ tiên tiến vượt bậc kết hợp với các liệu pháp điều trị độc quyền tại Glo365. Bạn sẽ ngạc nhiên về kết quả đấy.",
    block: [
      { titlename: "MAX GROWTH", link: "" },
      { titlename: "GROWTH BOOSTER", link: "" },
      { titlename: "HAIR REMOVAL", link: "" },
    ],
  },
  {
    name: "XOÁ XĂM",
    imageurl:
      "https://glo365.vn/wp-content/uploads/2019/09/bodiology-small.svg",
    title:
      "Nhờ công nghệ Laser Pico thế hệ mới, giờ đây bạn có thể loại bỏ hình xăm một cách nhanh chóng và sạch sẽ, trả lại làn da đều màu và sáng khỏe như ban đầu.",
    block: [{ titlename: "PICO TATTOO REMOVAL", link: "" }],
  },
];
export default function index() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [openMenu, setOpenMenu] = useState("");

  return (
    <div className=" w-screen h-auto flex flex-col items-center ">
      <h2
        style={{
          boxSizing: "border-box",
          fontFamily: "Comfortaa, Arial",
          fontSize: "40px",
          fontWeight: 300,
          lineHeight: "56px",
          marginBlockEnd: "0px",
          marginBlockStart: "0px",
          marginBottom: "0px !important",
          marginLeft: 0,
          marginRight: 0,
          marginTop: "0px !important",
          textAlign: "center",
          textSizeAdjust: "100%",
          textTransform: "uppercase",
        }}
        className="sow-headline py-10"
      >
        Dịch vụ thẩm mỹ
      </h2>

      {data.map((item, i) => (
        <div className=" w-9/12 h   flex flex-col items-center justify-center">
          {" "}
          <div
            key={i}
            style={{
              boxSizing: "border-box",
              fontFamily: "Comfortaa, Arial",
              fontSize: "16px",
            }}
            id={"panel-626-1-0-0"}
            onClick={() => {
              setOpenMenu(item.name === openMenu ? "" : item.name), toggle;
            }}
            data-index={2}
          >
            <div
              style={{
                backgroundColor: "rgb(255, 255, 255)",
                borderBottomLeftRadius: "20px",
                borderBottomRightRadius: "20px",
                borderEndEndRadius: "20px",
                borderEndStartRadius: "20px",
                borderStartEndRadius: "20px",
                borderStartStartRadius: "20px",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                bottom: "0px",
                boxShadow: "rgba(255, 103, 152, 0.31) 0px 3px 30px 0px",
                boxSizing: "border-box",
                fontFamily: "Comfortaa, Arial",
                fontSize: "16px",
                insetBlockEnd: "0px",
                insetBlockStart: "0px",
                insetInlineEnd: "0px",
                insetInlineStart: "0px",
                left: "0px",
                lineHeight: "18.4px",
                marginLeft: 0,
                marginRight: 0,
                paddingBlockEnd: "20px",
                paddingBlockStart: "20px",
                paddingBottom: "20px",
                paddingInlineEnd: "20px",
                paddingInlineStart: "20px",
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingTop: "20px",
                position: "relative",
                right: "0px",
                textSizeAdjust: "100%",
                top: "0px",
              }}
              className={` my-10 ${
                openMenu === item.name ? "h-1/3 " : "h-20 "
              }`}
              id={"musthave"}
            >
              <h3
                style={{
                  backgroundSize: "14px",
                  boxSizing: "border-box",
                  cursor: "pointer",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: "25px",
                  fontWeight: 400,
                  inlineSize: "1160px",
                  lineHeight: "25px",
                  marginBlockEnd: "0px",
                  marginBlockStart: "0px",
                  marginBottom: "0px !important",
                  marginLeft: 0,
                  marginRight: 0,
                  marginTop: "0px",
                  textAlign: "center",
                  textSizeAdjust: "100%",
                  textTransform: "uppercase",
                  userSelect: "none",
                }}
                className={` hover:text-pink-600  ${openMenu === item.name ? "hidden " : "block"}`}
              >
                {" "}
                {item.name}
              </h3>

              <div
                style={{
                  boxSizing: "border-box",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: "16px",
                  inlineSize: "1160px",
                  lineHeight: "18.4px",
                  marginLeft: 0,
                  marginRight: 0,
                  textSizeAdjust: "100%",
                  userSelect: "none",
                }}
                id={"pl-w64f4c4564fe52"}
                className={`panel-layout ${
                  openMenu === item.name ? "block" : "hidden"
                }`}
              >
                <div
                  style={{
                    alignItems: "flex-start",
                    boxSizing: "border-box",
                    display: "flex",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: "16px",
                    inlineSize: "1160px",
                    justifyContent: "space-between",
                    lineHeight: "18.4px",
                    marginLeft: 0,
                    marginRight: 0,
                    textSizeAdjust: "100%",
                    userSelect: "none",
                  }}
                  id={"pg-w64f4c4564fe52-0"}
                  className={"panel-grid panel-no-style"}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: "16px",
                      inlineSize: "1160px",
                      lineHeight: "18.4px",
                      marginLeft: 0,
                      marginRight: 0,
                      minHeight: "auto",
                      minInlineSize: "auto",
                      minWidth: "auto",
                      textSizeAdjust: "100%",
                      userSelect: "none",
                      width: "calc(100% - 0px)",
                    }}
                    id={"pgc-w64f4c4564fe52-0-0"}
                    className={"panel-grid-cell"}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "16px",
                        inlineSize: "1160px",
                        lineHeight: "18.4px",
                        marginLeft: 0,
                        marginRight: 0,
                        textSizeAdjust: "100%",
                        userSelect: "none",
                      }}
                      id={"panel-w64f4c4564fe52-0-0-0"}
                      className={
                        "so-panel widget widget_sow-image panel-first-child panel-last-child"
                      }
                      data-index={0}
                    >
                      <div
                        style={{
                          boxSizing: "border-box",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "16px",
                          inlineSize: "1160px",
                          lineHeight: "18.4px",
                          marginLeft: 0,
                          marginRight: 0,
                          textSizeAdjust: "100%",
                          userSelect: "none",
                        }}
                        className={
                          "so-widget-sow-image so-widget-sow-image-default-6b88c04c1f9b"
                        }
                      >
                        <div
                          style={{
                            alignItems: "center",
                            backgroundColor: "rgb(255, 255, 255)",
                            borderBottomLeftRadius: "50%",
                            borderBottomRightRadius: "50%",
                            borderEndEndRadius: "50%",
                            borderEndStartRadius: "50%",
                            borderStartEndRadius: "50%",
                            borderStartStartRadius: "50%",
                            borderTopLeftRadius: "50%",
                            borderTopRightRadius: "50%",
                            boxShadow:
                              "rgba(255, 96, 71, 0.31) 0px 3px 30px 0px",
                            boxSizing: "border-box",
                            display: "flex",
                            fontFamily: "Comfortaa, Arial",
                            fontSize: "16px",
                            inlineSize: "100px",
                            justifyContent: "center",
                            lineHeight: "18.4px",
                            marginBlockEnd: "20px",
                            marginBlockStart: "20px",
                            marginBottom: "20px",
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginTop: "20px",
                            textSizeAdjust: "100%",
                            userSelect: "none",
                            WebkitBoxAlign: "center",
                            width: "100px",
                            height: "100px",
                          }}
                          className={"sow-image-container"}
                        >
                          <img
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              fontFamily: "Comfortaa, Arial",
                              fontSize: "16px",
                              inlineSize: "50px",
                              lineHeight: "18.4px",
                              marginLeft: 0,
                              marginRight: 0,
                              maxInlineSize: "100%",
                              maxWidth: "100%",
                              minHeight: "auto",
                              minInlineSize: "auto",
                              minWidth: "auto",
                              textSizeAdjust: "100%",
                              userSelect: "none",
                              width: "50px",
                            }}
                            src={item.imageurl}
                            width={1}
                            height={1}
                            data-lazy-sizes={"(max-width: 1px) 100vw, 1px"}
                            title={"Liệu trình độc quyền"}
                            className={"so-widget-image entered lazyloaded"}
                            data-lazy-src={item.imageurl}
                            data-ll-status={"loaded"}
                            sizes={"(max-width: 1px) 100vw, 1px"}
                          ></img>
                          <noscript
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              fontFamily: "Comfortaa, Arial",
                              fontSize: "16px",
                              lineHeight: "18.4px",
                              marginLeft: 0,
                              marginRight: 0,
                              textSizeAdjust: "100%",
                              userSelect: "none",
                            }}
                          >
                            <img
                              src={item.imageurl}
                              width="1"
                              height="1"
                              sizes="(max-width: 1px) 100vw, 1px"
                              title="Liệu trình độc quyền"
                              alt=""
                              class="so-widget-image"
                            />
                          </noscript>
                        </div>

                        <h3
                          style={{
                            backgroundSize: "14px",
                            boxSizing: "border-box",
                            cursor: "pointer",
                            fontFamily: "Comfortaa, Arial",
                            fontSize: "25px",
                            fontWeight: 400,
                            inlineSize: "1160px",
                            lineHeight: "25px",
                            marginBlockEnd: "0px",
                            marginBlockStart: "0px",
                            marginBottom: "0px !important",
                            marginLeft: 0,
                            marginRight: 0,
                            marginTop: "0px",
                            textAlign: "center",
                            textSizeAdjust: "100%",
                            textTransform: "uppercase",
                            userSelect: "none",
                          }}
                          className={"widget-title"}
                        >
                          {item.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    boxSizing: "border-box",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: "16px",
                    inlineSize: "1160px",
                    lineHeight: "18.4px",
                    marginLeft: 0,
                    marginRight: 0,
                    textSizeAdjust: "100%",
                    userSelect: "none",
                  }}
                  id={"pg-w64f4c4564fe52-1"}
                  className={"panel-grid panel-has-style"}
                >
                  <div
                    style={{
                      alignItems: "flex-start",
                      boxSizing: "border-box",
                      display: "flex",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: "16px",
                      inlineSize: "1160px",
                      justifyContent: "space-between",
                      lineHeight: "18.4px",
                      marginLeft: 0,
                      marginRight: 0,
                      textSizeAdjust: "100%",
                      userSelect: "none",
                    }}
                    className={
                      "acc-panel panel-row-style panel-row-style-for-w64f4c4564fe52-1"
                    }
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "16px",
                        inlineSize: "1160px",
                        lineHeight: "18.4px",
                        marginLeft: 0,
                        marginRight: 0,
                        textSizeAdjust: "100%",
                        userSelect: "none",
                      }}
                      id={"pgc-w64f4c4564fe52-1-0"}
                      className={"panel-grid-cell"}
                    >
                      <div
                        style={{
                          boxSizing: "border-box",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "16px",
                          inlineSize: "1160px",
                          lineHeight: "18.4px",
                          marginBlockEnd: "30px",
                          marginBlockStart: "15px",
                          marginBottom: "30px",
                          marginLeft: 0,
                          marginRight: 0,
                          marginTop: "15px",
                          textSizeAdjust: "100%",
                          userSelect: "none",
                        }}
                        id={"panel-w64f4c4564fe52-1-0-0"}
                        className={
                          "so-panel widget widget_sow-editor panel-first-child"
                        }
                        data-index={1}
                      >
                        <div
                          style={{
                            boxSizing: "border-box",
                            display: "block !important",
                            fontFamily: "Comfortaa, Arial",
                            fontSize: "16px",
                            inlineSize: "1160px",
                            lineHeight: "18.4px",
                            marginLeft: 0,
                            marginRight: 0,
                            textSizeAdjust: "100%",
                            userSelect: "none",
                          }}
                          className={
                            "acc-panel acc-text panel-widget-style panel-widget-style-for-w64f4c4564fe52-1-0-0"
                          }
                        >
                          <div
                            style={{
                              boxSizing: "border-box",
                              fontFamily: "Comfortaa, Arial",
                              fontSize: "16px",
                              inlineSize: "1160px",
                              lineHeight: "18.4px",
                              marginLeft: 0,
                              marginRight: 0,
                              textSizeAdjust: "100%",
                              userSelect: "none",
                            }}
                            className={
                              "so-widget-sow-editor so-widget-sow-editor-base"
                            }
                          >
                            <div
                              style={{
                                boxSizing: "border-box",
                                fontFamily: "Comfortaa, Arial",
                                fontSize: "16px",
                                inlineSize: "1160px",
                                lineHeight: "18.4px",
                                marginLeft: 0,
                                marginRight: 0,
                                textSizeAdjust: "100%",
                                userSelect: "none",
                              }}
                              className={"siteorigin-widget-tinymce textwidget"}
                            >
                              <p
                                style={{
                                  alignItems: "center",
                                  boxSizing: "border-box",
                                  display: "flex",
                                  fontFamily: "Comfortaa, Arial",
                                  fontSize: "16px",
                                  inlineSize: "1160px",
                                  justifyContent: "center",
                                  lineHeight: "22px",
                                  marginBlockEnd: "0px",
                                  marginBlockStart: "0px",
                                  marginBottom: "0px",
                                  marginLeft: 0,
                                  marginRight: 0,
                                  marginTop: "0px",
                                  textAlign: "center",
                                  textSizeAdjust: "100%",
                                  userSelect: "none",
                                  WebkitBoxAlign: "center",
                                  WebkitBoxPack: "center",
                                }}
                              >
                                <span
                                  style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    fontFamily: "Comfortaa, Arial",
                                    fontSize: "16px",
                                    inlineSize: "769.388px",
                                    lineHeight: "22px",
                                    marginLeft: 0,
                                    marginRight: 0,
                                    minHeight: "auto",
                                    minInlineSize: "auto",
                                    minWidth: "auto",
                                    textAlign: "center",
                                    textSizeAdjust: "100%",
                                    userSelect: "none",
                                  }}
                                >
                                  {item.title}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                        <div className="w-10/12 ml-[10%]"> 
                          <div className="grid grid-cols-3 " >
                        {item.block.map((noneblock, index) => (
                          <div
                            key={index}
                            style={{
                              boxSizing: "border-box",
                              fontFamily: "Comfortaa, Arial",
                              fontSize: "16px",
                              inlineSize: "1160px",
                              lineHeight: "18.4px",
                              marginLeft: 0,
                              marginRight: 0,
                              textSizeAdjust: "100%",
                              userSelect: "none",
                            }}
                            className={
                              "siteorigin-widget-tinymce textwidget flex "
                            }
                          >
                            <p
                              style={{
                                alignItems: "center",
                                boxSizing: "border-box",
                                display: "flex",
                                fontFamily: "Comfortaa, Arial",
                                fontSize: "16px",
                                justifyContent: "center",
                                lineHeight: "22px",
                                marginBlockEnd: "0px",
                                marginBlockStart: "0px",
                                marginBottom: "0px",
                                marginLeft: 0,
                                marginRight: 0,
                                marginTop: "0px",
                                textAlign: "center",
                                textSizeAdjust: "100%",
                                userSelect: "none",
                                WebkitBoxAlign: "center",
                                WebkitBoxPack: "center",
                              }}
                            >
                              <a
                                style={{
                                  alignItems: "center",
                                  borderBlockEndColor: "rgb(244, 194, 214)",
                                  borderBlockEndStyle: "solid",
                                  borderBlockEndWidth: "0.8px",
                                  borderBlockStartColor: "rgb(244, 194, 214)",
                                  borderBlockStartStyle: "solid",
                                  borderBlockStartWidth: "0.8px",
                                  borderBottomColor: "rgb(244, 194, 214)",
                                  borderBottomLeftRadius: "35px",
                                  borderBottomRightRadius: "35px",
                                  borderBottomStyle: "solid",
                                  borderBottomWidth: "0.8px",
                                  borderEndEndRadius: "35px",
                                  borderEndStartRadius: "35px",
                                  borderInlineEndColor: "rgb(244, 194, 214)",
                                  borderInlineEndStyle: "solid",
                                  borderInlineEndWidth: "0.8px",
                                  borderInlineStartColor: "rgb(244, 194, 214)",
                                  borderInlineStartStyle: "solid",
                                  borderInlineStartWidth: "0.8px",
                                  borderLeftColor: "rgb(244, 194, 214)",
                                  borderLeftStyle: "solid",
                                  borderLeftWidth: "0.8px",
                                  borderRightColor: "rgb(244, 194, 214)",
                                  borderRightStyle: "solid",
                                  borderRightWidth: "0.8px",
                                  borderStartEndRadius: "35px",
                                  borderStartStartRadius: "35px",
                                  borderTopColor: "rgb(244, 194, 214)",
                                  borderTopLeftRadius: "35px",
                                  borderTopRightRadius: "35px",
                                  borderTopStyle: "solid",
                                  borderTopWidth: "0.8px",
                                  boxSizing: "border-box",
                                  cursor: "pointer",
                                  display: "inline-flex",
                                  flexDirection: "column",
                                  fontFamily: "Comfortaa, Arial",
                                  fontSize: "12px",
                                  fontWeight: 300,
                                  inlineSize: "248px",
                                  justifyContent: "center",
                                  lineHeight: "14px",
                                  marginBlockEnd: "40px",
                                  marginBlockStart: "30px",
                                  marginBottom: "40px",
                                  marginLeft: 0,
                                  marginRight: 0,
                                  marginTop: "30px",
                                  minHeight: "auto",
                                  minInlineSize: "auto",
                                  minWidth: "auto",
                                  textAlign: "center",
                                  textDecoration: "none",
                                  textSizeAdjust: "100%",
                                  transitionDuration: "0.3s",
                                  userSelect: "none",
                                  WebkitBoxAlign: "center",
                                  WebkitBoxOrient: "vertical",
                                  WebkitBoxPack: "center",
                                  width: "248px",
                                  height: "70px",
                                }}
                                href={noneblock.link}
                              >
                                <strong
                                  style={{
                                    boxSizing: "border-box",
                                    cursor: "pointer",
                                    display: "block",
                                    fontFamily: "Comfortaa, Arial",
                                    fontSize: "17px",
                                    inlineSize: "81.6625px",
                                    lineHeight: "19px",
                                    marginLeft: 0,
                                    marginRight: 0,
                                    minHeight: "auto",
                                    minInlineSize: "auto",
                                    minWidth: "auto",
                                    textAlign: "center",
                                    textSizeAdjust: "100%",
                                    userSelect: "none",
                                  }}
                                >
                                  {noneblock.titlename}
                                </strong>
                              </a>
                                   
                            </p>
                          </div>
                        ))}
                      </div></div>             
                      

                      <div
                        style={{
                          boxSizing: "border-box",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "16px",
                          inlineSize: "1160px",
                          lineHeight: "18.4px",
                          marginBlockEnd: "30px",
                          marginBottom: "30px",
                          marginLeft: 0,
                          marginRight: 0,
                          textSizeAdjust: "100%",
                          userSelect: "none",
                        }}
                        id={"panel-w64f4c4564fe52-1-0-2"}
                        className={"so-panel widget widget_ink-buttons"}
                        data-index={3}
                      >
                        <div
                          style={{
                            boxSizing: "border-box",
                            display: "block !important",
                            fontFamily: "Comfortaa, Arial",
                            fontSize: "16px",
                            inlineSize: "1160px",
                            lineHeight: "18.4px",
                            marginBlockEnd: "15px",
                            marginBottom: "15px",
                            marginLeft: 0,
                            marginRight: 0,
                            textSizeAdjust: "100%",
                            userSelect: "none",
                          }}
                          className={
                            "acc-panel btn-pink panel-widget-style panel-widget-style-for-w64f4c4564fe52-1-0-2"
                          }
                        >
                          <div
                            style={{
                              boxSizing: "border-box",
                              fontFamily: "Comfortaa, Arial",
                              fontSize: "16px",
                              inlineSize: "1160px",
                              lineHeight: "18.4px",
                              marginLeft: 0,
                              marginRight: 0,
                              textSizeAdjust: "100%",
                              userSelect: "none",
                            }}
                            className={
                              "so-widget-ink-buttons so-widget-ink-buttons-buttons-b5aaee92b35d"
                            }
                          >
                            <div
                              style={{
                                boxSizing: "border-box",
                                fontFamily: "Comfortaa, Arial",
                                fontSize: "16px",
                                inlineSize: "1160px",
                                lineHeight: "18.4px",
                                marginLeft: 0,
                                marginRight: 0,
                                textAlign: "center",
                                textSizeAdjust: "100%",
                                userSelect: "none",
                              }}
                              className={"iw-so-button-base"}
                            >
                              <a
                                style={{
                                  backgroundColor: "rgb(244, 194, 214)",
                                  borderBlockEndColor: "rgb(244, 194, 214)",
                                  borderBlockEndStyle: "solid",
                                  borderBlockEndWidth: "0.8px",
                                  borderBlockStartColor: "rgb(244, 194, 214)",
                                  borderBlockStartStyle: "solid",
                                  borderBlockStartWidth: "0.8px",
                                  borderBottomColor: "rgb(244, 194, 214)",
                                  borderBottomLeftRadius: "25.5px",
                                  borderBottomRightRadius: "25.5px",
                                  borderBottomStyle: "solid",
                                  borderBottomWidth: "0.8px",
                                  borderEndEndRadius: "25.5px",
                                  borderEndStartRadius: "25.5px",
                                  borderInlineEndColor: "rgb(244, 194, 214)",
                                  borderInlineEndStyle: "solid",
                                  borderInlineEndWidth: "0.8px",
                                  borderInlineStartColor: "rgb(244, 194, 214)",
                                  borderInlineStartStyle: "solid",
                                  borderInlineStartWidth: "0.8px",
                                  borderLeftColor: "rgb(244, 194, 214)",
                                  borderLeftStyle: "solid",
                                  borderLeftWidth: "0.8px",
                                  borderRightColor: "rgb(244, 194, 214)",
                                  borderRightStyle: "solid",
                                  borderRightWidth: "0.8px",
                                  borderStartEndRadius: "25.5px",
                                  borderStartStartRadius: "25.5px",
                                  borderTopColor: "rgb(244, 194, 214)",
                                  borderTopLeftRadius: "25.5px",
                                  borderTopRightRadius: "25.5px",
                                  borderTopStyle: "solid",
                                  borderTopWidth: "0.8px",
                                  bottom: "0px",
                                  boxShadow:
                                    "rgba(255, 103, 152, 0.31) 0px 3px 30px 0px",
                                  boxSizing: "border-box",
                                  caretColor: "rgb(255, 255, 255)",
                                  color: "rgb(255, 255, 255)",
                                  columnRuleColor: "rgb(255, 255, 255)",
                                  cursor: "pointer",
                                  display: "inline-flex !important",
                                  fontFamily: "Comfortaa, Arial",
                                  fontSize: "17px",
                                  inlineSize: "135.7px",
                                  insetBlockEnd: "0px",
                                  insetBlockStart: "0px",
                                  insetInlineEnd: "0px",
                                  insetInlineStart: "0px",
                                  left: "0px",
                                  marginLeft: 0,
                                  marginRight: 0,
                                  outlineColor: "rgb(255, 255, 255)",
                                  paddingBlockEnd: "10.2px",
                                  paddingBlockStart: "10.2px",
                                  paddingBottom: "10.2px",
                                  paddingInlineEnd: "29.75px",
                                  paddingInlineStart: "29.75px",
                                  paddingLeft: "29.75px",
                                  paddingRight: "29.75px",
                                  paddingTop: "10.2px",
                                  position: "relative",
                                  right: "0px",
                                  textAlign: "center",
                                  textDecoration: "none",
                                  textDecorationColor: "rgb(255, 255, 255)",
                                  textEmphasisColor: "rgb(255, 255, 255)",
                                  textSizeAdjust: "100%",
                                  top: "0px",
                                  transitionDuration: "0.15s",
                                  transitionTimingFunction: "ease-in-out",
                                  userSelect: "none",
                                  WebkitTextFillColor: "rgb(255, 255, 255)",
                                  WebkitTextStrokeColor: "rgb(255, 255, 255)",
                                }}
                                className={
                                  "iw-so-button book-must-have pum-trigger"
                                }
                              >
                                ĐẶT GÓI{" "}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          boxSizing: "border-box",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "16px",
                          inlineSize: "1160px",
                          lineHeight: "18.4px",
                          marginLeft: 0,
                          marginRight: 0,
                          textSizeAdjust: "100%",
                          userSelect: "none",
                        }}
                        id={"panel-w64f4c4564fe52-1-0-3"}
                        className={
                          "widget_text so-panel widget widget_custom_html panel-last-child"
                        }
                        data-index={4}
                      >
                        <div
                          style={{
                            boxSizing: "border-box",
                            fontFamily: "Comfortaa, Arial",
                            fontSize: "16px",
                            inlineSize: "1160px",
                            lineHeight: "18.4px",
                            marginLeft: 0,
                            marginRight: 0,
                            textSizeAdjust: "100%",
                            userSelect: "none",
                          }}
                          className={"textwidget custom-html-widget"}
                        >
                          <div
                            style={{
                              boxSizing: "border-box",
                              cursor: "pointer",
                              fontFamily: "Comfortaa, Arial",
                              fontSize: "16px",
                              inlineSize: "1160px",
                              lineHeight: "18.4px",
                              marginLeft: 0,
                              marginRight: 0,
                              textAlign: "center",
                              textSizeAdjust: "100%",
                              textTransform: "uppercase",
                              userSelect: "none",
                            }}
                            className={"acc-close"}
                          >
                            ĐÓNG
                          </div>
                        </div>
                      </div>
                    </div>
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
