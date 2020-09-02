import React, { useState } from 'react';

import arrow from '../../Assets/icons.png';

import styles from './styles.module.scss';

function Gallery(props) {
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (props.images.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (props.images.length - 1) ? setX(0) : setX(x - 100);
  };
  return (
    <div className={styles.slider}>
      {props.images.map(({ src, index, name }) => (
        <div key={index} className={styles.slide} style={{ transform: `translateX(${x}%)` }}>
          <img alt={index} className={styles.image} src={src} />
        </div>
      ))}
      <button type="button" className={styles.goLeft} onClick={goLeft}>
        <img className={styles.arrowLeft} alt="arrowleft" src={arrow} />
      </button>
      <button type="button" className={styles.goRight} onClick={goRight}>
        <img className={styles.arrowRight} alt="arrowright" src={arrow} />
      </button>
    </div>
  );
}

export default Gallery;
