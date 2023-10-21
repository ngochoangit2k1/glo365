import React from "react";
import "./style.css";
 const scrollToContact = () => {
    // Find the Contact section using its ID and scroll to it.
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
const Header = () => {
 
  return (
    <div className="w-screen flex justify-center h-auto">
      <div
      className="my-10"
        style={{
          alignItems: "center",
          backgroundClip: "padding-box",
          backgroundColor: "rgb(255, 249, 248)",
          backgroundRepeat: "no-repeat",
          blockSize: 70,
          borderBottomLeftRadius: 35,
          borderBottomRightRadius: 35,
          borderEndEndRadius: 35,
          borderEndStartRadius: 35,
          borderStartEndRadius: 35,
          borderStartStartRadius: 35,
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
          boxShadow: "rgba(255, 103, 152, 0.31) 0px 3px 30px 0px",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
          fontFamily: "Comfortaa, Arial",
          fontSize: 16,
          inlineSize: 1200,
          justifyContent: "space-between",
          lineHeight: "18.4px",
          perspectiveOrigin: "600px 35px",
          textSizeAdjust: "100%",
          WebkitBoxAlign: "center",
          WebkitBoxPack: "justify",
          WebkitLocale: "vi",
          width: 1200,
        }}
        cl
      >
        <div
          style={{
            blockSize: 70,
            borderBottomLeftRadius: 35,
            borderEndStartRadius: 35,
            borderStartStartRadius: 35,
            borderTopLeftRadius: 35,
            boxSizing: "border-box",
            fontFamily: "Comfortaa, Arial",
            fontSize: 16,
            inlineSize: 148,
            lineHeight: "18.4px",
            marginLeft: 0,
            marginRight: 0,
            minBlockSize: "auto",
            minHeight: "auto",
            minInlineSize: "auto",
            minWidth: "auto",
            overflowX: "hidden",
            overflowY: "hidden",
            perspectiveOrigin: "74px 35px",
            textSizeAdjust: "100%",
            transformOrigin: "74px 35px",
            WebkitLocale: "vi",
          }}
          className="logo-wrapper"
        >
          <div
            style={{
              alignItems: "center",
              backgroundImage:
                "url(https://glo365.vn/wp-content/themes/ndg-quantum/imgs/bg/bubble02.svg)",
              backgroundPosition: "100% 50%",
              backgroundRepeat: "no-repeat",
              backgroundSize: 500,
              blockSize: 70,
              boxSizing: "border-box",
              display: "flex",
              fontFamily: "Comfortaa, Arial",
              fontSize: 16,
              inlineSize: 148,
              justifyContent: "center",
              lineHeight: "18.4px",
              marginLeft: 0,
              marginRight: 0,
              paddingBlockStart: 10,
              paddingInlineEnd: 30,
              paddingRight: 30,
              paddingTop: 10,
              perspectiveOrigin: "74px 35px",
              textSizeAdjust: "100%",
              transformOrigin: "74px 35px",
              WebkitBoxAlign: "center",
              WebkitBoxPack: "center",
              WebkitLocale: "vi",
              width: 148,
              height: 70,
            }}
            className="logo"
          >
            <a
              style={{
                blockSize: 28,
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
                inlineSize: 80,
                lineHeight: "18.4px",
                marginLeft: 0,
                marginRight: 0,
                minBlockSize: "auto",
                minHeight: "auto",
                minInlineSize: "auto",
                minWidth: "auto",
                outlineColor: "rgb(0, 0, 238)",
                perspectiveOrigin: "40px 14px",
                textDecoration: "underline solid rgb(0, 0, 238)",
                textDecorationColor: "rgb(0, 0, 238)",
                textDecorationLine: "underline",
                textEmphasisColor: "rgb(0, 0, 238)",
                textSizeAdjust: "100%",
                transformOrigin: "40px 14px",
                transitionDuration: "0.3s",
                WebkitLocale: "vi",
                WebkitTextDecorationsInEffect: "underline",
                WebkitTextFillColor: "rgb(0, 0, 238)",
                WebkitTextStrokeColor: "rgb(0, 0, 238)",
              }}
              href="/"
              className="custom-logo-link"
              rel="home"
              aria-current="page"
            >
              <img
                style={{
                  blockSize: 24,
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
                  inlineSize: 80,
                  lineHeight: "18.4px",
                  marginLeft: 0,
                  marginRight: 0,
                  outlineColor: "rgb(0, 0, 238)",
                  perspectiveOrigin: "40px 12px",
                  textDecoration: "none solid rgb(0, 0, 238)",
                  textDecorationColor: "rgb(0, 0, 238)",
                  textEmphasisColor: "rgb(0, 0, 238)",
                  textSizeAdjust: "100%",
                  transformOrigin: "40px 12px",
                  WebkitLocale: "vi",
                  WebkitTextDecorationsInEffect: "underline",
                  WebkitTextFillColor: "rgb(0, 0, 238)",
                  WebkitTextStrokeColor: "rgb(0, 0, 238)",
                  width: 80,
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
        </div>
        <div
          style={{
            blockSize: "41.8px",
            bottom: 0,
            boxSizing: "border-box",
            fontFamily: "Comfortaa, Arial",
            fontSize: 16,
            inlineSize: 100,
            insetBlockEnd: 0,
            insetBlockStart: 0,
            insetInlineEnd: 0,
            insetInlineStart: 0,
            left: 0,
            lineHeight: "18.4px",
            marginLeft: 0,
            marginRight: 0,
            minBlockSize: "auto",
            minHeight: "auto",
            minInlineSize: "auto",
            minWidth: "auto",
            perspectiveOrigin: "50px 20.9px",
            position: "relative",
            right: 0,
            textSizeAdjust: "100%",
            top: 0,
            transformOrigin: "50px 20.9px",
            WebkitLocale: "vi",
            width: 100,
          }}
          className="search_block"
        >
          <div
            style={{
              blockSize: "41.8px",
              bottom: 0,
              boxSizing: "border-box",
              fontFamily: "Comfortaa, Arial",
              fontSize: 16,
              inlineSize: 100,
              insetBlockEnd: 0,
              insetBlockStart: 0,
              insetInlineEnd: 0,
              insetInlineStart: 0,
              left: 0,
              lineHeight: "18.4px",
              listStyleType: "none",
              marginLeft: 0,
              marginRight: 0,
              perspectiveOrigin: "50px 20.9px",
              position: "relative",
              right: 0,
              textSizeAdjust: "100%",
              top: 0,
              transformOrigin: "50px 20.9px",
              WebkitLocale: "vi",
            }}
            id="search-live-1503645996"
            className="search-live floating"
          >
            <div
              style={{
                blockSize: "41.8px",
                bottom: 0,
                boxSizing: "border-box",
                fontFamily: "Comfortaa, Arial",
                fontSize: 16,
                inlineSize: 100,
                insetBlockEnd: 0,
                insetBlockStart: 0,
                insetInlineEnd: 0,
                insetInlineStart: 0,
                left: 0,
                lineHeight: "18.4px",
                listStyleType: "none",
                marginLeft: 0,
                marginRight: 0,
                perspectiveOrigin: "50px 20.9px",
                position: "relative",
                right: 0,
                textSizeAdjust: "100%",
                top: 0,
                transformOrigin: "50px 20.9px",
                WebkitLocale: "vi",
              }}
              className="search-live-form"
            >
              <form
                style={{
                  blockSize: "41.8px",
                  bottom: 0,
                  boxSizing: "border-box",
                  display: "flex",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: 16,
                  inlineSize: 100,
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
                  perspectiveOrigin: "50px 20.9px",
                  position: "relative",
                  right: 0,
                  textSizeAdjust: "100%",
                  top: 0,
                  transformOrigin: "50px 20.9px",
                  WebkitLocale: "vi",
                }}
                role="search"
                id="search-live-form-1503645996"
                className="search-live-form"
                action="#"
                method="get"
              >
                <input
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    backgroundImage:
                      "url(https://glo365.vn/wp-content/themes/ndg-quantum/imgs/magnifying-glass-2.svg)",
                    backgroundPosition: "0% 50%",
                    backgroundRepeat: "no-repeat",
                    blockSize: "41.8px",
                    borderBlockEndColor: "rgb(255, 255, 255)",
                    borderBlockEndStyle: "solid",
                    borderBlockEndWidth: "0.8px",
                    borderBlockStartColor: "rgb(0, 0, 0)",
                    borderBlockStartStyle: "none",
                    borderBlockStartWidth: 0,
                    borderBottomColor: "rgb(255, 255, 255)",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.8px",
                    borderInlineEndColor: "rgb(0, 0, 0)",
                    borderInlineEndStyle: "none",
                    borderInlineEndWidth: 0,
                    borderInlineStartColor: "rgb(0, 0, 0)",
                    borderInlineStartStyle: "none",
                    borderInlineStartWidth: 0,
                    borderLeftColor: "rgb(0, 0, 0)",
                    borderLeftStyle: "none",
                    borderLeftWidth: 0,
                    borderRightColor: "rgb(0, 0, 0)",
                    borderRightStyle: "none",
                    borderRightWidth: 0,
                    borderTopColor: "rgb(0, 0, 0)",
                    borderTopStyle: "none",
                    borderTopWidth: 0,
                    boxSizing: "border-box",
                    fontFamily: "sans-serif",
                    fontSize: 12,
                    inlineSize: 100,
                    lineHeight: 16,
                    listStyleType: "none",
                    marginLeft: 0,
                    marginRight: 0,
                    minBlockSize: "auto",
                    minHeight: "auto",
                    minInlineSize: "auto",
                    minWidth: "auto",
                    paddingBlockEnd: "12.5px",
                    paddingBlockStart: "12.5px",
                    paddingBottom: "12.5px",
                    paddingInlineEnd: 0,
                    paddingInlineStart: 25,
                    paddingLeft: 25,
                    paddingRight: 0,
                    paddingTop: "12.5px",
                    perspectiveOrigin: "50px 20.9px",
                    textSizeAdjust: "100%",
                    textTransform: "uppercase",
                    transformOrigin: "50px 20.9px",
                    transitionDuration: "1s",
                    WebkitLocale: "vi",
                    width: "100%",
                  }}
                  id="search-live-field-1503645996"
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
                insetBlockStart: "41.8px",
                insetInlineEnd: 100,
                insetInlineStart: 0,
                left: 0,
                lineHeight: "18.4px",
                listStyleType: "none",
                marginLeft: 0,
                marginRight: 0,
                perspectiveOrigin: "0px 5px",
                position: "absolute",
                right: 100,
                textSizeAdjust: "100%",
                top: "41.8px",
                transformOrigin: "0px 5px",
                zIndex: 10,
                WebkitLocale: "vi",
                width: 0,
              }}
              id="search-live-results-1503645996"
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
                id="search-live-results-content-1503645996"
                className="search-live-results-content"
              />
            </div>
          </div>{" "}
        </div>
        <div
          style={{
            blockSize: 70,
            boxSizing: "border-box",
            fontFamily: "Comfortaa, Arial",
            fontSize: 16,
            inlineSize: "381.587px",
            lineHeight: "18.4px",
            marginLeft: 0,
            marginRight: 0,
            minBlockSize: "auto",
            minHeight: "auto",
            minInlineSize: "auto",
            minWidth: "auto",
            perspectiveOrigin: "190.788px 35px",
            textSizeAdjust: "100%",
            transformOrigin: "190.794px 35px",
            WebkitLocale: "vi",
          }}
          className="inside-nav"
        >
          <div
            style={{
              blockSize: 70,
              boxSizing: "border-box",
              fontFamily: "Comfortaa, Arial",
              fontSize: 16,
              inlineSize: "381.587px",
              lineHeight: "18.4px",
              marginLeft: 0,
              marginRight: 0,
              perspectiveOrigin: "190.788px 35px",
              textSizeAdjust: "100%",
              transformOrigin: "190.794px 35px",
              WebkitLocale: "vi",
            }}
            className="menu-inside-header-menu-vi-container"
          >
            <ul
              style={{
                alignItems: "center",
                blockSize: 70,
                boxSizing: "border-box",
                display: "flex",
                fontFamily: "Comfortaa, Arial",
                fontSize: 16,
                inlineSize: "381.587px",
                lineHeight: "18.4px",
                marginBlockEnd: 0,
                marginBlockStart: 0,
                marginBottom: 0,
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0,
                paddingInlineStart: 0,
                paddingLeft: 0,
                perspectiveOrigin: "190.788px 35px",
                textSizeAdjust: "100%",
                transformOrigin: "190.794px 35px",
                WebkitBoxAlign: "center",
                WebkitLocale: "vi",
                height: 70,
              }}
              id="menu-inside-header-menu-vi"
              className="insidepage-top-menu"
            >
              <li
                style={{
                  blockSize: "18.4px",
                  boxSizing: "border-box",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: 16,
                  inlineSize: "59.65px",
                  lineHeight: "18.4px",
                  listStyleType: "none",
                  marginLeft: 0,
                  marginRight: 0,
                  minBlockSize: "auto",
                  minHeight: "auto",
                  minInlineSize: "auto",
                  minWidth: "auto",
                  paddingInlineEnd: 7,
                  paddingInlineStart: 7,
                  paddingLeft: 7,
                  paddingRight: 7,
                  perspectiveOrigin: "29.825px 9.2px",
                  textSizeAdjust: "100%",
                  transformOrigin: "29.825px 9.2px",
                  WebkitLocale: "vi",
                }}
                id="menu-item-640"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-640"
              >
                <a
                  style={{
                    boxSizing: "border-box",
                    cursor: "pointer",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: 10,
                    fontWeight: 700,
                    lineHeight: "11.5px",
                    listStyleType: "none",
                    marginLeft: 0,
                    marginRight: 0,
                    perspectiveOrigin: "0px 0px",
                    textAlign: "left",
                    textDecoration: "none",
                    textSizeAdjust: "100%",
                    textTransform: "uppercase",
                    transformOrigin: "0px 0px",
                    transitionDuration: "0.3s",
                    WebkitLocale: "vi",
                  }}
                  href="/services/"
                >
                  DỊCH VỤ
                </a>
              </li>
              <li
                style={{
                  blockSize: "18.4px",
                  boxSizing: "border-box",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: 16,
                  inlineSize: "71.7125px",
                  lineHeight: "18.4px",
                  listStyleType: "none",
                  marginLeft: 0,
                  marginRight: 0,
                  minBlockSize: "auto",
                  minHeight: "auto",
                  minInlineSize: "auto",
                  minWidth: "auto",
                  paddingInlineEnd: 7,
                  paddingInlineStart: 7,
                  paddingLeft: 7,
                  paddingRight: 7,
                  perspectiveOrigin: "35.85px 9.2px",
                  textSizeAdjust: "100%",
                  transformOrigin: "35.8563px 9.2px",
                  WebkitLocale: "vi",
                }}
                id="menu-item-645"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-645"
              >
                <a
                  style={{
                    boxSizing: "border-box",
                    cursor: "pointer",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: 10,
                    fontWeight: 700,
                    lineHeight: "11.5px",
                    listStyleType: "none",
                    marginLeft: 0,
                    marginRight: 0,
                    perspectiveOrigin: "0px 0px",
                    textAlign: "left",
                    textDecoration: "none",
                    textSizeAdjust: "100%",
                    textTransform: "uppercase",
                    transformOrigin: "0px 0px",
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
                  blockSize: "18.4px",
                  boxSizing: "border-box",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: 16,
                  inlineSize: "56.875px",
                  lineHeight: "18.4px",
                  listStyleType: "none",
                  marginLeft: 0,
                  marginRight: 0,
                  minBlockSize: "auto",
                  minHeight: "auto",
                  minInlineSize: "auto",
                  minWidth: "auto",
                  paddingInlineEnd: 7,
                  paddingInlineStart: 7,
                  paddingLeft: 7,
                  paddingRight: 7,
                  perspectiveOrigin: "28.4375px 9.2px",
                  textSizeAdjust: "100%",
                  transformOrigin: "28.4375px 9.2px",
                  WebkitLocale: "vi",
                }}
                id="menu-item-641"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-641"
              >
                <a
                  style={{
                    boxSizing: "border-box",
                    cursor: "pointer",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: 10,
                    fontWeight: 700,
                    lineHeight: "11.5px",
                    listStyleType: "none",
                    marginLeft: 0,
                    marginRight: 0,
                    perspectiveOrigin: "0px 0px",
                    textAlign: "left",
                    textDecoration: "none",
                    textSizeAdjust: "100%",
                    textTransform: "uppercase",
                    transformOrigin: "0px 0px",
                    transitionDuration: "0.3s",
                    WebkitLocale: "vi",
                  }}
                  href="/events/"
                >
                  SỰ KIỆN
                </a>
              </li>
              <li
                style={{
                  blockSize: "18.4px",
                  boxSizing: "border-box",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: 16,
                  inlineSize: "73.225px",
                  lineHeight: "18.4px",
                  listStyleType: "none",
                  marginLeft: 0,
                  marginRight: 0,
                  minBlockSize: "auto",
                  minHeight: "auto",
                  minInlineSize: "auto",
                  minWidth: "auto",
                  paddingInlineEnd: 7,
                  paddingInlineStart: 7,
                  paddingLeft: 7,
                  paddingRight: 7,
                  perspectiveOrigin: "36.6125px 9.2px",
                  textSizeAdjust: "100%",
                  transformOrigin: "36.6125px 9.2px",
                  WebkitLocale: "vi",
                }}
                id="menu-item-643"
                className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-643"
              >
                <a
                  style={{
                    boxSizing: "border-box",
                    cursor: "pointer",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: 10,
                    fontWeight: 700,
                    lineHeight: "11.5px",
                    listStyleType: "none",
                    marginLeft: 0,
                    marginRight: 0,
                    perspectiveOrigin: "0px 0px",
                    textAlign: "left",
                    textDecoration: "none",
                    textSizeAdjust: "100%",
                    textTransform: "uppercase",
                    transformOrigin: "0px 0px",
                    transitionDuration: "0.3s",
                    WebkitLocale: "vi",
                  }}
                  href="/about"
                  aria-current="page"
                >
                  GIỚI THIỆU
                </a>
              </li>
              <li
                style={{
                  blockSize: "18.4px",
                  boxSizing: "border-box",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: 16,
                  inlineSize: "63.55px",
                  lineHeight: "18.4px",
                  listStyleType: "none",
                  marginLeft: 0,
                  marginRight: 0,
                  minBlockSize: "auto",
                  minHeight: "auto",
                  minInlineSize: "auto",
                  minWidth: "auto",
                  paddingInlineEnd: 7,
                  paddingRight: 7,
                  perspectiveOrigin: "31.775px 9.2px",
                  textSizeAdjust: "100%",
                  transformOrigin: "31.775px 9.2px",
                  WebkitLocale: "vi",
                }}
                id="menu-item-644"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-644"
              >
                <a
                  style={{
                    boxSizing: "border-box",
                    cursor: "pointer",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: 10,
                    lineHeight: "11.5px",
                    listStyleType: "none",
                    marginLeft: 0,
                    marginRight: 0,
                    perspectiveOrigin: "0px 0px",
                    textAlign: "left",
                    textDecoration: "none",
                    textSizeAdjust: "100%",
                    textTransform: "uppercase",
                    transformOrigin: "0px 0px",
                    transitionDuration: "0.3s",
                    WebkitLocale: "vi",
                  }}
                  href="https://shop.glo365.vn/blog/"
                >
                  MAGAZINE
                </a>
              </li>
              <li
                style={{
                  blockSize: "18.4px",
                  boxSizing: "border-box",
                  fontFamily: "Comfortaa, Arial",
                  fontSize: 16,
                  inlineSize: "56.575px",
                  lineHeight: "18.4px",
                  listStyleType: "none",
                  marginLeft: 0,
                  marginRight: 0,
                  minBlockSize: "auto",
                  minHeight: "auto",
                  minInlineSize: "auto",
                  minWidth: "auto",
                  paddingInlineEnd: 7,
                  paddingInlineStart: 7,
                  paddingLeft: 7,
                  paddingRight: 7,
                  perspectiveOrigin: "28.2875px 9.2px",
                  textSizeAdjust: "100%",
                  transformOrigin: "28.2875px 9.2px",
                  WebkitLocale: "vi",
                }}
                id="menu-item-647"
                className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-647"
              >
                <a
                  style={{
                    boxSizing: "border-box",
                    cursor: "pointer",
                    fontFamily: "Comfortaa, Arial",
                    fontSize: 10,
                    lineHeight: "11.5px",
                    listStyleType: "none",
                    marginLeft: 0,
                    marginRight: 0,
                    perspectiveOrigin: "0px 0px",
                    textAlign: "left",
                    textDecoration: "none",
                    textSizeAdjust: "100%",
                    textTransform: "uppercase",
                    transformOrigin: "0px 0px",
                    transitionDuration: "0.3s",
                    WebkitLocale: "vi",
                  }}
                  href="/contact"
                  aria-current="page"
                  onClick={scrollToContact}
                >
                  LIÊN HỆ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            blockSize: 20,
            bottom: 0,
            boxSizing: "border-box",
            fontFamily: "Comfortaa, Arial",
            fontSize: 16,
            inlineSize: "33.675px",
            insetBlockEnd: 0,
            insetBlockStart: 0,
            insetInlineEnd: 0,
            insetInlineStart: 0,
            left: 0,
            lineHeight: "18.4px",
            marginLeft: 0,
            marginRight: 0,
            minBlockSize: "auto",
            minHeight: "auto",
            minInlineSize: "auto",
            minWidth: "auto",
            perspectiveOrigin: "16.8375px 10px",
            position: "relative",
            right: 0,
            textSizeAdjust: "100%",
            top: 0,
            transformOrigin: "16.8375px 10px",
            WebkitLocale: "vi",
          }}
          className="ndg-select"
        >
          <div
            style={{
              alignItems: "center",
              blockSize: 20,
              boxSizing: "border-box",
              cursor: "pointer",
              display: "flex",
              fontFamily: "Comfortaa, Arial",
              fontSize: 10,
              inlineSize: "33.675px",
              lineHeight: 17,
              marginLeft: 0,
              marginRight: 0,
              perspectiveOrigin: "16.8375px 10px",
              textSizeAdjust: "100%",
              transformOrigin: "16.8375px 10px",
              WebkitBoxAlign: "center",
              WebkitLocale: "vi",
              height: 20,
            }}
            className="currrent-select-value"
          >
            EN
          </div>
        </div>
        <div
          style={{
            blockSize: 20,
            boxSizing: "border-box",
            display: "flex",
            fontFamily: "Comfortaa, Arial",
            fontSize: 16,
            inlineSize: 93,
            lineHeight: "18.4px",
            marginLeft: 0,
            marginRight: 0,
            minBlockSize: "auto",
            minHeight: "auto",
            minInlineSize: "auto",
            minWidth: "auto",
            perspectiveOrigin: "46.5px 10px",
            textSizeAdjust: "100%",
            transformOrigin: "46.5px 10px",
            WebkitLocale: "vi",
          }}
          className="ndg-social"
        >
          <a
            style={{
              backgroundImage:
                "url(https://glo365.vn/wp-content/themes/ndg-quantum/imgs/social/youtube-b.svg)",
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
                "url(https://glo365.vn/wp-content/themes/ndg-quantum/imgs/social/instagram-b.svg)",
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
                "url(https://glo365.vn/wp-content/themes/ndg-quantum/imgs/social/facebook-b.svg)",
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
              marginInlineEnd: 17,
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
      </div>
    </div>
  );
};

export default Header;
