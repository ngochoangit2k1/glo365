import React from "react";
import "./style.css";
import Slider from "react-slick";
import { Route, Routes } from "react-router-dom";
import { render } from "react-dom";
import About from "../about"
import Footer from "../../components/Footer";
import Contact from "../contact";
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

export function Home() {
  const scrollToContact = () => {
    // Find the Contact section using its ID and scroll to it.
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
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
            alignItems: "center",
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
              alignItems: "center",
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
                    action="#"
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
              href="#"
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
           <div className="flex justify-center items-center   mt-40">
            <div className="mr-20 w-screen">
              <ul className="mb-5">
                <a href="/services">DICH VỤ</a>
              </ul>
              <ul  className="mb-5">
                <a href="/#">CỬA HÀNG</a>
              </ul>
              <ul  className="mb-5">
                <a href="/events/">SỰ KIỆN</a>
              </ul>
              <ul  className="mb-5">
                <a href="/about">GIỚI THIỆU</a>
              </ul>
            </div>
            <div className="w-screen">
            <ul  className="mb-5">
                <a href="/contact">LIÊN HỆ</a>
              </ul>
              <ul  className="mb-5">
                <a href="/careers/">TUYỂN DỤNG</a>
              </ul>
              <ul  className="mb-5" >
                <a href="/#">TẠP CHÍ LÀM ĐẸP</a>
              </ul>
             
            </div>
           </div>
          </div>
        </div>
      </header>

      <div
        id="panel-614-1-0-0"
        className="p-4 font-comfortaa text-base leading-5 h-96 mb-10"
      >
        <div className="h-full w-screen flex justify-center">
          <img className="xl:h-full ld:h-2/3 sm:h-2/3 xl:w-auto  ld:w-2/3 sm:w-2/3" src="https://glo365.vn/wp-content/uploads/2023/10/Home-slider-desk-780x94-PNVN-20-10.png" alt="" />
        </div>

        
      </div>

      <div
        style={{
          
          margin: 0,
          boxSizing: "border-box",
          fontFamily: "Comfortaa, Arial",
          fontSize: "16px",
          inlineSize: "1536px",
          lineHeight: "18.4px",
          textSizeAdjust: "100%",
        }}
        id={"pg-614-2"}
        className={"panel-grid panel-has-style flex justify-center"}
      >
        <div
          style={{
          
            boxSizing: "border-box",
            display: "flex",
            fontFamily: "Comfortaa, Arial",
            fontSize: "16px",
            inlineSize: "1200px",
            justifyContent: "space-between",
            lineHeight: "18.4px",
            textSizeAdjust: "100%",
            width: "1200px",
          }}
          className={
            "container slidebox panel-row-style panel-row-style-for-614-2 sm:flex-col xl:flex-row"
          }
        >
          <div
            style={{
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
            className={"panel-grid-cell mb-10"}
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
                      alignItems: "center",
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
                      className={"iw-so-media-box-text mb-10"}
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
                            className={"iw-so-media-box-btn mb-10"}
                            target={"_blank"}
                            href={
                              "/services/p-plus-laser-promo/"
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
            className={"panel-grid-cell mb-10"}
          >
            <div
              style={{
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
                "so-panel widget widget_ink-media-box panel-first-child panel-last-child mb-10"
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
                      alignItems: "center",
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
                            className={"iw-so-media-box-btn mb-10"}
                            target={"_blank"}
                            href={
                              "/services/dream-sculpt-promo"
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
            className={"panel-grid-cell mb-10"}
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
                      alignItems: "center",
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
                            className={"iw-so-media-box-btn mb-10"}
                            target={"_blank"}
                            href={"/services/face-gym-promo/"}
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
      
        }}
        id={"pg-614-5"}
        className={"panel-grid panel-has-style"}
      >
        <div
          style={{
            alignItems: "center",
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
                      alignItems: "center",
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
            alignItems: "center",
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
                      alignItems: "center",
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
                                alignItems: "center",
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
      {/* Về chúng tôi */}
      <About/>
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
            alignItems: "center",
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
                      alignItems: "center",
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

      {/* <div
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
            alignItems: "center",
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
      </div> */}

      <Contact id="contact-section"/>
      <Footer />
    </div>
  );
}
