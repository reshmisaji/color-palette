import React from 'react';
import Card from './Card';

const Palette = () => (
  <div className="palette">
    <Card
      header="Whatsapp"
      backgroundColor="#285c54"
      textColor="#ffffff"
      colors={['#285c54', '#59bba6', '#8ed4c8', '#b3dad8', '#d5e8e9', '#ffffff']}
    />
    <Card
      header="Facebook"
      backgroundColor="#405993"
      textColor="#ffffff"
      colors={['#405993', '#6b9554', '#9fb0cd', '#91949b', '#999999', '#ebedf0', '#ffffff']}
    />
    <Card
      header="Instagram"
      backgroundColor="#7248ae"
      textColor="#ffffff"
      colors={['#7248ae', '#a1409b', '#a24389', '#dd724e', '#c5dae7', '#f9f9f9', '#ffffff']}
    />
    <Card
      header="Twitter"
      backgroundColor="#4495da"
      textColor="#ffffff"
      colors={['#4495da', '#4aa1ea', '#a3ccf0', '#6c7a87', '#bac4cc', '#ffffff']}
    />
    <Card
      header="LinkedIn"
      backgroundColor="#2e73ab"
      textColor="#ffffff"
      colors={['#2e73ab', '#3e78c3', '#878787', '#f4f6f8', '#ffffff']}
    />
    <Card
      header="Youtube"
      backgroundColor="#eb3223"
      textColor="#ffffff"
      colors={['#eb3223', '#282828', '#606060', '#707070', '#f8f8f8', '#ffffff']}
    />
    <Card
      header="Pinterest"
      backgroundColor="#d42d2f"
      textColor="#ffffff"
      colors={['#d42d2f', '#989898', '#8e8e8e', '#efefef', '#ffffff']}
    />
    <Card
      header="SnapChat"
      backgroundColor="#fffa53"
      textColor="black"
      colors={['#fffa53', '#f9d348', '#666b72', '#f2f2f2', '#ffffff']}
    />
    <Card
      header="Viber"
      backgroundColor="#655fa4"
      textColor="#ffffff"
      colors={['#655fa4', '#5c47b9', '#7a7a7a', '#9a9a9a', '#6a9e38', '#ffffff']}
    />
  </div>
);

export default Palette;
