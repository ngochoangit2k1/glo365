import React from "react";
import "./style.css";
import { Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
const Header = () => {
  return (
    <>
      <div className=" xl:h-10 sm:h-0 h-0 "></div>
      <div className="w-screen  flex justify-center items-center">
        <Navbar
          style={{
            boxShadow: "0 3px 30px rgba(255,103,152,.31)",
          }}
          className=" h-auto xl:rounded-full  xl:w-5/6 sm:w-full w-full sm:rounded-none nowrap"
        >
          <div className="  50  flex">
            <Navbar.Brand as={Link} to="/">
              <img
                src="https://glo365.vn/wp-content/uploads/2020/07/Glo365-logo-2000x600.svg"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite React Logo"
              />
            </Navbar.Brand>
            <TextInput
              icon={AiOutlineSearch}
              id="disabledInput2"
              placeholder="Search ..."
              type="text"
              className=" w-7/12"
            />
          </div>

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar className="xl:px-0 md:px-0">
              <Link to="/services">DỊCH VỤ</Link>
            </Navbar>
            <Navbar className="xl:px-0 md:px-0">
              <Link to="#">CỬA HÀNG</Link>
            </Navbar>

            <Navbar className="xl:px-0 md:px-0">
              <Link to="/events">SỰ KIỆN</Link>
            </Navbar>

            <Navbar className="xl:px-0 md:px-0">
              <Link to="/about">GIỚI THIỆU</Link>
            </Navbar>

            <Navbar className="xl:px-0 md:px-0">
              <Link to="#">MAGAZINE</Link>
            </Navbar>

            <Navbar className="xl:px-0 md:px-0">
              <Link to="/contact">LIÊN HỆ</Link>
            </Navbar>

            <div>
              <Navbar className="xl:px-0 ">
                <div className="flex"><Link href="#" className="ml-5 text-lg">
                  <FaFacebook />
                </Link>
                <Link href="#" className="ml-5 text-lg">
                  <SiYoutubemusic />
                </Link>
                <Link href="#" className="ml-5 text-lg">
                  <AiFillInstagram />
                </Link></div>
                
              </Navbar>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
