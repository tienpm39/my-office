import React from "react";
import Image from "next/image";

export default function Feature() {
  return (
    <div className="feature__contain">
      <div className="feature__contain-box">
        <div className="feature__image">
          <Image
            src="/assets/icons/discount.svg"
            alt="discount"
            width={65}
            height={65}
          />
        </div>
        <div>
          <span>Giá luôn tốt nhất</span>
          <p>
            Chúng tôi đảm bảo khách hàng sẽ đặt được dịch vụ với giá tốt nhất,
            những chương trình khuyến mãi hấp dẫn nhất
          </p>
        </div>
      </div>
      <div className="feature__contain-box">
        <div className="feature__image">
          <Image
            src="/assets/icons/guarantee.svg"
            alt="discount"
            width={65}
            height={65}
          />
        </div>
        <div>
          <span>Dịch vụ tin cậy - Giá trị đích thực</span>
          <p>
            Đặt lợi ích khách hàng lên trên hết, chúng tôi hỗ trợ khách hàng
            nhanh và chính xác nhất với dịch vụ tin cậy, giá trị đích thực.
          </p>
        </div>
      </div>
      <div className="feature__contain-box">
        <div className="feature__image">
          <Image
            src="/assets/icons/quality.svg"
            alt="discount"
            width={65}
            height={65}
          />
        </div>
        <div>
          <span>Đảm bảo chất lượng</span>
          <p>
            Chúng tôi liên kết chặt chẽ với các đối tác, khảo sát định kỳ để đảm
            bảo chất lượng tốt nhất của dịch vụ
          </p>
        </div>
      </div>
    </div>
  );
}
