import React from 'react';

import image2 from '../../Assets/3.jpeg';
import image3 from '../../Assets/4.jpeg';

import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import styles from './styles.module.scss';

function Home() {
  return (
    <div className={styles.div}>
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

export default Home;
