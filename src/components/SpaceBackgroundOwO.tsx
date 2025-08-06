import { createElement, useEffect, useState, type ReactNode } from 'react';
import './SpaceBackgroundOwO.css';

function SpaceBackgroundOwO() {
  const [stars, setStars] = useState<ReactNode>([]);
  const starNumber = 20;
  useEffect(() => {
    const bg = document.getElementById('background');

    const newStars = [];

    if (!bg) return;

    for (let index = 0; index < starNumber; index++) {
      const left = Math.floor(Math.random() * window.innerWidth);
      const top = Math.floor(Math.random() * window.innerHeight);

      const star = createElement(
        'div',
        {
          key: index,
          className: 'star',
          style: { left, top },
        },
        '.'
      );
      newStars.push(star);
    }
    setStars(newStars);
  }, []);

  return (
    <div id="background" className="w-dvw h-dvh absolute top-0 left-0 -z-10">
      <div>{stars}</div>
    </div>
  );
}

export default SpaceBackgroundOwO;
