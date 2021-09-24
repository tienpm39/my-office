import React from "react";
import Image from "next/image";
import Link from "next/link";
import MainFooter from "@/components/Footer/MainFooter";

const payment = [
  {
    id: 1,
    img: <Image src="/assets/icons/payment_1.svg" width={50} height={50} />,
  },
  {
    id: 2,
    img: <Image src="/assets/icons/payment_2.svg" width={50} height={50} />,
  },
  {
    id: 3,
    img: <Image src="/assets/icons/payment_3.svg" width={50} height={50} />,
  },
  {
    id: 4,
    img: <Image src="/assets/icons/payment_4.svg" width={50} height={50} />,
  },
  {
    id: 5,
    img: <Image src="/assets/icons/payment_5.svg" width={50} height={50} />,
  },
];

const menu = [
  { id: 1, name: "Giới thiệu" },
  { id: 2, name: "Blog" },
  { id: 3, name: "Cơ hội nghề nghiệp" },
  { id: 4, name: "Phiếu quà tặng" },
];

const menu1 = [
  { id: 1, name: "Cung ứng cho TripX" },
  { id: 2, name: "Đối tác đăng nhập" },
  { id: 3, name: "Đối tác liên kết" },
  { id: 4, name: "Chương trình dành cho đại lý" },
  { id: 5, name: "Chương trình dành cho CTV" },
];

const menu2 = [
  { id: 1, name: "Hướng dẫn thanh toán" },
  { id: 2, name: "Quy định sử dụng" },
  { id: 3, name: "Chính sách bảo mật" },
  { id: 4, name: "Trung tâm trợ giúp" },
];

const menu3 = [
  { id: 1, name: "Tải ứng dụng" },
  { id: 2, name: "Viết tùy bút" },
  { id: 3, name: "Tích điểm đổi quà" },
  { id: 4, name: "Affiliate kiếm tiền cùng TripX" },
];
export default function Footer() {
  return (
    <MainFooter
      logo={`FindX`}
      address="120 Trần Quốc Tuấn, P.1, Gò Vấp, Tp. HCM"
      email="info@tripfinder.vn"
      phone="0988 2868 39"
      zalo="0988 2868 39"
      license="Giấy phép kinh doanh số 0315136043 do sở KH&ĐT TP HCM cấp ngày 28/06/2018."
      copyright="© Bản quyền thuộc về Adora Tour | Top 10 đơn vị lữ hành Uy tín hàng đầu Việt Nam"
      payment={payment.map((item) => (
        <li key={item.id}>
          <Link href="/">
            <a>{item.img}</a>
          </Link>
        </li>
      ))}
      menu={menu.map((item) => (
        <li key={item.id}>
          <Link href="/">
            <a>{item.name}</a>
          </Link>
        </li>
      ))}
      menu1={menu1.map((item) => (
        <li key={item.id}>
          <Link href="/">
            <a>{item.name}</a>
          </Link>
        </li>
      ))}
      menu2={menu2.map((item) => (
        <li key={item.id}>
          <Link href="/">
            <a>{item.name}</a>
          </Link>
        </li>
      ))}
      menu3={menu3.map((item) => (
        <li key={item.id}>
          <Link href="/">
            <a>{item.name}</a>
          </Link>
        </li>
      ))}
    ></MainFooter>
  );
}
