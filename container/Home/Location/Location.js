import React from 'react';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ImageCard from '@/components/ImageCard/ImageCard';
import Loader from '@/components/Loader/Loader';

export default function LocationGrid({ data }) {
  return (
    <div className="location__contain">
      <div className="location__heading">
        <h3>Điểm đến nổi bật</h3>
        <Link href="/">
          <a>Xem tất cả</a>
        </Link>
      </div>
      <div className="carousel__contain">
        {data.length !== 0 ? (
          <Carousel
            ssr
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            containerClass="carousel-container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass="carousel-item-padding-40-px"
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 5,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 3,
              },
            }}
            // deviceType={deviceType}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
          >
            {data.map((post, index) => (
              <ImageCard
                key={index}
                imageSrc={post.locationImage.url}
                title={post.city}
                link="/"
              />
            ))}
          </Carousel>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}
