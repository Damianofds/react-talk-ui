import React from 'react';

interface IconProps {
  width?: string;
  height?: string;
  color?: string;
}

const SandClock: React.FC<IconProps> = ({ width = '24px', height = '24px', color = 'white' }) => {
  return (
    <svg fill={color} height={height} width={width} version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 32 32" xmlSpace="preserve">
      <path d="M24,25.6V22c0-0.9-0.4-1.8-1.2-2.4l-3.7-2.8c-0.3-0.2-0.4-0.5-0.4-0.8s0.1-0.6,0.4-0.8l3.7-2.8c0.8-0.6,1.2-1.5,1.2-2.4V6.4
        c1.2-0.7,2-2,2-3.4c0-0.6-0.4-1-1-1H7C6.4,2,6,2.4,6,3c0,1.5,0.8,2.7,2,3.4V10c0,0.9,0.4,1.8,1.2,2.4l3.7,2.8
        c0.3,0.2,0.4,0.5,0.4,0.8s-0.1,0.6-0.4,0.8l-3.7,2.8C8.4,20.2,8,21.1,8,22v3.6c-1.2,0.7-2,2-2,3.4c0,0.6,0.4,1,1,1h18
        c0.6,0,1-0.4,1-1C26,27.5,25.2,26.3,24,25.6z M12.4,10.8c-0.4-0.2-0.5-0.7-0.4-1.1C12.2,9.3,12.6,9,13,9h6c0.4,0,0.8,0.3,1,0.7
        c0.1,0.4,0,0.9-0.4,1.1l-3,2C16.4,12.9,16.2,13,16,13s-0.4-0.1-0.6-0.2L12.4,10.8z M15.3,20.3c0.4-0.4,1-0.4,1.4,0l4.7,4.7H10.6
        L15.3,20.3z"/>
    </svg>
  );
};

export default SandClock;
