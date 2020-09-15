import React from 'react';

import image1 from '../../Assets/2.jpeg';
import image2 from '../../Assets/3.jpeg';
import image3 from '../../Assets/4.jpeg';

import styles from './styles.module.scss';

function Home() {
  return (
    <div className={styles.div}>
      <div>
        <h1>Dulces</h1>
        <img className={styles.image} src={image1} alt="muestra1" />
      </div>
      <div>
        <h1>Galletitas</h1>
        <img className={styles.image} src={image2} alt="muestra2" />
      </div>
      <div>
        <h1>Alquiler de Candy</h1>
        <img className={styles.image} src={image3} alt="muestra3" />
      </div>
    </div>
  );
}

export default Home;
