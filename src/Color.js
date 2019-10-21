import React, { useState } from 'react';

const Color = ({ color, textColor, id }) => {
  const [title, setTitle] = useState({ title: color });
  const copy = () => {
    const colorId = document.getElementById(id);
    colorId.select();
    document.execCommand('copy');
    setTitle({ title: 'Color copied' });
    setTimeout(function() {
      setTitle({ title: color });
    }, 500);
  };

  return (
    <span data-title={title.title}>
      <input
        className="color"
        style={{ backgroundColor: color, color: textColor }}
        onClick={copy}
        id={id}
        value={color}
        readOnly
      />
    </span>
  );
};

export default Color;
