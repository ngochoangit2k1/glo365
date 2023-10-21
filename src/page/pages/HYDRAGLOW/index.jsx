import React from "react";

const block = [
  { titlename: "PHOTO FACIAL", link: "" },
  { titlename: "FACE GYM", link: "" },
  { titlename: "HYDRA GLOW", link: "" },
];
const datax = {
  name: "Hydrafacial    ",
  title: "Xoáy Nước 360 Độ Độc Đáo    ",
  button: "Hiệu quả sạch da tức thì",
  imge: "https://glo365.vn/wp-content/uploads/2020/06/venus-glow-device.png",
  teg: "Mỗi khách hàng sẽ được điều trị bằng 1 đầu tip chuyên biệt, có khả năng tạo xoáy nước 360 độ với kích thước 50 – 79 micron (nhỏ hơn kích thước trung bình của lỗ chân lông), giúp nhẹ nhàng làm sạch hoàn toàn các tạp chất sâu trong lỗ chân lông mà không gây ra bất kỳ tình trạng kích ứng nào, thích hợp với mọi làn da, kể cả da nhạy cảm nhất.",
  index:
"Công nghệ thải độc và làm sạch chuyên sâu chuẩn y khoa, giúp phục hồi và tái tạo vẻ tươi mới cho làn da, đặc biệt thích hợp với các làn da thường xuyên tiếp xúc với mỹ phẩm trang điểm, khói bụi ô nhiễm dẫn đến tình trạng da xỉn màu, bít tắc lỗ chân lông gây mụn."};

export default function index() {
  return (
    <div className="container ">
      <div className="flex flex-col justify-center ">
        {/* //title */}
        <div className="flex flex-col justify-center items-center mb-10">
          <div
            style={{
              margin: 0,
              blockSize: "86px",
              boxSizing: "border-box",
              fontFamily: "Comfortaa, Arial",
              fontSize: "16px",
              inlineSize: "1200px",
              lineHeight: "18.4px",
              textSizeAdjust: "100%",
              width: "1200px",
            }}
            className={"container page-header"}
          >
            <div
              style={{
                alignItems: "center",
                blockSize: "46px",
                boxSizing: "border-box",
                display: "flex",
                fontFamily: "Comfortaa, Arial",
                fontSize: "16px",
                justifyContent: "center",
                lineHeight: "18.4px",
                marginLeft: 0,
                marginRight: 0,
                textSizeAdjust: "100%",
                WebkitBoxAlign: "center",
                WebkitBoxPack: "center",
              }}
              className={"flex-row"}
            >
              <h1
                style={{
                  blockSize: "46px",
                  boxSizing: "border-box",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: "40px",
                  fontWeight: 300,
                  inlineSize: "258.325px",
                  lineHeight: "46px",
                  marginBlockEnd: "0px",
                  marginBlockStart: "0px",
                  marginBottom: "0px",
                  marginInlineEnd: "45px",
                  marginInlineStart: "45px",
                  marginLeft: "45px",
                  marginRight: "45px",
                  marginTop: "0px",
                  minBlockSize: "auto",
                  minHeight: "auto",
                  minInlineSize: "auto",
                  minWidth: "auto",
                  textSizeAdjust: "100%",
                }}
              >
                {datax.name}{" "}
              </h1>
            </div>
            <p
              style={{
                blockSize: "36px",
                borderBottomLeftRadius: "25px",
                borderBottomRightRadius: "25px",
                borderEndEndRadius: "25px",
                borderEndStartRadius: "25px",
                borderStartEndRadius: "25px",
                borderStartStartRadius: "25px",
                borderTopLeftRadius: "25px",
                borderTopRightRadius: "25px",
                boxSizing: "border-box",
                fontFamily: "Comfortaa, Arial",
                fontSize: "15px",
                inlineSize: "381.225px",
                lineHeight: "26px",
                marginBlockEnd: "30px",
                marginBlockStart: "4px",
                marginBottom: "30px",
                marginInlineEnd: "409.388px",
                marginInlineStart: "409.388px",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "4px",
                paddingBlockEnd: "5px",
                paddingBlockStart: "5px",
                paddingBottom: "5px",
                paddingInlineEnd: "10px",
                paddingInlineStart: "10px",
                paddingLeft: "10px",
                paddingRight: "10px",
                paddingTop: "5px",
                textSizeAdjust: "100%",
                width: "fit-content",
              }}
              className={"s-desc"}
            >
              {datax.title}{" "}
            </p>
          </div>
          {/* button */}
          <div className="w-auto h-9 my-5">
          <h4 className="bg-pink-200 font-sans text-lg text-slate-50  p-3 rounded-full"> {datax.button}</h4>
         </div>
      
        </div>

        {/* video */}
        <div
          className="relative flex items-center  
      justify-center h-screen mb-12  
      overflow-hidden"
        >
          <video
            autoPlay
            loop
            muted
            className="absolute z-10 w-auto  
      min-w-full min-h-full max-w-none"
          >
            <source
              src="https://glo365.vn/wp-content/uploads/2019/11/Skin-Gym-Linh-Nga-Glo.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        {/* đăng kí ngay */}
        <div className="w-screen">
          <a
            style={{
              alignItems: "center",
              backgroundColor: "rgb(244, 194, 214)",
              borderBlockEndColor: "rgb(244, 194, 214)",
              borderBlockEndStyle: "solid",
              borderBlockEndWidth: "0.8px",
              borderBlockStartColor: "rgb(244, 194, 214)",
              borderBlockStartStyle: "solid",
              borderBlockStartWidth: "0.8px",
              borderBottomColor: "rgb(244, 194, 214)",
              borderBottomLeftRadius: "92px",
              borderBottomRightRadius: "92px",
              borderBottomStyle: "solid",
              borderBottomWidth: "0.8px",
              borderEndEndRadius: "92px",
              borderEndStartRadius: "92px",
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
              borderStartEndRadius: "92px",
              borderStartStartRadius: "92px",
              borderTopColor: "rgb(244, 194, 214)",
              borderTopLeftRadius: "92px",
              borderTopRightRadius: "92px",
              borderTopStyle: "solid",
              borderTopWidth: "0.8px",
              bottom: "0px",
              boxShadow: "rgba(255, 103, 152, 0.31) 0px 3px 30px 0px",
              boxSizing: "border-box",
              caretColor: "rgb(255, 255, 255)",
              color: "rgb(255, 255, 255)",
              columnRuleColor: "rgb(255, 255, 255)",
              cursor: "pointer",
              display: "inline-block",
              flexDirection: "row-reverse",
              fontFamily: "Comfortaa, Arial",
              fontSize: "19.2px",
              inlineSize: "277.925px",
              insetBlockEnd: "0px",
              insetBlockStart: "0px",
              insetInlineEnd: "0px",
              insetInlineStart: "0px",
              justifyContent: "center",

              marginBlockEnd: "60px",
              marginBottom: "60px",
              marginLeft: 0,
              marginRight: 0,
              maxInlineSize: "500px",
              maxWidth: "500px",
              outlineColor: "rgb(255, 255, 255)",
              paddingInlineEnd: "30px",
              paddingRight: "30px",
              position: "relative",
              right: "0px",
              textAlign: "center",
              textDecoration: "none",
              textDecorationColor: "rgb(255, 255, 255)",
              textEmphasisColor: "rgb(255, 255, 255)",
              textSizeAdjust: "100%",
              textTransform: "uppercase",
              top: "0px",
              transitionDuration: "0.15s",
              transitionTimingFunction: "ease-in-out",
              WebkitTextFillColor: "rgb(255, 255, 255)",
              WebkitTextStrokeColor: "rgb(255, 255, 255)",
            }}
            className={
              "iw-so-button servive-p-plus-laser pum-trigger text-center py-5"
            }
          >
            TƯ VẤN NGAY{" "}
          </a>
        </div>
        <div>
          <p>{datax.index}</p>
        </div>
      </div>
      {/* công nghệ */}
      <div
        style={{
          margin: 0,
          blockSize: "576.662px",
          boxSizing: "border-box",
          fontFamily: "Comfortaa, Arial",
          fontSize: "16px",
          inlineSize: "1536px",
          lineHeight: "18.4px",
          textSizeAdjust: "100%",
        }}
        id={"pg-2125-7"}
        className={"panel-grid panel-has-style"}
      >
        <div
          style={{
            alignItems: "flex-start",
            blockSize: "576.662px",
            boxSizing: "border-box",
            display: "flex",
            fontFamily: "Comfortaa, Arial",
            fontSize: "16px",
            inlineSize: "1040px",
            justifyContent: "space-between",
            lineHeight: "18.4px",
            marginLeft: "auto",
            marginRight: "auto",
            textSizeAdjust: "100%",
            width: "1040px",
            height: "576.662px",
          }}
          className={"container-s panel-row-style panel-row-style-for-2125-7"}
          id={"book-new"}
        >
          <div
            style={{
              blockSize: "576.662px",
              boxSizing: "border-box",
              fontFamily: "Comfortaa, Arial",
              fontSize: "16px",
              inlineSize: "505px",
              lineHeight: "18.4px",
              marginLeft: 0,
              marginRight: 0,
              minBlockSize: "auto",
              minHeight: "auto",
              minInlineSize: "auto",
              minWidth: "auto",
              textSizeAdjust: "100%",
              width: "calc(50% - 15px)",
              height: "576.662px",
            }}
            id={"pgc-2125-7-0"}
            className={"panel-grid-cell"}
          >
            <div
              style={{
                blockSize: "576.662px",
                boxSizing: "border-box",
                fontFamily: "Comfortaa, Arial",
                fontSize: "16px",
                inlineSize: "505px",
                lineHeight: "18.4px",
                marginLeft: 0,
                marginRight: 0,
                textSizeAdjust: "100%",
              }}
              id={"panel-2125-7-0-0"}
              className={
                "so-panel widget widget_sow-image panel-first-child panel-last-child"
              }
              data-index={89}
            >
              <div
                style={{
                  blockSize: "576.662px",
                  boxSizing: "border-box",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: "16px",
                  inlineSize: "505px",
                  lineHeight: "18.4px",
                  marginLeft: 0,
                  marginRight: 0,
                  textSizeAdjust: "100%",
                }}
                className={
                  "so-widget-sow-image so-widget-sow-image-default-17bc2272b535"
                }
              >
                <div
                  style={{
                    alignItems: "flex-start",
                    blockSize: "576.662px",
                    boxSizing: "border-box",
                    display: "flex",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: "16px",
                    inlineSize: "505px",
                    justifyContent: "center",
                    lineHeight: "18.4px",
                    marginLeft: 0,
                    marginRight: 0,
                    textSizeAdjust: "100%",
                  }}
                  className={"sow-image-container"}
                >
                  <img
                    style={{
                      blockSize: "576.662px",
                      boxSizing: "border-box",
                      display: "block",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: "16px",
                      inlineSize: "505px",
                      lineHeight: "18.4px",
                      marginLeft: 0,
                      marginRight: 0,
                      maxInlineSize: "100%",
                      maxWidth: "100%",
                      minBlockSize: "auto",
                      minHeight: "auto",
                      minInlineSize: "auto",
                      minWidth: "auto",
                      textSizeAdjust: "100%",
                      width: "505px",
                    }}
                    width={613}
                    height={700}
                    data-lazy-srcset={datax.imge
                  }
                    data-lazy-sizes={"(max-width: 613px) 100vw, 613px"}
                    title={"Ngoc Anh-N-Ev-2"}
                    className={"so-widget-image entered lazyloaded"}
                    data-lazy-src={datax.imge}
                    src={datax.imge}
                    data-ll-status={"loaded"}
                    sizes={"(max-width: 613px) 100vw, 613px"}
                    srcset={
datax.imge                    }
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
                    }}
                  >
                    <img
                      src={datax.imge}
                      width="613"
                      height="700"
                      srcset={datax.imge}
                      sizes="(max-width: 613px) 100vw, 613px"
                      title="Ngoc Anh-N-Ev-2"
                      alt=""
                      class="so-widget-image"
                    />
                  </noscript>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              blockSize: "446.8px",
              boxSizing: "border-box",
              fontFamily: "Comfortaa, Arial",
              fontSize: "16px",
              inlineSize: "505px",
              lineHeight: "18.4px",
              marginLeft: 0,
              marginRight: 0,
              minBlockSize: "auto",
              minHeight: "auto",
              minInlineSize: "auto",
              minWidth: "auto",
              textSizeAdjust: "100%",
              width: "calc(50% - 15px)",
              height: "446.8px",
            }}
            id={"pgc-2125-7-1"}
            className={"panel-grid-cell"}
          >
            <div
              style={{
                blockSize: "271px",
                boxSizing: "border-box",
                fontFamily: "Comfortaa, Arial",
                fontSize: "16px",
                inlineSize: "505px",
                lineHeight: "18.4px",
                marginLeft: 0,
                marginRight: 0,
                textSizeAdjust: "100%",
              }}
              id={"panel-2125-7-1-0"}
              className={"so-panel widget widget_sow-editor panel-first-child"}
              data-index={90}
            >
              <div
                style={{
                  blockSize: "246px",
                  boxSizing: "border-box",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: "16px",
                  inlineSize: "505px",
                  lineHeight: "18.4px",
                  marginLeft: 0,
                  marginRight: 0,
                  paddingBlockStart: "30px",
                  paddingTop: "30px",
                  textSizeAdjust: "100%",
                }}
                className={
                  "panel-widget-style panel-widget-style-for-2125-7-1-0"
                }
              >
                <div
                  style={{
                    blockSize: "216px",
                    boxSizing: "border-box",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: "16px",
                    inlineSize: "505px",
                    lineHeight: "18.4px",
                    marginLeft: 0,
                    marginRight: 0,
                    textSizeAdjust: "100%",
                  }}
                  className={"so-widget-sow-editor so-widget-sow-editor-base"}
                >
                  <div
                    style={{
                      blockSize: "216px",
                      boxSizing: "border-box",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: "16px",
                      inlineSize: "505px",
                      lineHeight: "18.4px",
                      marginLeft: 0,
                      marginRight: 0,
                      textSizeAdjust: "100%",
                    }}
                    className={"siteorigin-widget-tinymce textwidget"}
                  >
                    <h3
                      style={{
                        blockSize: "30px",
                        boxSizing: "border-box",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "26px",
                        fontWeight: 400,
                        inlineSize: "505px",
                        lineHeight: "30px",
                        marginBlockEnd: "30px",
                        marginBlockStart: "0px",
                        marginBottom: "30px",
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: "0px",
                        textAlign: "right",
                        textSizeAdjust: "100%",
                        textTransform: "uppercase",
                      }}
                    >
                      Công nghệ
                    </h3>
                    <p
                      style={{
                        blockSize: "156px",
                        boxSizing: "border-box",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "16px",
                        inlineSize: "505px",
                        lineHeight: "26px",
                        marginBlockEnd: "25px",
                        marginBlockStart: "0px",
                        marginBottom: "25px",
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: "0px",
                        textAlign: "right",
                        textSizeAdjust: "100%",
                      }}
                      className="mb-10"
                    >
                      {datax.teg}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                blockSize: "78px",
                boxSizing: "border-box",
                fontFamily: "Comfortaa, Arial",
                fontSize: "16px",
                inlineSize: "505px",
                lineHeight: "18.4px",
                marginBlockEnd: "30px",
                marginBottom: "30px",
                marginLeft: 0,
                marginRight: 0,
                textSizeAdjust: "100%",
              }}
              id={"panel-2125-7-1-1"}
              className={"mt-5"}
              data-index={91}
            >
              <div
                style={{
                  blockSize: "0px",
                  boxSizing: "border-box",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: "16px",
                  inlineSize: "505px",
                  lineHeight: "18.4px",
                  marginLeft: 0,
                  marginRight: 0,
                  textSizeAdjust: "100%",
                  height: "0px",
                }}
                className={"textwidget custom-html-widget"}
              >
                <div
                  style={{
                    alignItems: "center",
                    backgroundColor: "rgb(0, 0, 0)",
                    blockSize: "78px",
                    borderBottomLeftRadius: "47px",
                    borderBottomRightRadius: "47px",
                    borderEndEndRadius: "47px",
                    borderEndStartRadius: "47px",
                    borderStartEndRadius: "47px",
                    borderStartStartRadius: "47px",
                    borderTopLeftRadius: "47px",
                    borderTopRightRadius: "47px",
                    boxSizing: "border-box",
                    display: "flex",
                    float: "right",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: "16px",
                    inlineSize: "478px",
                    lineHeight: "18.4px",
                    marginLeft: 0,
                    marginRight: 0,
                    paddingInlineStart: "5px",
                    paddingLeft: "5px",
                    textSizeAdjust: "100%",
                    width: "478px",
                    height: "78px",
                  }}
                  className={"countpeople"}
                >
                  <span
                    style={{
                      alignItems: "center",
                      backgroundColor: "rgb(244, 194, 214)",
                      blockSize: "66px",
                      borderBottomLeftRadius: "47px",
                      borderBottomRightRadius: "47px",
                      borderEndEndRadius: "47px",
                      borderEndStartRadius: "47px",
                      borderStartEndRadius: "47px",
                      borderStartStartRadius: "47px",
                      borderTopLeftRadius: "47px",
                      borderTopRightRadius: "47px",
                      boxSizing: "border-box",
                      display: "flex",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: "40px",
                      fontWeight: 700,
                      inlineSize: "133px",
                      justifyContent: "center",
                      lineHeight: "46px",
                      marginLeft: 0,
                      marginRight: 0,
                      minBlockSize: "auto",
                      minHeight: "auto",
                      minInlineSize: "auto",
                      minWidth: "auto",
                      textSizeAdjust: "100%",
                      textTransform: "uppercase",
                      width: "133px",
                      height: "66px",
                    }}
                    className={"digit"}
                  >
                    14509
                  </span>
                  <span
                    style={{
                      blockSize: "26.45px",
                      borderBlockEndColor: "rgb(248, 238, 238)",
                      borderBlockStartColor: "rgb(248, 238, 238)",
                      borderBottomColor: "rgb(248, 238, 238)",
                      borderInlineEndColor: "rgb(248, 238, 238)",
                      borderInlineStartColor: "rgb(248, 238, 238)",
                      borderLeftColor: "rgb(248, 238, 238)",
                      borderRightColor: "rgb(248, 238, 238)",
                      borderTopColor: "rgb(248, 238, 238)",
                      boxSizing: "border-box",
                      caretColor: "rgb(248, 238, 238)",
                      color: "rgb(248, 238, 238)",
                      columnRuleColor: "rgb(248, 238, 238)",
                      display: "block",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: "23px",
                      inlineSize: "309.925px",
                      lineHeight: "26.45px",
                      marginLeft: 0,
                      marginRight: 0,
                      minBlockSize: "auto",
                      minHeight: "auto",
                      minInlineSize: "auto",
                      minWidth: "auto",
                      outlineColor: "rgb(248, 238, 238)",
                      paddingInlineStart: "20px",
                      paddingLeft: "20px",
                      textAlign: "center",
                      textDecoration: "none solid rgb(248, 238, 238)",
                      textDecorationColor: "rgb(248, 238, 238)",
                      textEmphasisColor: "rgb(248, 238, 238)",
                      textSizeAdjust: "100%",
                      textTransform: "uppercase",
                      WebkitTextFillColor: "rgb(248, 238, 238)",
                      WebkitTextStrokeColor: "rgb(248, 238, 238)",
                    }}
                    className={"dig-title"}
                  >
                    người đã trải nghiệm
                  </span>
                </div>

                <style
                  style={{
                    boxSizing: "border-box",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: "16px",
                    lineHeight: "18.4px",
                    marginLeft: 0,
                    marginRight: 0,
                    textSizeAdjust: "100%",
                  }}
                ></style>
              </div>
            </div>
            <div
              style={{
                blockSize: "67.8px",
                boxSizing: "border-box",
                fontFamily: "Comfortaa, Arial",
                fontSize: "16px",
                inlineSize: "505px",
                lineHeight: "18.4px",
                marginLeft: 0,
                marginRight: 0,
                textSizeAdjust: "100%",
              }}
              id={"panel-2125-7-1-2"}
              className={"so-panel widget widget_ink-buttons panel-last-child"}
              data-index={92}
            >
              <div
                style={{
                  blockSize: "67.8px",
                  boxSizing: "border-box",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: "16px",
                  inlineSize: "505px",
                  lineHeight: "18.4px",
                  marginLeft: 0,
                  marginRight: 0,
                  textSizeAdjust: "100%",
                }}
                className={
                  "book-btn plus-arrow panel-widget-style panel-widget-style-for-2125-7-1-2"
                }
              >
                <div
                  style={{
                    blockSize: "67.8px",
                    boxSizing: "border-box",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: "16px",
                    inlineSize: "505px",
                    lineHeight: "18.4px",
                    marginLeft: 0,
                    marginRight: 0,
                    textSizeAdjust: "100%",
                  }}
                  className={
                    "so-widget-ink-buttons so-widget-ink-buttons-buttons-ab1d1851db7a"
                  }
                >
                  <div
                    style={{
                      alignItems: "center",
                      blockSize: "67.8px",
                      boxSizing: "border-box",
                      display: "flex",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: "16px",
                      inlineSize: "505px",
                      justifyContent: "flex-end",
                      lineHeight: "18.4px",
                      marginLeft: 0,
                      marginRight: 0,
                      textAlign: "right",
                      textSizeAdjust: "100%",
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
                        borderBottomLeftRadius: "31.5px",
                        borderBottomRightRadius: "31.5px",
                        borderBottomStyle: "solid",
                        borderBottomWidth: "0.8px",
                        borderEndEndRadius: "31.5px",
                        borderEndStartRadius: "31.5px",
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
                        borderStartEndRadius: "31.5px",
                        borderStartStartRadius: "31.5px",
                        borderTopColor: "rgb(244, 194, 214)",
                        borderTopLeftRadius: "31.5px",
                        borderTopRightRadius: "31.5px",
                        borderTopStyle: "solid",
                        borderTopWidth: "0.8px",
                        bottom: "0px",
                        boxShadow: "rgba(255, 96, 71, 0.31) 0px 3px 30px 0px",
                        boxSizing: "border-box",
                        caretColor: "rgb(255, 255, 255)",
                        color: "rgb(255, 255, 255)",
                        columnRuleColor: "rgb(255, 255, 255)",
                        cursor: "pointer",
                        display: "inline-block",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "21px",
                        inlineSize: "212.587px",
                        insetBlockEnd: "0px",
                        insetBlockStart: "0px",
                        insetInlineEnd: "0px",
                        insetInlineStart: "0px",
                        left: "0px",
                        marginLeft: 0,
                        marginRight: 0,
                        minBlockSize: "auto",
                        minHeight: "auto",
                        minInlineSize: "auto",
                        minWidth: "auto",
                        outlineColor: "rgb(255, 255, 255)",
                        paddingBlockEnd: "20px",
                        paddingBlockStart: "23px",
                        paddingBottom: "20px",
                        paddingInlineEnd: "50px",
                        paddingInlineStart: "50px",
                        paddingLeft: "50px",
                        paddingRight: "50px",

                        position: "relative",
                        right: "0px",
                        textAlign: "center",
                        textDecoration: "none",
                        textDecorationColor: "rgb(255, 255, 255)",
                        textEmphasisColor: "rgb(255, 255, 255)",
                        textSizeAdjust: "100%",
                        textTransform: "uppercase",
                        top: "0px",
                        transitionDuration: "0.15s",
                        transitionTimingFunction: "ease-in-out",
                        WebkitTextFillColor: "rgb(255, 255, 255)",
                        WebkitTextStrokeColor: "rgb(255, 255, 255)",
                      }}
                      className={
                        "iw-so-button servive-p-plus-laser pum-trigger h-auto"
                      }
                    >
                      đặt ngay{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* hiệu quả */}
      <div
        style={{
          margin: 0,
          blockSize: "345px",
          boxSizing: "border-box",
          fontFamily: "Comfortaa, Arial",
          fontSize: "16px",
          inlineSize: "1536px",
          lineHeight: "18.4px",
          textSizeAdjust: "100%",
        }}
        id={"pg-2125-8"}
        className={"panel-grid panel-has-style"}
      >
        <div
          style={{
            alignItems: "flex-start",
            backgroundImage:
              "url(https://glo365.vn/wp-content/uploads/2019/11/mask.svg)",
            backgroundPosition: "50% 0%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            blockSize: "345px",
            bottom: "0px",
            boxSizing: "border-box",
            display: "flex",
            fontFamily: "Comfortaa, Arial",
            fontSize: "16px",
            inlineSize: "1536px",
            insetBlockEnd: "0px",
            insetBlockStart: "0px",
            insetInlineEnd: "0px",
            insetInlineStart: "0px",
            justifyContent: "space-between",
            left: "0px",
            lineHeight: "18.4px",
            marginBlockStart: "-120px",
            marginLeft: 0,
            marginRight: 0,
            marginTop: "-120px",
            paddingBlockStart: "100px",
            paddingTop: "100px",
            position: "relative",
            right: "0px",
            textSizeAdjust: "100%",
            top: "0px",
            zIndex: 15,
          }}
          className={"duga panel-row-style panel-row-style-for-2125-8"}
        >
          <div
            style={{
              blockSize: "245px",
              boxSizing: "border-box",
              fontFamily: "Comfortaa, Arial",
              fontSize: "16px",
              inlineSize: "1536px",
              lineHeight: "18.4px",
              marginLeft: 0,
              marginRight: 0,
              minBlockSize: "auto",
              minHeight: "auto",
              minInlineSize: "auto",
              minWidth: "auto",
              textSizeAdjust: "100%",
              width: "calc(100% - 0px)",
            }}
            id={"pgc-2125-8-0"}
            className={"panel-grid-cell"}
          >
            <div
              style={{
                blockSize: "245px",
                boxSizing: "border-box",
                fontFamily: "Comfortaa, Arial",
                fontSize: "16px",
                inlineSize: "1536px",
                lineHeight: "18.4px",
                marginLeft: 0,
                marginRight: 0,
                textSizeAdjust: "100%",
              }}
              id={"panel-2125-8-0-0"}
              className={
                "so-panel widget widget_sow-editor panel-first-child panel-last-child"
              }
              data-index={93}
            >
              <div
                style={{
                  blockSize: "245px",
                  boxSizing: "border-box",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: "16px",
                  inlineSize: "1200px",
                  lineHeight: "18.4px",
                  marginInlineEnd: "168px",
                  marginInlineStart: "168px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  textSizeAdjust: "100%",
                  width: "1200px",
                }}
                className={
                  "container newli panel-widget-style panel-widget-style-for-2125-8-0-0"
                }
              >
                <div
                  style={{
                    blockSize: "245px",
                    boxSizing: "border-box",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: "16px",
                    inlineSize: "1200px",
                    lineHeight: "18.4px",
                    marginLeft: 0,
                    marginRight: 0,
                    textSizeAdjust: "100%",
                  }}
                  className={"so-widget-sow-editor so-widget-sow-editor-base"}
                >
                  <div
                    style={{
                      blockSize: "245px",
                      boxSizing: "border-box",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: "16px",
                      inlineSize: "1200px",
                      lineHeight: "18.4px",
                      marginLeft: 0,
                      marginRight: 0,
                      textSizeAdjust: "100%",
                    }}
                    className={"siteorigin-widget-tinymce textwidget"}
                  >
                    <h3
                      style={{
                        blockSize: "30px",
                        boxSizing: "border-box",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "26px",
                        fontWeight: 400,
                        inlineSize: "1200px",
                        lineHeight: "30px",
                        marginBlockEnd: "30px",
                        marginBlockStart: "0px",
                        marginBottom: "30px",
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: "0px",
                        textAlign: "center",
                        textSizeAdjust: "100%",
                        textTransform: "uppercase",
                      }}
                    >
                      Hiệu quả
                    </h3>
                    <ul
                      style={{
                        alignItems: "center",
                        blockSize: "185px",
                        boxSizing: "border-box",
                        display: "flex",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "16px",
                        inlineSize: "1200px",
                        justifyContent: "center",
                        lineHeight: "18.4px",
                        marginBlockEnd: "0px",
                        marginBlockStart: "0px",
                        marginBottom: "0px",
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: "0px",
                        paddingInlineStart: "0px",
                        paddingLeft: "0px",
                        textSizeAdjust: "100%",
                      }}
                    >
                      <li
                        style={{
                          alignItems: "center",
                          backgroundColor: "rgb(255, 255, 255)",
                          blockSize: "185px",
                          borderBottomLeftRadius: "12px",
                          borderBottomRightRadius: "12px",
                          borderEndEndRadius: "12px",
                          borderEndStartRadius: "12px",
                          borderStartEndRadius: "12px",
                          borderStartStartRadius: "12px",
                          borderTopLeftRadius: "12px",
                          borderTopRightRadius: "12px",
                          boxSizing: "border-box",
                          display: "flex",
                          flexDirection: "column",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "14px",
                          inlineSize: "180px",
                          justifyContent: "flex-start",
                          lineHeight: "23.8px",
                          listStyleType: "none",
                          marginInlineEnd: "10px",
                          marginInlineStart: "10px",
                          marginLeft: 0,
                          marginRight: 0,
                          minBlockSize: "185px",
                          minHeight: "185px",
                          minInlineSize: "auto",
                          minWidth: "auto",
                          paddingBlockEnd: "10px",
                          paddingBlockStart: "10px",
                          paddingBottom: "10px",
                          paddingInlineEnd: "10px",
                          paddingInlineStart: "10px",
                          paddingLeft: "10px",
                          paddingRight: "10px",
                          paddingTop: "10px",
                          textAlign: "center",
                          textSizeAdjust: "100%",
                          width: "192px",
                        }}
                      >
                        Cải thiện tình trạng nám và tàn nhang.
                      </li>
                      <li
                        style={{
                          alignItems: "center",
                          backgroundColor: "rgb(255, 255, 255)",
                          blockSize: "185px",
                          borderBottomLeftRadius: "12px",
                          borderBottomRightRadius: "12px",
                          borderEndEndRadius: "12px",
                          borderEndStartRadius: "12px",
                          borderStartEndRadius: "12px",
                          borderStartStartRadius: "12px",
                          borderTopLeftRadius: "12px",
                          borderTopRightRadius: "12px",
                          boxSizing: "border-box",
                          display: "flex",
                          flexDirection: "column",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "14px",
                          inlineSize: "180px",
                          justifyContent: "flex-start",
                          lineHeight: "23.8px",
                          listStyleType: "none",
                          marginInlineEnd: "10px",
                          marginInlineStart: "10px",
                          marginLeft: 0,
                          marginRight: 0,
                          minBlockSize: "185px",
                          minHeight: "185px",
                          minInlineSize: "auto",
                          minWidth: "auto",
                          paddingBlockEnd: "10px",
                          paddingBlockStart: "10px",
                          paddingBottom: "10px",
                          paddingInlineEnd: "10px",
                          paddingInlineStart: "10px",
                          paddingLeft: "10px",
                          paddingRight: "10px",
                          paddingTop: "10px",
                          textAlign: "center",
                          textSizeAdjust: "100%",
                          width: "192px",
                        }}
                      >
                        Làm giảm các dấu hiệu lão hóa như nếp nhăn, vết chân
                        chim.
                      </li>
                      <li
                        style={{
                          alignItems: "center",
                          backgroundColor: "rgb(255, 255, 255)",
                          blockSize: "185px",
                          borderBottomLeftRadius: "12px",
                          borderBottomRightRadius: "12px",
                          borderEndEndRadius: "12px",
                          borderEndStartRadius: "12px",
                          borderStartEndRadius: "12px",
                          borderStartStartRadius: "12px",
                          borderTopLeftRadius: "12px",
                          borderTopRightRadius: "12px",
                          boxSizing: "border-box",
                          display: "flex",
                          flexDirection: "column",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "14px",
                          inlineSize: "180px",
                          justifyContent: "flex-start",
                          lineHeight: "23.8px",
                          listStyleType: "none",
                          marginInlineEnd: "10px",
                          marginInlineStart: "10px",
                          marginLeft: 0,
                          marginRight: 0,
                          minBlockSize: "185px",
                          minHeight: "185px",
                          minInlineSize: "auto",
                          minWidth: "auto",
                          paddingBlockEnd: "10px",
                          paddingBlockStart: "10px",
                          paddingBottom: "10px",
                          paddingInlineEnd: "10px",
                          paddingInlineStart: "10px",
                          paddingLeft: "10px",
                          paddingRight: "10px",
                          paddingTop: "10px",
                          textAlign: "center",
                          textSizeAdjust: "100%",
                          width: "192px",
                        }}
                      >
                        Giảm mụn trứng cá và ngăn ngừa tác nhân gây mụn.
                      </li>
                      <li
                        style={{
                          alignItems: "center",
                          backgroundColor: "rgb(255, 255, 255)",
                          blockSize: "185px",
                          borderBottomLeftRadius: "12px",
                          borderBottomRightRadius: "12px",
                          borderEndEndRadius: "12px",
                          borderEndStartRadius: "12px",
                          borderStartEndRadius: "12px",
                          borderStartStartRadius: "12px",
                          borderTopLeftRadius: "12px",
                          borderTopRightRadius: "12px",
                          boxSizing: "border-box",
                          display: "flex",
                          flexDirection: "column",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "14px",
                          inlineSize: "180px",
                          justifyContent: "flex-start",
                          lineHeight: "23.8px",
                          listStyleType: "none",
                          marginInlineEnd: "10px",
                          marginInlineStart: "10px",
                          marginLeft: 0,
                          marginRight: 0,
                          minBlockSize: "185px",
                          minHeight: "185px",
                          minInlineSize: "auto",
                          minWidth: "auto",
                          paddingBlockEnd: "10px",
                          paddingBlockStart: "10px",
                          paddingBottom: "10px",
                          paddingInlineEnd: "10px",
                          paddingInlineStart: "10px",
                          paddingLeft: "10px",
                          paddingRight: "10px",
                          paddingTop: "10px",
                          textAlign: "center",
                          textSizeAdjust: "100%",
                          width: "192px",
                        }}
                      >
                        Làm giảm hiện tượng tăng sắc tố da, da không đều màu.
                      </li>
                      <li
                        style={{
                          alignItems: "center",
                          backgroundColor: "rgb(255, 255, 255)",
                          blockSize: "185px",
                          borderBottomLeftRadius: "12px",
                          borderBottomRightRadius: "12px",
                          borderEndEndRadius: "12px",
                          borderEndStartRadius: "12px",
                          borderStartEndRadius: "12px",
                          borderStartStartRadius: "12px",
                          borderTopLeftRadius: "12px",
                          borderTopRightRadius: "12px",
                          boxSizing: "border-box",
                          display: "flex",
                          flexDirection: "column",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "14px",
                          inlineSize: "180px",
                          justifyContent: "flex-start",
                          lineHeight: "23.8px",
                          listStyleType: "none",
                          marginInlineEnd: "10px",
                          marginInlineStart: "10px",
                          marginLeft: 0,
                          marginRight: 0,
                          minBlockSize: "185px",
                          minHeight: "185px",
                          minInlineSize: "auto",
                          minWidth: "auto",
                          paddingBlockEnd: "10px",
                          paddingBlockStart: "10px",
                          paddingBottom: "10px",
                          paddingInlineEnd: "10px",
                          paddingInlineStart: "10px",
                          paddingLeft: "10px",
                          paddingRight: "10px",
                          paddingTop: "10px",
                          textAlign: "center",
                          textSizeAdjust: "100%",
                          width: "192px",
                        }}
                      >
                        Giảm tình trạng hiện rõ mạch máu trên da.
                      </li>
                      <li
                        style={{
                          alignItems: "center",
                          backgroundColor: "rgb(255, 255, 255)",
                          blockSize: "185px",
                          borderBottomLeftRadius: "12px",
                          borderBottomRightRadius: "12px",
                          borderEndEndRadius: "12px",
                          borderEndStartRadius: "12px",
                          borderStartEndRadius: "12px",
                          borderStartStartRadius: "12px",
                          borderTopLeftRadius: "12px",
                          borderTopRightRadius: "12px",
                          boxSizing: "border-box",
                          display: "flex",
                          flexDirection: "column",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "14px",
                          inlineSize: "180px",
                          justifyContent: "flex-start",
                          lineHeight: "23.8px",
                          listStyleType: "none",
                          marginInlineEnd: "10px",
                          marginInlineStart: "10px",
                          marginLeft: 0,
                          marginRight: 0,
                          minBlockSize: "185px",
                          minHeight: "185px",
                          minInlineSize: "auto",
                          minWidth: "auto",
                          paddingBlockEnd: "10px",
                          paddingBlockStart: "10px",
                          paddingBottom: "10px",
                          paddingInlineEnd: "10px",
                          paddingInlineStart: "10px",
                          paddingLeft: "10px",
                          paddingRight: "10px",
                          paddingTop: "10px",
                          textAlign: "center",
                          textSizeAdjust: "100%",
                          width: "192px",
                        }}
                      >
                        Se khít lỗ chân lông. Giảm sẹo trên da do mụn trứng cá.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* trước sau liệu trình */}
      <div
        style={{
          margin: 0,
          blockSize: "686px",
          boxSizing: "border-box",
          fontFamily: "Comfortaa, Arial",
          fontSize: "16px",
          inlineSize: "1536px",
          lineHeight: "18.4px",
          textSizeAdjust: "100%",
        }}
        id={"pg-2125-11"}
        className={"panel-grid panel-has-style"}
      >
        <div
          style={{
            alignItems: "flex-start",
            blockSize: "686px",
            boxSizing: "border-box",
            display: "flex",
            fontFamily: "Comfortaa, Arial",
            fontSize: "16px",
            inlineSize: "1200px",
            justifyContent: "space-between",
            lineHeight: "18.4px",
            marginLeft: "auto",
            marginRight: "auto",
            textSizeAdjust: "100%",
            width: "1200px",
          }}
          className={
            "container before-after panel-row-style panel-row-style-for-2125-11"
          }
        >
          <div
            style={{
              blockSize: "686px",
              boxSizing: "border-box",
              fontFamily: "Comfortaa, Arial",
              fontSize: "16px",
              inlineSize: "1200px",
              lineHeight: "18.4px",
              marginLeft: 0,
              marginRight: 0,
              minBlockSize: "auto",
              minHeight: "auto",
              minInlineSize: "auto",
              minWidth: "auto",
              textSizeAdjust: "100%",
              width: "calc(100% - 0px)",
            }}
            id={"pgc-2125-11-0"}
            className={"panel-grid-cell"}
          >
            <div
              style={{
                blockSize: "56px",
                boxSizing: "border-box",
                fontFamily: "Comfortaa, Arial",
                fontSize: "16px",
                inlineSize: "1200px",
                lineHeight: "18.4px",
                marginBlockEnd: "30px",
                marginBottom: "30px",
                marginLeft: 0,
                marginRight: 0,
                textSizeAdjust: "100%",
              }}
              id={"panel-2125-11-0-0"}
              className={
                "so-panel widget widget_sow-headline panel-first-child"
              }
              data-index={96}
            >
              <div
                style={{
                  blockSize: "56px",
                  boxSizing: "border-box",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: "16px",
                  inlineSize: "1200px",
                  lineHeight: "18.4px",
                  marginLeft: 0,
                  marginRight: 0,
                  textSizeAdjust: "100%",
                }}
                className={
                  "so-widget-sow-headline so-widget-sow-headline-default-2a90dd6e8679"
                }
              >
                <div
                  style={{
                    blockSize: "56px",
                    boxSizing: "border-box",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: "16px",
                    inlineSize: "1200px",
                    lineHeight: "18.4px",
                    marginLeft: 0,
                    marginRight: 0,
                    textSizeAdjust: "100%",
                  }}
                  className={"sow-headline-container "}
                >
                  <h2
                    style={{
                      blockSize: "56px",
                      boxSizing: "border-box",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: "40px",
                      fontWeight: 300,
                      inlineSize: "1200px",
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
                    className={"sow-headline"}
                  >
                    trước & sau liệu trình
                  </h2>
                </div>
              </div>
            </div>
            <div
              style={{
                blockSize: "600px",
                boxSizing: "border-box",
                fontFamily: "Comfortaa, Arial",
                fontSize: "16px",
                inlineSize: "1200px",
                lineHeight: "18.4px",
                marginLeft: 0,
                marginRight: 0,
                textSizeAdjust: "100%",
              }}
              id={"panel-2125-11-0-1"}
              className={"so-panel widget widget_sow-editor panel-last-child"}
              data-index={97}
            >
              <div
                style={{
                  blockSize: "600px",
                  boxSizing: "border-box",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: "16px",
                  inlineSize: "1200px",
                  lineHeight: "18.4px",
                  marginLeft: 0,
                  marginRight: 0,
                  textSizeAdjust: "100%",
                }}
                className={"so-widget-sow-editor so-widget-sow-editor-base"}
              >
                <div
                  style={{
                    blockSize: "600px",
                    boxSizing: "border-box",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: "16px",
                    inlineSize: "1200px",
                    lineHeight: "18.4px",
                    marginLeft: 0,
                    marginRight: 0,
                    textSizeAdjust: "100%",
                  }}
                  className={"siteorigin-widget-tinymce textwidget"}
                >
                  <div
                    style={{
                      blockSize: "600px",
                      bottom: "0px",
                      boxSizing: "border-box",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: "16px",
                      inlineSize: "800px",
                      insetBlockEnd: "0px",
                      insetBlockStart: "0px",
                      insetInlineEnd: "0px",
                      insetInlineStart: "0px",
                      left: "0px",
                      lineHeight: "18.4px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      overflowX: "hidden",
                      overflowY: "hidden",
                      position: "relative",
                      right: "0px",
                      textSizeAdjust: "100%",
                      top: "0px",
                      width: "800px",
                      height: "600px",
                    }}
                    className={"ba-slider"}
                  >
                    <img
                      style={{
                        blockSize: "600px",
                        boxSizing: "border-box",
                        display: "block",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "16px",
                        inlineSize: "800px",
                        lineHeight: "18.4px",
                        marginLeft: 0,
                        marginRight: 0,
                        textSizeAdjust: "100%",
                        width: "100%",
                        height: "600px",
                      }}
                      src={
                        "https://glo365.vn/wp-content/uploads/2019/11/after.jpg"
                      }
                      data-lazy-src={
                        "https://glo365.vn/wp-content/uploads/2019/11/after.jpg"
                      }
                      data-ll-status={"loaded"}
                      className={"entered lazyloaded"}
                    ></img>
                    <noscript
                      style={{
                        boxSizing: "border-box",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "16px",
                        lineHeight: "18.4px",
                        marginLeft: 0,
                        marginRight: 0,
                        textSizeAdjust: "100%",
                      }}
                    >
                      <img src="https://glo365.vn/wp-content/uploads/2019/11/after.jpg" />
                    </noscript>
                    <div
                      style={{
                        blockSize: "600px",
                        bottom: "0px",
                        boxSizing: "border-box",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "16px",
                        inlineSize: "400px",
                        insetBlockEnd: "0px",
                        insetBlockStart: "0px",
                        insetInlineEnd: "400px",
                        insetInlineStart: "0px",
                        left: "0px",
                        lineHeight: "18.4px",
                        marginLeft: 0,
                        marginRight: 0,
                        overflowX: "hidden",
                        overflowY: "hidden",
                        position: "absolute",
                        right: "400px",
                        textSizeAdjust: "100%",
                        top: "0px",
                        width: "50%",
                      }}
                      className={" resize"}
                    >
                      <img
                        style={{
                          blockSize: "600px",
                          boxSizing: "border-box",
                          display: "block",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "16px",
                          inlineSize: "800px",
                          lineHeight: "18.4px",
                          marginLeft: 0,
                          marginRight: 0,
                          textSizeAdjust: "100%",
                          width: "800px",
                          height: "600px",
                        }}
                        src={
                          "https://glo365.vn/wp-content/uploads/2019/11/before.jpg"
                        }
                        data-lazy-src={
                          "https://glo365.vn/wp-content/uploads/2019/11/before.jpg"
                        }
                        data-ll-status={"loaded"}
                        className={"entered lazyloaded"}
                      ></img>
                      <noscript
                        style={{
                          boxSizing: "border-box",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "16px",
                          lineHeight: "18.4px",
                          marginLeft: 0,
                          marginRight: 0,
                          textSizeAdjust: "100%",
                        }}
                      >
                        <img src="https://glo365.vn/wp-content/uploads/2019/11/before.jpg" />
                      </noscript>
                    </div>
                    <span
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        blockSize: "600px",
                        bottom: "0px",
                        boxSizing: "border-box",
                        cursor: "ew-resize",
                        display: "block",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "16px",
                        inlineSize: "4px",
                        insetBlockEnd: "0px",
                        insetBlockStart: "0px",
                        insetInlineEnd: "398px",
                        insetInlineStart: "400px",
                        left: "400px",
                        lineHeight: "18.4px",
                        marginInlineStart: "-2px",
                        marginLeft: "-2px",
                        marginRight: 0,
                        position: "absolute",
                        right: "398px",
                        textSizeAdjust: "100%",
                        top: "0px",
                        width: "4px",
                        height: "600px",
                      }}
                      className={"handle"}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* tư vấn */}
      <div
        style={{
          margin: 0,
          blockSize: "147px",
          boxSizing: "border-box",
          fontFamily: "Comfortaa, Arial",
          fontSize: "16px",
          inlineSize: "1536px",
          lineHeight: "18.4px",
          textSizeAdjust: "100%",
        }}
        id={"pg-2125-12"}
        className={"panel-grid panel-has-style"}
      >
        <div
          style={{
            alignItems: "flex-start",
            backgroundColor: "rgb(255, 255, 255)",
            blockSize: "147px",
            borderBottomLeftRadius: "74px",
            borderBottomRightRadius: "74px",
            borderEndEndRadius: "74px",
            borderEndStartRadius: "74px",
            borderStartEndRadius: "74px",
            borderStartStartRadius: "74px",
            borderTopLeftRadius: "74px",
            borderTopRightRadius: "74px",
            boxSizing: "border-box",
            display: "flex",
            fontFamily: "Comfortaa, Arial",
            fontSize: "16px",
            inlineSize: "1151px",
            justifyContent: "space-between",
            lineHeight: "18.4px",
            marginBlockEnd: "70px",
            marginBlockStart: "70px",
            marginBottom: "70px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "70px",
            textSizeAdjust: "100%",
            width: "1151px",
          }}
          id={"countdown2"}
          className={"panel-row-style panel-row-style-for-2125-12"}
        >
          <div
            style={{
              alignItems: "center",
              blockSize: "147px",
              boxSizing: "border-box",
              display: "flex",
              fontFamily: "Comfortaa, Arial",
              fontSize: "16px",
              inlineSize: "1151px",
              justifyContent: "space-between",
              lineHeight: "18.4px",
              marginLeft: 0,
              marginRight: 0,
              minBlockSize: "auto",
              minHeight: "auto",
              minInlineSize: "auto",
              minWidth: "auto",
              paddingInlineEnd: "55px",
              paddingInlineStart: "55px",
              paddingLeft: "55px",
              paddingRight: "55px",
              textSizeAdjust: "100%",
              width: "calc(100% - 0px)",
              height: "147px",
            }}
            id={"pgc-2125-12-0"}
            className={"panel-grid-cell"}
          >
            <div
              style={{
                blockSize: "1.1375px",
                boxSizing: "border-box",
                fontFamily: "Comfortaa, Arial",
                fontSize: "16px",
                inlineSize: "94px",
                lineHeight: "18.4px",
                marginBottom: "30px",
                marginLeft: 0,
                marginRight: 0,
                minBlockSize: "auto",
                minHeight: "auto",
                minInlineSize: "auto",
                minWidth: "auto",
                textSizeAdjust: "100%",
                width: "94px",
              }}
              id={"panel-2125-12-0-0"}
              className={"so-panel widget widget_sow-image panel-first-child"}
              data-index={98}
            >
              <div
                style={{
                  blockSize: "1.1375px",
                  boxSizing: "border-box",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: "16px",
                  inlineSize: "94px",
                  lineHeight: "18.4px",
                  marginLeft: 0,
                  marginRight: 0,
                  textSizeAdjust: "100%",
                }}
                className={
                  "so-widget-sow-image so-widget-sow-image-default-d6014b76747a"
                }
              >
                <div
                  style={{
                    alignItems: "flex-start",
                    blockSize: "1.1375px",
                    boxSizing: "border-box",
                    display: "flex",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: "16px",
                    inlineSize: "94px",
                    lineHeight: "18.4px",
                    marginLeft: 0,
                    marginRight: 0,
                    textSizeAdjust: "100%",
                  }}
                  className={"sow-image-container"}
                >
                  <img
                    style={{
                      blockSize: "1.1375px",
                      boxSizing: "border-box",
                      display: "block",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: "16px",
                      inlineSize: "1px",
                      lineHeight: "18.4px",
                      marginLeft: 0,
                      marginRight: 0,
                      maxInlineSize: "100%",
                      maxWidth: "100%",
                      minBlockSize: "auto",
                      minHeight: "auto",
                      minInlineSize: "auto",
                      minWidth: "auto",
                      textSizeAdjust: "100%",
                      width: "1px",
                    }}
                    src={
                      "https://glo365.vn/wp-content/uploads/2019/11/gift.svg"
                    }
                    width={1}
                    height={1}
                    data-lazy-sizes={"(max-width: 1px) 100vw, 1px"}
                    className={"so-widget-image entered lazyloaded"}
                    data-lazy-src={
                      "https://glo365.vn/wp-content/uploads/2019/11/gift.svg"
                    }
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
                    }}
                  >
                    <img
                      src="https://glo365.vn/wp-content/uploads/2019/11/gift.svg"
                      width="1"
                      height="1"
                      sizes="(max-width: 1px) 100vw, 1px"
                      alt=""
                      class="so-widget-image"
                    />
                  </noscript>
                </div>
              </div>
            </div>
            <div
              style={{
                blockSize: "60px",
                boxSizing: "border-box",
                fontFamily: "Comfortaa, Arial",
                fontSize: "16px",
                inlineSize: "124.887px",
                lineHeight: "18.4px",
                marginLeft: 0,
                marginRight: 0,
                minBlockSize: "auto",
                minHeight: "auto",
                minInlineSize: "auto",
                minWidth: "auto",
                textSizeAdjust: "100%",
              }}
              id={"panel-2125-12-0-1"}
              className={"so-panel widget widget_sow-editor"}
              data-index={99}
            >
              <div
                style={{
                  blockSize: "60px",
                  boxSizing: "border-box",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: "16px",
                  inlineSize: "124.887px",
                  lineHeight: "18.4px",
                  marginLeft: 0,
                  marginRight: 0,
                  textSizeAdjust: "100%",
                }}
                className={"so-widget-sow-editor so-widget-sow-editor-base"}
              >
                <div
                  style={{
                    blockSize: "60px",
                    boxSizing: "border-box",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: "16px",
                    inlineSize: "124.887px",
                    lineHeight: "18.4px",
                    marginLeft: 0,
                    marginRight: 0,
                    textSizeAdjust: "100%",
                  }}
                  className={"siteorigin-widget-tinymce textwidget"}
                >
                  <h3
                    style={{
                      blockSize: "60px",
                      boxSizing: "border-box",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: "26px",
                      fontWeight: 400,
                      inlineSize: "124.887px",
                      lineHeight: "30px",
                      marginBlockEnd: "0px",
                      marginBlockStart: "0px",
                      marginBottom: "0px",
                      marginLeft: 0,
                      marginRight: 0,
                      marginTop: "0px",
                      textSizeAdjust: "100%",
                      textTransform: "uppercase",
                    }}
                  >
                    TƯ VẤN
                    <br
                      style={{
                        boxSizing: "border-box",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "26px",
                        lineHeight: "30px",
                        marginLeft: 0,
                        marginRight: 0,
                        textSizeAdjust: "100%",
                        textTransform: "uppercase",
                      }}
                    />
                    MIỄN PHÍ
                  </h3>
                </div>
              </div>
            </div>
            <div
              style={{
                blockSize: "127px",
                boxSizing: "border-box",
                fontFamily: "Comfortaa, Arial",
                fontSize: "16px",
                inlineSize: "495px",
                lineHeight: "18.4px",
                marginLeft: 0,
                marginRight: 0,
                minBlockSize: "auto",
                minHeight: "auto",
                minInlineSize: "auto",
                minWidth: "auto",
                textSizeAdjust: "100%",
              }}
              id={"panel-2125-12-0-2"}
              className={"so-panel widget"}
              data-index={100}
            >
              <div
                style={{
                  alignContent: "center",
                  backgroundColor: "rgb(255, 235, 233)",
                  blockSize: "127px",
                  borderBottomLeftRadius: "21px",
                  borderBottomRightRadius: "21px",
                  borderEndEndRadius: "21px",
                  borderEndStartRadius: "21px",
                  borderStartEndRadius: "21px",
                  borderStartStartRadius: "21px",
                  borderTopLeftRadius: "21px",
                  borderTopRightRadius: "21px",
                  boxSizing: "border-box",
                  display: "flex",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: "16px",
                  inlineSize: "495px",
                  justifyContent: "center",
                  lineHeight: "18.4px",
                  marginLeft: 0,
                  marginRight: 0,
                  textSizeAdjust: "100%",
                  width: "495px",
                  height: "127px",
                }}
                id={"countpink"}
                className={
                  "panel-widget-style panel-widget-style-for-2125-12-0-2"
                }
              ></div>
            </div>
            <div
              style={{
                blockSize: "76px",
                boxSizing: "border-box",
                fontFamily: "Comfortaa, Arial",
                fontSize: "16px",
                inlineSize: "180px",
                lineHeight: "18.4px",
                marginLeft: 0,
                marginRight: 0,
                minBlockSize: "auto",
                minHeight: "auto",
                minInlineSize: "auto",
                minWidth: "auto",
                textSizeAdjust: "100%",
              }}
              id={"panel-2125-12-0-3"}
              className={"so-panel widget widget_ink-buttons panel-last-child"}
              data-index={101}
            >
              <div
                style={{
                  blockSize: "76px",
                  boxSizing: "border-box",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: "16px",
                  inlineSize: "180px",
                  lineHeight: "18.4px",
                  marginLeft: 0,
                  marginRight: 0,
                  textSizeAdjust: "100%",
                }}
                className={
                  "book-btn plus-arrow no-before panel-widget-style panel-widget-style-for-2125-12-0-3"
                }
              >
                <div
                  style={{
                    blockSize: "76px",
                    boxSizing: "border-box",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: "16px",
                    inlineSize: "180px",
                    lineHeight: "18.4px",
                    marginLeft: 0,
                    marginRight: 0,
                    textSizeAdjust: "100%",
                  }}
                  className={
                    "so-widget-ink-buttons so-widget-ink-buttons-buttons-ab1d1851db7a"
                  }
                >
                  <div
                    style={{
                      alignItems: "center",

                      boxSizing: "border-box",
                      display: "flex",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: "16px",
                      inlineSize: "180px",
                      justifyContent: "flex-end",
                      lineHeight: "18.4px",
                      marginLeft: 0,
                      marginRight: 0,
                      textAlign: "right",
                      textSizeAdjust: "100%",
                    }}
                    className={"iw-so-button-base"}
                  >
                    <a
                      style={{
                        alignItems: "center",
                        backgroundColor: "rgb(244, 194, 214)",

                        borderBlockEndColor: "rgb(244, 194, 214)",
                        borderBlockEndStyle: "solid",
                        borderBlockEndWidth: "0.8px",
                        borderBlockStartColor: "rgb(244, 194, 214)",
                        borderBlockStartStyle: "solid",
                        borderBlockStartWidth: "0.8px",
                        borderBottomColor: "rgb(244, 194, 214)",
                        borderBottomLeftRadius: "38px",
                        borderBottomRightRadius: "38px",
                        borderBottomStyle: "solid",
                        borderBottomWidth: "0.8px",
                        borderEndEndRadius: "38px",
                        borderEndStartRadius: "38px",
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
                        borderStartEndRadius: "38px",
                        borderStartStartRadius: "38px",
                        borderTopColor: "rgb(244, 194, 214)",
                        borderTopLeftRadius: "38px",
                        borderTopRightRadius: "38px",
                        borderTopStyle: "solid",
                        borderTopWidth: "0.8px",
                        bottom: "0px",
                        boxShadow: "rgba(255, 96, 71, 0.31) 0px 3px 30px 0px",
                        boxSizing: "border-box",
                        cursor: "pointer",
                        display: "inline-block",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "15px",
                        inlineSize: "180px",
                        insetBlockEnd: "0px",
                        insetBlockStart: "0px",
                        insetInlineEnd: "0px",
                        insetInlineStart: "0px",
                        justifyContent: "center",
                        left: "0px",
                        marginLeft: 0,
                        marginRight: 0,
                        minBlockSize: "auto",
                        minHeight: "auto",
                        minInlineSize: "auto",
                        minWidth: "auto",
                        position: "relative",
                        right: "0px",
                        textAlign: "center",
                        textDecoration: "none",
                        textSizeAdjust: "100%",
                        textTransform: "uppercase",
                        top: "0px",
                        transitionDuration: "0.15s",
                        transitionTimingFunction: "ease-in-out",
                        width: "180px",
                      }}
                      className={
                        "iw-so-button servive-p-plus-laser pum-trigger py-5"
                      }
                    >
                      đặt ngay{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* điều trị kết hợp */}

      <div className="mt-10 flex flex-col justify-center items-center">
        <h2 className="text-5xl"> ĐIỀU TRỊ KẾT HỢP</h2>

        <div className="w-10/12 ml-[10%]">
          <div className="grid grid-cols-3 ">
            {block.map((noneblock, index) => (
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
                className={"siteorigin-widget-tinymce textwidget flex "}
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
          </div>
        </div>

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
                    boxShadow: "rgba(255, 103, 152, 0.31) 0px 3px 30px 0px",
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
                  className={"iw-so-button book-must-have pum-trigger"}
                >
                  ĐẶT GÓI{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
