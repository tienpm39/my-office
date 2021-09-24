import React from 'react';
import Link from 'next/link';
import data from '@/utils/data';
import TourItem from '@/components/TourItem/TourItem';

export default function Nearby() {
  return (
    <div className="nearby__contain">
      <div className="nearby__heading">
        <h3>Gần bạn</h3>
        <Link href="/">
          <a>Xem tất cả</a>
        </Link>
      </div>

      <div className="nearby__content">
        {data.tours.map((tour) => (
          <TourItem
            key={tour.name}
            thumb={tour.image}
            location={tour.location}
            name={tour.name}
            price={tour.price}
            time={tour.info.time}
            period={tour.info.period}
            transport={tour.info.transport}
            hotel={tour.info.hotel}
          />
        ))}
      </div>
      <div className="nearby__content-btn">
        <button type="button" className="load-more-btn">
          Xem tất cả
        </button>
      </div>
    </div>
  );
}
