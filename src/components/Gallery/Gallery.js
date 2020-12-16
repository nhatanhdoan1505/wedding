import React, { useState, useCallback, useEffect } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import TheHeading from '../Couple/TheHeading/TheCoupleHeading';
import photos from './photo';
import './Gallery.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function GalleryContainer () {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  useEffect(() => {
    Aos.init({
        duration: 1000
    });
    Aos.refresh();
  }, []);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const view = photos.map(x => ({
    ...x,
    srcset: x.srcSet,
    caption: x.title,
  }));


  return (
    <div className="Gallery" data-aos='fade-left'>
      <TheHeading heading="Gallery"/>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={view}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default GalleryContainer;
