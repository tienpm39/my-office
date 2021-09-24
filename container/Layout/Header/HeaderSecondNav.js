import React, { useState, useCallback} from 'react';
import Link from 'next/link';
import MegaMenu from './MegaMenu';
import useHover from '@/utils/useHover';

const menu = [
  { id: 1, name: 'Nơi bạn muốn đến', content: <MegaMenu/> },
  { id: 2, name: 'Tất cả' },
  { id: 3, name: 'Tham quan & giải trí' },
  { id: 4, name: 'Di chuyển' },
  { id: 5, name: 'Khách sạn' },
  { id: 6, name: 'Visa - Thị thực' },
  { id: 7, name: 'Sim & Wifi' },
  { id: 8, name: 'Phiếu quà tặng' },
];

const Item = ({name = '', id , onHover}) => {
  const [hoverRef, isHovered] = useHover();
   React.useEffect(() => {
     if (isHovered) {
       onHover && onHover(id);
     }
   }, [isHovered]);
  return (
    <li ref={hoverRef} className="after:w-px h-3">
      <a>{name}</a>
    </li>
  );
};

export default function HeaderSecondNav() {
  const [hoverId, setHoverId] = useState();

  const onHover = useCallback((id) => {
    setHoverId(id);
  }, []);
  const getContent = useCallback(() => {
    const current = menu.find((item) => item.id === hoverId);
    if (current) {
      return current.content;
    }

    return null;
  }, [hoverId]);
  return (
    <>
      <div className="second__nav-header">
        <ul className="second-nav">
          {menu.map((item) => (
            <Item
              key={item.id}
              {...item}
              onHover={onHover}
              hoverId={hoverId}
            />
          ))}
        </ul>
      </div>
      <div>
        {getContent()}
      </div>
    </>
  );
}
