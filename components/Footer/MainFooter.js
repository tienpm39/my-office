import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function MainFooter({
  logo,
  address,
  email,
  phone,
  zalo,
  license,
  payment,
  copyright,
  menu,
  menu1,
  menu2,
  menu3,
}) {
  return (
    <div className="footer">
      <div className="footer__subcribe">
        <div className="container row">
          <div className="footer__subcribe-social">
            <ul>
              <li>
                <Link href="/">
                  <a>
                    <Image
                      src="/assets/icons/facebook.svg"
                      alt="facebook__link"
                      width={20}
                      height={20}
                    />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <Image
                      src="/assets/icons/twitter.svg"
                      alt="facebook__link"
                      width={20}
                      height={20}
                    />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <Image
                      src="/assets/icons/youtube.svg"
                      alt="facebook__link"
                      width={20}
                      height={20}
                    />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <Image
                      src="/assets/icons/instagram.svg"
                      alt="facebook__link"
                      width={20}
                      height={20}
                    />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <Image
                      src="/assets/icons/zalo.svg"
                      alt="facebook__link"
                      width={20}
                      height={20}
                    />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__subcribe-content">
            <h2>????NG K?? NH???N B???N TIN</h2>
            <p>C??c deal du l???ch gi???m gi?? ?????n 60% s??? ???????c g???i ?????n b???n</p>
          </div>
          <div className="footer__subcribe-form">
            <form>
              <input type="text" placeholder="Enter email address" />
              <button>????ng k??</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer__main">
        <div className="container row2">
          <div className="footer__main-gray">
            <div className="logo">{logo}</div>
            <ul>
              <li>
                <span>?????a ch???: </span>
                {address}
              </li>
              <li>
                <Link
                  href="mailto:info@tripfinder.vn"
                  title="info@tripfinder.vn"
                >
                  <a>
                    <span>Email: </span> {email}
                  </a>
                </Link>
              </li>
              <li>
                <span>Phone: </span>
                {phone}
              </li>
              <li>
                <span>Zalo: </span> {zalo}
              </li>
              <li>{license}</li>
            </ul>
            <div className="payment">
              <ul>{payment}</ul>
            </div>
          </div>
          <div className="footer__main-link">
            <div className="quicklink">
              <div>
                <h3>V??? ch??ng t??i</h3>
                <ul>{menu}</ul>
              </div>
              <div>
                <h3>?????i t??c</h3>
                <ul>{menu1}</ul>
              </div>
              <div>
                <h3>??i???u kho???n</h3>
                <ul>{menu2}</ul>
              </div>
              <div>
                <h3>Kh??c</h3>
                <ul>{menu3}</ul>
              </div>
            </div>
            <div className="copyright">{copyright}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
