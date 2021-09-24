import React, { useState, useEffect, useCallback } from 'react';
import useHover from '@/utils/useHover';
import PlaceItem from '@/components/PlaceItem/PlaceItem';

const menu = [
  { id: 1, name: 'ĐIỂM ĐẾN HÀNG ĐẦU', url: '/destinations' },
  { id: 2, name: 'Đông Á', city: 'Tokyo,Seoul', url: '/dong-a' },
  { id: 3, name: 'Đông Nam Á', city: 'Singapore,Bangkok', url: '/dong-nam-a' },
  { id: 4, name: 'Nam Á / Trung Đông', city: 'Dubai,Maldives', url: '/nam-a' },
  {
    id: 5,
    name: 'Châu Đại Dương / Châu Phi',
    city: 'Sydney,Melbourne',
    url: '/chau-dai-duong',
  },
  { id: 6, name: 'Châu Âu', city: 'Venice,Paris', url: '/chau-au' },
  { id: 7, name: 'Bắc Mỹ', city: 'Los Angles,New york', url: '/bac-my' },
];

const places = [
  {
    id: 1,
    url: 'https://cdn.pixabay.com/photo/2021/08/04/03/06/hanoi-6520941_960_720.jpg',
    title: 'Hà Nội',
  },
  {
    id: 2,
    url: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_960_720.jpg',
    title: 'Phú Quốc',
  },
  {
    id: 3,
    url: 'https://cdn.pixabay.com/photo/2017/12/14/02/23/lake-3018125_960_720.jpg',
    title: 'Đà Lạt',
  },
  {
    id: 4,
    url: 'https://cdn.pixabay.com/photo/2017/06/19/14/12/cathedral-2419454_960_720.jpg',
    title: 'TP. Hồ Chí Minh',
  },
  {
    id: 5,
    url: 'https://cdn.pixabay.com/photo/2020/03/09/14/54/seychelles-4916045_960_720.jpg',
    title: 'Hạ Long',
  },
];

const MenuItem = ({ name = '', city = '', id, onHover, hoverId }) => {
  const [hoverRef, isHovered] = useHover();

  useEffect(() => {
    if (isHovered) {
      onHover && onHover(id);
    }
  }, [isHovered]);

  return (
    <li ref={hoverRef} className={hoverId === id ? 'active' : ''}>
      <a>{name}</a>
      <div className="recommend_cities">
        {city.split(',').map((i) => (
          <p key={i}>{i}</p>
        ))}
      </div>
    </li>
  );
};

export default function MegaMenu() {
  
  const [hoverId, setHoverId] = useState(menu[0].id);

  const onHover = useCallback((id) => {
    setHoverId(id);
  }, []);

  const getContent = useCallback(() => {
    const current = menu.find((item) => item.id === hoverId);
    if (current) {
      return current.url;
    }

    return null;
  }, [hoverId]);

  return (
    <div className="mega-menu ">
      <ul>
        {menu.map((item) => (
          <MenuItem
            key={item.id}
            {...item}
            onHover={onHover}
            hoverId={hoverId}
          />
        ))}
      </ul>
      <div className="content">{getContent()}</div>
    </div>
  );
}

