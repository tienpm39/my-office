import React from "react";
import Link from "next/link";
import { RiSearch2Line, RiMenuFill } from "react-icons/ri";

const menu = [
  { id: 1, name: "VN" },
  { id: 2, name: "VNĐ" },
  { id: 3, name: "Trợ giúp" },
  { id: 4, name: "Đăng ký" },
  { id: 5, name: "Đăng nhập" },
];

export default function Header() {
  React.useEffect(() => {
    new TypeWriter("#search", ["Text 1", "Text 2", "Text 3"], {
      writeDelay: 60,
      deleteDelay: 40,
    });
  }, []);
  return (
    <div className="header">
      <div className="header-left">
        <div className="logo">FindX</div>
        <RiSearch2Line />
        <input type="text" placeholder="Search" id="search" />
      </div>
      <div className="mobile-nav">
        <RiMenuFill />
      </div>
      <div>
        <ul className="header-right">
          {menu.map((menuItem) => (
            <li key={menuItem.id}>
              <Link href="/">
                <a>{menuItem.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
