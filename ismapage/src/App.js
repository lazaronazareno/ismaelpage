import React from 'react';

import Gallery from './Components/Gallery/gallery';
import photos from './Assets/photos';
import Navbar from './Components/Navbar/navbar';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div>
      <Navbar />
      <Gallery images={photos} />
      <Footer />
    </div>
  );
}

export default App;
