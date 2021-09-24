import React from 'react';

export default function Loader({ fill, className }) {
  const addAllClasses = ['loader'];
  if (className) {
    addAllClasses.push(className);
  }
  return (
    <div className={addAllClasses.join(' '), "loader"}>
      <svg enableBackground="new 0 0 0 0">
        <circle fill={fill} stroke="none" cx="6" cy="50" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.1"
          />
        </circle>
        <circle fill={fill} stroke="none" cx="26" cy="50" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.2"
          />
        </circle>
        <circle fill={fill} stroke="none" cx="46" cy="50" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.3"
          />
        </circle>
      </svg>
    </div>
  );
}
