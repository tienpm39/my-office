import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ImageCard({ className, imageSrc, title, link }) {
  const addAllClasses = ['image-card'];
  const pathLink = title.replace(/\s/g, '-');

  if (className) {
    addAllClasses.push(className);
  }
  return (
    <div className={addAllClasses.join(' ')}>
      <Link
        href={{
          pathname: `${link}`,
          query: { country: `${pathLink}` },
        }}
      >
        <a className="image__card-link">
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="image__card-img"
          />
          <div className="image__card-content">
            {title && <div className="image__card-title">{title}</div>}
          </div>
        </a>
      </Link>
    </div>
  );
}
