import React, { useState } from 'react';

import image1 from '../../Assets/4.jpeg';
import Gallery from '../Gallery/gallery';
import photos from '../../Assets/photos';

import styles from './styles.module.scss';

function Section3() {
  const [x, setX] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1>Alquiler de Candy</h1>
      <img
        className={styles.image}
        src={image1}
        alt="muestra1"
        onClick={() => {
          setIsOpen(!isOpen);
          setX(0);
        }}
      />
      {isOpen && (
        <dialog className={styles.dialog} open>
          <Gallery images={photos} x={x} />
          <button type="button" className={styles.buttonClose} onClick={() => setIsOpen(!isOpen)}>
            X
          </button>
        </dialog>
      )}
    </div>
  );
}

export default Section3;
