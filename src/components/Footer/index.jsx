import React from "react";
import "./style.css";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaFacebook, FaMapMarkerAlt } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
const Footerx = () => {
  return (
    <Footer
      container
      className=" w-screen bg-cover bg-center bg-no-repeat flex flex-col bg-inherit p-0 items-end relative " 
    >
      <div
        style={{
          backgroundImage:
            "url(https://glo365.vn/wp-content/themes/ndg-quantum/imgs/footer.svg)",
          backgroundSize: "5000px",
        }}
        className=" w-full bg-cover bg-center bg-no-repeat py-10  "
      >
        <div className="w-auto pt-20"><Footer.Brand as={Link} href="/" className="text-slate-50 ml-14 mt-25">
          <img
            src="https://glo365.vn/wp-content/uploads/2020/07/Glo365-logo-2000x600.svg"
            className="mr-3 xl:h-14 sm:h-9 h-9"     
            alt="Flowbite React Logo"
          />
        </Footer.Brand>
        <div className="grid xl:grid-cols-3 mt-10  sm:grid-cols-1  gap-4 xl:ml-20  sm:ml-10 ml-10">
          {" "}
          <div className="flex flex-col items-start mr-10 left text-white sm:order-3 order-3 xl:order-1  w-3/5">
            <p className="mb-3 flex">
              {" "}
              <p><FaMapMarkerAlt/></p>31A Lý Tự Trọng, Quận 1, Thành phố Hồ Chí
              Minh
            </p>
            <p className="mb-3 flex">
              <FaMapMarkerAlt/> 63 Xuân Thuỷ, Quận 2, Thành phố Thủ Đức
            </p>
            <p className="text-left	text-white mb-3">
              Thứ Hai đến Chủ Nhật từ 09:00 đến 20:00 | Hotline 1800 6733 |
              Email: info@Glo365.vn
            </p>
            <p className="text-left	text-white mb-3">
              Glo365 là thương hiệu đã được đăng ký độc quyền bởi Empire Global
              Investments JSC (mã số doanh nghiệp: 0315524896)
            </p>
            <Footer.Copyright
              by="Flowbite™"
              href="#"
              year={2022}
              className="text-white"
            />
          </div>
          <Footer.LinkGroup className="w-auto grid grid-cols-1  text-white sm:order-1 order-1  xl:order-2 ">
            <div className=" text-white h-1/2 xl:mt-20 sm:mt-0 mr-10 text-base  grid grid-cols-3">
              <Link className="xl:mr-10 mr-0"to="/services/">
                DỊCH VỤ
              </Link>

              <Link className="xl:mr-10 mr-0" to="#">
                CỬA HÀNG
              </Link>

              <Link className="xl:mr-10 mr-0"  to="/events/">
                SỰ KIỆN
              </Link>

              <Link className="xl:mr-10 mr-0"  to="/about">
                GIỚI THIỆU
              </Link>

              <Link className="xl:mr-10 mr-0"  to="#">
                MAGAZINE
              </Link>

              <Link to="/contact">LIÊN HỆ</Link>
            </div>

            <div className="mt-10 flex">
              <Link href="#" className="ml-5 text-lg">
                <FaFacebook />
              </Link>
              <Link href="#" className="ml-5 text-lg">
                <SiYoutubemusic />
              </Link>
              <Link href="#" className="ml-5 text-lg">
                <AiFillInstagram />
              </Link>
            </div>
          </Footer.LinkGroup>
          <div className="sm:order-2 order-2  xl:order-3">
            <Footer.Brand
              as={Link}
              href="#"
              className="w-32 h-auto sm:order-3 xl:order-1"
            >
              <img
                src="https://glo365.vn/wp-content/uploads/2021/10/243941275_1234107797084432_127054125037716174_n-150x150.jpg"
                className="mr-3  w-full h-full"
                alt="Flowbite React Logo"
              />
            </Footer.Brand>
          </div>
        </div></div>
        
      </div>
    </Footer>
  );
};

export default Footerx;
