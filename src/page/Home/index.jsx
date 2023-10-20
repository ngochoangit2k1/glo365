import React from "react";
import "./style.css";
import Slider from "react-slick";
import { Route, Routes } from 'react-router-dom';

const ImageCarousel = () => {
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 9000,
    responsive: [
      {
        breakpoint: 980, // breakpoint from width 768 up
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="hidden md:block">
      <div className="sow-slider-base relative h-96">
        <Slider {...settings}>
          <div>
            {" "}
            <img
              src="https://glo365.vn/wp-content/uploads/2023/10/Home-slider-desk-780x94-PNVN-20-10.png"
              alt="Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img
              src="https://glo365.vn/wp-content/uploads/2023/09/Home-slider-desk-780x94-Morpheus8.png"
              alt="Image"
              className="w-full h-full object-cover"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};
export const  Contact= ()=>{
return(
  <div
        style={{
          margin: 0,
          blockSize: "177px",
          boxSizing: "border-box",
          fontFamily: "Comfortaa, Arial",
          fontSize: "16px",
          inlineSize: "1536px",
          lineHeight: "18.4px",
          textSizeAdjust: "100%",
        }}
        id={"pg-614-13"}
        className={"panel-grid panel-has-style"}
      >
        <div
          style={{
            alignItems: "flex-start",
            blockSize: "177px",
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
            height: "177px",
          }}
          className={"container panel-row-style panel-row-style-for-614-13"}
          id={"contq"}
        >
          <div
            style={{
              blockSize: "177px",
              boxSizing: "border-box",
              fontFamily: "Comfortaa, Arial",
              fontSize: "16px",
              inlineSize: "379.987px",
              lineHeight: "18.4px",
              marginLeft: 0,
              marginRight: 0,
              minBlockSize: "auto",
              minHeight: "auto",
              minInlineSize: "auto",
              minWidth: "auto",
              textSizeAdjust: "100%",
              width: "calc(33.3333% - 20px)",
              height: "177px",
            }}
            id={"pgc-614-13-0"}
            className={"panel-grid-cell"}
          >
            <div
              style={{
                blockSize: "177px",
                boxSizing: "border-box",
                fontFamily: "Comfortaa, Arial",
                fontSize: "16px",
                inlineSize: "379.987px",
                lineHeight: "18.4px",
                marginLeft: 0,
                marginRight: 0,
                textSizeAdjust: "100%",
              }}
              id={"panel-614-13-0-0"}
              className={
                "so-panel widget widget_sow-editor panel-first-child panel-last-child"
              }
              data-index={30}
            >
              <div
                style={{
                  alignItems: "center",
                  blockSize: "177px",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: "16px",
                  inlineSize: "379.987px",
                  justifyContent: "center",
                  lineHeight: "18.4px",
                  marginLeft: 0,
                  marginRight: 0,
                  textSizeAdjust: "100%",
                  WebkitBoxAlign: "center",
                  WebkitBoxOrient: "vertical",
                  WebkitBoxPack: "center",
                }}
                className={
                  "home-adres panel-widget-style panel-widget-style-for-614-13-0-0"
                }
              >
                <div
                  style={{
                    blockSize: "110px",
                    boxSizing: "border-box",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: "16px",
                    inlineSize: "379.987px",
                    lineHeight: "18.4px",
                    marginLeft: 0,
                    marginRight: 0,
                    minBlockSize: "auto",
                    minHeight: "auto",
                    minInlineSize: "auto",
                    minWidth: "auto",
                    textSizeAdjust: "100%",
                  }}
                  className={"so-widget-sow-editor so-widget-sow-editor-base"}
                >
                  <div
                    style={{
                      blockSize: "85px",
                      boxSizing: "border-box",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: "16px",
                      inlineSize: "379.987px",
                      lineHeight: "18.4px",
                      marginLeft: 0,
                      marginRight: 0,
                      textSizeAdjust: "100%",
                    }}
                    className={"siteorigin-widget-tinymce textwidget"}
                  >
                    <h5
                      style={{
                        blockSize: "19px",
                        boxSizing: "border-box",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "17px",
                        inlineSize: "379.987px",
                        lineHeight: "19px",
                        marginBlockEnd: "10px",
                        marginBlockStart: "0px",
                        marginBottom: "10px",
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: "0px",
                        textAlign: "center",
                        textSizeAdjust: "100%",
                        textTransform: "uppercase",
                      }}
                    >
                      PHÒNG KHÁM FLAGSHIP Q.1
                    </h5>
                    <p
                      style={{
                        blockSize: "56px",
                        boxSizing: "border-box",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "17px",
                        fontWeight: 300,
                        inlineSize: "379.987px",
                        lineHeight: "28px",
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
                      31A Lý Tự Trọng, Quận 1, Thành phố Hồ Chí Minh.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              blockSize: "128.6px",
              boxSizing: "border-box",
              fontFamily: "Comfortaa, Arial",
              fontSize: "16px",
              inlineSize: "379.987px",
              lineHeight: "18.4px",
              marginLeft: 0,
              marginRight: 0,
              minBlockSize: "auto",
              minHeight: "auto",
              minInlineSize: "auto",
              minWidth: "auto",
              textSizeAdjust: "100%",
              width: "calc(33.3333% - 20px)",
            }}
            id={"pgc-614-13-1"}
            className={"panel-grid-cell"}
          >
            <div
              style={{
                blockSize: "128.6px",
                boxSizing: "border-box",
                fontFamily: "Comfortaa, Arial",
                fontSize: "16px",
                inlineSize: "379.987px",
                lineHeight: "18.4px",
                marginLeft: 0,
                marginRight: 0,
                textSizeAdjust: "100%",
              }}
              id={"panel-614-13-1-0"}
              className={
                "so-panel widget widget_sow-editor panel-first-child panel-last-child"
              }
              data-index={31}
            >
              <div
                style={{
                  alignItems: "center",
                  blockSize: "128.6px",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: "16px",
                  inlineSize: "379.987px",
                  justifyContent: "center",
                  lineHeight: "18.4px",
                  marginLeft: 0,
                  marginRight: 0,
                  textSizeAdjust: "100%",
                  WebkitBoxAlign: "center",
                  WebkitBoxOrient: "vertical",
                  WebkitBoxPack: "center",
                }}
                className={
                  "home-tel panel-widget-style panel-widget-style-for-614-13-1-0"
                }
              >
                <div
                  style={{
                    blockSize: "61.6px",
                    boxSizing: "border-box",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: "16px",
                    inlineSize: "111.1px",
                    lineHeight: "18.4px",
                    marginLeft: 0,
                    marginRight: 0,
                    minBlockSize: "auto",
                    minHeight: "auto",
                    minInlineSize: "auto",
                    minWidth: "auto",
                    textSizeAdjust: "100%",
                  }}
                  className={"so-widget-sow-editor so-widget-sow-editor-base"}
                >
                  <div
                    style={{
                      blockSize: "61.6px",
                      boxSizing: "border-box",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: "16px",
                      inlineSize: "111.1px",
                      lineHeight: "18.4px",
                      marginLeft: 0,
                      marginRight: 0,
                      textSizeAdjust: "100%",
                    }}
                    className={"siteorigin-widget-tinymce textwidget"}
                  >
                    <h5
                      style={{
                        blockSize: "19px",
                        boxSizing: "border-box",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "17px",
                        inlineSize: "111.1px",
                        lineHeight: "19px",
                        marginBlockEnd: "10px",
                        marginBlockStart: "0px",
                        marginBottom: "10px",
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: "0px",
                        textAlign: "center",
                        textSizeAdjust: "100%",
                        textTransform: "uppercase",
                      }}
                    >
                      Hotline
                    </h5>
                    <h3
                      style={{
                        blockSize: "26.6px",
                        borderBlockEndColor: "rgb(244, 194, 214)",
                        borderBlockEndStyle: "dashed",
                        borderBlockEndWidth: "1.6px",
                        borderBottomColor: "rgb(244, 194, 214)",
                        borderBottomStyle: "dashed",
                        borderBottomWidth: "1.6px",
                        boxSizing: "border-box",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "24px",
                        inlineSize: "111.1px",
                        lineHeight: "25px",
                        marginBlockEnd: "0px",
                        marginBlockStart: "16px",
                        marginBottom: "0px",
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: "16px",
                        textAlign: "center",
                        textSizeAdjust: "100%",
                        textTransform: "uppercase",
                      }}
                    >
                      18006733
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              blockSize: "149px",
              boxSizing: "border-box",
              fontFamily: "Comfortaa, Arial",
              fontSize: "16px",
              inlineSize: "379.987px",
              lineHeight: "18.4px",
              marginLeft: 0,
              marginRight: 0,
              minBlockSize: "auto",
              minHeight: "auto",
              minInlineSize: "auto",
              minWidth: "auto",
              textSizeAdjust: "100%",
            }}
            id={"pgc-614-13-2"}
            className={"panel-grid-cell"}
          >
            <div
              style={{
                blockSize: "149px",
                boxSizing: "border-box",
                fontFamily: "Comfortaa, Arial",
                fontSize: "16px",
                inlineSize: "379.987px",
                lineHeight: "18.4px",
                marginLeft: 0,
                marginRight: 0,
                textSizeAdjust: "100%",
              }}
              id={"panel-614-13-2-0"}
              className={
                "so-panel widget widget_sow-editor panel-first-child panel-last-child"
              }
              data-index={32}
            >
              <div
                style={{
                  alignItems: "center",
                  blockSize: "149px",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: "16px",
                  inlineSize: "379.987px",
                  justifyContent: "center",
                  lineHeight: "18.4px",
                  marginLeft: 0,
                  marginRight: 0,
                  textSizeAdjust: "100%",
                  WebkitBoxAlign: "center",
                  WebkitBoxOrient: "vertical",
                  WebkitBoxPack: "center",
                }}
                className={
                  "home-adres panel-widget-style panel-widget-style-for-614-13-2-0"
                }
              >
                <div
                  style={{
                    blockSize: "82px",
                    boxSizing: "border-box",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: "16px",
                    inlineSize: "376.612px",
                    lineHeight: "18.4px",
                    marginLeft: 0,
                    marginRight: 0,
                    minBlockSize: "auto",
                    minHeight: "auto",
                    minInlineSize: "auto",
                    minWidth: "auto",
                    textSizeAdjust: "100%",
                  }}
                  className={"so-widget-sow-editor so-widget-sow-editor-base"}
                >
                  <div
                    style={{
                      blockSize: "57px",
                      boxSizing: "border-box",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: "16px",
                      inlineSize: "376.612px",
                      lineHeight: "18.4px",
                      marginLeft: 0,
                      marginRight: 0,
                      textSizeAdjust: "100%",
                    }}
                    className={"siteorigin-widget-tinymce textwidget"}
                  >
                    <h5
                      style={{
                        blockSize: "19px",
                        boxSizing: "border-box",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "17px",
                        inlineSize: "376.612px",
                        lineHeight: "19px",
                        marginBlockEnd: "10px",
                        marginBlockStart: "0px",
                        marginBottom: "10px",
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: "0px",
                        textAlign: "center",
                        textSizeAdjust: "100%",
                        textTransform: "uppercase",
                      }}
                    >
                      PHÒNG KHÁM Q.2
                    </h5>
                    <p
                      style={{
                        blockSize: "28px",
                        boxSizing: "border-box",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "17px",
                        fontWeight: 300,
                        inlineSize: "376.612px",
                        lineHeight: "28px",
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
                      63 Xuân Thủy, Quận 2, Thành phố Thủ Đức
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
)
}
export  function Home() {
  return (
    <div className="w-screen">
      <header
        style={{
          margin: 0,
          backgroundAttachment: "scroll, scroll",
          backgroundBlendMode: "normal, normal",
          backgroundClip: "border-box, border-box",
          backgroundImage:
            "url(https://glo365.vn/wp-content/themes/ndg-quantum/imgs/header-image2x.png), url(https://glo365.vn/wp-content/themes/ndg-quantum/imgs/header-2.png)",
          backgroundOrigin: "padding-box, padding-box",
          backgroundPosition: "-450px 0%, -450px 0%",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundSize: "auto, auto",
          blockSize: 420,
          boxSizing: "border-box",
          fontFamily: "Comfortaa, Arial",
          fontSize: 16,
          inlineSize: 1536,
          lineHeight: "18.4px",
          minBlockSize: 420,
          minHeight: 420,
          minInlineSize: "auto",
          minWidth: "auto",
          perspectiveOrigin: "768px 210px",
          textSizeAdjust: "100%",
          WebkitLocale: "vi",
        }}
        className="frontpage-header"
      >
        <div
          style={{
            alignItems: "flex-start",
            blockSize: 280,
            boxSizing: "border-box",
            display: "flex",
            fontFamily: "Comfortaa, Arial",
            fontSize: 16,
            inlineSize: 1200,
            justifyContent: "space-between",
            lineHeight: "18.4px",
            marginLeft: "auto",
            marginRight: "auto",
            perspectiveOrigin: "600px 140px",
            textSizeAdjust: "100%",
            transformOrigin: "600px 140px",
            WebkitBoxAlign: "start",
            WebkitBoxPack: "justify",
            WebkitLocale: "vi",
            width: 1200,
          }}
          className="container flex-row fsb ais"
        >
          <div
            style={{
              alignItems: "flex-start",
              blockSize: "266.7px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              fontFamily: "Comfortaa, Arial",
              fontSize: 16,
              inlineSize: "219.4px",
              lineHeight: "18.4px",
              marginLeft: 0,
              marginRight: 0,
              minBlockSize: "auto",
              minHeight: "auto",
              minInlineSize: "auto",
              minWidth: "auto",
              perspectiveOrigin: "109.7px 133.35px",
              textSizeAdjust: "100%",
              transformOrigin: "109.7px 133.35px",
              WebkitBoxAlign: "start",
              WebkitBoxOrient: "vertical",
              WebkitLocale: "vi",
            }}
            className="flex-col ais"
          >
            <div
              style={{
                blockSize: 115,
                boxSizing: "border-box",
                display: "flex",
                fontFamily: "Comfortaa, Arial",
                fontSize: 16,
                inlineSize: "147.712px",
                lineHeight: "18.4px",
                marginLeft: 0,
                marginRight: 0,
                minBlockSize: "auto",
                minHeight: "auto",
                minInlineSize: "auto",
                minWidth: "auto",
                paddingBlockEnd: 27,
                paddingBlockStart: 68,
                paddingBottom: 27,
                paddingTop: 68,
                perspectiveOrigin: "73.85px 57.5px",
                textSizeAdjust: "100%",
                transformOrigin: "73.8562px 57.5px",
                WebkitLocale: "vi",
              }}
              className="flex-row frontpage-social-lang"
            >
              <div
                style={{
                  blockSize: 20,
                  boxSizing: "border-box",
                  display: "flex",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: 16,
                  inlineSize: 84,
                  lineHeight: "18.4px",
                  marginLeft: 0,
                  marginRight: 0,
                  minBlockSize: "auto",
                  minHeight: "auto",
                  minInlineSize: "auto",
                  minWidth: "auto",
                  perspectiveOrigin: "42px 10px",
                  textSizeAdjust: "100%",
                  transformOrigin: "42px 10px",
                  WebkitLocale: "vi",
                }}
                className="ndg-social"
              >
                <a
                  style={{
                    backgroundImage:
                      "url(https://glo365.vn/wp-content/themes/ndg-quantum/imgs/social/youtube.svg)",
                    backgroundSize: "cover",
                    blockSize: 20,
                    borderBlockEndColor: "rgb(0, 0, 238)",
                    borderBlockStartColor: "rgb(0, 0, 238)",
                    borderBottomColor: "rgb(0, 0, 238)",
                    borderInlineEndColor: "rgb(0, 0, 238)",
                    borderInlineStartColor: "rgb(0, 0, 238)",
                    borderLeftColor: "rgb(0, 0, 238)",
                    borderRightColor: "rgb(0, 0, 238)",
                    borderTopColor: "rgb(0, 0, 238)",
                    boxSizing: "border-box",
                    caretColor: "rgb(0, 0, 238)",
                    color: "rgb(0, 0, 238)",
                    columnRuleColor: "rgb(0, 0, 238)",
                    content: "",
                    cursor: "pointer",
                    display: "block",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: 16,
                    inlineSize: 20,
                    lineHeight: "18.4px",
                    marginInlineEnd: 8,
                    marginLeft: 0,
                    marginRight: 12,
                    minBlockSize: "auto",
                    minHeight: "auto",
                    minInlineSize: "auto",
                    minWidth: "auto",
                    outlineColor: "rgb(0, 0, 238)",
                    perspectiveOrigin: "10px 10px",
                    textDecoration: "underline solid rgb(0, 0, 238)",
                    textDecorationColor: "rgb(0, 0, 238)",
                    textDecorationLine: "underline",
                    textEmphasisColor: "rgb(0, 0, 238)",
                    textSizeAdjust: "100%",
                    transformOrigin: "10px 10px",
                    transitionDuration: "0.3s",
                    WebkitLocale: "vi",
                    WebkitTextDecorationsInEffect: "underline",
                    WebkitTextFillColor: "rgb(0, 0, 238)",
                    WebkitTextStrokeColor: "rgb(0, 0, 238)",
                    width: 20,
                    height: 20,
                  }}
                  href="https://www.youtube.com/channel/UC584NxbpaBaDe9_jJkG8scQ"
                  className="yt"
                />
                <a
                  style={{
                    backgroundImage:
                      "url(https://glo365.vn/wp-content/themes/ndg-quantum/imgs/social/instagram.svg)",
                    backgroundSize: "cover",
                    blockSize: 20,
                    borderBlockEndColor: "rgb(0, 0, 238)",
                    borderBlockStartColor: "rgb(0, 0, 238)",
                    borderBottomColor: "rgb(0, 0, 238)",
                    borderInlineEndColor: "rgb(0, 0, 238)",
                    borderInlineStartColor: "rgb(0, 0, 238)",
                    borderLeftColor: "rgb(0, 0, 238)",
                    borderRightColor: "rgb(0, 0, 238)",
                    borderTopColor: "rgb(0, 0, 238)",
                    boxSizing: "border-box",
                    caretColor: "rgb(0, 0, 238)",
                    color: "rgb(0, 0, 238)",
                    columnRuleColor: "rgb(0, 0, 238)",
                    content: "",
                    cursor: "pointer",
                    display: "block",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: 16,
                    inlineSize: 20,
                    lineHeight: "18.4px",
                    marginInlineEnd: 8,
                    marginLeft: 0,
                    marginRight: 12,
                    minBlockSize: "auto",
                    minHeight: "auto",
                    minInlineSize: "auto",
                    minWidth: "auto",
                    outlineColor: "rgb(0, 0, 238)",
                    perspectiveOrigin: "10px 10px",
                    textDecoration: "underline solid rgb(0, 0, 238)",
                    textDecorationColor: "rgb(0, 0, 238)",
                    textDecorationLine: "underline",
                    textEmphasisColor: "rgb(0, 0, 238)",
                    textSizeAdjust: "100%",
                    transformOrigin: "10px 10px",
                    transitionDuration: "0.3s",
                    WebkitLocale: "vi",
                    WebkitTextDecorationsInEffect: "underline",
                    WebkitTextFillColor: "rgb(0, 0, 238)",
                    WebkitTextStrokeColor: "rgb(0, 0, 238)",
                    width: 20,
                    height: 20,
                  }}
                  href="https://www.instagram.com/Glo365.vn/"
                  className="insta"
                />
                <a
                  style={{
                    backgroundImage:
                      "url(https://glo365.vn/wp-content/themes/ndg-quantum/imgs/social/facebook-logo-button.svg)",
                    backgroundSize: "cover",
                    blockSize: 20,
                    borderBlockEndColor: "rgb(0, 0, 238)",
                    borderBlockStartColor: "rgb(0, 0, 238)",
                    borderBottomColor: "rgb(0, 0, 238)",
                    borderInlineEndColor: "rgb(0, 0, 238)",
                    borderInlineStartColor: "rgb(0, 0, 238)",
                    borderLeftColor: "rgb(0, 0, 238)",
                    borderRightColor: "rgb(0, 0, 238)",
                    borderTopColor: "rgb(0, 0, 238)",
                    boxSizing: "border-box",
                    caretColor: "rgb(0, 0, 238)",
                    color: "rgb(0, 0, 238)",
                    columnRuleColor: "rgb(0, 0, 238)",
                    content: "",
                    cursor: "pointer",
                    display: "block",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: 16,
                    inlineSize: 20,
                    lineHeight: "18.4px",
                    marginInlineEnd: 8,
                    marginLeft: 0,
                    marginRight: 12,
                    minBlockSize: "auto",
                    minHeight: "auto",
                    minInlineSize: "auto",
                    minWidth: "auto",
                    outlineColor: "rgb(0, 0, 238)",
                    perspectiveOrigin: "10px 10px",
                    textDecoration: "underline solid rgb(0, 0, 238)",
                    textDecorationColor: "rgb(0, 0, 238)",
                    textDecorationLine: "underline",
                    textEmphasisColor: "rgb(0, 0, 238)",
                    textSizeAdjust: "100%",
                    transformOrigin: "10px 10px",
                    transitionDuration: "0.3s",
                    WebkitLocale: "vi",
                    WebkitTextDecorationsInEffect: "underline",
                    WebkitTextFillColor: "rgb(0, 0, 238)",
                    WebkitTextStrokeColor: "rgb(0, 0, 238)",
                    width: 20,
                    height: 20,
                  }}
                  href="http://www.facebook.com/Glo365.vn"
                  className="fb"
                />
              </div>
              <div
                style={{
                  blockSize: 20,
                  bottom: 0,
                  boxSizing: "border-box",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: 16,
                  inlineSize: "36.7125px",
                  insetBlockEnd: 0,
                  insetBlockStart: 0,
                  insetInlineEnd: 0,
                  insetInlineStart: 0,
                  left: 0,
                  lineHeight: "18.4px",
                  marginInlineStart: 27,
                  marginLeft: 27,
                  marginRight: 0,
                  minBlockSize: "auto",
                  minHeight: "auto",
                  minInlineSize: "auto",
                  minWidth: "auto",
                  perspectiveOrigin: "18.35px 10px",
                  position: "relative",
                  right: 0,
                  textSizeAdjust: "100%",
                  top: 0,
                  transformOrigin: "18.3563px 10px",
                  WebkitLocale: "vi",
                }}
                className="ndg-select"
              >
                <div
                  style={{
                    alignItems: "center",
                    blockSize: 20,
                    borderBlockEndColor: "rgb(255, 255, 255)",
                    borderBlockStartColor: "rgb(255, 255, 255)",
                    borderBottomColor: "rgb(255, 255, 255)",
                    borderInlineEndColor: "rgb(255, 255, 255)",
                    borderInlineStartColor: "rgb(255, 255, 255)",
                    borderLeftColor: "rgb(255, 255, 255)",
                    borderRightColor: "rgb(255, 255, 255)",
                    borderTopColor: "rgb(255, 255, 255)",
                    boxSizing: "border-box",
                    caretColor: "rgb(255, 255, 255)",
                    color: "rgb(255, 255, 255)",
                    columnRuleColor: "rgb(255, 255, 255)",
                    cursor: "pointer",
                    display: "flex",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: 12,
                    inlineSize: "36.7125px",
                    lineHeight: 17,
                    marginLeft: 0,
                    marginRight: 0,
                    outlineColor: "rgb(255, 255, 255)",
                    perspectiveOrigin: "18.35px 10px",
                    textDecoration: "none solid rgb(255, 255, 255)",
                    textDecorationColor: "rgb(255, 255, 255)",
                    textEmphasisColor: "rgb(255, 255, 255)",
                    textSizeAdjust: "100%",
                    transformOrigin: "18.3563px 10px",
                    WebkitBoxAlign: "center",
                    WebkitLocale: "vi",
                    WebkitTextFillColor: "rgb(255, 255, 255)",
                    WebkitTextStrokeColor: "rgb(255, 255, 255)",
                    height: 20,
                  }}
                  className="currrent-select-value"
                >
                  EN
                </div>
              </div>
            </div>
            <div
              style={{
                blockSize: "44.2px",
                bottom: 0,
                boxSizing: "border-box",
                fontFamily: "Comfortaa, Arial",
                fontSize: 16,
                inlineSize: "219.4px",
                insetBlockEnd: 0,
                insetBlockStart: 0,
                insetInlineEnd: 0,
                insetInlineStart: 0,
                left: 0,
                lineHeight: "18.4px",
                marginBlockEnd: "17.5px",
                marginBottom: "17.5px",
                marginLeft: 0,
                marginRight: 0,
                minBlockSize: "auto",
                minHeight: "auto",
                minInlineSize: "auto",
                minWidth: "auto",
                perspectiveOrigin: "109.7px 22.1px",
                position: "relative",
                right: 0,
                textSizeAdjust: "100%",
                top: 0,
                transformOrigin: "109.7px 22.1px",
                WebkitLocale: "vi",
              }}
              className="search_block"
            >
              <div
                style={{
                  blockSize: "44.2px",
                  bottom: 0,
                  boxSizing: "border-box",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: 16,
                  inlineSize: "219.4px",
                  insetBlockEnd: 0,
                  insetBlockStart: 0,
                  insetInlineEnd: 0,
                  insetInlineStart: 0,
                  left: 0,
                  lineHeight: "18.4px",
                  listStyleType: "none",
                  marginLeft: 0,
                  marginRight: 0,
                  perspectiveOrigin: "109.7px 22.1px",
                  position: "relative",
                  right: 0,
                  textSizeAdjust: "100%",
                  top: 0,
                  transformOrigin: "109.7px 22.1px",
                  WebkitLocale: "vi",
                }}
                id="search-live-408569956"
                className="search-live floating"
              >
                <div
                  style={{
                    blockSize: "44.2px",
                    bottom: 0,
                    boxSizing: "border-box",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: 16,
                    inlineSize: "219.4px",
                    insetBlockEnd: 0,
                    insetBlockStart: 0,
                    insetInlineEnd: 0,
                    insetInlineStart: 0,
                    left: 0,
                    lineHeight: "18.4px",
                    listStyleType: "none",
                    marginLeft: 0,
                    marginRight: 0,
                    perspectiveOrigin: "109.7px 22.1px",
                    position: "relative",
                    right: 0,
                    textSizeAdjust: "100%",
                    top: 0,
                    transformOrigin: "109.7px 22.1px",
                    WebkitLocale: "vi",
                  }}
                  className="search-live-form"
                >
                  <form
                    style={{
                      blockSize: "44.2px",
                      bottom: 0,
                      boxSizing: "border-box",
                      display: "flex",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: 16,
                      inlineSize: "219.4px",
                      insetBlockEnd: 0,
                      insetBlockStart: 0,
                      insetInlineEnd: 0,
                      insetInlineStart: 0,
                      left: 0,
                      lineHeight: "18.4px",
                      listStyleType: "none",
                      marginBlockEnd: 0,
                      marginBottom: 0,
                      marginLeft: 0,
                      marginRight: 0,
                      perspectiveOrigin: "109.7px 22.1px",
                      position: "relative",
                      right: 0,
                      textSizeAdjust: "100%",
                      top: 0,
                      transformOrigin: "109.7px 22.1px",
                      WebkitLocale: "vi",
                    }}
                    role="search"
                    id="search-live-form-408569956"
                    className="search-live-form"
                    action="https://glo365.vn/"
                    method="get"
                  >
                    <input
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        backgroundImage:
                          "url(https://glo365.vn/wp-content/themes/ndg-quantum/imgs/magnifying-glass.svg)",
                        backgroundPosition: "0% 50%",
                        backgroundRepeat: "no-repeat",
                        blockSize: "44.2px",
                        borderBlockEndColor: "rgb(255, 255, 255)",
                        borderBlockEndStyle: "solid",
                        borderBlockEndWidth: "0.8px",
                        borderBlockStartColor: "rgb(255, 255, 255)",
                        borderBlockStartStyle: "none",
                        borderBlockStartWidth: 0,
                        borderBottomColor: "rgb(255, 255, 255)",
                        borderBottomStyle: "solid",
                        borderBottomWidth: "0.8px",
                        borderInlineEndColor: "rgb(255, 255, 255)",
                        borderInlineEndStyle: "none",
                        borderInlineEndWidth: 0,
                        borderInlineStartColor: "rgb(255, 255, 255)",
                        borderInlineStartStyle: "none",
                        borderInlineStartWidth: 0,
                        borderLeftColor: "rgb(255, 255, 255)",
                        borderLeftStyle: "none",
                        borderLeftWidth: 0,
                        borderRightColor: "rgb(255, 255, 255)",
                        borderRightStyle: "none",
                        borderRightWidth: 0,
                        borderTopColor: "rgb(255, 255, 255)",
                        borderTopStyle: "none",
                        borderTopWidth: 0,
                        boxSizing: "border-box",
                        caretColor: "rgb(255, 255, 255)",
                        color: "rgb(255, 255, 255)",
                        columnRuleColor: "rgb(255, 255, 255)",
                        fontFamily: "sans-serif",
                        fontSize: 16,
                        inlineSize: "219.4px",
                        lineHeight: 16,
                        listStyleType: "none",
                        marginLeft: 0,
                        marginRight: 0,
                        minBlockSize: "auto",
                        minHeight: "auto",
                        minInlineSize: "auto",
                        minWidth: "auto",
                        outlineColor: "rgb(255, 255, 255)",
                        paddingBlockEnd: "12.5px",
                        paddingBlockStart: "12.5px",
                        paddingBottom: "12.5px",
                        paddingInlineEnd: 0,
                        paddingInlineStart: 25,
                        paddingLeft: 25,
                        paddingRight: 0,
                        paddingTop: "12.5px",
                        perspectiveOrigin: "109.7px 22.1px",
                        textDecoration: "none solid rgb(255, 255, 255)",
                        textDecorationColor: "rgb(255, 255, 255)",
                        textEmphasisColor: "rgb(255, 255, 255)",
                        textSizeAdjust: "100%",
                        textTransform: "uppercase",
                        transformOrigin: "109.7px 22.1px",
                        transitionDuration: "1s",
                        WebkitLocale: "vi",
                        WebkitTextFillColor: "rgb(255, 255, 255)",
                        WebkitTextStrokeColor: "rgb(255, 255, 255)",
                      }}
                      id="search-live-field-408569956"
                      name="s"
                      type="text"
                      className="search-live-field"
                      placeholder="Search …"
                      autoComplete="off"
                      title="Search for:"
                      defaultValue=""
                    />
                    <noscript
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: 16,
                        lineHeight: "18.4px",
                        listStyleType: "none",
                        marginLeft: 0,
                        marginRight: 0,
                        textSizeAdjust: "100%",
                        WebkitLocale: "vi",
                      }}
                    >
                      &lt;button type="submit"&gt;Search&lt;/button&gt;
                    </noscript>
                  </form>
                </div>
                <div
                  style={{
                    blockSize: 10,
                    bottom: "-10px",
                    boxSizing: "border-box",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: 16,
                    inlineSize: 0,
                    insetBlockEnd: "-10px",
                    insetBlockStart: "44.2px",
                    insetInlineEnd: "219.4px",
                    insetInlineStart: 0,
                    left: 0,
                    lineHeight: "18.4px",
                    listStyleType: "none",
                    marginLeft: 0,
                    marginRight: 0,
                    perspectiveOrigin: "0px 5px",
                    position: "absolute",
                    right: "219.4px",
                    textSizeAdjust: "100%",
                    top: "44.2px",
                    transformOrigin: "0px 5px",
                    zIndex: 10,
                    WebkitLocale: "vi",
                    width: 0,
                  }}
                  id="search-live-results-408569956"
                  className="search-live-results"
                >
                  <div
                    style={{
                      blockSize: 0,
                      boxSizing: "border-box",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: 16,
                      inlineSize: 0,
                      lineHeight: "18.4px",
                      listStyleType: "none",
                      marginBlockStart: 10,
                      marginLeft: 0,
                      marginRight: 0,
                      marginTop: "10px !important",
                      perspectiveOrigin: "0px 0px",
                      textSizeAdjust: "100%",
                      transformOrigin: "0px 0px",
                      WebkitLocale: "vi",
                      width: "100%",
                    }}
                    id="search-live-results-content-408569956"
                    className="search-live-results-content"
                  />
                </div>
              </div>{" "}
            </div>
          </div>
          <div
            style={{
              alignItems: "center",
              backgroundImage:
                "url(https://glo365.vn/wp-content/themes/ndg-quantum/imgs/logo-bg.svg)",
              backgroundPosition: "50% 0%",
              backgroundRepeat: "no-repeat",
              blockSize: 280,
              boxSizing: "border-box",
              display: "flex",
              fontFamily: "Comfortaa, Arial",
              fontSize: 16,
              inlineSize: 440,
              justifyContent: "center",
              lineHeight: "18.4px",
              marginLeft: 0,
              marginRight: 0,
              minBlockSize: "auto",
              minHeight: "auto",
              minInlineSize: "auto",
              minWidth: "auto",
              perspectiveOrigin: "220px 140px",
              textSizeAdjust: "100%",
              transformOrigin: "220px 140px",
              WebkitBoxAlign: "center",
              WebkitBoxPack: "center",
              WebkitLocale: "vi",
              width: 440,
              height: 280,
            }}
            className="logo-big"
          >
            <a
              style={{
                blockSize: "114.1px",
                borderBlockEndColor: "rgb(0, 0, 238)",
                borderBlockStartColor: "rgb(0, 0, 238)",
                borderBottomColor: "rgb(0, 0, 238)",
                borderInlineEndColor: "rgb(0, 0, 238)",
                borderInlineStartColor: "rgb(0, 0, 238)",
                borderLeftColor: "rgb(0, 0, 238)",
                borderRightColor: "rgb(0, 0, 238)",
                borderTopColor: "rgb(0, 0, 238)",
                boxSizing: "border-box",
                caretColor: "rgb(0, 0, 238)",
                color: "rgb(0, 0, 238)",
                columnRuleColor: "rgb(0, 0, 238)",
                cursor: "pointer",
                display: "block",
                fontFamily: "Comfortaa, Arial",
                fontSize: 16,
                inlineSize: 267,
                lineHeight: "18.4px",
                marginLeft: 0,
                marginRight: 0,
                minBlockSize: "auto",
                minHeight: "auto",
                minInlineSize: "auto",
                minWidth: "auto",
                outlineColor: "rgb(0, 0, 238)",
                perspectiveOrigin: "133.5px 57.05px",
                textDecoration: "underline solid rgb(0, 0, 238)",
                textDecorationColor: "rgb(0, 0, 238)",
                textDecorationLine: "underline",
                textEmphasisColor: "rgb(0, 0, 238)",
                textSizeAdjust: "100%",
                transformOrigin: "133.5px 57.05px",
                transitionDuration: "0.3s",
                WebkitLocale: "vi",
                WebkitTextDecorationsInEffect: "underline",
                WebkitTextFillColor: "rgb(0, 0, 238)",
                WebkitTextStrokeColor: "rgb(0, 0, 238)",
              }}
              href="https://glo365.vn/"
              className="custom-logo-link"
              rel="home"
              aria-current="page"
            >
              <img
                style={{
                  blockSize: "80.1px",
                  borderBlockEndColor: "rgb(0, 0, 238)",
                  borderBlockStartColor: "rgb(0, 0, 238)",
                  borderBottomColor: "rgb(0, 0, 238)",
                  borderInlineEndColor: "rgb(0, 0, 238)",
                  borderInlineStartColor: "rgb(0, 0, 238)",
                  borderLeftColor: "rgb(0, 0, 238)",
                  borderRightColor: "rgb(0, 0, 238)",
                  borderTopColor: "rgb(0, 0, 238)",
                  boxSizing: "border-box",
                  caretColor: "rgb(0, 0, 238)",
                  color: "rgb(0, 0, 238)",
                  columnRuleColor: "rgb(0, 0, 238)",
                  cursor: "pointer",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: 16,
                  inlineSize: 267,
                  lineHeight: "18.4px",
                  marginBlockEnd: 30,
                  marginBottom: 30,
                  marginLeft: 0,
                  marginRight: 0,
                  outlineColor: "rgb(0, 0, 238)",
                  perspectiveOrigin: "133.5px 40.05px",
                  textDecoration: "none solid rgb(0, 0, 238)",
                  textDecorationColor: "rgb(0, 0, 238)",
                  textEmphasisColor: "rgb(0, 0, 238)",
                  textSizeAdjust: "100%",
                  transformOrigin: "133.5px 40.05px",
                  WebkitLocale: "vi",
                  WebkitTextDecorationsInEffect: "underline",
                  WebkitTextFillColor: "rgb(0, 0, 238)",
                  WebkitTextStrokeColor: "rgb(0, 0, 238)",
                  width: 267,
                }}
                width={1}
                height={1}
                src="https://glo365.vn/wp-content/uploads/2020/07/Glo365-logo-2000x600.svg"
                className="custom-logo entered lazyloaded"
                alt="Glo365"
                data-lazy-src="https://glo365.vn/wp-content/uploads/2020/07/Glo365-logo-2000x600.svg"
                data-ll-status="loaded"
              />
              <noscript
                style={{
                  borderBlockEndColor: "rgb(0, 0, 238)",
                  borderBlockStartColor: "rgb(0, 0, 238)",
                  borderBottomColor: "rgb(0, 0, 238)",
                  borderInlineEndColor: "rgb(0, 0, 238)",
                  borderInlineStartColor: "rgb(0, 0, 238)",
                  borderLeftColor: "rgb(0, 0, 238)",
                  borderRightColor: "rgb(0, 0, 238)",
                  borderTopColor: "rgb(0, 0, 238)",
                  boxSizing: "border-box",
                  caretColor: "rgb(0, 0, 238)",
                  color: "rgb(0, 0, 238)",
                  columnRuleColor: "rgb(0, 0, 238)",
                  cursor: "pointer",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: 16,
                  lineHeight: "18.4px",
                  marginLeft: 0,
                  marginRight: 0,
                  outlineColor: "rgb(0, 0, 238)",
                  textDecoration: "none solid rgb(0, 0, 238)",
                  textDecorationColor: "rgb(0, 0, 238)",
                  textEmphasisColor: "rgb(0, 0, 238)",
                  textSizeAdjust: "100%",
                  WebkitLocale: "vi",
                  WebkitTextDecorationsInEffect: "underline",
                  WebkitTextFillColor: "rgb(0, 0, 238)",
                  WebkitTextStrokeColor: "rgb(0, 0, 238)",
                }}
              >
                &lt;img width="1" height="1"
                src="https://glo365.vn/wp-content/uploads/2020/07/Glo365-logo-2000x600.svg"
                class="custom-logo" alt="Glo365" /&gt;
              </noscript>
            </a>{" "}
          </div>
          <div
            style={{
              blockSize: 274,
              boxSizing: "border-box",
              fontFamily: "Comfortaa, Arial",
              fontSize: 16,
              inlineSize: 300,
              lineHeight: "18.4px",
              marginLeft: 0,
              marginRight: 0,
              minBlockSize: "auto",
              minHeight: "auto",
              minInlineSize: "auto",
              minWidth: "auto",
              perspectiveOrigin: "150px 137px",
              textSizeAdjust: "100%",
              transformOrigin: "150px 137px",
              WebkitLocale: "vi",
            }}
            className="frontpage-nav"
          >
            <div
              style={{
                blockSize: 192,
                boxSizing: "border-box",
                fontFamily: "Comfortaa, Arial",
                fontSize: 16,
                inlineSize: 300,
                lineHeight: "18.4px",
                marginLeft: 0,
                marginRight: 0,
                perspectiveOrigin: "150px 96px",
                textSizeAdjust: "100%",
                transformOrigin: "150px 96px",
                WebkitLocale: "vi",
              }}
              className="menu-main-vi-container"
            >
              <ul
                style={{
                  blockSize: 192,
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: 16,
                  inlineSize: 366,
                  lineHeight: "18.4px",
                  marginBlockEnd: 0,
                  marginBlockStart: 82,
                  marginBottom: 0,
                  marginInlineStart: "-66px",
                  marginLeft: "-66px",
                  marginRight: 0,
                  marginTop: 82,
                  maxBlockSize: 200,
                  maxHeight: 200,
                  paddingInlineStart: 0,
                  paddingLeft: 0,
                  perspectiveOrigin: "183px 96px",
                  textSizeAdjust: "100%",
                  transformOrigin: "183px 96px",
                  WebkitBoxOrient: "vertical",
                  WebkitLocale: "vi",
                  width: 366,
                }}
                id="menu-main-vi"
                className="frontpage-top-menu"
              >
                <li
                  style={{
                    blockSize: 48,
                    boxSizing: "border-box",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: 16,
                    inlineSize: "158.225px",
                    lineHeight: "18.4px",
                    listStyleType: "none",
                    marginLeft: 0,
                    marginRight: 0,
                    minBlockSize: "auto",
                    minHeight: "auto",
                    minInlineSize: "auto",
                    minWidth: "auto",
                    paddingBlockEnd: 15,
                    paddingBlockStart: 15,
                    paddingBottom: 15,
                    paddingInlineEnd: 30,
                    paddingInlineStart: 30,
                    paddingLeft: 30,
                    paddingRight: 30,
                    paddingTop: 15,
                    perspectiveOrigin: "79.1125px 24px",
                    textSizeAdjust: "100%",
                    transformOrigin: "79.1125px 24px",
                    WebkitLocale: "vi",
                  }}
                  id="menu-item-632"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-632"
                >
                  <a
                    style={{
                      blockSize: 18,
                      boxSizing: "border-box",
                      cursor: "pointer",
                      display: "block",
                      float: "right",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: 15,
                      gridRowStart: 300,
                      inlineSize: "67.325px",
                      lineHeight: 17,
                      listStyleType: "none",
                      marginLeft: 0,
                      marginRight: 0,
                      perspectiveOrigin: "33.6625px 9px",
                      textAlign: "left",
                      textDecoration: "none",
                      textSizeAdjust: "100%",
                      textTransform: "uppercase",
                      transformOrigin: "33.6625px 9px",
                      transitionDuration: "0.3s",
                      WebkitLocale: "vi",
                    }}
                    href="https://glo365.vn/services/"
                  >
                    DỊCH VỤ
                  </a>
                </li>
                <li
                  style={{
                    blockSize: 48,
                    boxSizing: "border-box",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: 16,
                    inlineSize: "158.225px",
                    lineHeight: "18.4px",
                    listStyleType: "none",
                    marginLeft: 0,
                    marginRight: 0,
                    minBlockSize: "auto",
                    minHeight: "auto",
                    minInlineSize: "auto",
                    minWidth: "auto",
                    paddingBlockEnd: 15,
                    paddingBlockStart: 15,
                    paddingBottom: 15,
                    paddingInlineEnd: 30,
                    paddingInlineStart: 30,
                    paddingLeft: 30,
                    paddingRight: 30,
                    paddingTop: 15,
                    perspectiveOrigin: "79.1125px 24px",
                    textSizeAdjust: "100%",
                    transformOrigin: "79.1125px 24px",
                    WebkitLocale: "vi",
                  }}
                  id="menu-item-638"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-638"
                >
                  <a
                    style={{
                      blockSize: 18,
                      boxSizing: "border-box",
                      cursor: "pointer",
                      display: "block",
                      float: "right",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: 15,
                      gridRowStart: 300,
                      inlineSize: "85.85px",
                      lineHeight: 17,
                      listStyleType: "none",
                      marginLeft: 0,
                      marginRight: 0,
                      perspectiveOrigin: "42.925px 9px",
                      textAlign: "left",
                      textDecoration: "none",
                      textSizeAdjust: "100%",
                      textTransform: "uppercase",
                      transformOrigin: "42.925px 9px",
                      transitionDuration: "0.3s",
                      WebkitLocale: "vi",
                    }}
                    href="https://shop.glo365.vn"
                  >
                    CỬA HÀNG
                  </a>
                </li>
                <li
                  style={{
                    blockSize: 48,
                    boxSizing: "border-box",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: 16,
                    inlineSize: "158.225px",
                    lineHeight: "18.4px",
                    listStyleType: "none",
                    marginLeft: 0,
                    marginRight: 0,
                    minBlockSize: "auto",
                    minHeight: "auto",
                    minInlineSize: "auto",
                    minWidth: "auto",
                    paddingBlockEnd: 15,
                    paddingBlockStart: 15,
                    paddingBottom: 15,
                    paddingInlineEnd: 30,
                    paddingInlineStart: 30,
                    paddingLeft: 30,
                    paddingRight: 30,
                    paddingTop: 15,
                    perspectiveOrigin: "79.1125px 24px",
                    textSizeAdjust: "100%",
                    transformOrigin: "79.1125px 24px",
                    WebkitLocale: "vi",
                  }}
                  id="menu-item-633"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-633"
                >
                  <a
                    style={{
                      blockSize: 18,
                      boxSizing: "border-box",
                      cursor: "pointer",
                      display: "block",
                      float: "right",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: 15,
                      gridRowStart: 300,
                      inlineSize: "63.3625px",
                      lineHeight: 17,
                      listStyleType: "none",
                      marginLeft: 0,
                      marginRight: 0,
                      perspectiveOrigin: "31.675px 9px",
                      textAlign: "left",
                      textDecoration: "none",
                      textSizeAdjust: "100%",
                      textTransform: "uppercase",
                      transformOrigin: "31.6812px 9px",
                      transitionDuration: "0.3s",
                      WebkitLocale: "vi",
                    }}
                    href="https://glo365.vn/events/"
                  >
                    SỰ KIỆN
                  </a>
                </li>
                <li
                  style={{
                    blockSize: 48,
                    boxSizing: "border-box",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: 16,
                    inlineSize: "158.225px",
                    lineHeight: "18.4px",
                    listStyleType: "none",
                    marginLeft: 0,
                    marginRight: 0,
                    minBlockSize: "auto",
                    minHeight: "auto",
                    minInlineSize: "auto",
                    minWidth: "auto",
                    paddingBlockEnd: 15,
                    paddingBlockStart: 15,
                    paddingBottom: 15,
                    paddingInlineEnd: 30,
                    paddingInlineStart: 30,
                    paddingLeft: 30,
                    paddingRight: 30,
                    paddingTop: 15,
                    perspectiveOrigin: "79.1125px 24px",
                    textSizeAdjust: "100%",
                    transformOrigin: "79.1125px 24px",
                    WebkitLocale: "vi",
                  }}
                  id="menu-item-635"
                  className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-635"
                >
                  <a
                    style={{
                      blockSize: 18,
                      boxSizing: "border-box",
                      cursor: "pointer",
                      display: "block",
                      float: "right",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: 15,
                      gridRowStart: 300,
                      inlineSize: "87.4px",
                      lineHeight: 17,
                      listStyleType: "none",
                      marginLeft: 0,
                      marginRight: 0,
                      perspectiveOrigin: "43.7px 9px",
                      textAlign: "left",
                      textDecoration: "none",
                      textSizeAdjust: "100%",
                      textTransform: "uppercase",
                      transformOrigin: "43.7px 9px",
                      transitionDuration: "0.3s",
                      WebkitLocale: "vi",
                    }}
                    href="https://glo365.vn/#about"
                    aria-current="page"
                  >
                    GIỚI THIỆU
                  </a>
                </li>
                <li
                  style={{
                    blockSize: 48,
                    boxSizing: "border-box",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: 16,
                    inlineSize: "207.775px",
                    lineHeight: "18.4px",
                    listStyleType: "none",
                    marginLeft: 0,
                    marginRight: 0,
                    minBlockSize: "auto",
                    minHeight: "auto",
                    minInlineSize: "auto",
                    minWidth: "auto",
                    paddingBlockEnd: 15,
                    paddingBlockStart: 15,
                    paddingBottom: 15,
                    paddingInlineEnd: 30,
                    paddingInlineStart: 30,
                    paddingLeft: 30,
                    paddingRight: 30,
                    paddingTop: 15,
                    perspectiveOrigin: "103.887px 24px",
                    textSizeAdjust: "100%",
                    transformOrigin: "103.887px 24px",
                    WebkitLocale: "vi",
                  }}
                  id="menu-item-636"
                  className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-636"
                >
                  <a
                    style={{
                      blockSize: 18,
                      boxSizing: "border-box",
                      cursor: "pointer",
                      display: "block",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: 15,
                      gridRowStart: 300,
                      inlineSize: "63.8625px",
                      lineHeight: 17,
                      listStyleType: "none",
                      marginLeft: 0,
                      marginRight: 0,
                      perspectiveOrigin: "31.925px 9px",
                      textAlign: "left",
                      textDecoration: "none",
                      textSizeAdjust: "100%",
                      textTransform: "uppercase",
                      transformOrigin: "31.9312px 9px",
                      transitionDuration: "0.3s",
                      WebkitLocale: "vi",
                      width: "fit-content",
                    }}
                    href="https://glo365.vn/#contact"
                    aria-current="page"
                  >
                    LIÊN HỆ
                  </a>
                </li>
                <li
                  style={{
                    blockSize: 48,
                    boxSizing: "border-box",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: 16,
                    inlineSize: "207.775px",
                    lineHeight: "18.4px",
                    listStyleType: "none",
                    marginLeft: 0,
                    marginRight: 0,
                    minBlockSize: "auto",
                    minHeight: "auto",
                    minInlineSize: "auto",
                    minWidth: "auto",
                    paddingBlockEnd: 15,
                    paddingBlockStart: 15,
                    paddingBottom: 15,
                    paddingInlineEnd: 30,
                    paddingInlineStart: 30,
                    paddingLeft: 30,
                    paddingRight: 30,
                    paddingTop: 15,
                    perspectiveOrigin: "103.887px 24px",
                    textSizeAdjust: "100%",
                    transformOrigin: "103.887px 24px",
                    WebkitLocale: "vi",
                  }}
                  id="menu-item-637"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-637"
                >
                  <a
                    style={{
                      blockSize: 18,
                      boxSizing: "border-box",
                      cursor: "pointer",
                      display: "block",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: 15,
                      gridRowStart: 300,
                      inlineSize: "106.713px",
                      lineHeight: 17,
                      listStyleType: "none",
                      marginLeft: 0,
                      marginRight: 0,
                      perspectiveOrigin: "53.35px 9px",
                      textAlign: "left",
                      textDecoration: "none",
                      textSizeAdjust: "100%",
                      textTransform: "uppercase",
                      transformOrigin: "53.3563px 9px",
                      transitionDuration: "0.3s",
                      WebkitLocale: "vi",
                      width: "fit-content",
                    }}
                    href="https://glo365.vn/careers/"
                  >
                    TUYỂN DỤNG
                  </a>
                </li>
                <li
                  style={{
                    blockSize: 48,
                    boxSizing: "border-box",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: 16,
                    inlineSize: "207.775px",
                    lineHeight: "18.4px",
                    listStyleType: "none",
                    marginLeft: 0,
                    marginRight: 0,
                    minBlockSize: "auto",
                    minHeight: "auto",
                    minInlineSize: "auto",
                    minWidth: "auto",
                    paddingBlockEnd: 15,
                    paddingBlockStart: 15,
                    paddingBottom: 15,
                    paddingInlineEnd: 30,
                    paddingInlineStart: 30,
                    paddingLeft: 30,
                    paddingRight: 30,
                    paddingTop: 15,
                    perspectiveOrigin: "103.887px 24px",
                    textSizeAdjust: "100%",
                    transformOrigin: "103.887px 24px",
                    WebkitLocale: "vi",
                  }}
                  id="menu-item-639"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-639"
                >
                  <a
                    style={{
                      blockSize: 18,
                      boxSizing: "border-box",
                      cursor: "pointer",
                      display: "block",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: 15,
                      gridRowStart: 300,
                      inlineSize: "136.95px",
                      lineHeight: 17,
                      listStyleType: "none",
                      marginLeft: 0,
                      marginRight: 0,
                      perspectiveOrigin: "68.475px 9px",
                      textAlign: "left",
                      textDecoration: "none",
                      textSizeAdjust: "100%",
                      textTransform: "uppercase",
                      transformOrigin: "68.475px 9px",
                      transitionDuration: "0.3s",
                      WebkitLocale: "vi",
                      width: "fit-content",
                    }}
                    href="https://shop.glo365.vn/blog/"
                  >
                    TẠP CHÍ LÀM ĐẸP
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div
        id="panel-614-1-0-0"
        className="p-4 bg-white font-comfortaa text-base leading-5 h-96"
      ></div>

      <div
        style={{
          margin: 0,
          blockSize: "480.8px",
          boxSizing: "border-box",
          fontFamily: "Comfortaa, Arial",
          fontSize: "16px",
          inlineSize: "1536px",
          lineHeight: "18.4px",
          textSizeAdjust: "100%",
        }}
        id={"pg-614-2"}
        className={"panel-grid panel-has-style"}
      >
        <div
          style={{
            alignItems: "flex-start",
            blockSize: "480.8px",
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
            "container slidebox panel-row-style panel-row-style-for-614-2"
          }
        >
          <div
            style={{
              blockSize: "480.8px",
              boxSizing: "border-box",
              fontFamily: "Comfortaa, Arial",
              fontSize: "16px",
              inlineSize: "379.987px",
              lineHeight: "18.4px",
              marginLeft: 0,
              marginRight: 0,
              minBlockSize: "auto",
              minHeight: "auto",
              minInlineSize: "auto",
              minWidth: "auto",
              textSizeAdjust: "100%",
              width: "calc(33.3333% - 20px)",
            }}
            id={"pgc-614-2-0"}
            className={"panel-grid-cell"}
          >
            <div
              style={{
                blockSize: "480.8px",
                boxSizing: "border-box",
                fontFamily: "Comfortaa, Arial",
                fontSize: "16px",
                inlineSize: "379.987px",
                lineHeight: "18.4px",
                marginLeft: 0,
                marginRight: 0,
                textSizeAdjust: "100%",
              }}
              id={"panel-614-2-0-0"}
              className={
                "so-panel widget widget_ink-media-box panel-first-child panel-last-child"
              }
              data-index={3}
            >
              <div
                style={{
                  blockSize: "480.8px",
                  boxSizing: "border-box",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: "16px",
                  inlineSize: "379.987px",
                  lineHeight: "18.4px",
                  marginLeft: 0,
                  marginRight: 0,
                  textSizeAdjust: "100%",
                }}
                className={
                  "home-serv panel-widget-style panel-widget-style-for-614-2-0-0"
                }
              >
                <div
                  style={{
                    blockSize: "480.8px",
                    boxSizing: "border-box",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: "16px",
                    inlineSize: "379.987px",
                    lineHeight: "18.4px",
                    marginLeft: 0,
                    marginRight: 0,
                    textSizeAdjust: "100%",
                  }}
                  className={
                    "so-widget-ink-media-box so-widget-ink-media-box-media-box-70f622b9c4a6"
                  }
                >
                  <div
                    style={{
                      alignItems: "flex-start",
                      blockSize: "480.8px",
                      boxSizing: "border-box",
                      display: "flex",
                      flexDirection: "column",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: "16px",
                      inlineSize: "379.987px",
                      lineHeight: "18.4px",
                      marginLeft: 0,
                      marginRight: 0,
                      textSizeAdjust: "100%",
                      WebkitBoxAlign: "start",
                      WebkitBoxOrient: "vertical",
                    }}
                    className={"iw-so-media-box"}
                  >
                    <div
                      style={{
                        blockSize: "234px",
                        boxSizing: "border-box",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "16px",
                        inlineSize: "230px",
                        lineHeight: "18.4px",
                        marginBlockEnd: "39px",
                        marginBottom: "39px",
                        marginLeft: 0,
                        marginRight: 0,
                        minBlockSize: "auto",
                        minHeight: "auto",
                        minInlineSize: "230px",
                        minWidth: "230px",
                        textSizeAdjust: "100%",
                      }}
                      className={"iw-so-media-box-media"}
                    >
                      <center
                        style={{
                          blockSize: "234px",
                          boxSizing: "border-box",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "16px",
                          inlineSize: "230px",
                          lineHeight: "18.4px",
                          marginLeft: 0,
                          marginRight: 0,
                          textSizeAdjust: "100%",
                        }}
                      >
                        <img
                          style={{
                            blockSize: "230px",
                            boxSizing: "border-box",
                            fontFamily: "Comfortaa, Arial",
                            fontSize: "16px",
                            inlineSize: "230px",
                            lineHeight: "18.4px",
                            marginLeft: 0,
                            marginRight: 0,
                            maxBlockSize: "230px",
                            maxHeight: "230px",
                            maxInlineSize: "230px",
                            maxWidth: "230px",
                            textAlign: "-webkit-center",
                            textSizeAdjust: "100%",
                            width: "230px",
                            height: "230px",
                          }}
                          width={1000}
                          height={1000}
                          src={
                            "https://glo365.vn/wp-content/uploads/2021/06/SkinGym-Round.png"
                          }
                          className={
                            "attachment-full size-full entered lazyloaded"
                          }
                          data-lazy-srcset={
                            "https://glo365.vn/wp-content/uploads/2021/06/SkinGym-Round.png 1000w, https://glo365.vn/wp-content/uploads/2021/06/SkinGym-Round-300x300.png 300w, https://glo365.vn/wp-content/uploads/2021/06/SkinGym-Round-150x150.png 150w, https://glo365.vn/wp-content/uploads/2021/06/SkinGym-Round-768x768.png 768w, https://glo365.vn/wp-content/uploads/2021/06/SkinGym-Round-400x400.png 400w"
                          }
                          data-lazy-sizes={"(max-width: 1000px) 100vw, 1000px"}
                          data-lazy-src={
                            "https://glo365.vn/wp-content/uploads/2021/06/SkinGym-Round.png"
                          }
                          data-ll-status={"loaded"}
                          sizes={"(max-width: 1000px) 100vw, 1000px"}
                          srcset={
                            "https://glo365.vn/wp-content/uploads/2021/06/SkinGym-Round.png 1000w, https://glo365.vn/wp-content/uploads/2021/06/SkinGym-Round-300x300.png 300w, https://glo365.vn/wp-content/uploads/2021/06/SkinGym-Round-150x150.png 150w, https://glo365.vn/wp-content/uploads/2021/06/SkinGym-Round-768x768.png 768w, https://glo365.vn/wp-content/uploads/2021/06/SkinGym-Round-400x400.png 400w"
                          }
                        ></img>
                        <noscript
                          style={{
                            boxSizing: "border-box",
                            fontFamily: "Comfortaa, Arial",
                            fontSize: "16px",
                            lineHeight: "18.4px",
                            marginLeft: 0,
                            marginRight: 0,
                            textAlign: "-webkit-center",
                            textSizeAdjust: "100%",
                          }}
                        >
                          <img
                            width="1000"
                            height="1000"
                            src="https://glo365.vn/wp-content/uploads/2021/06/SkinGym-Round.png"
                            class="attachment-full size-full"
                            alt=""
                            srcset="https://glo365.vn/wp-content/uploads/2021/06/SkinGym-Round.png 1000w, https://glo365.vn/wp-content/uploads/2021/06/SkinGym-Round-300x300.png 300w, https://glo365.vn/wp-content/uploads/2021/06/SkinGym-Round-150x150.png 150w, https://glo365.vn/wp-content/uploads/2021/06/SkinGym-Round-768x768.png 768w, https://glo365.vn/wp-content/uploads/2021/06/SkinGym-Round-400x400.png 400w"
                            sizes="(max-width: 1000px) 100vw, 1000px"
                          />
                        </noscript>
                      </center>
                    </div>

                    <div
                      style={{
                        blockSize: "207.8px",
                        boxSizing: "border-box",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "16px",
                        inlineSize: "379.987px",
                        lineHeight: "18.4px",
                        marginLeft: 0,
                        marginRight: 0,
                        minBlockSize: "auto",
                        minHeight: "auto",
                        minInlineSize: "auto",
                        minWidth: "auto",
                        textSizeAdjust: "100%",
                      }}
                      className={"iw-so-media-box-text"}
                    >
                      <h3
                        style={{
                          blockSize: "25px",
                          boxSizing: "border-box",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "23px",
                          inlineSize: "379.987px",
                          lineHeight: "25px",
                          marginBlockEnd: "13px",
                          marginBlockStart: "0px",
                          marginBottom: "13px",
                          marginLeft: 0,
                          marginRight: 0,
                          marginTop: "0px",
                          textSizeAdjust: "100%",
                          textTransform: "uppercase",
                        }}
                        className={"iw-so-media-box-title"}
                      >
                        P+ LASER
                      </h3>
                      <p
                        style={{
                          blockSize: "100px",
                          boxSizing: "border-box",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "16px",
                          inlineSize: "379.987px",
                          lineHeight: "25px",
                          marginBlockEnd: "25px",
                          marginBlockStart: "0px",
                          marginBottom: "25px",
                          marginLeft: 0,
                          marginRight: 0,
                          marginTop: "0px",
                          minBlockSize: "100px",
                          minHeight: "100px",
                          textSizeAdjust: "100%",
                        }}
                        className={"iw-so-media-box-content"}
                      >
                        Mô hình luyện tập nâng cao sức khỏe làn da. Giải quyết
                        triệt để và an toàn mọi vấn đề trên bề mặt da chỉ 20
                        phút mỗi tuần.
                      </p>

                      <div
                        style={{
                          blockSize: "44.8px",
                          boxSizing: "border-box",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "16px",
                          inlineSize: "379.987px",
                          lineHeight: "18.4px",
                          marginLeft: 0,
                          marginRight: 0,
                          textSizeAdjust: "100%",
                        }}
                        className={"iw-so-media-box-button"}
                      >
                        <div
                          style={{
                            blockSize: "44.8px",
                            boxSizing: "border-box",
                            fontFamily: "Comfortaa, Arial",
                            fontSize: "16px",
                            inlineSize: "379.987px",
                            lineHeight: "18.4px",
                            marginLeft: 0,
                            marginRight: 0,
                            textSizeAdjust: "100%",
                          }}
                          className={"iw-so-media-box-btn-base"}
                        >
                          <a
                            style={{
                              backgroundColor: "rgb(244, 194, 214)",
                              blockSize: "44.8px",
                              borderBlockEndColor: "rgb(244, 194, 214)",
                              borderBlockEndStyle: "solid",
                              borderBlockEndWidth: "0.8px",
                              borderBlockStartColor: "rgb(244, 194, 214)",
                              borderBlockStartStyle: "solid",
                              borderBlockStartWidth: "0.8px",
                              borderBottomColor: "rgb(244, 194, 214)",
                              borderBottomLeftRadius: "24px",
                              borderBottomRightRadius: "24px",
                              borderBottomStyle: "solid",
                              borderBottomWidth: "0.8px",
                              borderEndEndRadius: "24px",
                              borderEndStartRadius: "24px",
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
                              borderStartEndRadius: "24px",
                              borderStartStartRadius: "24px",
                              borderTopColor: "rgb(244, 194, 214)",
                              borderTopLeftRadius: "24px",
                              borderTopRightRadius: "24px",
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
                              display: "inline-block",
                              fontFamily: "Comfortaa, Arial",
                              fontSize: "16px",
                              inlineSize: "128.5px",
                              insetBlockEnd: "0px",
                              insetBlockStart: "0px",
                              insetInlineEnd: "0px",
                              insetInlineStart: "0px",
                              left: "0px",
                              marginLeft: 0,
                              marginRight: 0,
                              outlineColor: "rgb(255, 255, 255)",
                              paddingBlockEnd: "12.4px",
                              paddingBlockStart: "12.4px",
                              paddingBottom: "12.4px",
                              paddingInlineEnd: "28px",
                              paddingInlineStart: "28px",
                              paddingLeft: "28px",
                              paddingRight: "28px",
                              paddingTop: "12.4px",
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
                              WebkitTextFillColor: "rgb(255, 255, 255)",
                              WebkitTextStrokeColor: "rgb(255, 255, 255)",
                            }}
                            className={"iw-so-media-box-btn"}
                            target={"_blank"}
                            href={
                              "https://glo365.vn/services/p-plus-laser-promo/"
                            }
                          >
                            Tìm hiểu{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              blockSize: "480.8px",
              boxSizing: "border-box",
              fontFamily: "Comfortaa, Arial",
              fontSize: "16px",
              inlineSize: "379.987px",
              lineHeight: "18.4px",
              marginLeft: 0,
              marginRight: 0,
              minBlockSize: "auto",
              minHeight: "auto",
              minInlineSize: "auto",
              minWidth: "auto",
              textSizeAdjust: "100%",
              width: "calc(33.3333% - 20px)",
            }}
            id={"pgc-614-2-1"}
            className={"panel-grid-cell"}
          >
            <div
              style={{
                blockSize: "480.8px",
                boxSizing: "border-box",
                fontFamily: "Comfortaa, Arial",
                fontSize: "16px",
                inlineSize: "379.987px",
                lineHeight: "18.4px",
                marginLeft: 0,
                marginRight: 0,
                textSizeAdjust: "100%",
              }}
              id={"panel-614-2-1-0"}
              className={
                "so-panel widget widget_ink-media-box panel-first-child panel-last-child"
              }
              data-index={4}
            >
              <div
                style={{
                  blockSize: "480.8px",
                  boxSizing: "border-box",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: "16px",
                  inlineSize: "379.987px",
                  lineHeight: "18.4px",
                  marginLeft: 0,
                  marginRight: 0,
                  textSizeAdjust: "100%",
                }}
                className={
                  "home-serv panel-widget-style panel-widget-style-for-614-2-1-0"
                }
              >
                <div
                  style={{
                    blockSize: "480.8px",
                    boxSizing: "border-box",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: "16px",
                    inlineSize: "379.987px",
                    lineHeight: "18.4px",
                    marginLeft: 0,
                    marginRight: 0,
                    textSizeAdjust: "100%",
                  }}
                  className={
                    "so-widget-ink-media-box so-widget-ink-media-box-media-box-70f622b9c4a6"
                  }
                >
                  <div
                    style={{
                      alignItems: "flex-start",
                      blockSize: "480.8px",
                      boxSizing: "border-box",
                      display: "flex",
                      flexDirection: "column",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: "16px",
                      inlineSize: "379.987px",
                      lineHeight: "18.4px",
                      marginLeft: 0,
                      marginRight: 0,
                      textSizeAdjust: "100%",
                      WebkitBoxAlign: "start",
                      WebkitBoxOrient: "vertical",
                    }}
                    className={"iw-so-media-box"}
                  >
                    <div
                      style={{
                        blockSize: "234px",
                        boxSizing: "border-box",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "16px",
                        inlineSize: "230px",
                        lineHeight: "18.4px",
                        marginBlockEnd: "39px",
                        marginBottom: "39px",
                        marginLeft: 0,
                        marginRight: 0,
                        minBlockSize: "auto",
                        minHeight: "auto",
                        minInlineSize: "230px",
                        minWidth: "230px",
                        textSizeAdjust: "100%",
                      }}
                      className={"iw-so-media-box-media"}
                    >
                      <center
                        style={{
                          blockSize: "234px",
                          boxSizing: "border-box",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "16px",
                          inlineSize: "230px",
                          lineHeight: "18.4px",
                          marginLeft: 0,
                          marginRight: 0,
                          textSizeAdjust: "100%",
                        }}
                      >
                        <img
                          style={{
                            blockSize: "230px",
                            boxSizing: "border-box",
                            fontFamily: "Comfortaa, Arial",
                            fontSize: "16px",
                            inlineSize: "230px",
                            lineHeight: "18.4px",
                            marginLeft: 0,
                            marginRight: 0,
                            maxBlockSize: "230px",
                            maxHeight: "230px",
                            maxInlineSize: "230px",
                            maxWidth: "230px",
                            textAlign: "-webkit-center",
                            textSizeAdjust: "100%",
                            width: "230px",
                            height: "230px",
                          }}
                          width={1000}
                          height={1000}
                          src={
                            "https://glo365.vn/wp-content/uploads/2021/06/DreamSculpt-Round.png"
                          }
                          className={
                            "attachment-full size-full entered lazyloaded"
                          }
                          data-lazy-srcset={
                            "https://glo365.vn/wp-content/uploads/2021/06/DreamSculpt-Round.png 1000w, https://glo365.vn/wp-content/uploads/2021/06/DreamSculpt-Round-300x300.png 300w, https://glo365.vn/wp-content/uploads/2021/06/DreamSculpt-Round-150x150.png 150w, https://glo365.vn/wp-content/uploads/2021/06/DreamSculpt-Round-768x768.png 768w, https://glo365.vn/wp-content/uploads/2021/06/DreamSculpt-Round-400x400.png 400w"
                          }
                          data-lazy-sizes={"(max-width: 1000px) 100vw, 1000px"}
                          data-lazy-src={
                            "https://glo365.vn/wp-content/uploads/2021/06/DreamSculpt-Round.png"
                          }
                          data-ll-status={"loaded"}
                          sizes={"(max-width: 1000px) 100vw, 1000px"}
                          srcset={
                            "https://glo365.vn/wp-content/uploads/2021/06/DreamSculpt-Round.png 1000w, https://glo365.vn/wp-content/uploads/2021/06/DreamSculpt-Round-300x300.png 300w, https://glo365.vn/wp-content/uploads/2021/06/DreamSculpt-Round-150x150.png 150w, https://glo365.vn/wp-content/uploads/2021/06/DreamSculpt-Round-768x768.png 768w, https://glo365.vn/wp-content/uploads/2021/06/DreamSculpt-Round-400x400.png 400w"
                          }
                        ></img>
                        <noscript
                          style={{
                            boxSizing: "border-box",
                            fontFamily: "Comfortaa, Arial",
                            fontSize: "16px",
                            lineHeight: "18.4px",
                            marginLeft: 0,
                            marginRight: 0,
                            textAlign: "-webkit-center",
                            textSizeAdjust: "100%",
                          }}
                        >
                          <img
                            width="1000"
                            height="1000"
                            src="https://glo365.vn/wp-content/uploads/2021/06/DreamSculpt-Round.png"
                            class="attachment-full size-full"
                            alt=""
                            srcset="https://glo365.vn/wp-content/uploads/2021/06/DreamSculpt-Round.png 1000w, https://glo365.vn/wp-content/uploads/2021/06/DreamSculpt-Round-300x300.png 300w, https://glo365.vn/wp-content/uploads/2021/06/DreamSculpt-Round-150x150.png 150w, https://glo365.vn/wp-content/uploads/2021/06/DreamSculpt-Round-768x768.png 768w, https://glo365.vn/wp-content/uploads/2021/06/DreamSculpt-Round-400x400.png 400w"
                            sizes="(max-width: 1000px) 100vw, 1000px"
                          />
                        </noscript>
                      </center>
                    </div>

                    <div
                      style={{
                        blockSize: "207.8px",
                        boxSizing: "border-box",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "16px",
                        inlineSize: "379.987px",
                        lineHeight: "18.4px",
                        marginLeft: 0,
                        marginRight: 0,
                        minBlockSize: "auto",
                        minHeight: "auto",
                        minInlineSize: "auto",
                        minWidth: "auto",
                        textSizeAdjust: "100%",
                      }}
                      className={"iw-so-media-box-text"}
                    >
                      <h3
                        style={{
                          blockSize: "25px",
                          boxSizing: "border-box",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "23px",
                          inlineSize: "379.987px",
                          lineHeight: "25px",
                          marginBlockEnd: "13px",
                          marginBlockStart: "0px",
                          marginBottom: "13px",
                          marginLeft: 0,
                          marginRight: 0,
                          marginTop: "0px",
                          textSizeAdjust: "100%",
                          textTransform: "uppercase",
                        }}
                        className={"iw-so-media-box-title"}
                      >
                        BODY CONTOUR
                      </h3>
                      <p
                        style={{
                          blockSize: "100px",
                          boxSizing: "border-box",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "16px",
                          inlineSize: "379.987px",
                          lineHeight: "25px",
                          marginBlockEnd: "25px",
                          marginBlockStart: "0px",
                          marginBottom: "25px",
                          marginLeft: 0,
                          marginRight: 0,
                          marginTop: "0px",
                          minBlockSize: "100px",
                          minHeight: "100px",
                          textSizeAdjust: "100%",
                        }}
                        className={"iw-so-media-box-content"}
                      >
                        Phương pháp duy trì đường nét cơ thể bằng sóng vô tuyến
                        điện dung thông minh. Giúp săn chắc da và đảo thải mỡ
                        thừa.
                      </p>

                      <div
                        style={{
                          blockSize: "44.8px",
                          boxSizing: "border-box",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "16px",
                          inlineSize: "379.987px",
                          lineHeight: "18.4px",
                          marginLeft: 0,
                          marginRight: 0,
                          textSizeAdjust: "100%",
                        }}
                        className={"iw-so-media-box-button"}
                      >
                        <div
                          style={{
                            blockSize: "44.8px",
                            boxSizing: "border-box",
                            fontFamily: "Comfortaa, Arial",
                            fontSize: "16px",
                            inlineSize: "379.987px",
                            lineHeight: "18.4px",
                            marginLeft: 0,
                            marginRight: 0,
                            textSizeAdjust: "100%",
                          }}
                          className={"iw-so-media-box-btn-base"}
                        >
                          <a
                            style={{
                              backgroundColor: "rgb(244, 194, 214)",
                              blockSize: "44.8px",
                              borderBlockEndColor: "rgb(244, 194, 214)",
                              borderBlockEndStyle: "solid",
                              borderBlockEndWidth: "0.8px",
                              borderBlockStartColor: "rgb(244, 194, 214)",
                              borderBlockStartStyle: "solid",
                              borderBlockStartWidth: "0.8px",
                              borderBottomColor: "rgb(244, 194, 214)",
                              borderBottomLeftRadius: "24px",
                              borderBottomRightRadius: "24px",
                              borderBottomStyle: "solid",
                              borderBottomWidth: "0.8px",
                              borderEndEndRadius: "24px",
                              borderEndStartRadius: "24px",
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
                              borderStartEndRadius: "24px",
                              borderStartStartRadius: "24px",
                              borderTopColor: "rgb(244, 194, 214)",
                              borderTopLeftRadius: "24px",
                              borderTopRightRadius: "24px",
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
                              display: "inline-block",
                              fontFamily: "Comfortaa, Arial",
                              fontSize: "16px",
                              inlineSize: "128.5px",
                              insetBlockEnd: "0px",
                              insetBlockStart: "0px",
                              insetInlineEnd: "0px",
                              insetInlineStart: "0px",
                              left: "0px",
                              marginLeft: 0,
                              marginRight: 0,
                              outlineColor: "rgb(255, 255, 255)",
                              paddingBlockEnd: "12.4px",
                              paddingBlockStart: "12.4px",
                              paddingBottom: "12.4px",
                              paddingInlineEnd: "28px",
                              paddingInlineStart: "28px",
                              paddingLeft: "28px",
                              paddingRight: "28px",
                              paddingTop: "12.4px",
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
                              WebkitTextFillColor: "rgb(255, 255, 255)",
                              WebkitTextStrokeColor: "rgb(255, 255, 255)",
                            }}
                            className={"iw-so-media-box-btn"}
                            target={"_blank"}
                            href={
                              "https://glo365.vn/services/dream-sculpt-promo"
                            }
                          >
                            Tìm hiểu{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              blockSize: "480.8px",
              boxSizing: "border-box",
              fontFamily: "Comfortaa, Arial",
              fontSize: "16px",
              inlineSize: "379.987px",
              lineHeight: "18.4px",
              marginLeft: 0,
              marginRight: 0,
              minBlockSize: "auto",
              minHeight: "auto",
              minInlineSize: "auto",
              minWidth: "auto",
              textSizeAdjust: "100%",
              width: "calc(33.3333% - 20px)",
            }}
            id={"pgc-614-2-2"}
            className={"panel-grid-cell"}
          >
            <div
              style={{
                blockSize: "480.8px",
                boxSizing: "border-box",
                fontFamily: "Comfortaa, Arial",
                fontSize: "16px",
                inlineSize: "379.987px",
                lineHeight: "18.4px",
                marginLeft: 0,
                marginRight: 0,
                textSizeAdjust: "100%",
              }}
              id={"panel-614-2-2-0"}
              className={
                "so-panel widget widget_ink-media-box panel-first-child panel-last-child"
              }
              data-index={5}
            >
              <div
                style={{
                  blockSize: "480.8px",
                  boxSizing: "border-box",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: "16px",
                  inlineSize: "379.987px",
                  lineHeight: "18.4px",
                  marginLeft: 0,
                  marginRight: 0,
                  textSizeAdjust: "100%",
                }}
                className={
                  "home-serv panel-widget-style panel-widget-style-for-614-2-2-0"
                }
              >
                <div
                  style={{
                    blockSize: "480.8px",
                    boxSizing: "border-box",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: "16px",
                    inlineSize: "379.987px",
                    lineHeight: "18.4px",
                    marginLeft: 0,
                    marginRight: 0,
                    textSizeAdjust: "100%",
                  }}
                  className={
                    "so-widget-ink-media-box so-widget-ink-media-box-media-box-70f622b9c4a6"
                  }
                >
                  <div
                    style={{
                      alignItems: "flex-start",
                      blockSize: "480.8px",
                      boxSizing: "border-box",
                      display: "flex",
                      flexDirection: "column",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: "16px",
                      inlineSize: "379.987px",
                      lineHeight: "18.4px",
                      marginLeft: 0,
                      marginRight: 0,
                      textSizeAdjust: "100%",
                      WebkitBoxAlign: "start",
                      WebkitBoxOrient: "vertical",
                    }}
                    className={"iw-so-media-box"}
                  >
                    <div
                      style={{
                        blockSize: "234px",
                        boxSizing: "border-box",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "16px",
                        inlineSize: "230px",
                        lineHeight: "18.4px",
                        marginBlockEnd: "39px",
                        marginBottom: "39px",
                        marginLeft: 0,
                        marginRight: 0,
                        minBlockSize: "auto",
                        minHeight: "auto",
                        minInlineSize: "230px",
                        minWidth: "230px",
                        textSizeAdjust: "100%",
                      }}
                      className={"iw-so-media-box-media"}
                    >
                      <center
                        style={{
                          blockSize: "234px",
                          boxSizing: "border-box",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "16px",
                          inlineSize: "230px",
                          lineHeight: "18.4px",
                          marginLeft: 0,
                          marginRight: 0,
                          textSizeAdjust: "100%",
                        }}
                      >
                        <img
                          style={{
                            blockSize: "230px",
                            boxSizing: "border-box",
                            fontFamily: "Comfortaa, Arial",
                            fontSize: "16px",
                            inlineSize: "230px",
                            lineHeight: "18.4px",
                            marginLeft: 0,
                            marginRight: 0,
                            maxBlockSize: "230px",
                            maxHeight: "230px",
                            maxInlineSize: "230px",
                            maxWidth: "230px",
                            textAlign: "-webkit-center",
                            textSizeAdjust: "100%",
                            width: "230px",
                            height: "230px",
                          }}
                          width={1000}
                          height={1000}
                          src={
                            "https://glo365.vn/wp-content/uploads/2021/06/FaceGym-men-Round.png"
                          }
                          className={
                            "attachment-full size-full entered lazyloaded"
                          }
                          data-lazy-srcset={
                            "https://glo365.vn/wp-content/uploads/2021/06/FaceGym-men-Round.png 1000w, https://glo365.vn/wp-content/uploads/2021/06/FaceGym-men-Round-300x300.png 300w, https://glo365.vn/wp-content/uploads/2021/06/FaceGym-men-Round-150x150.png 150w, https://glo365.vn/wp-content/uploads/2021/06/FaceGym-men-Round-768x768.png 768w, https://glo365.vn/wp-content/uploads/2021/06/FaceGym-men-Round-400x400.png 400w"
                          }
                          data-lazy-sizes={"(max-width: 1000px) 100vw, 1000px"}
                          data-lazy-src={
                            "https://glo365.vn/wp-content/uploads/2021/06/FaceGym-men-Round.png"
                          }
                          data-ll-status={"loaded"}
                          sizes={"(max-width: 1000px) 100vw, 1000px"}
                          srcset={
                            "https://glo365.vn/wp-content/uploads/2021/06/FaceGym-men-Round.png 1000w, https://glo365.vn/wp-content/uploads/2021/06/FaceGym-men-Round-300x300.png 300w, https://glo365.vn/wp-content/uploads/2021/06/FaceGym-men-Round-150x150.png 150w, https://glo365.vn/wp-content/uploads/2021/06/FaceGym-men-Round-768x768.png 768w, https://glo365.vn/wp-content/uploads/2021/06/FaceGym-men-Round-400x400.png 400w"
                          }
                        ></img>
                        <noscript
                          style={{
                            boxSizing: "border-box",
                            fontFamily: "Comfortaa, Arial",
                            fontSize: "16px",
                            lineHeight: "18.4px",
                            marginLeft: 0,
                            marginRight: 0,
                            textAlign: "-webkit-center",
                            textSizeAdjust: "100%",
                          }}
                        >
                          <img
                            width="1000"
                            height="1000"
                            src="https://glo365.vn/wp-content/uploads/2021/06/FaceGym-men-Round.png"
                            class="attachment-full size-full"
                            alt=""
                            srcset="https://glo365.vn/wp-content/uploads/2021/06/FaceGym-men-Round.png 1000w, https://glo365.vn/wp-content/uploads/2021/06/FaceGym-men-Round-300x300.png 300w, https://glo365.vn/wp-content/uploads/2021/06/FaceGym-men-Round-150x150.png 150w, https://glo365.vn/wp-content/uploads/2021/06/FaceGym-men-Round-768x768.png 768w, https://glo365.vn/wp-content/uploads/2021/06/FaceGym-men-Round-400x400.png 400w"
                            sizes="(max-width: 1000px) 100vw, 1000px"
                          />
                        </noscript>
                      </center>
                    </div>

                    <div
                      style={{
                        blockSize: "207.8px",
                        boxSizing: "border-box",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "16px",
                        inlineSize: "379.987px",
                        lineHeight: "18.4px",
                        marginLeft: 0,
                        marginRight: 0,
                        minBlockSize: "auto",
                        minHeight: "auto",
                        minInlineSize: "auto",
                        minWidth: "auto",
                        textSizeAdjust: "100%",
                      }}
                      className={"iw-so-media-box-text"}
                    >
                      <h3
                        style={{
                          blockSize: "25px",
                          boxSizing: "border-box",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "23px",
                          inlineSize: "379.987px",
                          lineHeight: "25px",
                          marginBlockEnd: "13px",
                          marginBlockStart: "0px",
                          marginBottom: "13px",
                          marginLeft: 0,
                          marginRight: 0,
                          marginTop: "0px",
                          textSizeAdjust: "100%",
                          textTransform: "uppercase",
                        }}
                        className={"iw-so-media-box-title"}
                      >
                        FACE GYM
                      </h3>
                      <p
                        style={{
                          blockSize: "100px",
                          boxSizing: "border-box",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "16px",
                          inlineSize: "379.987px",
                          lineHeight: "25px",
                          marginBlockEnd: "25px",
                          marginBlockStart: "0px",
                          marginBottom: "25px",
                          marginLeft: 0,
                          marginRight: 0,
                          marginTop: "0px",
                          minBlockSize: "100px",
                          minHeight: "100px",
                          textSizeAdjust: "100%",
                        }}
                        className={"iw-so-media-box-content"}
                      >
                        Liệu trình duy trì đường nét V-line. Độ săn chắc và trẻ
                        hóa gương mặt được thực hiện hàng tuần một cách khoa học
                        và đều đặn.
                      </p>

                      <div
                        style={{
                          blockSize: "44.8px",
                          boxSizing: "border-box",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "16px",
                          inlineSize: "379.987px",
                          lineHeight: "18.4px",
                          marginLeft: 0,
                          marginRight: 0,
                          textSizeAdjust: "100%",
                        }}
                        className={"iw-so-media-box-button"}
                      >
                        <div
                          style={{
                            blockSize: "44.8px",
                            boxSizing: "border-box",
                            fontFamily: "Comfortaa, Arial",
                            fontSize: "16px",
                            inlineSize: "379.987px",
                            lineHeight: "18.4px",
                            marginLeft: 0,
                            marginRight: 0,
                            textSizeAdjust: "100%",
                          }}
                          className={"iw-so-media-box-btn-base"}
                        >
                          <a
                            style={{
                              backgroundColor: "rgb(244, 194, 214)",
                              blockSize: "44.8px",
                              borderBlockEndColor: "rgb(244, 194, 214)",
                              borderBlockEndStyle: "solid",
                              borderBlockEndWidth: "0.8px",
                              borderBlockStartColor: "rgb(244, 194, 214)",
                              borderBlockStartStyle: "solid",
                              borderBlockStartWidth: "0.8px",
                              borderBottomColor: "rgb(244, 194, 214)",
                              borderBottomLeftRadius: "24px",
                              borderBottomRightRadius: "24px",
                              borderBottomStyle: "solid",
                              borderBottomWidth: "0.8px",
                              borderEndEndRadius: "24px",
                              borderEndStartRadius: "24px",
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
                              borderStartEndRadius: "24px",
                              borderStartStartRadius: "24px",
                              borderTopColor: "rgb(244, 194, 214)",
                              borderTopLeftRadius: "24px",
                              borderTopRightRadius: "24px",
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
                              display: "inline-block",
                              fontFamily: "Comfortaa, Arial",
                              fontSize: "16px",
                              inlineSize: "128.5px",
                              insetBlockEnd: "0px",
                              insetBlockStart: "0px",
                              insetInlineEnd: "0px",
                              insetInlineStart: "0px",
                              left: "0px",
                              marginLeft: 0,
                              marginRight: 0,
                              outlineColor: "rgb(255, 255, 255)",
                              paddingBlockEnd: "12.4px",
                              paddingBlockStart: "12.4px",
                              paddingBottom: "12.4px",
                              paddingInlineEnd: "28px",
                              paddingInlineStart: "28px",
                              paddingLeft: "28px",
                              paddingRight: "28px",
                              paddingTop: "12.4px",
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
                              WebkitTextFillColor: "rgb(255, 255, 255)",
                              WebkitTextStrokeColor: "rgb(255, 255, 255)",
                            }}
                            className={"iw-so-media-box-btn"}
                            target={"_blank"}
                            href={"https://glo365.vn/services/face-gym-promo/"}
                          >
                            Tìm hiểu{" "}
                          </a>
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
      <div
        style={{
          margin: 0,
          blockSize: "321px",
          boxSizing: "border-box",
          fontFamily: "Comfortaa, Arial",
          fontSize: "16px",
          inlineSize: "1536px",
          lineHeight: "18.4px",
          textSizeAdjust: "100%",
        }}
        id={"pg-614-5"}
        className={"panel-grid panel-has-style"}
      >
        <div
          style={{
            alignItems: "flex-start",
            blockSize: "321px",
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
          className={"container panel-row-style panel-row-style-for-614-5"}
          id={"promo1"}
        >
          <div
            style={{
              blockSize: "321px",
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
            id={"pgc-614-5-0"}
            className={"panel-grid-cell"}
          >
            <div
              style={{
                blockSize: "321px",
                boxSizing: "border-box",
                fontFamily: "Comfortaa, Arial",
                fontSize: "16px",
                inlineSize: "1200px",
                lineHeight: "18.4px",
                marginLeft: 0,
                marginRight: 0,
                textSizeAdjust: "100%",
              }}
              id={"panel-614-5-0-0"}
              className={
                "so-panel widget widget_siteorigin-panels-builder panel-first-child panel-last-child"
              }
              data-index={11}
            >
              <div
                style={{
                  blockSize: "321px",
                  boxSizing: "border-box",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: "16px",
                  inlineSize: "1200px",
                  lineHeight: "18.4px",
                  marginLeft: 0,
                  marginRight: 0,
                  textSizeAdjust: "100%",
                }}
                id={"pl-w649ea522638a4"}
                className={"panel-layout"}
              >
                <div
                  style={{
                    blockSize: "321px",
                    boxSizing: "border-box",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: "16px",
                    inlineSize: "1200px",
                    lineHeight: "18.4px",
                    marginLeft: 0,
                    marginRight: 0,
                    textSizeAdjust: "100%",
                  }}
                  id={"pg-w649ea522638a4-0"}
                  className={"panel-grid panel-has-style"}
                >
                  <div
                    style={{
                      alignItems: "flex-start",
                      backgroundImage:
                        "url(https://glo365.vn/wp-content/uploads/2023/06/Banner-1.png)",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                      blockSize: "321px",
                      boxSizing: "border-box",
                      display: "flex",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: "16px",
                      inlineSize: "1200px",
                      justifyContent: "space-between",
                      lineHeight: "18.4px",
                      marginLeft: 0,
                      marginRight: 0,
                      textSizeAdjust: "100%",
                    }}
                    className={
                      "lazy rocket-lazyload panel-row-style panel-row-style-for-w649ea522638a4-0 entered lazyloaded exited"
                    }
                    data-bg={
                      "https://glo365.vn/wp-content/uploads/2023/06/Banner-1.png"
                    }
                    data-ll-status={"loaded"}
                  >
                    <div
                      style={{
                        blockSize: "321px",
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
                      id={"pgc-w649ea522638a4-0-0"}
                      className={"panel-grid-cell"}
                    >
                      <div
                        style={{
                          blockSize: "321px",
                          boxSizing: "border-box",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "16px",
                          inlineSize: "1200px",
                          lineHeight: "18.4px",
                          marginLeft: 0,
                          marginRight: 0,
                          textSizeAdjust: "100%",
                        }}
                        id={"panel-w649ea522638a4-0-0-0"}
                        className={
                          "so-panel widget widget_sow-button panel-first-child panel-last-child"
                        }
                        data-index={0}
                      >
                        <div
                          style={{
                            backgroundRepeat: "no-repeat",
                            blockSize: "321px",
                            boxSizing: "border-box",
                            fontFamily: "Comfortaa, Arial",
                            fontSize: "16px",
                            inlineSize: "1200px",
                            lineHeight: "18.4px",
                            marginLeft: 0,
                            marginRight: 0,
                            minBlockSize: "321px",
                            minHeight: "321px",
                            paddingBlockStart: "109px",
                            paddingTop: "109px",
                            textSizeAdjust: "100%",
                          }}
                          id={"play"}
                          className={
                            "panel-widget-style panel-widget-style-for-w649ea522638a4-0-0-0"
                          }
                        >
                          <div
                            style={{
                              blockSize: "94px",
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
                              "so-widget-sow-button so-widget-sow-button-atom-5bd90efc4077"
                            }
                          >
                            <div
                              style={{
                                blockSize: "94px",
                                boxSizing: "border-box",
                                fontFamily: "Comfortaa, Arial",
                                fontSize: "16px",
                                inlineSize: "1200px",
                                lineHeight: "18.4px",
                                marginLeft: 0,
                                marginRight: 0,
                                textAlign: "center",
                                textSizeAdjust: "100%",
                              }}
                              className={
                                "ow-button-base ow-button-align-center"
                              }
                            >
                              <a
                                style={{
                                  blockSize: "90px",
                                  borderBlockEndColor: "rgb(255, 255, 255)",
                                  borderBlockStartColor: "rgb(255, 255, 255)",
                                  borderBottomColor: "rgb(255, 255, 255)",
                                  borderBottomLeftRadius: "4px",
                                  borderBottomRightRadius: "4px",
                                  borderEndEndRadius: "4px",
                                  borderEndStartRadius: "4px",
                                  borderInlineEndColor: "rgb(255, 255, 255)",
                                  borderInlineStartColor: "rgb(255, 255, 255)",
                                  borderLeftColor: "rgb(255, 255, 255)",
                                  borderRightColor: "rgb(255, 255, 255)",
                                  borderStartEndRadius: "4px",
                                  borderStartStartRadius: "4px",
                                  borderTopColor: "rgb(255, 255, 255)",
                                  borderTopLeftRadius: "4px",
                                  borderTopRightRadius: "4px",
                                  boxSizing: "border-box",
                                  caretColor: "rgb(255, 255, 255)",
                                  color: "rgb(255, 255, 255)",
                                  columnRuleColor: "rgb(255, 255, 255)",
                                  cursor: "pointer",
                                  display: "inline-block",
                                  fontFamily: "Comfortaa, Arial",
                                  fontSize: "16px",
                                  inlineSize: "90px",
                                  lineHeight: "16px",
                                  marginLeft: 0,
                                  marginRight: 0,
                                  maxInlineSize: "100%",
                                  maxWidth: "100%",
                                  outlineColor: "rgb(255, 255, 255)",
                                  textAlign: "center",
                                  textDecoration: "none",
                                  textDecorationColor: "rgb(255, 255, 255)",
                                  textEmphasisColor: "rgb(255, 255, 255)",
                                  textShadow: "rgba(0, 0, 0, 0.05) 0px 1px 0px",
                                  textSizeAdjust: "100%",
                                  transitionDuration: "0.3s",
                                  WebkitTextFillColor: "rgb(255, 255, 255)",
                                  WebkitTextStrokeColor: "rgb(255, 255, 255)",
                                }}
                                href={
                                  "https://glo365.vn/wp-content/uploads/2021/06/Web-Skin-Gym-Linh-Nga.mp4"
                                }
                                className={
                                  "vp-a ow-icon-placement-left ow-button-hover"
                                }
                              >
                                <span
                                  style={{
                                    borderBlockEndColor: "rgb(255, 255, 255)",
                                    borderBlockStartColor: "rgb(255, 255, 255)",
                                    borderBottomColor: "rgb(255, 255, 255)",
                                    borderInlineEndColor: "rgb(255, 255, 255)",
                                    borderInlineStartColor:
                                      "rgb(255, 255, 255)",
                                    borderLeftColor: "rgb(255, 255, 255)",
                                    borderRightColor: "rgb(255, 255, 255)",
                                    borderTopColor: "rgb(255, 255, 255)",
                                    boxSizing: "border-box",
                                    caretColor: "rgb(255, 255, 255)",
                                    color: "rgb(255, 255, 255)",
                                    columnRuleColor: "rgb(255, 255, 255)",
                                    cursor: "pointer",
                                    fontFamily: "Comfortaa, Arial",
                                    fontSize: "16px",
                                    lineHeight: "16px",
                                    marginLeft: 0,
                                    marginRight: 0,
                                    outlineColor: "rgb(255, 255, 255)",
                                    textAlign: "center",
                                    textDecoration:
                                      "none solid rgb(255, 255, 255)",
                                    textDecorationColor: "rgb(255, 255, 255)",
                                    textEmphasisColor: "rgb(255, 255, 255)",
                                    textShadow:
                                      "rgba(0, 0, 0, 0.05) 0px 1px 0px",
                                    textSizeAdjust: "100%",
                                    WebkitTextFillColor: "rgb(255, 255, 255)",
                                    WebkitTextStrokeColor: "rgb(255, 255, 255)",
                                  }}
                                >
                                  <div
                                    style={{
                                      backgroundImage:
                                        "url(https://glo365.vn/wp-content/uploads/2019/09/play.svg)",
                                      backgroundSize: "cover",
                                      blockSize: "90px",
                                      borderBlockEndColor: "rgb(255, 255, 255)",
                                      borderBlockStartColor:
                                        "rgb(255, 255, 255)",
                                      borderBottomColor: "rgb(255, 255, 255)",
                                      borderInlineEndColor:
                                        "rgb(255, 255, 255)",
                                      borderInlineStartColor:
                                        "rgb(255, 255, 255)",
                                      borderLeftColor: "rgb(255, 255, 255)",
                                      borderRightColor: "rgb(255, 255, 255)",
                                      borderTopColor: "rgb(255, 255, 255)",
                                      boxSizing: "border-box",
                                      caretColor: "rgb(255, 255, 255)",
                                      color: "rgb(255, 255, 255)",
                                      columnRuleColor: "rgb(255, 255, 255)",
                                      cursor: "pointer",
                                      float: "left",
                                      fontFamily: "Comfortaa, Arial",
                                      fontSize: "20.8px",
                                      inlineSize: "90px",
                                      lineHeight: "16px",
                                      marginLeft: 0,
                                      marginRight: 0,
                                      outlineColor: "rgb(255, 255, 255)",
                                      textAlign: "center",
                                      textDecoration:
                                        "none solid rgb(255, 255, 255)",
                                      textDecorationColor: "rgb(255, 255, 255)",
                                      textEmphasisColor: "rgb(255, 255, 255)",
                                      textShadow:
                                        "rgba(0, 0, 0, 0.05) 0px 1px 0px",
                                      textSizeAdjust: "100%",
                                      WebkitTextFillColor: "rgb(255, 255, 255)",
                                      WebkitTextStrokeColor:
                                        "rgb(255, 255, 255)",
                                      width: "90px",
                                      height: "90px",
                                    }}
                                    data-bg={
                                      "https://glo365.vn/wp-content/uploads/2019/09/play.svg"
                                    }
                                    className={
                                      "sow-icon-image rocket-lazyload entered lazyloaded exited"
                                    }
                                    data-ll-status={"loaded"}
                                  ></div>
                                </span>
                              </a>
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
        </div>
      </div>
      {/* <ImageCarousel /> */}
      <div
        style={{
          margin: 0,
          blockSize: "436.4px",
          boxSizing: "border-box",
          fontFamily: "Comfortaa, Arial",
          fontSize: "16px",
          inlineSize: "1536px",
          lineHeight: "18.4px",
          textSizeAdjust: "100%",
        }}
        id={"pg-614-6"}
        className={"panel-grid panel-has-style"}
      >
        <div
          style={{
            alignItems: "flex-start",
            blockSize: "436.4px",
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
          className={"container panel-row-style panel-row-style-for-614-6"}
        >
          <div
            style={{
              blockSize: "436.4px",
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
            id={"pgc-614-6-0"}
            className={"panel-grid-cell"}
          >
            <div
              style={{
                blockSize: "86.05px",
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
              id={"panel-614-6-0-0"}
              className={"so-panel widget widget_sow-image panel-first-child"}
              data-index={12}
            >
              <div
                style={{
                  blockSize: "86.05px",
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
                  "gift panel-widget-style panel-widget-style-for-614-6-0-0"
                }
              >
                <div
                  style={{
                    blockSize: "86.05px",
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
                    "so-widget-sow-image so-widget-sow-image-default-17bc2272b535"
                  }
                >
                  <div
                    style={{
                      alignItems: "flex-start",
                      blockSize: "86.05px",
                      boxSizing: "border-box",
                      display: "flex",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: "16px",
                      inlineSize: "1200px",
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
                        blockSize: "86.05px",
                        boxSizing: "border-box",
                        display: "block",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "16px",
                        inlineSize: "75px",
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
                        width: "75px",
                      }}
                      src={
                        "https://glo365.vn/wp-content/uploads/2019/09/gift.svg"
                      }
                      width={1}
                      height={1}
                      data-lazy-sizes={"(max-width: 1px) 100vw, 1px"}
                      className={"so-widget-image entered lazyloaded"}
                      data-lazy-src={
                        "https://glo365.vn/wp-content/uploads/2019/09/gift.svg"
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
                        src="https://glo365.vn/wp-content/uploads/2019/09/gift.svg"
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
            </div>
            <div
              style={{
                blockSize: "99px",
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
              id={"panel-614-6-0-1"}
              className={"so-panel widget widget_sow-headline"}
              data-index={13}
            >
              <div
                style={{
                  blockSize: "99px",
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
                  "so-widget-sow-headline so-widget-sow-headline-default-c820c8a59ed8"
                }
              >
                <div
                  style={{
                    blockSize: "99px",
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
                  <h3
                    style={{
                      blockSize: "42px",
                      boxSizing: "border-box",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: "30px",
                      fontWeight: 400,
                      inlineSize: "1200px",
                      lineHeight: "42px",
                      marginBlockEnd: "25px",
                      marginBlockStart: "0px",
                      marginBottom: "25px",
                      marginLeft: 0,
                      marginRight: 0,
                      marginTop: "0px !important",
                      textAlign: "center",
                      textSizeAdjust: "100%",
                      textTransform: "uppercase",
                    }}
                    className={"sow-headline"}
                  >
                    ĐẸP NGAY CHỜ CHI!
                  </h3>
                  <p
                    style={{
                      blockSize: "32px",
                      boxSizing: "border-box",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: "16px",
                      inlineSize: "1200px",
                      lineHeight: "32px",
                      marginBlockEnd: "0px",
                      marginBlockStart: "0px",
                      marginBottom: "0px !important",
                      marginLeft: 0,
                      marginRight: 0,
                      marginTop: "0px",
                      textAlign: "center",
                      textSizeAdjust: "100%",
                    }}
                    className={"sow-sub-headline"}
                  >
                    Đặt hẹn phân tích da với bác sĩ. Toả sáng ngay cùng kế hoạch
                    làm đẹp cho riêng bạn!
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                blockSize: "191.35px",
                boxSizing: "border-box",
                fontFamily: "Comfortaa, Arial",
                fontSize: "16px",
                inlineSize: "1200px",
                lineHeight: "18.4px",
                marginLeft: 0,
                marginRight: 0,
                textSizeAdjust: "100%",
              }}
              id={"panel-614-6-0-2"}
              className={"so-panel widget widget_sow-editor panel-last-child"}
              data-index={14}
            >
              <div
                style={{
                  blockSize: "166.35px",
                  boxSizing: "border-box",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: "16px",
                  inlineSize: "1200px",
                  lineHeight: "18.4px",
                  marginLeft: 0,
                  marginRight: 0,
                  textSizeAdjust: "100%",
                }}
                id={"homeform"}
                className={
                  "panel-widget-style panel-widget-style-for-614-6-0-2"
                }
              >
                <div
                  style={{
                    blockSize: "166.35px",
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
                      blockSize: "166.35px",
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
                    <p
                      style={{
                        blockSize: "0px",
                        boxSizing: "border-box",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "16px",
                        inlineSize: "1200px",
                        lineHeight: "18.4px",
                        marginBlockEnd: "25px",
                        marginBlockStart: "0px",
                        marginBottom: "25px",
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: "0px",
                        textAlign: "center",
                        textSizeAdjust: "100%",
                        height: "0px",
                      }}
                    ></p>
                    <div
                      style={{
                        blockSize: "166.35px",
                        boxSizing: "border-box",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "16px",
                        inlineSize: "1200px",
                        lineHeight: "18.4px",
                        marginLeft: 0,
                        marginRight: 0,
                        textSizeAdjust: "100%",
                        unicodeBidi: "isolate",
                      }}
                      role={"form"}
                      className={"wpcf7"}
                      id={"wpcf7-f96-p614-o168"}
                      lang={"en-US"}
                      dir={"ltr"}
                    >
                      <div
                        style={{
                          blockSize: "1px",
                          bottom: "3494.65px",
                          boxSizing: "border-box",
                          clip: "rect(1px, 1px, 1px, 1px)",
                          clipPath: "inset(50%)",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "16px",
                          inlineSize: "1px",
                          insetBlockEnd: "3494.65px",
                          insetBlockStart: "2714.85px",
                          insetInlineEnd: "1369px",
                          insetInlineStart: "168px",
                          left: "168px",
                          lineHeight: "18.4px",
                          marginBlockEnd: "-1px",
                          marginBlockStart: "-1px",
                          marginBottom: "-1px",
                          marginInlineEnd: "-1px",
                          marginInlineStart: "-1px",
                          marginLeft: "-1px",
                          marginRight: 0,
                          marginTop: "-1px",
                          overflowX: "hidden",
                          overflowY: "hidden",
                          position: "absolute",
                          right: "1369px",
                          textSizeAdjust: "100%",
                          top: "2714.85px",
                          width: "1px",
                          height: "1px",
                        }}
                        className={"screen-reader-response"}
                      >
                        <p
                          style={{
                            blockSize: "0px",
                            boxSizing: "border-box",
                            fontFamily: "Comfortaa, Arial",
                            fontSize: "16px",
                            inlineSize: "1px",
                            lineHeight: "18.4px",
                            marginBlockEnd: "25px",
                            marginBlockStart: "0px",
                            marginBottom: "25px",
                            marginLeft: 0,
                            marginRight: 0,
                            marginTop: "0px",
                            textSizeAdjust: "100%",
                            height: "0px",
                          }}
                          role={"status"}
                          aria-live={"polite"}
                          aria-atomic={"true"}
                        ></p>{" "}
                        <ul
                          style={{
                            blockSize: "0px",
                            boxSizing: "border-box",
                            fontFamily: "Comfortaa, Arial",
                            fontSize: "16px",
                            inlineSize: "1px",
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
                            height: "0px",
                          }}
                        ></ul>
                      </div>
                      <form
                        style={{
                          blockSize: "166.35px",
                          boxSizing: "border-box",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "16px",
                          inlineSize: "1200px",
                          lineHeight: "18.4px",
                          marginBlockEnd: "0px",
                          marginBottom: "0px",
                          marginLeft: 0,
                          marginRight: 0,
                          textSizeAdjust: "100%",
                        }}
                        action={"/#wpcf7-f96-p614-o168"}
                        method={"post"}
                        className={"wpcf7-form init"}
                        noValidate={"novalidate"}
                        data-status={"init"}
                      >
                        <div
                          style={{
                            blockSize: "166.35px",
                            boxSizing: "border-box",
                            fontFamily: "Comfortaa, Arial",
                            fontSize: "16px",
                            inlineSize: "1200px",
                            lineHeight: "18.4px",
                            marginLeft: 0,
                            marginRight: 0,
                            textSizeAdjust: "100%",
                          }}
                          className={"ndg-form"}
                        >
                          <div
                            style={{
                              alignItems: "center",
                              blockSize: "50.35px",
                              boxSizing: "border-box",
                              display: "flex",
                              fontFamily: "Comfortaa, Arial",
                              fontSize: "16px",
                              inlineSize: "1200px",
                              justifyContent: "center",
                              lineHeight: "18.4px",
                              marginLeft: 0,
                              marginRight: 0,
                              textSizeAdjust: "100%",
                              WebkitBoxAlign: "center",
                              WebkitBoxPack: "center",
                            }}
                            className={"flex-row fc aic"}
                          >
                            <span
                              style={{
                                blockSize: "50.35px",
                                bottom: "0px",
                                boxSizing: "border-box",
                                display: "block",
                                fontFamily: "Comfortaa, Arial",
                                fontSize: "16px",
                                inlineSize: "296px",
                                insetBlockEnd: "0px",
                                insetBlockStart: "0px",
                                insetInlineEnd: "0px",
                                insetInlineStart: "0px",
                                left: "0px",
                                lineHeight: "18.4px",
                                marginLeft: 0,
                                marginRight: 0,
                                minBlockSize: "auto",
                                minHeight: "auto",
                                minInlineSize: "auto",
                                minWidth: "auto",
                                position: "relative",
                                right: "0px",
                                textSizeAdjust: "100%",
                                top: "0px",
                              }}
                              className={"wpcf7-form-control-wrap your-name"}
                            >
                              <input
                                style={{
                                  backgroundColor: "rgba(0, 0, 0, 0)",
                                  blockSize: "50.35px",
                                  borderBlockEndColor: "rgb(0, 0, 0)",
                                  borderBlockEndStyle: "solid",
                                  borderBlockEndWidth: "0.8px",
                                  borderBlockStartColor: "rgb(0, 0, 0)",
                                  borderBlockStartStyle: "none",
                                  borderBlockStartWidth: "0px",
                                  borderBottomColor: "rgb(0, 0, 0)",
                                  borderBottomStyle: "solid",
                                  borderBottomWidth: "0.8px",
                                  borderInlineEndColor: "rgb(0, 0, 0)",
                                  borderInlineEndStyle: "none",
                                  borderInlineEndWidth: "0px",
                                  borderInlineStartColor: "rgb(0, 0, 0)",
                                  borderInlineStartStyle: "none",
                                  borderInlineStartWidth: "0px",
                                  borderLeftColor: "rgb(0, 0, 0)",
                                  borderLeftStyle: "none",
                                  borderLeftWidth: "0px",
                                  borderRightColor: "rgb(0, 0, 0)",
                                  borderRightStyle: "none",
                                  borderRightWidth: "0px",
                                  borderTopColor: "rgb(0, 0, 0)",
                                  borderTopStyle: "none",
                                  borderTopWidth: "0px",
                                  boxSizing: "border-box",
                                  fontFamily: "Comfortaa",
                                  fontSize: "17px",
                                  inlineSize: "260px",
                                  lineHeight: "19.55px",
                                  marginInlineEnd: "18px",
                                  marginInlineStart: "18px",
                                  marginLeft: "18px",
                                  marginRight: "18px",
                                  maxBlockSize: "70px",
                                  maxHeight: "70px",
                                  paddingBlockEnd: "15px",
                                  paddingBlockStart: "15px",
                                  paddingBottom: "15px",
                                  paddingInlineEnd: "0px",
                                  paddingInlineStart: "0px",
                                  paddingLeft: "0px",
                                  paddingRight: "0px",
                                  paddingTop: "15px",
                                  textAlign: "center",
                                  textSizeAdjust: "100%",
                                  width: "260px",
                                }}
                                type={"text"}
                                size={40}
                                className={
                                  "wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                }
                                aria-required={"true"}
                                aria-invalid={"false"}
                                placeholder={"Tên"}
                              ></input>
                            </span>
                            <span
                              style={{
                                blockSize: "50.35px",
                                bottom: "0px",
                                boxSizing: "border-box",
                                display: "block",
                                fontFamily: "Comfortaa, Arial",
                                fontSize: "16px",
                                inlineSize: "296px",
                                insetBlockEnd: "0px",
                                insetBlockStart: "0px",
                                insetInlineEnd: "0px",
                                insetInlineStart: "0px",
                                left: "0px",
                                lineHeight: "18.4px",
                                marginLeft: 0,
                                marginRight: 0,
                                minBlockSize: "auto",
                                minHeight: "auto",
                                minInlineSize: "auto",
                                minWidth: "auto",
                                position: "relative",
                                right: "0px",
                                textSizeAdjust: "100%",
                                top: "0px",
                              }}
                              className={"wpcf7-form-control-wrap your-email"}
                            >
                              <input
                                style={{
                                  backgroundColor: "rgba(0, 0, 0, 0)",
                                  blockSize: "50.35px",
                                  borderBlockEndColor: "rgb(0, 0, 0)",
                                  borderBlockEndStyle: "solid",
                                  borderBlockEndWidth: "0.8px",
                                  borderBlockStartColor: "rgb(0, 0, 0)",
                                  borderBlockStartStyle: "none",
                                  borderBlockStartWidth: "0px",
                                  borderBottomColor: "rgb(0, 0, 0)",
                                  borderBottomStyle: "solid",
                                  borderBottomWidth: "0.8px",
                                  borderInlineEndColor: "rgb(0, 0, 0)",
                                  borderInlineEndStyle: "none",
                                  borderInlineEndWidth: "0px",
                                  borderInlineStartColor: "rgb(0, 0, 0)",
                                  borderInlineStartStyle: "none",
                                  borderInlineStartWidth: "0px",
                                  borderLeftColor: "rgb(0, 0, 0)",
                                  borderLeftStyle: "none",
                                  borderLeftWidth: "0px",
                                  borderRightColor: "rgb(0, 0, 0)",
                                  borderRightStyle: "none",
                                  borderRightWidth: "0px",
                                  borderTopColor: "rgb(0, 0, 0)",
                                  borderTopStyle: "none",
                                  borderTopWidth: "0px",
                                  boxSizing: "border-box",
                                  fontFamily: "Comfortaa",
                                  fontSize: "17px",
                                  inlineSize: "260px",
                                  lineHeight: "19.55px",
                                  marginInlineEnd: "18px",
                                  marginInlineStart: "18px",
                                  marginLeft: "18px",
                                  marginRight: "18px",
                                  maxBlockSize: "70px",
                                  maxHeight: "70px",
                                  paddingBlockEnd: "15px",
                                  paddingBlockStart: "15px",
                                  paddingBottom: "15px",
                                  paddingInlineEnd: "0px",
                                  paddingInlineStart: "0px",
                                  paddingLeft: "0px",
                                  paddingRight: "0px",
                                  paddingTop: "15px",
                                  textAlign: "center",
                                  textSizeAdjust: "100%",
                                  width: "260px",
                                }}
                                type={"email"}
                                size={40}
                                className={
                                  "wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                }
                                aria-required={"true"}
                                aria-invalid={"false"}
                                placeholder={"Email"}
                              ></input>
                            </span>
                            <span
                              style={{
                                blockSize: "50.35px",
                                bottom: "0px",
                                boxSizing: "border-box",
                                display: "block",
                                fontFamily: "Comfortaa, Arial",
                                fontSize: "16px",
                                inlineSize: "296px",
                                insetBlockEnd: "0px",
                                insetBlockStart: "0px",
                                insetInlineEnd: "0px",
                                insetInlineStart: "0px",
                                left: "0px",
                                lineHeight: "18.4px",
                                marginLeft: 0,
                                marginRight: 0,
                                minBlockSize: "auto",
                                minHeight: "auto",
                                minInlineSize: "auto",
                                minWidth: "auto",
                                position: "relative",
                                right: "0px",
                                textSizeAdjust: "100%",
                                top: "0px",
                              }}
                              className={"wpcf7-form-control-wrap tel-271"}
                            >
                              <input
                                style={{
                                  backgroundColor: "rgba(0, 0, 0, 0)",
                                  blockSize: "50.35px",
                                  borderBlockEndColor: "rgb(0, 0, 0)",
                                  borderBlockEndStyle: "solid",
                                  borderBlockEndWidth: "0.8px",
                                  borderBlockStartColor: "rgb(0, 0, 0)",
                                  borderBlockStartStyle: "none",
                                  borderBlockStartWidth: "0px",
                                  borderBottomColor: "rgb(0, 0, 0)",
                                  borderBottomStyle: "solid",
                                  borderBottomWidth: "0.8px",
                                  borderInlineEndColor: "rgb(0, 0, 0)",
                                  borderInlineEndStyle: "none",
                                  borderInlineEndWidth: "0px",
                                  borderInlineStartColor: "rgb(0, 0, 0)",
                                  borderInlineStartStyle: "none",
                                  borderInlineStartWidth: "0px",
                                  borderLeftColor: "rgb(0, 0, 0)",
                                  borderLeftStyle: "none",
                                  borderLeftWidth: "0px",
                                  borderRightColor: "rgb(0, 0, 0)",
                                  borderRightStyle: "none",
                                  borderRightWidth: "0px",
                                  borderTopColor: "rgb(0, 0, 0)",
                                  borderTopStyle: "none",
                                  borderTopWidth: "0px",
                                  boxSizing: "border-box",
                                  fontFamily: "Comfortaa",
                                  fontSize: "17px",
                                  inlineSize: "260px",
                                  lineHeight: "19.55px",
                                  marginInlineEnd: "18px",
                                  marginInlineStart: "18px",
                                  marginLeft: "18px",
                                  marginRight: "18px",
                                  maxBlockSize: "70px",
                                  maxHeight: "70px",
                                  paddingBlockEnd: "15px",
                                  paddingBlockStart: "15px",
                                  paddingBottom: "15px",
                                  paddingInlineEnd: "0px",
                                  paddingInlineStart: "0px",
                                  paddingLeft: "0px",
                                  paddingRight: "0px",
                                  paddingTop: "15px",
                                  textAlign: "center",
                                  textSizeAdjust: "100%",
                                  width: "260px",
                                }}
                                type={"tel"}
                                size={40}
                                className={
                                  "wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel"
                                }
                                aria-invalid={"false"}
                                placeholder={"Số Điện Thoại"}
                              ></input>
                            </span>
                          </div>
                          <p
                            style={{
                              blockSize: "78px",
                              boxSizing: "border-box",
                              fontFamily: "Comfortaa, Arial",
                              fontSize: "16px",
                              inlineSize: "1200px",
                              lineHeight: "18.4px",
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
                            <input
                              style={{
                                alignItems: "flex-start",
                                appearance: "button",
                                backgroundColor: "rgba(0, 0, 0, 0)",
                                blockSize: "50px",
                                borderBlockEndColor: "rgb(0, 0, 0)",
                                borderBlockEndStyle: "none",
                                borderBlockEndWidth: "0px",
                                borderBlockStartColor: "rgb(0, 0, 0)",
                                borderBlockStartStyle: "none",
                                borderBlockStartWidth: "0px",
                                borderBottomColor: "rgb(0, 0, 0)",
                                borderBottomLeftRadius: "30px",
                                borderBottomRightRadius: "30px",
                                borderBottomStyle: "none",
                                borderBottomWidth: "0px",
                                borderEndEndRadius: "30px",
                                borderEndStartRadius: "30px",
                                borderInlineEndColor: "rgb(0, 0, 0)",
                                borderInlineEndStyle: "none",
                                borderInlineEndWidth: "0px",
                                borderInlineStartColor: "rgb(0, 0, 0)",
                                borderInlineStartStyle: "none",
                                borderInlineStartWidth: "0px",
                                borderLeftColor: "rgb(0, 0, 0)",
                                borderLeftStyle: "none",
                                borderLeftWidth: "0px",
                                borderRightColor: "rgb(0, 0, 0)",
                                borderRightStyle: "none",
                                borderRightWidth: "0px",
                                borderStartEndRadius: "30px",
                                borderStartStartRadius: "30px",
                                borderTopColor: "rgb(0, 0, 0)",
                                borderTopLeftRadius: "30px",
                                borderTopRightRadius: "30px",
                                borderTopStyle: "none",
                                borderTopWidth: "0px",
                                boxShadow:
                                  "rgba(255, 103, 152, 0.31) 0px 3px 30px 0px",
                                boxSizing: "border-box",
                                cursor: "pointer",
                                display: "block !important",
                                fontFamily: "sans-serif",
                                fontSize: "16px",
                                inlineSize: "248px",
                                lineHeight: "18.4px",
                                marginBlockStart: "38px",
                                marginLeft: "auto",
                                marginRight: "auto",
                                marginTop: "38px",
                                minInlineSize: "248px",
                                minWidth: "248px",
                                paddingBlockEnd: "15px",
                                paddingBlockStart: "15px",
                                paddingBottom: "15px",
                                paddingInlineEnd: "30px",
                                paddingInlineStart: "30px",
                                paddingLeft: "30px",
                                paddingRight: "30px",
                                paddingTop: "15px",
                                textAlign: "center",
                                textSizeAdjust: "100%",
                                textWrap: "nowrap",
                                transitionDuration: "0.3s",
                                userSelect: "none",
                                whiteSpaceCollapse: "preserve",
                              }}
                              type={"submit"}
                              value={"ĐẶT HẸN NGAY"}
                              className={
                                "wpcf7-form-control has-spinner wpcf7-submit"
                              }
                            ></input>
                            <span
                              style={{
                                backgroundColor: "rgb(35, 40, 45)",
                                blockSize: "24px",
                                borderBottomLeftRadius: "100%",
                                borderBottomRightRadius: "100%",
                                borderEndEndRadius: "100%",
                                borderEndStartRadius: "100%",
                                borderStartEndRadius: "100%",
                                borderStartStartRadius: "100%",
                                borderTopLeftRadius: "100%",
                                borderTopRightRadius: "100%",
                                bottom: "0px",
                                boxSizing: "border-box",
                                display: "inline-block",
                                fontFamily: "Comfortaa, Arial",
                                fontSize: "16px",
                                inlineSize: "24px",
                                insetBlockEnd: "0px",
                                insetBlockStart: "0px",
                                insetInlineEnd: "0px",
                                insetInlineStart: "0px",
                                left: "0px",
                                lineHeight: "18.4px",
                                marginInlineEnd: "24px",
                                marginInlineStart: "24px",
                                marginLeft: "24px",
                                marginRight: "24px",
                                opacity: "0.75",
                                position: "relative",
                                right: "0px",
                                textAlign: "center",
                                textSizeAdjust: "100%",
                                top: "0px",
                                visibility: "hidden",
                                width: "24px",
                                height: "24px",
                              }}
                              className={"wpcf7-spinner"}
                            ></span>
                          </p>
                        </div>
                      </form>
                    </div>
                    <p
                      style={{
                        blockSize: "0px",
                        boxSizing: "border-box",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "16px",
                        inlineSize: "1200px",
                        lineHeight: "18.4px",
                        marginBlockEnd: "25px",
                        marginBlockStart: "0px",
                        marginBottom: "25px",
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: "0px",
                        textSizeAdjust: "100%",
                        height: "0px",
                      }}
                    ></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          margin: 0,
          blockSize: "594px",
          boxSizing: "border-box",
          fontFamily: "Comfortaa, Arial",
          fontSize: "16px",
          inlineSize: "1536px",
          lineHeight: "18.4px",
          textSizeAdjust: "100%",
        }}
        id={"pg-614-10"}
        className={"panel-grid panel-has-style"}
      >
        <div
          style={{
            alignItems: "flex-start",
            blockSize: "594px",
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
            height: "594px",
          }}
          className={"container panel-row-style panel-row-style-for-614-10"}
          id={"about"}
        >
          <div
            style={{
              blockSize: "594px",
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
            }}
            id={"pgc-614-10-0"}
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
              id={"panel-614-10-0-0"}
              className={
                "so-panel widget widget_sow-headline panel-first-child"
              }
              data-index={22}
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
                  "so-widget-sow-headline so-widget-sow-headline-default-11604e3535f2"
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
                    Về chúng tôi
                  </h2>
                </div>
              </div>
            </div>
            <div
              style={{
                blockSize: "175px",
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
              id={"panel-614-10-0-1"}
              className={"so-panel widget widget_sow-editor"}
              data-index={23}
            >
              <div
                style={{
                  blockSize: "150px",
                  boxSizing: "border-box",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: "17px",
                  inlineSize: "640px",
                  lineHeight: "30px",
                  marginInlineEnd: "280px",
                  marginInlineStart: "280px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  maxInlineSize: "640px",
                  maxWidth: "640px",
                  textSizeAdjust: "100%",
                }}
                className={
                  "panel-widget-style panel-widget-style-for-614-10-0-1"
                }
              >
                <div
                  style={{
                    blockSize: "150px",
                    boxSizing: "border-box",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: "17px",
                    inlineSize: "640px",
                    lineHeight: "30px",
                    marginLeft: 0,
                    marginRight: 0,
                    textSizeAdjust: "100%",
                  }}
                  className={"so-widget-sow-editor so-widget-sow-editor-base"}
                >
                  <div
                    style={{
                      blockSize: "150px",
                      boxSizing: "border-box",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: "17px",
                      inlineSize: "640px",
                      lineHeight: "30px",
                      marginLeft: 0,
                      marginRight: 0,
                      textSizeAdjust: "100%",
                    }}
                    className={"siteorigin-widget-tinymce textwidget"}
                  >
                    <p
                      style={{
                        blockSize: "150px",
                        boxSizing: "border-box",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "16px",
                        inlineSize: "640px",
                        lineHeight: "30px",
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
                      Glo365 là một Beauty Concept đẳng cấp 5 sao hàng đầu Châu
                      Á, bao gồm các dịch vụ thẩm mỹ và làm đẹp cao cấp nhằm
                      nâng cao trải nghiệm khách hàng vượt khỏi lằn ranh của
                      giới hạn. Tại Việt Nam, Glo365 đang khẳng định vị thế tiên
                      phong với các dịch vụ thẩm mỹ công nghệ đỉnh cao được FDA
                      chứng nhận.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                blockSize: "163px",
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
              id={"panel-614-10-0-2"}
              className={"so-panel widget widget_siteorigin-panels-builder"}
              data-index={24}
            >
              <div
                style={{
                  blockSize: "163px",
                  boxSizing: "border-box",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: "16px",
                  inlineSize: "1200px",
                  lineHeight: "18.4px",
                  marginLeft: 0,
                  marginRight: 0,
                  textSizeAdjust: "100%",
                }}
                id={"pl-w5f2aa0af9c6f3"}
                className={"panel-layout"}
              >
                <div
                  style={{
                    blockSize: "163px",
                    boxSizing: "border-box",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: "16px",
                    inlineSize: "1200px",
                    lineHeight: "18.4px",
                    marginLeft: 0,
                    marginRight: 0,
                    textSizeAdjust: "100%",
                  }}
                  id={"pg-w5f2aa0af9c6f3-0"}
                  className={"panel-grid panel-has-style"}
                >
                  <div
                    style={{
                      alignItems: "flex-start",
                      blockSize: "163px",
                      boxSizing: "border-box",
                      display: "flex",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: "16px",
                      inlineSize: "1200px",
                      justifyContent: "space-between",
                      lineHeight: "18.4px",
                      marginLeft: 0,
                      marginRight: 0,
                      paddingInlineEnd: "140px",
                      paddingInlineStart: "140px",
                      paddingLeft: "140px",
                      paddingRight: "140px",
                      textSizeAdjust: "100%",
                    }}
                    className={
                      "panel-row-style panel-row-style-for-w5f2aa0af9c6f3-0"
                    }
                  >
                    <div
                      style={{
                        blockSize: "163px",
                        boxSizing: "border-box",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "16px",
                        inlineSize: "160px",
                        lineHeight: "18.4px",
                        marginLeft: 0,
                        marginRight: 0,
                        minBlockSize: "auto",
                        minHeight: "auto",
                        minInlineSize: "auto",
                        minWidth: "auto",
                        textSizeAdjust: "100%",
                        width: "calc(20% - 24px)",
                        height: "163px",
                      }}
                      id={"pgc-w5f2aa0af9c6f3-0-0"}
                      className={"panel-grid-cell"}
                    >
                      <div
                        style={{
                          blockSize: "163px",
                          boxSizing: "border-box",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "16px",
                          inlineSize: "160px",
                          lineHeight: "18.4px",
                          marginLeft: 0,
                          marginRight: 0,
                          textSizeAdjust: "100%",
                        }}
                        id={"panel-w5f2aa0af9c6f3-0-0-0"}
                        className={
                          "so-panel widget widget_sow-image panel-first-child panel-last-child"
                        }
                        data-index={0}
                      >
                        <div
                          style={{
                            backgroundColor: "rgb(255, 255, 255)",
                            blockSize: "163px",
                            borderBottomLeftRadius: "20px",
                            borderBottomRightRadius: "20px",
                            borderEndEndRadius: "20px",
                            borderEndStartRadius: "20px",
                            borderStartEndRadius: "20px",
                            borderStartStartRadius: "20px",
                            borderTopLeftRadius: "20px",
                            borderTopRightRadius: "20px",
                            boxShadow:
                              "rgba(255, 103, 152, 0.31) 0px 3px 30px 0px",
                            boxSizing: "border-box",
                            fontFamily: "Comfortaa, Arial",
                            fontSize: "16px",
                            inlineSize: "160px",
                            lineHeight: "18.4px",
                            marginLeft: 0,
                            marginRight: 0,
                            paddingBlockEnd: "15px",
                            paddingBlockStart: "15px",
                            paddingBottom: "15px",
                            paddingInlineEnd: "15px",
                            paddingInlineStart: "15px",
                            paddingLeft: "15px",
                            paddingRight: "15px",
                            paddingTop: "15px",
                            textSizeAdjust: "100%",
                          }}
                          className={
                            "feature panel-widget-style panel-widget-style-for-w5f2aa0af9c6f3-0-0-0"
                          }
                        >
                          <div
                            style={{
                              blockSize: "133px",
                              boxSizing: "border-box",
                              fontFamily: "Comfortaa, Arial",
                              fontSize: "16px",
                              inlineSize: "130px",
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
                                blockSize: "55px",
                                boxSizing: "border-box",
                                display: "flex",
                                fontFamily: "Comfortaa, Arial",
                                fontSize: "16px",
                                inlineSize: "130px",
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
                                  blockSize: "45px",
                                  boxSizing: "border-box",
                                  display: "block",
                                  fontFamily: "Comfortaa, Arial",
                                  fontSize: "16px",
                                  inlineSize: "45px",
                                  lineHeight: "18.4px",
                                  marginBlockEnd: "10px",
                                  marginBottom: "10px",
                                  marginLeft: 0,
                                  marginRight: 0,
                                  maxInlineSize: "100%",
                                  maxWidth: "100%",
                                  minBlockSize: "auto",
                                  minHeight: "auto",
                                  minInlineSize: "auto",
                                  minWidth: "auto",
                                  textSizeAdjust: "100%",
                                  width: "45px",
                                }}
                                src={
                                  "https://glo365.vn/wp-content/uploads/2019/09/quickconv.svg"
                                }
                                width={1}
                                height={1}
                                data-lazy-sizes={"(max-width: 1px) 100vw, 1px"}
                                title={"Điều trị an toàn nhanh chóng"}
                                className={"so-widget-image entered lazyloaded"}
                                data-lazy-src={
                                  "https://glo365.vn/wp-content/uploads/2019/09/quickconv.svg"
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
                                  src="https://glo365.vn/wp-content/uploads/2019/09/quickconv.svg"
                                  width="1"
                                  height="1"
                                  sizes="(max-width: 1px) 100vw, 1px"
                                  title="Điều trị an toàn nhanh chóng"
                                  alt=""
                                  class="so-widget-image"
                                />
                              </noscript>
                            </div>

                            <h3
                              style={{
                                blockSize: "78px",
                                boxSizing: "border-box",
                                fontFamily: "Comfortaa, Arial",
                                fontSize: "14px",
                                fontWeight: 400,
                                inlineSize: "130px",
                                lineHeight: "26px",
                                marginBlockEnd: "0px",
                                marginBlockStart: "0px",
                                marginBottom: "0px",
                                marginLeft: 0,
                                marginRight: 0,
                                marginTop: "0px",
                                maxInlineSize: "160px",
                                maxWidth: "160px",
                                textAlign: "center",
                                textSizeAdjust: "100%",
                                textTransform: "uppercase",
                              }}
                              className={"widget-title"}
                            >
                              Điều trị an toàn nhanh chóng
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        blockSize: "163px",
                        boxSizing: "border-box",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "16px",
                        inlineSize: "160px",
                        lineHeight: "18.4px",
                        marginLeft: 0,
                        marginRight: 0,
                        minBlockSize: "auto",
                        minHeight: "auto",
                        minInlineSize: "auto",
                        minWidth: "auto",
                        textSizeAdjust: "100%",
                        width: "calc(20% - 24px)",
                        height: "163px",
                      }}
                      id={"pgc-w5f2aa0af9c6f3-0-1"}
                      className={"panel-grid-cell"}
                    >
                      <div
                        style={{
                          blockSize: "163px",
                          boxSizing: "border-box",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "16px",
                          inlineSize: "160px",
                          lineHeight: "18.4px",
                          marginLeft: 0,
                          marginRight: 0,
                          textSizeAdjust: "100%",
                        }}
                        id={"panel-w5f2aa0af9c6f3-0-1-0"}
                        className={
                          "so-panel widget widget_sow-image panel-first-child panel-last-child"
                        }
                        data-index={1}
                      >
                        <div
                          style={{
                            backgroundColor: "rgb(255, 255, 255)",
                            blockSize: "163px",
                            borderBottomLeftRadius: "20px",
                            borderBottomRightRadius: "20px",
                            borderEndEndRadius: "20px",
                            borderEndStartRadius: "20px",
                            borderStartEndRadius: "20px",
                            borderStartStartRadius: "20px",
                            borderTopLeftRadius: "20px",
                            borderTopRightRadius: "20px",
                            boxShadow:
                              "rgba(255, 103, 152, 0.31) 0px 3px 30px 0px",
                            boxSizing: "border-box",
                            fontFamily: "Comfortaa, Arial",
                            fontSize: "16px",
                            inlineSize: "160px",
                            lineHeight: "18.4px",
                            marginLeft: 0,
                            marginRight: 0,
                            paddingBlockEnd: "15px",
                            paddingBlockStart: "15px",
                            paddingBottom: "15px",
                            paddingInlineEnd: "15px",
                            paddingInlineStart: "15px",
                            paddingLeft: "15px",
                            paddingRight: "15px",
                            paddingTop: "15px",
                            textSizeAdjust: "100%",
                          }}
                          className={
                            "feature panel-widget-style panel-widget-style-for-w5f2aa0af9c6f3-0-1-0"
                          }
                        >
                          <div
                            style={{
                              blockSize: "133px",
                              boxSizing: "border-box",
                              fontFamily: "Comfortaa, Arial",
                              fontSize: "16px",
                              inlineSize: "130px",
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
                                blockSize: "55px",
                                boxSizing: "border-box",
                                display: "flex",
                                fontFamily: "Comfortaa, Arial",
                                fontSize: "16px",
                                inlineSize: "130px",
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
                                  blockSize: "45px",
                                  boxSizing: "border-box",
                                  display: "block",
                                  fontFamily: "Comfortaa, Arial",
                                  fontSize: "16px",
                                  inlineSize: "45px",
                                  lineHeight: "18.4px",
                                  marginBlockEnd: "10px",
                                  marginBottom: "10px",
                                  marginLeft: 0,
                                  marginRight: 0,
                                  maxInlineSize: "100%",
                                  maxWidth: "100%",
                                  minBlockSize: "auto",
                                  minHeight: "auto",
                                  minInlineSize: "auto",
                                  minWidth: "auto",
                                  textSizeAdjust: "100%",
                                  width: "45px",
                                }}
                                src={
                                  "https://glo365.vn/wp-content/uploads/2019/09/time.svg"
                                }
                                width={1}
                                height={1}
                                data-lazy-sizes={"(max-width: 1px) 100vw, 1px"}
                                title={"Không mất thời gian nghỉ dưỡng"}
                                className={"so-widget-image entered lazyloaded"}
                                data-lazy-src={
                                  "https://glo365.vn/wp-content/uploads/2019/09/time.svg"
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
                                  src="https://glo365.vn/wp-content/uploads/2019/09/time.svg"
                                  width="1"
                                  height="1"
                                  sizes="(max-width: 1px) 100vw, 1px"
                                  title="Không mất thời gian nghỉ dưỡng"
                                  alt=""
                                  class="so-widget-image"
                                />
                              </noscript>
                            </div>

                            <h3
                              style={{
                                blockSize: "78px",
                                boxSizing: "border-box",
                                fontFamily: "Comfortaa, Arial",
                                fontSize: "14px",
                                fontWeight: 400,
                                inlineSize: "130px",
                                lineHeight: "26px",
                                marginBlockEnd: "0px",
                                marginBlockStart: "0px",
                                marginBottom: "0px",
                                marginLeft: 0,
                                marginRight: 0,
                                marginTop: "0px",
                                maxInlineSize: "160px",
                                maxWidth: "160px",
                                textAlign: "center",
                                textSizeAdjust: "100%",
                                textTransform: "uppercase",
                              }}
                              className={"widget-title"}
                            >
                              Không mất thời gian nghỉ dưỡng
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        blockSize: "163px",
                        boxSizing: "border-box",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "16px",
                        inlineSize: "160px",
                        lineHeight: "18.4px",
                        marginLeft: 0,
                        marginRight: 0,
                        minBlockSize: "auto",
                        minHeight: "auto",
                        minInlineSize: "auto",
                        minWidth: "auto",
                        textSizeAdjust: "100%",
                        width: "calc(20% - 24px)",
                        height: "163px",
                      }}
                      id={"pgc-w5f2aa0af9c6f3-0-2"}
                      className={"panel-grid-cell"}
                    >
                      <div
                        style={{
                          blockSize: "163px",
                          boxSizing: "border-box",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "16px",
                          inlineSize: "160px",
                          lineHeight: "18.4px",
                          marginLeft: 0,
                          marginRight: 0,
                          textSizeAdjust: "100%",
                        }}
                        id={"panel-w5f2aa0af9c6f3-0-2-0"}
                        className={
                          "so-panel widget widget_sow-image panel-first-child panel-last-child"
                        }
                        data-index={2}
                      >
                        <div
                          style={{
                            backgroundColor: "rgb(255, 255, 255)",
                            blockSize: "163px",
                            borderBottomLeftRadius: "20px",
                            borderBottomRightRadius: "20px",
                            borderEndEndRadius: "20px",
                            borderEndStartRadius: "20px",
                            borderStartEndRadius: "20px",
                            borderStartStartRadius: "20px",
                            borderTopLeftRadius: "20px",
                            borderTopRightRadius: "20px",
                            boxShadow:
                              "rgba(255, 103, 152, 0.31) 0px 3px 30px 0px",
                            boxSizing: "border-box",
                            fontFamily: "Comfortaa, Arial",
                            fontSize: "16px",
                            inlineSize: "160px",
                            lineHeight: "18.4px",
                            marginLeft: 0,
                            marginRight: 0,
                            paddingBlockEnd: "15px",
                            paddingBlockStart: "15px",
                            paddingBottom: "15px",
                            paddingInlineEnd: "15px",
                            paddingInlineStart: "15px",
                            paddingLeft: "15px",
                            paddingRight: "15px",
                            paddingTop: "15px",
                            textSizeAdjust: "100%",
                          }}
                          className={
                            "feature panel-widget-style panel-widget-style-for-w5f2aa0af9c6f3-0-2-0"
                          }
                        >
                          <div
                            style={{
                              blockSize: "133px",
                              boxSizing: "border-box",
                              fontFamily: "Comfortaa, Arial",
                              fontSize: "16px",
                              inlineSize: "130px",
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
                                blockSize: "55px",
                                boxSizing: "border-box",
                                display: "flex",
                                fontFamily: "Comfortaa, Arial",
                                fontSize: "16px",
                                inlineSize: "130px",
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
                                  blockSize: "45px",
                                  boxSizing: "border-box",
                                  display: "block",
                                  fontFamily: "Comfortaa, Arial",
                                  fontSize: "16px",
                                  inlineSize: "45px",
                                  lineHeight: "18.4px",
                                  marginBlockEnd: "10px",
                                  marginBottom: "10px",
                                  marginLeft: 0,
                                  marginRight: 0,
                                  maxInlineSize: "100%",
                                  maxWidth: "100%",
                                  minBlockSize: "auto",
                                  minHeight: "auto",
                                  minInlineSize: "auto",
                                  minWidth: "auto",
                                  textSizeAdjust: "100%",
                                  width: "45px",
                                }}
                                src={
                                  "https://glo365.vn/wp-content/uploads/2019/09/doctor.svg"
                                }
                                width={1}
                                height={1}
                                data-lazy-sizes={"(max-width: 1px) 100vw, 1px"}
                                title={"Quy trình điều trị chuẩn y khoa"}
                                className={"so-widget-image entered lazyloaded"}
                                data-lazy-src={
                                  "https://glo365.vn/wp-content/uploads/2019/09/doctor.svg"
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
                                  src="https://glo365.vn/wp-content/uploads/2019/09/doctor.svg"
                                  width="1"
                                  height="1"
                                  sizes="(max-width: 1px) 100vw, 1px"
                                  title="Quy trình điều trị chuẩn y khoa"
                                  alt=""
                                  class="so-widget-image"
                                />
                              </noscript>
                            </div>

                            <h3
                              style={{
                                blockSize: "78px",
                                boxSizing: "border-box",
                                fontFamily: "Comfortaa, Arial",
                                fontSize: "14px",
                                fontWeight: 400,
                                inlineSize: "130px",
                                lineHeight: "26px",
                                marginBlockEnd: "0px",
                                marginBlockStart: "0px",
                                marginBottom: "0px",
                                marginLeft: 0,
                                marginRight: 0,
                                marginTop: "0px",
                                maxInlineSize: "160px",
                                maxWidth: "160px",
                                textAlign: "center",
                                textSizeAdjust: "100%",
                                textTransform: "uppercase",
                              }}
                              className={"widget-title"}
                            >
                              Quy trình điều trị chuẩn y khoa
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        blockSize: "163px",
                        boxSizing: "border-box",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "16px",
                        inlineSize: "160px",
                        lineHeight: "18.4px",
                        marginLeft: 0,
                        marginRight: 0,
                        minBlockSize: "auto",
                        minHeight: "auto",
                        minInlineSize: "auto",
                        minWidth: "auto",
                        textSizeAdjust: "100%",
                        width: "calc(20% - 24px)",
                        height: "163px",
                      }}
                      id={"pgc-w5f2aa0af9c6f3-0-3"}
                      className={"panel-grid-cell"}
                    >
                      <div
                        style={{
                          blockSize: "163px",
                          boxSizing: "border-box",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "16px",
                          inlineSize: "160px",
                          lineHeight: "18.4px",
                          marginLeft: 0,
                          marginRight: 0,
                          textSizeAdjust: "100%",
                        }}
                        id={"panel-w5f2aa0af9c6f3-0-3-0"}
                        className={
                          "so-panel widget widget_sow-image panel-first-child panel-last-child"
                        }
                        data-index={3}
                      >
                        <div
                          style={{
                            backgroundColor: "rgb(255, 255, 255)",
                            blockSize: "163px",
                            borderBottomLeftRadius: "20px",
                            borderBottomRightRadius: "20px",
                            borderEndEndRadius: "20px",
                            borderEndStartRadius: "20px",
                            borderStartEndRadius: "20px",
                            borderStartStartRadius: "20px",
                            borderTopLeftRadius: "20px",
                            borderTopRightRadius: "20px",
                            boxShadow:
                              "rgba(255, 103, 152, 0.31) 0px 3px 30px 0px",
                            boxSizing: "border-box",
                            fontFamily: "Comfortaa, Arial",
                            fontSize: "16px",
                            inlineSize: "160px",
                            lineHeight: "18.4px",
                            marginLeft: 0,
                            marginRight: 0,
                            paddingBlockEnd: "15px",
                            paddingBlockStart: "15px",
                            paddingBottom: "15px",
                            paddingInlineEnd: "15px",
                            paddingInlineStart: "15px",
                            paddingLeft: "15px",
                            paddingRight: "15px",
                            paddingTop: "15px",
                            textSizeAdjust: "100%",
                          }}
                          className={
                            "feature panel-widget-style panel-widget-style-for-w5f2aa0af9c6f3-0-3-0"
                          }
                        >
                          <div
                            style={{
                              blockSize: "133px",
                              boxSizing: "border-box",
                              fontFamily: "Comfortaa, Arial",
                              fontSize: "16px",
                              inlineSize: "130px",
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
                                blockSize: "55px",
                                boxSizing: "border-box",
                                display: "flex",
                                fontFamily: "Comfortaa, Arial",
                                fontSize: "16px",
                                inlineSize: "130px",
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
                                  blockSize: "45px",
                                  boxSizing: "border-box",
                                  display: "block",
                                  fontFamily: "Comfortaa, Arial",
                                  fontSize: "16px",
                                  inlineSize: "45px",
                                  lineHeight: "18.4px",
                                  marginBlockEnd: "10px",
                                  marginBottom: "10px",
                                  marginLeft: 0,
                                  marginRight: 0,
                                  maxInlineSize: "100%",
                                  maxWidth: "100%",
                                  minBlockSize: "auto",
                                  minHeight: "auto",
                                  minInlineSize: "auto",
                                  minWidth: "auto",
                                  textSizeAdjust: "100%",
                                  width: "45px",
                                }}
                                src={
                                  "https://glo365.vn/wp-content/uploads/2019/09/location.svg"
                                }
                                width={1}
                                height={1}
                                data-lazy-sizes={"(max-width: 1px) 100vw, 1px"}
                                title={"Vị trí trung tâm đẳng cấp 5 sao"}
                                className={"so-widget-image entered lazyloaded"}
                                data-lazy-src={
                                  "https://glo365.vn/wp-content/uploads/2019/09/location.svg"
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
                                  src="https://glo365.vn/wp-content/uploads/2019/09/location.svg"
                                  width="1"
                                  height="1"
                                  sizes="(max-width: 1px) 100vw, 1px"
                                  title="Vị trí trung tâm đẳng cấp 5 sao"
                                  alt=""
                                  class="so-widget-image"
                                />
                              </noscript>
                            </div>

                            <h3
                              style={{
                                blockSize: "78px",
                                boxSizing: "border-box",
                                fontFamily: "Comfortaa, Arial",
                                fontSize: "14px",
                                fontWeight: 400,
                                inlineSize: "130px",
                                lineHeight: "26px",
                                marginBlockEnd: "0px",
                                marginBlockStart: "0px",
                                marginBottom: "0px",
                                marginLeft: 0,
                                marginRight: 0,
                                marginTop: "0px",
                                maxInlineSize: "160px",
                                maxWidth: "160px",
                                textAlign: "center",
                                textSizeAdjust: "100%",
                                textTransform: "uppercase",
                              }}
                              className={"widget-title"}
                            >
                              Vị trí trung tâm đẳng cấp 5 sao
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        blockSize: "163px",
                        boxSizing: "border-box",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "16px",
                        inlineSize: "160px",
                        lineHeight: "18.4px",
                        marginLeft: 0,
                        marginRight: 0,
                        minBlockSize: "auto",
                        minHeight: "auto",
                        minInlineSize: "auto",
                        minWidth: "auto",
                        textSizeAdjust: "100%",
                        width: "calc(20% - 24px)",
                        height: "163px",
                      }}
                      id={"pgc-w5f2aa0af9c6f3-0-4"}
                      className={"panel-grid-cell"}
                    >
                      <div
                        style={{
                          blockSize: "163px",
                          boxSizing: "border-box",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "16px",
                          inlineSize: "160px",
                          lineHeight: "18.4px",
                          marginLeft: 0,
                          marginRight: 0,
                          textSizeAdjust: "100%",
                        }}
                        id={"panel-w5f2aa0af9c6f3-0-4-0"}
                        className={
                          "so-panel widget widget_sow-image panel-first-child panel-last-child"
                        }
                        data-index={4}
                      >
                        <div
                          style={{
                            backgroundColor: "rgb(255, 255, 255)",
                            blockSize: "163px",
                            borderBottomLeftRadius: "20px",
                            borderBottomRightRadius: "20px",
                            borderEndEndRadius: "20px",
                            borderEndStartRadius: "20px",
                            borderStartEndRadius: "20px",
                            borderStartStartRadius: "20px",
                            borderTopLeftRadius: "20px",
                            borderTopRightRadius: "20px",
                            boxShadow:
                              "rgba(255, 103, 152, 0.31) 0px 3px 30px 0px",
                            boxSizing: "border-box",
                            fontFamily: "Comfortaa, Arial",
                            fontSize: "16px",
                            inlineSize: "160px",
                            lineHeight: "18.4px",
                            marginLeft: 0,
                            marginRight: 0,
                            paddingBlockEnd: "15px",
                            paddingBlockStart: "15px",
                            paddingBottom: "15px",
                            paddingInlineEnd: "15px",
                            paddingInlineStart: "15px",
                            paddingLeft: "15px",
                            paddingRight: "15px",
                            paddingTop: "15px",
                            textSizeAdjust: "100%",
                          }}
                          className={
                            "feature panel-widget-style panel-widget-style-for-w5f2aa0af9c6f3-0-4-0"
                          }
                        >
                          <div
                            style={{
                              blockSize: "133px",
                              boxSizing: "border-box",
                              fontFamily: "Comfortaa, Arial",
                              fontSize: "16px",
                              inlineSize: "130px",
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
                                blockSize: "55px",
                                boxSizing: "border-box",
                                display: "flex",
                                fontFamily: "Comfortaa, Arial",
                                fontSize: "16px",
                                inlineSize: "130px",
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
                                  blockSize: "45px",
                                  boxSizing: "border-box",
                                  display: "block",
                                  fontFamily: "Comfortaa, Arial",
                                  fontSize: "16px",
                                  inlineSize: "45px",
                                  lineHeight: "18.4px",
                                  marginBlockEnd: "10px",
                                  marginBottom: "10px",
                                  marginLeft: 0,
                                  marginRight: 0,
                                  maxInlineSize: "100%",
                                  maxWidth: "100%",
                                  minBlockSize: "auto",
                                  minHeight: "auto",
                                  minInlineSize: "auto",
                                  minWidth: "auto",
                                  textSizeAdjust: "100%",
                                  width: "45px",
                                }}
                                src={
                                  "https://glo365.vn/wp-content/uploads/2019/09/awards.svg"
                                }
                                width={1}
                                height={1}
                                data-lazy-sizes={"(max-width: 1px) 100vw, 1px"}
                                title={"Nhiều giải thưởng chứng nhận uy tín"}
                                className={"so-widget-image entered lazyloaded"}
                                data-lazy-src={
                                  "https://glo365.vn/wp-content/uploads/2019/09/awards.svg"
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
                                  src="https://glo365.vn/wp-content/uploads/2019/09/awards.svg"
                                  width="1"
                                  height="1"
                                  sizes="(max-width: 1px) 100vw, 1px"
                                  title="Nhiều giải thưởng chứng nhận uy tín"
                                  alt=""
                                  class="so-widget-image"
                                />
                              </noscript>
                            </div>

                            <h3
                              style={{
                                blockSize: "78px",
                                boxSizing: "border-box",
                                fontFamily: "Comfortaa, Arial",
                                fontSize: "14px",
                                fontWeight: 400,
                                inlineSize: "130px",
                                lineHeight: "26px",
                                marginBlockEnd: "0px",
                                marginBlockStart: "0px",
                                marginBottom: "0px",
                                marginLeft: 0,
                                marginRight: 0,
                                marginTop: "0px",
                                maxInlineSize: "160px",
                                maxWidth: "160px",
                                textAlign: "center",
                                textSizeAdjust: "100%",
                                textTransform: "uppercase",
                              }}
                              className={"widget-title"}
                            >
                              Nhiều giải thưởng chứng nhận uy tín
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                blockSize: "0px",
                boxSizing: "border-box",
                fontFamily: "Comfortaa, Arial",
                fontSize: "16px",
                inlineSize: "1200px",
                lineHeight: "18.4px",
                marginBlockEnd: "30px",
                marginBlockStart: "80px",
                marginBottom: "30px",
                marginLeft: 0,
                marginRight: 0,
                marginTop: "80px",
                textSizeAdjust: "100%",
                height: "0px",
              }}
              id={"panel-614-10-0-3"}
              className={"so-panel widget widget_sow-headline"}
              data-index={25}
            ></div>
            <div
              style={{
                blockSize: "0px",
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
                height: "0px",
              }}
              id={"panel-614-10-0-4"}
              className={"so-panel widget widget_siteorigin-panels-builder"}
              data-index={26}
            ></div>
            <div
              style={{
                blockSize: "0px",
                boxSizing: "border-box",
                fontFamily: "Comfortaa, Arial",
                fontSize: "16px",
                inlineSize: "1200px",
                lineHeight: "18.4px",
                marginLeft: 0,
                marginRight: 0,
                textSizeAdjust: "100%",
                height: "0px",
              }}
              id={"panel-614-10-0-5"}
              className={
                "so-panel widget widget_siteorigin-panels-builder panel-last-child"
              }
              data-index={27}
            ></div>
          </div>
        </div>
      </div>
      <div
        style={{
          margin: 0,
          blockSize: "145.85px",
          boxSizing: "border-box",
          fontFamily: "Comfortaa, Arial",
          fontSize: "16px",
          inlineSize: "1536px",
          lineHeight: "18.4px",
          textSizeAdjust: "100%",
        }}
        id={"pg-614-11"}
        className={"panel-grid panel-has-style"}
      >
        <div
          style={{
            alignItems: "flex-start",
            blockSize: "145.85px",
            boxSizing: "border-box",
            display: "flex",
            fontFamily: "Comfortaa, Arial",
            fontSize: "16px",
            inlineSize: "1536px",
            justifyContent: "space-between",
            lineHeight: "18.4px",
            marginLeft: 0,
            marginRight: 0,
            textSizeAdjust: "100%",
          }}
          id={"contact"}
          className={"panel-row-style panel-row-style-for-614-11"}
        >
          <div
            style={{
              blockSize: "145.85px",
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
              height: "145.85px",
            }}
            id={"pgc-614-11-0"}
            className={"panel-grid-cell"}
          >
            <div
              style={{
                blockSize: "145.85px",
                boxSizing: "border-box",
                fontFamily: "Comfortaa, Arial",
                fontSize: "16px",
                inlineSize: "1536px",
                lineHeight: "18.4px",
                marginLeft: 0,
                marginRight: 0,
                textSizeAdjust: "100%",
              }}
              id={"panel-614-11-0-0"}
              className={
                "so-panel widget widget_sow-image panel-first-child panel-last-child"
              }
              data-index={28}
            >
              <div
                style={{
                  blockSize: "145.85px",
                  boxSizing: "border-box",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: "16px",
                  inlineSize: "1536px",
                  lineHeight: "18.4px",
                  marginLeft: 0,
                  marginRight: 0,
                  textSizeAdjust: "100%",
                  zIndex: "-1",
                }}
                className={
                  "panel-widget-style panel-widget-style-for-614-11-0-0"
                }
              >
                <div
                  style={{
                    blockSize: "145.85px",
                    boxSizing: "border-box",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: "16px",
                    inlineSize: "1536px",
                    lineHeight: "18.4px",
                    marginLeft: 0,
                    marginRight: 0,
                    textSizeAdjust: "100%",
                  }}
                  className={
                    "so-widget-sow-image so-widget-sow-image-default-7877d6771435"
                  }
                >
                  <div
                    style={{
                      alignItems: "flex-start",
                      blockSize: "145.85px",
                      boxSizing: "border-box",
                      display: "flex",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: "16px",
                      inlineSize: "1536px",
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
                        blockSize: "145.85px",
                        boxSizing: "border-box",
                        display: "block",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "16px",
                        inlineSize: "1536px",
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
                        width: "100%",
                      }}
                      src={
                        "https://glo365.vn/wp-content/uploads/2019/09/line-02.svg"
                      }
                      width={1}
                      height={1}
                      data-lazy-sizes={"(max-width: 1px) 100vw, 1px"}
                      className={"so-widget-image entered lazyloaded"}
                      data-lazy-src={
                        "https://glo365.vn/wp-content/uploads/2019/09/line-02.svg"
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
                        src="https://glo365.vn/wp-content/uploads/2019/09/line-02.svg"
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
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          margin: 0,
          blockSize: "71px",
          boxSizing: "border-box",
          fontFamily: "Comfortaa, Arial",
          fontSize: "16px",
          inlineSize: "1536px",
          lineHeight: "18.4px",
          textSizeAdjust: "100%",
        }}
        id={"pg-614-12"}
        className={"panel-grid panel-has-style"}
      >
        <div
          style={{
            alignItems: "flex-start",
            blockSize: "71px",
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
          className={"container panel-row-style panel-row-style-for-614-12"}
        >
          <div
            style={{
              blockSize: "71px",
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
            id={"pgc-614-12-0"}
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
                marginBlockEnd: "15px",
                marginBottom: "15px",
                marginLeft: 0,
                marginRight: 0,
                textSizeAdjust: "100%",
              }}
              id={"panel-614-12-0-0"}
              className={
                "so-panel widget widget_sow-headline panel-first-child panel-last-child"
              }
              data-index={29}
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
                  "so-widget-sow-headline so-widget-sow-headline-default-51a7b1172210"
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
                    LIÊN HỆ
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <footer
        style={{
          margin: 0,
          backgroundImage:
            "url(https://glo365.vn/wp-content/themes/ndg-quantum/imgs/footer.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "2037px",
          blockSize: "520px",
          bottom: "0px",
          boxSizing: "border-box",
          fontFamily: "Comfortaa, Arial",
          fontSize: "16px",
          inlineSize: "1536px",
          insetBlockEnd: "0px",
          insetBlockStart: "0px",
          insetInlineEnd: "0px",
          insetInlineStart: "0px",
          left: "0px",
          lineHeight: "18.4px",
          minBlockSize: "auto",
          minHeight: "auto",
          minInlineSize: "auto",
          minWidth: "auto",
          position: "relative",
          right: "0px",
          textSizeAdjust: "100%",
          top: "0px",
          zIndex: 5,
        }}
        className={"ndg-footer"}
      >
        <div
          style={{
            blockSize: "520px",
            boxSizing: "border-box",
            fontFamily: "Comfortaa, Arial",
            fontSize: "16px",
            inlineSize: "1536px",
            lineHeight: "18.4px",
            marginLeft: 0,
            marginRight: 0,
            textSizeAdjust: "100%",
          }}
          className={"ndg-widget-row"}
        >
          <div
            style={{
              alignItems: "flex-end",
              blockSize: "520px",
              boxSizing: "border-box",
              display: "flex",
              flexWrap: "wrap",
              fontFamily: "Comfortaa, Arial",
              fontSize: "16px",
              inlineSize: "1200px",
              justifyContent: "flex-start",
              lineHeight: "18.4px",
              marginLeft: "auto",
              marginRight: "auto",
              paddingBlockEnd: "85px",
              paddingBottom: "85px",
              textSizeAdjust: "100%",
              WebkitBoxAlign: "end",
              width: "1200px",
              height: "520px",
            }}
            className={"container wrapper flex-row fs aie"}
          >
            <div
              style={{
                blockSize: "305.8px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                fontFamily: "Comfortaa, Arial",
                fontSize: "16px",
                inlineSize: "350px",
                lineHeight: "18.4px",
                marginInlineEnd: "70px",
                marginLeft: 0,
                marginRight: "70px",
                maxInlineSize: "350px",
                maxWidth: "350px",
                minBlockSize: "auto",
                minHeight: "auto",
                minInlineSize: "auto",
                minWidth: "auto",
                textSizeAdjust: "100%",
                WebkitBoxOrient: "vertical",
              }}
              className={"flex-col footer-1"}
            >
              <div
                style={{
                  blockSize: "40px",
                  boxSizing: "border-box",
                  filter:
                    "invert(1) sepia(1) saturate(0) hue-rotate(201deg) brightness(1.06) contrast(1.01)",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: "16px",
                  inlineSize: "350px",
                  lineHeight: "18.4px",
                  marginBlockEnd: "16px",
                  marginBottom: "16px",
                  marginLeft: 0,
                  marginRight: 0,
                  minBlockSize: "auto",
                  minHeight: "auto",
                  minInlineSize: "auto",
                  minWidth: "auto",
                  textSizeAdjust: "100%",
                }}
                className={"footer-logo"}
              >
                <a
                  style={{
                    borderBlockEndColor: "rgb(0, 0, 238)",
                    borderBlockStartColor: "rgb(0, 0, 238)",
                    borderBottomColor: "rgb(0, 0, 238)",
                    borderInlineEndColor: "rgb(0, 0, 238)",
                    borderInlineStartColor: "rgb(0, 0, 238)",
                    borderLeftColor: "rgb(0, 0, 238)",
                    borderRightColor: "rgb(0, 0, 238)",
                    borderTopColor: "rgb(0, 0, 238)",
                    boxSizing: "border-box",
                    caretColor: "rgb(0, 0, 238)",
                    color: "rgb(0, 0, 238)",
                    columnRuleColor: "rgb(0, 0, 238)",
                    cursor: "pointer",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: "16px",
                    lineHeight: "18.4px",
                    marginLeft: 0,
                    marginRight: 0,
                    outlineColor: "rgb(0, 0, 238)",
                    textDecoration: "underline solid rgb(0, 0, 238)",
                    textDecorationColor: "rgb(0, 0, 238)",
                    textDecorationLine: "underline",
                    textEmphasisColor: "rgb(0, 0, 238)",
                    textSizeAdjust: "100%",
                    transitionDuration: "0.3s",
                    WebkitTextFillColor: "rgb(0, 0, 238)",
                    WebkitTextStrokeColor: "rgb(0, 0, 238)",
                  }}
                  href={"https://glo365.vn/"}
                  className={"custom-logo-link"}
                  rel={"home"}
                  aria-current={"page"}
                >
                  <img
                    style={{
                      blockSize: "36px",
                      borderBlockEndColor: "rgb(0, 0, 238)",
                      borderBlockStartColor: "rgb(0, 0, 238)",
                      borderBottomColor: "rgb(0, 0, 238)",
                      borderInlineEndColor: "rgb(0, 0, 238)",
                      borderInlineStartColor: "rgb(0, 0, 238)",
                      borderLeftColor: "rgb(0, 0, 238)",
                      borderRightColor: "rgb(0, 0, 238)",
                      borderTopColor: "rgb(0, 0, 238)",
                      boxSizing: "border-box",
                      caretColor: "rgb(0, 0, 238)",
                      color: "rgb(0, 0, 238)",
                      columnRuleColor: "rgb(0, 0, 238)",
                      cursor: "pointer",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: "16px",
                      inlineSize: "120px",
                      lineHeight: "18.4px",
                      marginLeft: 0,
                      marginRight: 0,
                      outlineColor: "rgb(0, 0, 238)",
                      textDecoration: "none solid rgb(0, 0, 238)",
                      textDecorationColor: "rgb(0, 0, 238)",
                      textEmphasisColor: "rgb(0, 0, 238)",
                      textSizeAdjust: "100%",
                      WebkitTextFillColor: "rgb(0, 0, 238)",
                      WebkitTextStrokeColor: "rgb(0, 0, 238)",
                      width: "120px",
                    }}
                    width={1}
                    height={1}
                    src={
                      "https://glo365.vn/wp-content/uploads/2020/07/Glo365-logo-2000x600.svg"
                    }
                    className={"custom-logo entered lazyloaded"}
                    alt={"Glo365"}
                    data-lazy-src={
                      "https://glo365.vn/wp-content/uploads/2020/07/Glo365-logo-2000x600.svg"
                    }
                    data-ll-status={"loaded"}
                  ></img>
                  <noscript
                    style={{
                      borderBlockEndColor: "rgb(0, 0, 238)",
                      borderBlockStartColor: "rgb(0, 0, 238)",
                      borderBottomColor: "rgb(0, 0, 238)",
                      borderInlineEndColor: "rgb(0, 0, 238)",
                      borderInlineStartColor: "rgb(0, 0, 238)",
                      borderLeftColor: "rgb(0, 0, 238)",
                      borderRightColor: "rgb(0, 0, 238)",
                      borderTopColor: "rgb(0, 0, 238)",
                      boxSizing: "border-box",
                      caretColor: "rgb(0, 0, 238)",
                      color: "rgb(0, 0, 238)",
                      columnRuleColor: "rgb(0, 0, 238)",
                      cursor: "pointer",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: "16px",
                      lineHeight: "18.4px",
                      marginLeft: 0,
                      marginRight: 0,
                      outlineColor: "rgb(0, 0, 238)",
                      textDecoration: "none solid rgb(0, 0, 238)",
                      textDecorationColor: "rgb(0, 0, 238)",
                      textEmphasisColor: "rgb(0, 0, 238)",
                      textSizeAdjust: "100%",
                      WebkitTextFillColor: "rgb(0, 0, 238)",
                      WebkitTextStrokeColor: "rgb(0, 0, 238)",
                    }}
                  >
                    <img
                      width="1"
                      height="1"
                      src="https://glo365.vn/wp-content/uploads/2020/07/Glo365-logo-2000x600.svg"
                      class="custom-logo"
                      alt="Glo365"
                    />
                  </noscript>
                </a>{" "}
              </div>
              <div
                style={{
                  blockSize: "249.8px",
                  boxSizing: "border-box",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: "16px",
                  inlineSize: "350px",
                  lineHeight: "18.4px",
                  marginLeft: 0,
                  marginRight: 0,
                  minBlockSize: "auto",
                  minHeight: "auto",
                  minInlineSize: "auto",
                  minWidth: "auto",
                  textSizeAdjust: "100%",
                }}
                className={"deck"}
              >
                <div
                  style={{
                    blockSize: "219px",
                    boxSizing: "border-box",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: "16px",
                    inlineSize: "350px",
                    lineHeight: "18.4px",
                    marginLeft: 0,
                    marginRight: 0,
                    textSizeAdjust: "100%",
                  }}
                  id={"text-2"}
                  className={"widget widget_text"}
                >
                  {" "}
                  <div
                    style={{
                      blockSize: "219px",
                      boxSizing: "border-box",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: "16px",
                      inlineSize: "350px",
                      lineHeight: "18.4px",
                      marginLeft: 0,
                      marginRight: 0,
                      textSizeAdjust: "100%",
                    }}
                    className={"textwidget"}
                  >
                    <p
                      style={{
                        blockSize: "138px",
                        borderBlockEndColor: "rgb(255, 255, 255)",
                        borderBlockStartColor: "rgb(255, 255, 255)",
                        borderBottomColor: "rgb(255, 255, 255)",
                        borderInlineEndColor: "rgb(255, 255, 255)",
                        borderInlineStartColor: "rgb(255, 255, 255)",
                        borderLeftColor: "rgb(255, 255, 255)",
                        borderRightColor: "rgb(255, 255, 255)",
                        borderTopColor: "rgb(255, 255, 255)",
                        boxSizing: "border-box",
                        caretColor: "rgb(255, 255, 255)",
                        color: "rgb(255, 255, 255)",
                        columnRuleColor: "rgb(255, 255, 255)",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "13px",
                        inlineSize: "350px",
                        lineHeight: "24px",
                        marginBlockEnd: "0px",
                        marginBlockStart: "0px",
                        marginBottom: "0px",
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: "0px",
                        outlineColor: "rgb(255, 255, 255)",
                        textDecoration: "none solid rgb(255, 255, 255)",
                        textDecorationColor: "rgb(255, 255, 255)",
                        textEmphasisColor: "rgb(255, 255, 255)",
                        textSizeAdjust: "100%",
                        WebkitTextFillColor: "rgb(255, 255, 255)",
                        WebkitTextStrokeColor: "rgb(255, 255, 255)",
                      }}
                    >
                      <span
                        style={{
                          blockSize: "48px",
                          borderBlockEndColor: "rgb(255, 255, 255)",
                          borderBlockStartColor: "rgb(255, 255, 255)",
                          borderBottomColor: "rgb(255, 255, 255)",
                          borderInlineEndColor: "rgb(255, 255, 255)",
                          borderInlineStartColor: "rgb(255, 255, 255)",
                          borderLeftColor: "rgb(255, 255, 255)",
                          borderRightColor: "rgb(255, 255, 255)",
                          borderTopColor: "rgb(255, 255, 255)",
                          boxSizing: "border-box",
                          caretColor: "rgb(255, 255, 255)",
                          color: "rgb(255, 255, 255)",
                          columnRuleColor: "rgb(255, 255, 255)",
                          display: "flex",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "13px",
                          inlineSize: "350px",
                          lineHeight: "24px",
                          marginBlockEnd: "9px",
                          marginBottom: "9px",
                          marginLeft: 0,
                          marginRight: 0,
                          outlineColor: "rgb(255, 255, 255)",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          textDecorationColor: "rgb(255, 255, 255)",
                          textEmphasisColor: "rgb(255, 255, 255)",
                          textSizeAdjust: "100%",
                          WebkitTextFillColor: "rgb(255, 255, 255)",
                          WebkitTextStrokeColor: "rgb(255, 255, 255)",
                        }}
                        className={"loc"}
                      >
                        31A Lý Tự Trọng, Quận 1, Thành phố Hồ Chí Minh
                      </span>
                      <span
                        style={{
                          blockSize: "24px",
                          borderBlockEndColor: "rgb(255, 255, 255)",
                          borderBlockStartColor: "rgb(255, 255, 255)",
                          borderBottomColor: "rgb(255, 255, 255)",
                          borderInlineEndColor: "rgb(255, 255, 255)",
                          borderInlineStartColor: "rgb(255, 255, 255)",
                          borderLeftColor: "rgb(255, 255, 255)",
                          borderRightColor: "rgb(255, 255, 255)",
                          borderTopColor: "rgb(255, 255, 255)",
                          boxSizing: "border-box",
                          caretColor: "rgb(255, 255, 255)",
                          color: "rgb(255, 255, 255)",
                          columnRuleColor: "rgb(255, 255, 255)",
                          display: "flex",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "13px",
                          inlineSize: "350px",
                          lineHeight: "24px",
                          marginBlockEnd: "9px",
                          marginBottom: "9px",
                          marginLeft: 0,
                          marginRight: 0,
                          outlineColor: "rgb(255, 255, 255)",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          textDecorationColor: "rgb(255, 255, 255)",
                          textEmphasisColor: "rgb(255, 255, 255)",
                          textSizeAdjust: "100%",
                          WebkitTextFillColor: "rgb(255, 255, 255)",
                          WebkitTextStrokeColor: "rgb(255, 255, 255)",
                        }}
                        className={"loc"}
                      >
                        63 Xuân Thuỷ, Quận 2, Thành phố Thủ Đức
                      </span>
                      <span
                        style={{
                          blockSize: "48px",
                          borderBlockEndColor: "rgb(255, 255, 255)",
                          borderBlockStartColor: "rgb(255, 255, 255)",
                          borderBottomColor: "rgb(255, 255, 255)",
                          borderInlineEndColor: "rgb(255, 255, 255)",
                          borderInlineStartColor: "rgb(255, 255, 255)",
                          borderLeftColor: "rgb(255, 255, 255)",
                          borderRightColor: "rgb(255, 255, 255)",
                          borderTopColor: "rgb(255, 255, 255)",
                          boxSizing: "border-box",
                          caretColor: "rgb(255, 255, 255)",
                          color: "rgb(255, 255, 255)",
                          columnRuleColor: "rgb(255, 255, 255)",
                          display: "flex",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "13px",
                          inlineSize: "350px",
                          lineHeight: "24px",
                          marginBlockEnd: "9px",
                          marginBottom: "9px",
                          marginLeft: 0,
                          marginRight: 0,
                          outlineColor: "rgb(255, 255, 255)",
                          textDecoration: "none solid rgb(255, 255, 255)",
                          textDecorationColor: "rgb(255, 255, 255)",
                          textEmphasisColor: "rgb(255, 255, 255)",
                          textSizeAdjust: "100%",
                          WebkitTextFillColor: "rgb(255, 255, 255)",
                          WebkitTextStrokeColor: "rgb(255, 255, 255)",
                        }}
                        className={"time"}
                      >
                        Thứ Hai đến Chủ Nhật từ 09:00 đến 20:00 | Hotline 1800
                        6733 | Email: info@Glo365.vn
                      </span>
                    </p>
                    <p
                      style={{
                        blockSize: "72px",
                        borderBlockEndColor: "rgb(255, 255, 255)",
                        borderBlockStartColor: "rgb(255, 255, 255)",
                        borderBottomColor: "rgb(255, 255, 255)",
                        borderInlineEndColor: "rgb(255, 255, 255)",
                        borderInlineStartColor: "rgb(255, 255, 255)",
                        borderLeftColor: "rgb(255, 255, 255)",
                        borderRightColor: "rgb(255, 255, 255)",
                        borderTopColor: "rgb(255, 255, 255)",
                        boxSizing: "border-box",
                        caretColor: "rgb(255, 255, 255)",
                        color: "rgb(255, 255, 255)",
                        columnRuleColor: "rgb(255, 255, 255)",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "13px",
                        inlineSize: "350px",
                        lineHeight: "24px",
                        marginBlockEnd: "0px",
                        marginBlockStart: "0px",
                        marginBottom: "0px",
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: "0px",
                        outlineColor: "rgb(255, 255, 255)",
                        textDecoration: "none solid rgb(255, 255, 255)",
                        textDecorationColor: "rgb(255, 255, 255)",
                        textEmphasisColor: "rgb(255, 255, 255)",
                        textSizeAdjust: "100%",
                        WebkitTextFillColor: "rgb(255, 255, 255)",
                        WebkitTextStrokeColor: "rgb(255, 255, 255)",
                      }}
                    >
                      Glo365 là thương hiệu đã được đăng ký độc quyền bởi Empire
                      Global Investments JSC (mã số doanh nghiệp: 0315524896)
                    </p>
                  </div>
                </div>

                <p
                  style={{
                    blockSize: "13.8px",
                    borderBlockEndColor: "rgb(255, 255, 255)",
                    borderBlockStartColor: "rgb(255, 255, 255)",
                    borderBottomColor: "rgb(255, 255, 255)",
                    borderInlineEndColor: "rgb(255, 255, 255)",
                    borderInlineStartColor: "rgb(255, 255, 255)",
                    borderLeftColor: "rgb(255, 255, 255)",
                    borderRightColor: "rgb(255, 255, 255)",
                    borderTopColor: "rgb(255, 255, 255)",
                    boxSizing: "border-box",
                    caretColor: "rgb(255, 255, 255)",
                    color: "rgb(255, 255, 255)",
                    columnRuleColor: "rgb(255, 255, 255)",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: "12px",
                    inlineSize: "350px",
                    lineHeight: "13.8px",
                    marginBlockEnd: "0px",
                    marginBlockStart: "17px",
                    marginBottom: "0px",
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: "17px",
                    outlineColor: "rgb(255, 255, 255)",
                    textDecoration: "none solid rgb(255, 255, 255)",
                    textDecorationColor: "rgb(255, 255, 255)",
                    textEmphasisColor: "rgb(255, 255, 255)",
                    textSizeAdjust: "100%",
                    WebkitTextFillColor: "rgb(255, 255, 255)",
                    WebkitTextStrokeColor: "rgb(255, 255, 255)",
                  }}
                  className={"ndg-copy"}
                >
                  All Rights Reserved, 2021
                </p>
              </div>
            </div>
            <div
              style={{
                blockSize: "65px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                fontFamily: "Comfortaa, Arial",
                fontSize: "16px",
                inlineSize: "400px",
                lineHeight: "18.4px",
                marginInlineEnd: "100px",
                marginLeft: 0,
                marginRight: "100px",
                maxInlineSize: "400px",
                maxWidth: "400px",
                minBlockSize: "auto",
                minHeight: "auto",
                minInlineSize: "auto",
                minWidth: "auto",
                textSizeAdjust: "100%",
                WebkitBoxOrient: "vertical",
              }}
              className={"flex-col footer-2"}
            >
              <div
                style={{
                  blockSize: "45px",
                  boxSizing: "border-box",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: "16px",
                  inlineSize: "400px",
                  lineHeight: "18.4px",
                  marginLeft: 0,
                  marginRight: 0,
                  minBlockSize: "auto",
                  minHeight: "auto",
                  minInlineSize: "auto",
                  minWidth: "auto",
                  textSizeAdjust: "100%",
                }}
                className={"menu-bottom-vi-container"}
              >
                <ul
                  style={{
                    blockSize: "95px",
                    boxSizing: "border-box",
                    display: "flex",
                    flexWrap: "wrap",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: "16px",
                    inlineSize: "400px",
                    lineHeight: "18.4px",
                    marginBlockEnd: "0px",
                    marginBlockStart: "-50px",
                    marginBottom: "0px",
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: "-50px",
                    paddingInlineStart: "0px",
                    paddingLeft: "0px",
                    textSizeAdjust: "100%",
                  }}
                  id={"menu-bottom-vi"}
                  className={"ndg-bottom-menu"}
                >
                  <li
                    style={{
                      blockSize: "47.5px",
                      boxSizing: "border-box",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: "16px",
                      inlineSize: "88.8375px",
                      lineHeight: "18.4px",
                      listStyleType: "none",
                      marginLeft: 0,
                      marginRight: 0,
                      minBlockSize: "auto",
                      minHeight: "auto",
                      minInlineSize: "auto",
                      minWidth: "auto",
                      paddingBlockEnd: "28px",
                      paddingBottom: "28px",
                      paddingInlineEnd: "26px",
                      paddingRight: "26px",
                      textSizeAdjust: "100%",
                    }}
                    id={"menu-item-648"}
                    className={
                      "menu-item menu-item-type-custom menu-item-object-custom menu-item-648"
                    }
                  >
                    <a
                      style={{
                        borderBlockEndColor: "rgb(255, 255, 255)",
                        borderBlockStartColor: "rgb(255, 255, 255)",
                        borderBottomColor: "rgb(255, 255, 255)",
                        borderInlineEndColor: "rgb(255, 255, 255)",
                        borderInlineStartColor: "rgb(255, 255, 255)",
                        borderLeftColor: "rgb(255, 255, 255)",
                        borderRightColor: "rgb(255, 255, 255)",
                        borderTopColor: "rgb(255, 255, 255)",
                        boxSizing: "border-box",
                        caretColor: "rgb(255, 255, 255)",
                        color: "rgb(255, 255, 255)",
                        columnRuleColor: "rgb(255, 255, 255)",
                        cursor: "pointer",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "14px",
                        lineHeight: "16.1px",
                        listStyleType: "none",
                        marginLeft: 0,
                        marginRight: 0,
                        outlineColor: "rgb(255, 255, 255)",
                        paddingBlockEnd: "10px",
                        paddingBottom: "10px",
                        textAlign: "left",
                        textDecoration: "none",
                        textDecorationColor: "rgb(255, 255, 255)",
                        textEmphasisColor: "rgb(255, 255, 255)",
                        textSizeAdjust: "100%",
                        textTransform: "uppercase",
                        transitionDuration: "0.3s",
                        WebkitTextFillColor: "rgb(255, 255, 255)",
                        WebkitTextStrokeColor: "rgb(255, 255, 255)",
                      }}
                      href={"https://glo365.vn/services/"}
                    >
                      DỊCH VỤ
                    </a>
                  </li>
                  <li
                    style={{
                      blockSize: "47.5px",
                      boxSizing: "border-box",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: "16px",
                      inlineSize: "106.125px",
                      lineHeight: "18.4px",
                      listStyleType: "none",
                      marginLeft: 0,
                      marginRight: 0,
                      minBlockSize: "auto",
                      minHeight: "auto",
                      minInlineSize: "auto",
                      minWidth: "auto",
                      paddingBlockEnd: "28px",
                      paddingBottom: "28px",
                      paddingInlineEnd: "26px",
                      paddingRight: "26px",
                      textSizeAdjust: "100%",
                    }}
                    id={"menu-item-653"}
                    className={
                      "menu-item menu-item-type-custom menu-item-object-custom menu-item-653"
                    }
                  >
                    <a
                      style={{
                        borderBlockEndColor: "rgb(255, 255, 255)",
                        borderBlockStartColor: "rgb(255, 255, 255)",
                        borderBottomColor: "rgb(255, 255, 255)",
                        borderInlineEndColor: "rgb(255, 255, 255)",
                        borderInlineStartColor: "rgb(255, 255, 255)",
                        borderLeftColor: "rgb(255, 255, 255)",
                        borderRightColor: "rgb(255, 255, 255)",
                        borderTopColor: "rgb(255, 255, 255)",
                        boxSizing: "border-box",
                        caretColor: "rgb(255, 255, 255)",
                        color: "rgb(255, 255, 255)",
                        columnRuleColor: "rgb(255, 255, 255)",
                        cursor: "pointer",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "14px",
                        lineHeight: "16.1px",
                        listStyleType: "none",
                        marginLeft: 0,
                        marginRight: 0,
                        outlineColor: "rgb(255, 255, 255)",
                        paddingBlockEnd: "10px",
                        paddingBottom: "10px",
                        textAlign: "left",
                        textDecoration: "none",
                        textDecorationColor: "rgb(255, 255, 255)",
                        textEmphasisColor: "rgb(255, 255, 255)",
                        textSizeAdjust: "100%",
                        textTransform: "uppercase",
                        transitionDuration: "0.3s",
                        WebkitTextFillColor: "rgb(255, 255, 255)",
                        WebkitTextStrokeColor: "rgb(255, 255, 255)",
                      }}
                      href={"https://shop.glo365.vn"}
                    >
                      CỬA HÀNG
                    </a>
                  </li>
                  <li
                    style={{
                      blockSize: "47.5px",
                      boxSizing: "border-box",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: "16px",
                      inlineSize: "85.1375px",
                      lineHeight: "18.4px",
                      listStyleType: "none",
                      marginLeft: 0,
                      marginRight: 0,
                      minBlockSize: "auto",
                      minHeight: "auto",
                      minInlineSize: "auto",
                      minWidth: "auto",
                      paddingBlockEnd: "28px",
                      paddingBottom: "28px",
                      paddingInlineEnd: "26px",
                      paddingRight: "26px",
                      textSizeAdjust: "100%",
                    }}
                    id={"menu-item-649"}
                    className={
                      "menu-item menu-item-type-custom menu-item-object-custom menu-item-649"
                    }
                  >
                    <a
                      style={{
                        borderBlockEndColor: "rgb(255, 255, 255)",
                        borderBlockStartColor: "rgb(255, 255, 255)",
                        borderBottomColor: "rgb(255, 255, 255)",
                        borderInlineEndColor: "rgb(255, 255, 255)",
                        borderInlineStartColor: "rgb(255, 255, 255)",
                        borderLeftColor: "rgb(255, 255, 255)",
                        borderRightColor: "rgb(255, 255, 255)",
                        borderTopColor: "rgb(255, 255, 255)",
                        boxSizing: "border-box",
                        caretColor: "rgb(255, 255, 255)",
                        color: "rgb(255, 255, 255)",
                        columnRuleColor: "rgb(255, 255, 255)",
                        cursor: "pointer",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "14px",
                        lineHeight: "16.1px",
                        listStyleType: "none",
                        marginLeft: 0,
                        marginRight: 0,
                        outlineColor: "rgb(255, 255, 255)",
                        paddingBlockEnd: "10px",
                        paddingBottom: "10px",
                        textAlign: "left",
                        textDecoration: "none",
                        textDecorationColor: "rgb(255, 255, 255)",
                        textEmphasisColor: "rgb(255, 255, 255)",
                        textSizeAdjust: "100%",
                        textTransform: "uppercase",
                        transitionDuration: "0.3s",
                        WebkitTextFillColor: "rgb(255, 255, 255)",
                        WebkitTextStrokeColor: "rgb(255, 255, 255)",
                      }}
                      href={"https://glo365.vn/events/"}
                    >
                      SỰ KIỆN
                    </a>
                  </li>
                  <li
                    style={{
                      blockSize: "47.5px",
                      boxSizing: "border-box",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: "16px",
                      inlineSize: "107.575px",
                      lineHeight: "18.4px",
                      listStyleType: "none",
                      marginLeft: 0,
                      marginRight: 0,
                      minBlockSize: "auto",
                      minHeight: "auto",
                      minInlineSize: "auto",
                      minWidth: "auto",
                      paddingBlockEnd: "28px",
                      paddingBottom: "28px",
                      paddingInlineEnd: "26px",
                      paddingRight: "26px",
                      textSizeAdjust: "100%",
                    }}
                    id={"menu-item-650"}
                    className={
                      "menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-650"
                    }
                  >
                    <a
                      style={{
                        borderBlockEndColor: "rgb(255, 255, 255)",
                        borderBlockStartColor: "rgb(255, 255, 255)",
                        borderBottomColor: "rgb(255, 255, 255)",
                        borderInlineEndColor: "rgb(255, 255, 255)",
                        borderInlineStartColor: "rgb(255, 255, 255)",
                        borderLeftColor: "rgb(255, 255, 255)",
                        borderRightColor: "rgb(255, 255, 255)",
                        borderTopColor: "rgb(255, 255, 255)",
                        boxSizing: "border-box",
                        caretColor: "rgb(255, 255, 255)",
                        color: "rgb(255, 255, 255)",
                        columnRuleColor: "rgb(255, 255, 255)",
                        cursor: "pointer",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "14px",
                        lineHeight: "16.1px",
                        listStyleType: "none",
                        marginLeft: 0,
                        marginRight: 0,
                        outlineColor: "rgb(255, 255, 255)",
                        paddingBlockEnd: "10px",
                        paddingBottom: "10px",
                        textAlign: "left",
                        textDecoration: "none",
                        textDecorationColor: "rgb(255, 255, 255)",
                        textEmphasisColor: "rgb(255, 255, 255)",
                        textSizeAdjust: "100%",
                        textTransform: "uppercase",
                        transitionDuration: "0.3s",
                        WebkitTextFillColor: "rgb(255, 255, 255)",
                        WebkitTextStrokeColor: "rgb(255, 255, 255)",
                      }}
                      href={"https://glo365.vn/#about"}
                      aria-current={"page"}
                    >
                      GIỚI THIỆU
                    </a>
                  </li>
                  <li
                    style={{
                      blockSize: "47.5px",
                      boxSizing: "border-box",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: "16px",
                      inlineSize: "125.6px",
                      lineHeight: "18.4px",
                      listStyleType: "none",
                      marginLeft: 0,
                      marginRight: 0,
                      minBlockSize: "auto",
                      minHeight: "auto",
                      minInlineSize: "auto",
                      minWidth: "auto",
                      paddingBlockEnd: "28px",
                      paddingBottom: "28px",
                      paddingInlineEnd: "26px",
                      paddingRight: "26px",
                      textSizeAdjust: "100%",
                    }}
                    id={"menu-item-654"}
                    className={
                      "menu-item menu-item-type-custom menu-item-object-custom menu-item-654"
                    }
                  >
                    <a
                      style={{
                        borderBlockEndColor: "rgb(255, 255, 255)",
                        borderBlockStartColor: "rgb(255, 255, 255)",
                        borderBottomColor: "rgb(255, 255, 255)",
                        borderInlineEndColor: "rgb(255, 255, 255)",
                        borderInlineStartColor: "rgb(255, 255, 255)",
                        borderLeftColor: "rgb(255, 255, 255)",
                        borderRightColor: "rgb(255, 255, 255)",
                        borderTopColor: "rgb(255, 255, 255)",
                        boxSizing: "border-box",
                        caretColor: "rgb(255, 255, 255)",
                        color: "rgb(255, 255, 255)",
                        columnRuleColor: "rgb(255, 255, 255)",
                        cursor: "pointer",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "14px",
                        lineHeight: "16.1px",
                        listStyleType: "none",
                        marginLeft: 0,
                        marginRight: 0,
                        outlineColor: "rgb(255, 255, 255)",
                        paddingBlockEnd: "10px",
                        paddingBottom: "10px",
                        textAlign: "left",
                        textDecoration: "none",
                        textDecorationColor: "rgb(255, 255, 255)",
                        textEmphasisColor: "rgb(255, 255, 255)",
                        textSizeAdjust: "100%",
                        textTransform: "uppercase",
                        transitionDuration: "0.3s",
                        WebkitTextFillColor: "rgb(255, 255, 255)",
                        WebkitTextStrokeColor: "rgb(255, 255, 255)",
                      }}
                      href={"https://glo365.vn/careers/"}
                    >
                      TUYỂN DỤNG
                    </a>
                  </li>
                </ul>
              </div>{" "}
              <div
                style={{
                  blockSize: "20px",
                  boxSizing: "border-box",
                  display: "flex",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: "16px",
                  inlineSize: "400px",
                  lineHeight: "18.4px",
                  marginLeft: 0,
                  marginRight: 0,
                  minBlockSize: "auto",
                  minHeight: "auto",
                  minInlineSize: "auto",
                  minWidth: "auto",
                  textSizeAdjust: "100%",
                }}
                className={"ndg-social"}
              >
                <a
                  style={{
                    backgroundImage:
                      "url(https://glo365.vn/wp-content/themes/ndg-quantum/imgs/social/youtube.svg)",
                    backgroundSize: "cover",
                    blockSize: "20px",
                    borderBlockEndColor: "rgb(0, 0, 238)",
                    borderBlockStartColor: "rgb(0, 0, 238)",
                    borderBottomColor: "rgb(0, 0, 238)",
                    borderInlineEndColor: "rgb(0, 0, 238)",
                    borderInlineStartColor: "rgb(0, 0, 238)",
                    borderLeftColor: "rgb(0, 0, 238)",
                    borderRightColor: "rgb(0, 0, 238)",
                    borderTopColor: "rgb(0, 0, 238)",
                    boxSizing: "border-box",
                    caretColor: "rgb(0, 0, 238)",
                    color: "rgb(0, 0, 238)",
                    columnRuleColor: "rgb(0, 0, 238)",
                    content: "",
                    cursor: "pointer",
                    display: "block",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: "16px",
                    inlineSize: "20px",
                    lineHeight: "18.4px",
                    marginInlineEnd: "8px",
                    marginLeft: 0,
                    marginRight: "12px",
                    minBlockSize: "auto",
                    minHeight: "auto",
                    minInlineSize: "auto",
                    minWidth: "auto",
                    outlineColor: "rgb(0, 0, 238)",
                    textDecoration: "underline solid rgb(0, 0, 238)",
                    textDecorationColor: "rgb(0, 0, 238)",
                    textDecorationLine: "underline",
                    textEmphasisColor: "rgb(0, 0, 238)",
                    textSizeAdjust: "100%",
                    transitionDuration: "0.3s",
                    WebkitTextFillColor: "rgb(0, 0, 238)",
                    WebkitTextStrokeColor: "rgb(0, 0, 238)",
                    width: "20px",
                    height: "20px",
                  }}
                  href={
                    "https://www.youtube.com/channel/UC584NxbpaBaDe9_jJkG8scQ"
                  }
                  className={"yt"}
                ></a>
                <a
                  style={{
                    backgroundImage:
                      "url(https://glo365.vn/wp-content/themes/ndg-quantum/imgs/social/instagram.svg)",
                    backgroundSize: "cover",
                    blockSize: "20px",
                    borderBlockEndColor: "rgb(0, 0, 238)",
                    borderBlockStartColor: "rgb(0, 0, 238)",
                    borderBottomColor: "rgb(0, 0, 238)",
                    borderInlineEndColor: "rgb(0, 0, 238)",
                    borderInlineStartColor: "rgb(0, 0, 238)",
                    borderLeftColor: "rgb(0, 0, 238)",
                    borderRightColor: "rgb(0, 0, 238)",
                    borderTopColor: "rgb(0, 0, 238)",
                    boxSizing: "border-box",
                    caretColor: "rgb(0, 0, 238)",
                    color: "rgb(0, 0, 238)",
                    columnRuleColor: "rgb(0, 0, 238)",
                    content: "",
                    cursor: "pointer",
                    display: "block",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: "16px",
                    inlineSize: "20px",
                    lineHeight: "18.4px",
                    marginInlineEnd: "8px",
                    marginLeft: 0,
                    marginRight: "12px",
                    minBlockSize: "auto",
                    minHeight: "auto",
                    minInlineSize: "auto",
                    minWidth: "auto",
                    outlineColor: "rgb(0, 0, 238)",
                    textDecoration: "underline solid rgb(0, 0, 238)",
                    textDecorationColor: "rgb(0, 0, 238)",
                    textDecorationLine: "underline",
                    textEmphasisColor: "rgb(0, 0, 238)",
                    textSizeAdjust: "100%",
                    transitionDuration: "0.3s",
                    WebkitTextFillColor: "rgb(0, 0, 238)",
                    WebkitTextStrokeColor: "rgb(0, 0, 238)",
                    width: "20px",
                    height: "20px",
                  }}
                  href={"https://www.instagram.com/Glo365.vn/"}
                  className={"insta"}
                ></a>
                <a
                  style={{
                    backgroundImage:
                      "url(https://glo365.vn/wp-content/themes/ndg-quantum/imgs/social/facebook-logo-button.svg)",
                    backgroundSize: "cover",
                    blockSize: "20px",
                    borderBlockEndColor: "rgb(0, 0, 238)",
                    borderBlockStartColor: "rgb(0, 0, 238)",
                    borderBottomColor: "rgb(0, 0, 238)",
                    borderInlineEndColor: "rgb(0, 0, 238)",
                    borderInlineStartColor: "rgb(0, 0, 238)",
                    borderLeftColor: "rgb(0, 0, 238)",
                    borderRightColor: "rgb(0, 0, 238)",
                    borderTopColor: "rgb(0, 0, 238)",
                    boxSizing: "border-box",
                    caretColor: "rgb(0, 0, 238)",
                    color: "rgb(0, 0, 238)",
                    columnRuleColor: "rgb(0, 0, 238)",
                    content: "",
                    cursor: "pointer",
                    display: "block",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: "16px",
                    inlineSize: "20px",
                    lineHeight: "18.4px",
                    marginInlineEnd: "8px",
                    marginLeft: 0,
                    marginRight: "12px",
                    minBlockSize: "auto",
                    minHeight: "auto",
                    minInlineSize: "auto",
                    minWidth: "auto",
                    outlineColor: "rgb(0, 0, 238)",
                    textDecoration: "underline solid rgb(0, 0, 238)",
                    textDecorationColor: "rgb(0, 0, 238)",
                    textDecorationLine: "underline",
                    textEmphasisColor: "rgb(0, 0, 238)",
                    textSizeAdjust: "100%",
                    transitionDuration: "0.3s",
                    WebkitTextFillColor: "rgb(0, 0, 238)",
                    WebkitTextStrokeColor: "rgb(0, 0, 238)",
                    width: "20px",
                    height: "20px",
                  }}
                  href={"http://www.facebook.com/Glo365.vn"}
                  className={"fb"}
                ></a>
              </div>
            </div>
            <div
              style={{
                blockSize: "212.4px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                fontFamily: "Comfortaa, Arial",
                fontSize: "16px",
                inlineSize: "150px",
                lineHeight: "18.4px",
                marginLeft: 0,
                marginRight: 0,
                minBlockSize: "auto",
                minHeight: "auto",
                minInlineSize: "auto",
                minWidth: "auto",
                textSizeAdjust: "100%",
                WebkitBoxOrient: "vertical",
              }}
              className={"flex-col footer-3"}
            >
              <div
                style={{
                  blockSize: "154px",
                  boxSizing: "border-box",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: "16px",
                  inlineSize: "150px",
                  lineHeight: "18.4px",
                  marginBlockStart: "20px",
                  marginLeft: 0,
                  marginRight: 0,
                  marginTop: "20px !important",
                  minBlockSize: "auto",
                  minHeight: "auto",
                  minInlineSize: "auto",
                  minWidth: "auto",
                  textAlign: "left",
                  textSizeAdjust: "100%",
                }}
                id={"media_image-3"}
                className={"widget widget_media_image"}
              >
                <img
                  style={{
                    blockSize: "150px",
                    boxSizing: "border-box",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: "16px",
                    inlineSize: "150px",
                    lineHeight: "18.4px",
                    marginLeft: 0,
                    marginRight: 0,
                    maxInlineSize: "100%",
                    maxWidth: "100%",
                    textAlign: "left",
                    textSizeAdjust: "100%",
                    width: "150px",
                    height: "150px",
                  }}
                  width={150}
                  height={150}
                  src={
                    "https://glo365.vn/wp-content/uploads/2021/10/243941275_1234107797084432_127054125037716174_n-150x150.jpg"
                  }
                  className={
                    "image wp-image-5599 attachment-150x150 size-150x150 entered lazyloaded"
                  }
                  data-lazy-srcset={
                    "https://glo365.vn/wp-content/uploads/2021/10/243941275_1234107797084432_127054125037716174_n-150x150.jpg 150w, https://glo365.vn/wp-content/uploads/2021/10/243941275_1234107797084432_127054125037716174_n-300x300.jpg 300w, https://glo365.vn/wp-content/uploads/2021/10/243941275_1234107797084432_127054125037716174_n-400x400.jpg 400w, https://glo365.vn/wp-content/uploads/2021/10/243941275_1234107797084432_127054125037716174_n.jpg 490w"
                  }
                  data-lazy-sizes={"(max-width: 150px) 100vw, 150px"}
                  data-lazy-src={
                    "https://glo365.vn/wp-content/uploads/2021/10/243941275_1234107797084432_127054125037716174_n-150x150.jpg"
                  }
                  data-ll-status={"loaded"}
                  sizes={"(max-width: 150px) 100vw, 150px"}
                  srcset={
                    "https://glo365.vn/wp-content/uploads/2021/10/243941275_1234107797084432_127054125037716174_n-150x150.jpg 150w, https://glo365.vn/wp-content/uploads/2021/10/243941275_1234107797084432_127054125037716174_n-300x300.jpg 300w, https://glo365.vn/wp-content/uploads/2021/10/243941275_1234107797084432_127054125037716174_n-400x400.jpg 400w, https://glo365.vn/wp-content/uploads/2021/10/243941275_1234107797084432_127054125037716174_n.jpg 490w"
                  }
                ></img>
                <noscript
                  style={{
                    boxSizing: "border-box",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: "16px",
                    lineHeight: "18.4px",
                    marginLeft: 0,
                    marginRight: 0,
                    textAlign: "left",
                    textSizeAdjust: "100%",
                  }}
                >
                  <img
                    width="150"
                    height="150"
                    src="https://glo365.vn/wp-content/uploads/2021/10/243941275_1234107797084432_127054125037716174_n-150x150.jpg"
                    class="image wp-image-5599  attachment-150x150 size-150x150"
                    alt=""
                    style="max-width: 100%; height: auto;"
                    srcset="https://glo365.vn/wp-content/uploads/2021/10/243941275_1234107797084432_127054125037716174_n-150x150.jpg 150w, https://glo365.vn/wp-content/uploads/2021/10/243941275_1234107797084432_127054125037716174_n-300x300.jpg 300w, https://glo365.vn/wp-content/uploads/2021/10/243941275_1234107797084432_127054125037716174_n-400x400.jpg 400w, https://glo365.vn/wp-content/uploads/2021/10/243941275_1234107797084432_127054125037716174_n.jpg 490w"
                    sizes="(max-width: 150px) 100vw, 150px"
                  />
                </noscript>
              </div>
              <div
                style={{
                  blockSize: "38.4px",
                  boxSizing: "border-box",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: "16px",
                  inlineSize: "150px",
                  lineHeight: "18.4px",
                  marginLeft: 0,
                  marginRight: 0,
                  minBlockSize: "auto",
                  minHeight: "auto",
                  minInlineSize: "auto",
                  minWidth: "auto",
                  textAlign: "left",
                  textSizeAdjust: "100%",
                }}
                id={"nav_menu-2"}
                className={"widget widget_nav_menu"}
              >
                <div
                  style={{
                    blockSize: "38.4px",
                    boxSizing: "border-box",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: "16px",
                    inlineSize: "150px",
                    lineHeight: "18.4px",
                    marginLeft: 0,
                    marginRight: 0,
                    textAlign: "left",
                    textSizeAdjust: "100%",
                  }}
                  className={"menu-footer-container"}
                >
                  <ul
                    style={{
                      blockSize: "38.4px",
                      boxSizing: "border-box",
                      display: "flex",
                      fontFamily: "Comfortaa, Arial",
                      fontSize: "16px",
                      inlineSize: "150px",
                      lineHeight: "18.4px",
                      listStyleType: "none",
                      marginBlockEnd: "0px",
                      marginBlockStart: "0px",
                      marginBottom: "0px",
                      marginLeft: 0,
                      marginRight: 0,
                      marginTop: "0px",
                      paddingBlockStart: "20px",
                      paddingInlineStart: "0px",
                      paddingLeft: "0px",
                      paddingTop: "20px",
                      textAlign: "left",
                      textSizeAdjust: "100%",
                    }}
                    id={"menu-footer"}
                    className={"menu"}
                  >
                    <li
                      style={{
                        blockSize: "18.4px",
                        boxSizing: "border-box",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "16px",
                        inlineSize: "16px",
                        lineHeight: "18.4px",
                        listStyleType: "none",
                        marginInlineEnd: "10px",
                        marginLeft: 0,
                        marginRight: "10px",
                        minBlockSize: "auto",
                        minHeight: "auto",
                        minInlineSize: "auto",
                        minWidth: "auto",
                        textSizeAdjust: "100%",
                      }}
                      id={"menu-item-5556-en"}
                      className={
                        "lang-item lang-item-2 lang-item-en lang-item-first menu-item menu-item-type-custom menu-item-object-custom menu-item-5556-en"
                      }
                    >
                      <a
                        style={{
                          borderBlockEndColor: "rgb(0, 0, 238)",
                          borderBlockStartColor: "rgb(0, 0, 238)",
                          borderBottomColor: "rgb(0, 0, 238)",
                          borderInlineEndColor: "rgb(0, 0, 238)",
                          borderInlineStartColor: "rgb(0, 0, 238)",
                          borderLeftColor: "rgb(0, 0, 238)",
                          borderRightColor: "rgb(0, 0, 238)",
                          borderTopColor: "rgb(0, 0, 238)",
                          boxSizing: "border-box",
                          caretColor: "rgb(0, 0, 238)",
                          color: "rgb(0, 0, 238)",
                          columnRuleColor: "rgb(0, 0, 238)",
                          cursor: "pointer",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "16px",
                          lineHeight: "18.4px",
                          listStyleType: "none",
                          marginLeft: 0,
                          marginRight: 0,
                          outlineColor: "rgb(0, 0, 238)",
                          textAlign: "left",
                          textDecoration: "underline solid rgb(0, 0, 238)",
                          textDecorationColor: "rgb(0, 0, 238)",
                          textDecorationLine: "underline",
                          textEmphasisColor: "rgb(0, 0, 238)",
                          textSizeAdjust: "100%",
                          transitionDuration: "0.3s",
                          WebkitTextFillColor: "rgb(0, 0, 238)",
                          WebkitTextStrokeColor: "rgb(0, 0, 238)",
                        }}
                        href={"https://glo365.vn/en/home/"}
                        hreflang={"en-GB"}
                        lang={"en-GB"}
                      >
                        <img
                          style={{
                            blockSize: "11px",
                            borderBlockEndColor: "rgb(0, 0, 238)",
                            borderBlockStartColor: "rgb(0, 0, 238)",
                            borderBottomColor: "rgb(0, 0, 238)",
                            borderInlineEndColor: "rgb(0, 0, 238)",
                            borderInlineStartColor: "rgb(0, 0, 238)",
                            borderLeftColor: "rgb(0, 0, 238)",
                            borderRightColor: "rgb(0, 0, 238)",
                            borderTopColor: "rgb(0, 0, 238)",
                            boxSizing: "border-box",
                            caretColor: "rgb(0, 0, 238)",
                            color: "rgb(0, 0, 238)",
                            columnRuleColor: "rgb(0, 0, 238)",
                            cursor: "pointer",
                            fontFamily: "Comfortaa, Arial",
                            fontSize: "16px",
                            inlineSize: "16px",
                            lineHeight: "18.4px",
                            listStyleType: "none",
                            marginLeft: 0,
                            marginRight: 0,
                            outlineColor: "rgb(0, 0, 238)",
                            textAlign: "left",
                            textDecoration: "none solid rgb(0, 0, 238)",
                            textDecorationColor: "rgb(0, 0, 238)",
                            textEmphasisColor: "rgb(0, 0, 238)",
                            textSizeAdjust: "100%",
                            WebkitTextFillColor: "rgb(0, 0, 238)",
                            WebkitTextStrokeColor: "rgb(0, 0, 238)",
                            width: "16px",
                            height: "11px",
                          }}
                          src={
                            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAt1BMVEWSmb66z+18msdig8La3u+tYX9IaLc7W7BagbmcUW+kqMr/q6n+//+hsNv/lIr/jIGMnNLJyOP9/fyQttT/wb3/////aWn+YWF5kNT0oqz0i4ueqtIZNJjhvt/8gn//WVr/6+rN1+o9RKZwgcMPJpX/VFT9UEn+RUX8Ozv2Ly+FGzdYZrfU1e/8LS/lQkG/mbVUX60AE231hHtcdMb0mp3qYFTFwNu3w9prcqSURGNDaaIUMX5FNW5wYt7AAAAAjklEQVR4AR3HNUJEMQCGwf+L8RR36ajR+1+CEuvRdd8kK9MNAiRQNgJmVDAt1yM6kSzYVJUsPNssAk5N7ZFKjVNFAY4co6TAOI+kyQm+LFUEBEKKzuWUNB7rSH/rSnvOulOGk+QlXTBqMIrfYX4tSe2nP3iRa/KNK7uTmWJ5a9+erZ3d+18od4ytiZdvZyuKWy8o3UpTVAAAAABJRU5ErkJggg=="
                          }
                          alt={"En"}
                          width={16}
                          height={11}
                          data-lazy-src={
                            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAt1BMVEWSmb66z+18msdig8La3u+tYX9IaLc7W7BagbmcUW+kqMr/q6n+//+hsNv/lIr/jIGMnNLJyOP9/fyQttT/wb3/////aWn+YWF5kNT0oqz0i4ueqtIZNJjhvt/8gn//WVr/6+rN1+o9RKZwgcMPJpX/VFT9UEn+RUX8Ozv2Ly+FGzdYZrfU1e/8LS/lQkG/mbVUX60AE231hHtcdMb0mp3qYFTFwNu3w9prcqSURGNDaaIUMX5FNW5wYt7AAAAAjklEQVR4AR3HNUJEMQCGwf+L8RR36ajR+1+CEuvRdd8kK9MNAiRQNgJmVDAt1yM6kSzYVJUsPNssAk5N7ZFKjVNFAY4co6TAOI+kyQm+LFUEBEKKzuWUNB7rSH/rSnvOulOGk+QlXTBqMIrfYX4tSe2nP3iRa/KNK7uTmWJ5a9+erZ3d+18od4ytiZdvZyuKWy8o3UpTVAAAAABJRU5ErkJggg=="
                          }
                          data-ll-status={"loaded"}
                          className={"entered lazyloaded"}
                        ></img>
                        <noscript
                          style={{
                            borderBlockEndColor: "rgb(0, 0, 238)",
                            borderBlockStartColor: "rgb(0, 0, 238)",
                            borderBottomColor: "rgb(0, 0, 238)",
                            borderInlineEndColor: "rgb(0, 0, 238)",
                            borderInlineStartColor: "rgb(0, 0, 238)",
                            borderLeftColor: "rgb(0, 0, 238)",
                            borderRightColor: "rgb(0, 0, 238)",
                            borderTopColor: "rgb(0, 0, 238)",
                            boxSizing: "border-box",
                            caretColor: "rgb(0, 0, 238)",
                            color: "rgb(0, 0, 238)",
                            columnRuleColor: "rgb(0, 0, 238)",
                            cursor: "pointer",
                            fontFamily: "Comfortaa, Arial",
                            fontSize: "16px",
                            lineHeight: "18.4px",
                            listStyleType: "none",
                            marginLeft: 0,
                            marginRight: 0,
                            outlineColor: "rgb(0, 0, 238)",
                            textAlign: "left",
                            textDecoration: "none solid rgb(0, 0, 238)",
                            textDecorationColor: "rgb(0, 0, 238)",
                            textEmphasisColor: "rgb(0, 0, 238)",
                            textSizeAdjust: "100%",
                            WebkitTextFillColor: "rgb(0, 0, 238)",
                            WebkitTextStrokeColor: "rgb(0, 0, 238)",
                          }}
                        >
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAt1BMVEWSmb66z+18msdig8La3u+tYX9IaLc7W7BagbmcUW+kqMr/q6n+//+hsNv/lIr/jIGMnNLJyOP9/fyQttT/wb3/////aWn+YWF5kNT0oqz0i4ueqtIZNJjhvt/8gn//WVr/6+rN1+o9RKZwgcMPJpX/VFT9UEn+RUX8Ozv2Ly+FGzdYZrfU1e/8LS/lQkG/mbVUX60AE231hHtcdMb0mp3qYFTFwNu3w9prcqSURGNDaaIUMX5FNW5wYt7AAAAAjklEQVR4AR3HNUJEMQCGwf+L8RR36ajR+1+CEuvRdd8kK9MNAiRQNgJmVDAt1yM6kSzYVJUsPNssAk5N7ZFKjVNFAY4co6TAOI+kyQm+LFUEBEKKzuWUNB7rSH/rSnvOulOGk+QlXTBqMIrfYX4tSe2nP3iRa/KNK7uTmWJ5a9+erZ3d+18od4ytiZdvZyuKWy8o3UpTVAAAAABJRU5ErkJggg=="
                            alt="En"
                            width="16"
                            height="11"
                            style="width: 16px; height: 11px;"
                          />
                        </noscript>
                      </a>
                    </li>
                    <li
                      style={{
                        blockSize: "18.4px",
                        boxSizing: "border-box",
                        fontFamily: "Comfortaa, Arial",
                        fontSize: "16px",
                        inlineSize: "16px",
                        lineHeight: "18.4px",
                        listStyleType: "none",
                        marginInlineEnd: "10px",
                        marginLeft: 0,
                        marginRight: "10px",
                        minBlockSize: "auto",
                        minHeight: "auto",
                        minInlineSize: "auto",
                        minWidth: "auto",
                        textSizeAdjust: "100%",
                      }}
                      id={"menu-item-5556-vi"}
                      className={
                        "lang-item lang-item-5 lang-item-vi current-lang menu-item menu-item-type-custom menu-item-object-custom current_page_item menu-item-home menu-item-5556-vi"
                      }
                    >
                      <a
                        style={{
                          borderBlockEndColor: "rgb(0, 0, 238)",
                          borderBlockStartColor: "rgb(0, 0, 238)",
                          borderBottomColor: "rgb(0, 0, 238)",
                          borderInlineEndColor: "rgb(0, 0, 238)",
                          borderInlineStartColor: "rgb(0, 0, 238)",
                          borderLeftColor: "rgb(0, 0, 238)",
                          borderRightColor: "rgb(0, 0, 238)",
                          borderTopColor: "rgb(0, 0, 238)",
                          boxSizing: "border-box",
                          caretColor: "rgb(0, 0, 238)",
                          color: "rgb(0, 0, 238)",
                          columnRuleColor: "rgb(0, 0, 238)",
                          cursor: "pointer",
                          fontFamily: "Comfortaa, Arial",
                          fontSize: "16px",
                          lineHeight: "18.4px",
                          listStyleType: "none",
                          marginLeft: 0,
                          marginRight: 0,
                          outlineColor: "rgb(0, 0, 238)",
                          textAlign: "left",
                          textDecoration: "underline solid rgb(0, 0, 238)",
                          textDecorationColor: "rgb(0, 0, 238)",
                          textDecorationLine: "underline",
                          textEmphasisColor: "rgb(0, 0, 238)",
                          textSizeAdjust: "100%",
                          transitionDuration: "0.3s",
                          WebkitTextFillColor: "rgb(0, 0, 238)",
                          WebkitTextStrokeColor: "rgb(0, 0, 238)",
                        }}
                        href={"https://glo365.vn/"}
                        hreflang={"vi"}
                        lang={"vi"}
                      >
                        <img
                          style={{
                            blockSize: "11px",
                            borderBlockEndColor: "rgb(0, 0, 238)",
                            borderBlockStartColor: "rgb(0, 0, 238)",
                            borderBottomColor: "rgb(0, 0, 238)",
                            borderInlineEndColor: "rgb(0, 0, 238)",
                            borderInlineStartColor: "rgb(0, 0, 238)",
                            borderLeftColor: "rgb(0, 0, 238)",
                            borderRightColor: "rgb(0, 0, 238)",
                            borderTopColor: "rgb(0, 0, 238)",
                            boxSizing: "border-box",
                            caretColor: "rgb(0, 0, 238)",
                            color: "rgb(0, 0, 238)",
                            columnRuleColor: "rgb(0, 0, 238)",
                            cursor: "pointer",
                            fontFamily: "Comfortaa, Arial",
                            fontSize: "16px",
                            inlineSize: "16px",
                            lineHeight: "18.4px",
                            listStyleType: "none",
                            marginLeft: 0,
                            marginRight: 0,
                            outlineColor: "rgb(0, 0, 238)",
                            textAlign: "left",
                            textDecoration: "none solid rgb(0, 0, 238)",
                            textDecorationColor: "rgb(0, 0, 238)",
                            textEmphasisColor: "rgb(0, 0, 238)",
                            textSizeAdjust: "100%",
                            WebkitTextFillColor: "rgb(0, 0, 238)",
                            WebkitTextStrokeColor: "rgb(0, 0, 238)",
                            width: "16px",
                            height: "11px",
                          }}
                          src={
                            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAATlBMVEX+AAD2AADvAQH/eXn+cXL9amr8YmL9Wlr8UlL7TkvoAAD8d0f6Pz/3ODf2Ly/0KSf6R0f6wTv60T31IBz6+jr4+Cv3QybzEhL4bizhAADgATv8AAAAW0lEQVR4AQXBgU3DQBRAMb+7jwKVUPefkQEQTYJqByBENpKUGoZslXoN5LPONH8G9WWZ7pGlOn6XZmaGRce1J/seei4dl+7dPWDqkk7+58e3+igdlySPcYbwBG+lPhCjrtt9EgAAAABJRU5ErkJggg=="
                          }
                          alt={"Vn"}
                          width={16}
                          height={11}
                          data-lazy-src={
                            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAATlBMVEX+AAD2AADvAQH/eXn+cXL9amr8YmL9Wlr8UlL7TkvoAAD8d0f6Pz/3ODf2Ly/0KSf6R0f6wTv60T31IBz6+jr4+Cv3QybzEhL4bizhAADgATv8AAAAW0lEQVR4AQXBgU3DQBRAMb+7jwKVUPefkQEQTYJqByBENpKUGoZslXoN5LPONH8G9WWZ7pGlOn6XZmaGRce1J/seei4dl+7dPWDqkk7+58e3+igdlySPcYbwBG+lPhCjrtt9EgAAAABJRU5ErkJggg=="
                          }
                          data-ll-status={"loaded"}
                          className={"entered lazyloaded"}
                        ></img>
                        <noscript
                          style={{
                            borderBlockEndColor: "rgb(0, 0, 238)",
                            borderBlockStartColor: "rgb(0, 0, 238)",
                            borderBottomColor: "rgb(0, 0, 238)",
                            borderInlineEndColor: "rgb(0, 0, 238)",
                            borderInlineStartColor: "rgb(0, 0, 238)",
                            borderLeftColor: "rgb(0, 0, 238)",
                            borderRightColor: "rgb(0, 0, 238)",
                            borderTopColor: "rgb(0, 0, 238)",
                            boxSizing: "border-box",
                            caretColor: "rgb(0, 0, 238)",
                            color: "rgb(0, 0, 238)",
                            columnRuleColor: "rgb(0, 0, 238)",
                            cursor: "pointer",
                            fontFamily: "Comfortaa, Arial",
                            fontSize: "16px",
                            lineHeight: "18.4px",
                            listStyleType: "none",
                            marginLeft: 0,
                            marginRight: 0,
                            outlineColor: "rgb(0, 0, 238)",
                            textAlign: "left",
                            textDecoration: "none solid rgb(0, 0, 238)",
                            textDecorationColor: "rgb(0, 0, 238)",
                            textEmphasisColor: "rgb(0, 0, 238)",
                            textSizeAdjust: "100%",
                            WebkitTextFillColor: "rgb(0, 0, 238)",
                            WebkitTextStrokeColor: "rgb(0, 0, 238)",
                          }}
                        >
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAATlBMVEX+AAD2AADvAQH/eXn+cXL9amr8YmL9Wlr8UlL7TkvoAAD8d0f6Pz/3ODf2Ly/0KSf6R0f6wTv60T31IBz6+jr4+Cv3QybzEhL4bizhAADgATv8AAAAW0lEQVR4AQXBgU3DQBRAMb+7jwKVUPefkQEQTYJqByBENpKUGoZslXoN5LPONH8G9WWZ7pGlOn6XZmaGRce1J/seei4dl+7dPWDqkk7+58e3+igdlySPcYbwBG+lPhCjrtt9EgAAAABJRU5ErkJggg=="
                            alt="Vn"
                            width="16"
                            height="11"
                            style="width: 16px; height: 11px;"
                          />
                        </noscript>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
