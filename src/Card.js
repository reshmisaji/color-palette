import React from 'react';
import Color from './Color';

const Card = ({ header, backgroundColor, textColor, colors }) => (
  <div className="card">
    <header className="card-header" style={{ backgroundColor, color: textColor }} title={backgroundColor}>
      {header}
    </header>
    <main className="color-container">
      {colors.map((color, index) => (
        <Color color={color} id={header + index} textColor={color !== backgroundColor ? backgroundColor : textColor} />
      ))}
    </main>
  </div>
);

export default Card;
