import React from 'react';

import image from '../../Assets/logo1.jpg';

import styles from './styles.module.scss';

function Navbar() {
  return (
    <div className={styles.div}>
      <img className={styles.logo} src={image} />
      <h2 className={styles.name}>10SA</h2>
    </div>
  );
}

export default Navbar;
