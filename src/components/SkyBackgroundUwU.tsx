import { createElement, useEffect, useState, type ReactNode } from 'react';
import cloudImg from '/src/assets/cloud.webp';

import './SkyBackgroundUwU.css';

function SkyBackgroundUwU() {
  const [clouds, setClouds] = useState<ReactNode>([]);

  useEffect(() => {
    const bg = document.getElementById('background');

    if (!bg) return;

    const cloudNumber = 6;
    const maxDelay = 10;
    const maxSize = 120;
    const minSize = 50;
    const newClouds = [];

    for (let index = 0; index < cloudNumber; index++) {
      const top = Math.floor(Math.random() * window.innerHeight);

      const size = Math.floor(Math.random() * (maxSize - minSize)) + minSize;
      const delay = Math.random() * maxDelay;

      const cloud = createElement('img', {
        key: index,
        className: 'cloud',
        style: {
          left: '100vw',
          top,
          height: `${size}px`,
          animationDelay: `${delay}s`,
        },
        src: cloudImg,
        alt: 'cloud',
      });
      newClouds.push(cloud);
    }
    console.log(newClouds);
    setClouds(newClouds);
  }, []);

  return (
    <div id="background" className="w-dvw h-dvh absolute top-0 left-0 -z-10">
      {clouds}
    </div>
  );
}

export default SkyBackgroundUwU;
