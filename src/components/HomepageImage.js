import React from 'react';

function HomepageImage() {
  const url = 'https://i.imgur.com/fO55mcG.jpg';
  return (
    <img src={url} style={{width: 650}} alt='Me' />
  );
}

export default HomepageImage;
