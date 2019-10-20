import React from 'react';

const Color = ({ color, textColor, id }) => {
  const copy = () => {
    const colorId = document.getElementById(id);
    colorId.select();
    document.execCommand('copy');
  };

  return (
    <input
      className="color"
      style={{ backgroundColor: color, color: textColor }}
      title={color}
      onClick={copy}
      id={id}
      value={color}
      readOnly
    />
  );
};

export default Color;
