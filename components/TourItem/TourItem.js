import React from 'react';
import Image from 'next/image';
import { IoHeartOutline, IoHeart, IoLocationSharp } from 'react-icons/io5';

export default function TourItem({
  name,
  thumb,
  transport,
  hotel,
  price,
  time,
  period,
  location,
}) {
  return (
    <div className="tour__item">
      <div className="tour__item-thumb">
        <Image src={thumb} layout="fill" objectFit="cover" className="image" />
        <button className="tour__favorite-btn">
          <IoHeartOutline className="tour__favorite-icon" />
        </button>
        <div className="tour__item-location">
          <IoLocationSharp /> <span>{location}</span>
        </div>
      </div>
      <div className="tour__item-content">
        <h3>{name}</h3>
        <div>
          <ul className="my-1">
            <li className="tour__item-list">
              <img src="assets/icons/tag_icon_4.svg" /> Thời gian:
              <span className="tour__item-info"> {time}</span>
            </li>
            <li className="tour__item-list">
              <img src="assets/icons/tag_icon_5.svg" /> Khởi hành:
              <span className="tour__item-info"> {period}</span>
            </li>
            <li className="tour__item-list">
              <img src="assets/icons/tag_icon_3.svg" /> Phương tiện:
              <span className="tour__item-info"> {transport}</span>
            </li>
            <li className="tour__item-list">
              <img src="assets/icons/hotel.svg" /> Khách sạn:
              <span className="tour__item-info"> {hotel}</span>
            </li>
          </ul>
        </div>
        <div className="tour__item-footer">
          <h2>{price}</h2>
          <button>Đặt tour</button>
        </div>
      </div>
    </div>
  );
}

{
  /* <div key={tour.name} className="nearby__content-item">
            <div className="nearby__content-image">
              <Image
                src={tour.image}
                layout="fill"
                alt="tour-image"
                objectFit="cover"
                className="image"
              />
            </div>
            <div>
              <h3>{tour.name}</h3>
              <div>{tour.info.transport}</div>
              <div>{tour.info.time}</div>
              <div>{tour.info.period}</div>
              <div>{tour.info.hotel}</div>
              <h2 className="nearby__content-price">{tour.price}</h2>
              <button>Đặt tour</button>
            </div>
          </div> */
}
