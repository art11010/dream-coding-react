import { useState } from 'react';
import './App.css';

export default function AppXY() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      className="pointer_wrap"
      onMouseMove={(e) => {
        // setPosition({ x: e.clientX, y: e.clientY });
        // 객체 중 하나의 값만 바꾸기
        setPosition((prev) => ({ ...prev, x: e.clientX }));
      }}
    >
      <div
        className="pointer"
        style={{ transform: `translate(${position.x}px,${position.y}px)` }}
      ></div>
    </div>
  );
}
