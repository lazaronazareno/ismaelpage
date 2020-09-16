import React, { useState } from 'react';

import image1 from '../../Assets/2.jpeg';
import Gallery from '../Gallery/gallery';
import photos from '../../Assets/photos';

import styles from './styles.module.scss';

function Section1() {
  const [x, setX] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1 className={styles.subtitle}>Dulces</h1>
      <div
        className={styles.divimg}
        onClick={() => {
          setIsOpen(!isOpen);
          setX(0);
        }}
      >
        <img className={styles.image} src={image1} alt="muestra1" />
        <div className={styles.divsubt}>
          <div className={styles.subtitle2}>Ofertas</div>
        </div>
      </div>
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

export default Section1;
