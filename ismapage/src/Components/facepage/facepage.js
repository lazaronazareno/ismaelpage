import React, { useEffect } from 'react';

import styles from './styles.module.scss';

export default function Facepage() {
  useEffect(() => {
    window.FB.XFBML.parse();
  }, []);

  return (
    <div className={styles.div}>
      <h1 className={styles.subtitle}>Visita nuestra pagina de Facebook!</h1>
      <div
        className="fb-page"
        data-href="https://www.facebook.com/10SA-105144964655533/"
        data-tabs="timeline, messages"
        data-width="500px"
        data-height=""
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <div className="fb-xfbml-parse-ignore">
          <blockquote cite="https://www.facebook.com/10SA-105144964655533/">
            <a href="https://www.facebook.com/10SA-105144964655533/">10SA</a>
          </blockquote>
        </div>
      </div>
      <h1 className={styles.subtitle}>Envíanos un mensaje!</h1>
    </div>
  );
}
