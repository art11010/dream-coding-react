import React from 'react';

export default function Button({ text, onClick, disabled }) {
  return (
    <button
      className="w-full bg-brand py-2 px-4 text-white rounded-md hover:brightness-110"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
