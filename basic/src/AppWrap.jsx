import React from 'react';

export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar
          image="https://velog.velcdn.com/images/art11010/profile/6a4adef6-1241-4f3c-a98a-8b6c56e494a6/social.png"
          name="치히로"
          size={200}
        />
        <p>안녕하세요</p>
      </Navbar>
      <Navbar>
        <p>안녕하세요</p>
      </Navbar>
    </div>
  );
}

function Navbar({ children }) {
  return <header style={{ backgroundColor: 'coral' }}>{children}</header>;
}

function Avatar({ image, name, size }) {
  return (
    <div className="avatar">
      <img
        className="photo"
        src={image}
        alt={`${name}`}
        width={size}
        height={size}
      />
    </div>
  );
}
