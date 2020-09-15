import React from 'react';

import Gallery from './Components/Gallery/gallery';
import photos from './Assets/photos';
import Navbar from './Components/Navbar/navbar';
import Footer from './Components/Footer/footer';
import Facepage from './Components/facepage/facepage';
import styles from './styles.module.scss';
import Home from './Components/home/home';

function App() {
  return (
    <div className={styles.principal}>
      <Navbar />
      <Home />
      {
        //      <Gallery images={photos} //
      }
      <Facepage />
      <Footer />
    </div>
  );
}

export default App;
