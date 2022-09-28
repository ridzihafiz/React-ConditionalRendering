import React, { useState } from 'react';

export default function App() {

  const [ loading, setLoading ] = useState(true);
  const [ modal, setModal ] = useState(false);
  const [ modalImage, setModalImage ] = useState({
    show: false,
    src: ""
  })

  setTimeout(() => {
    setLoading(false)
  }, 3000);

  const handleModal = () => {
    setModal( !modal )
  }

  const handleImageModal = (e) => {
    setModalImage({
      show: true, // menampilkan image modalnya
      src: e.target.src // untuk mengambil data src pada gambar yg di klik
    })
  }

  // kondisi ketika loading bernilai true
  if(loading) {
    return (
      <div className="loading_screen">
        Loading please wait...
      </div>
    )
  }

  return (
    <>
      {modal && (
        <div className="modal">
          <h1>Hi Modal</h1>
          <button onClick={handleModal} >Close Modal</button>
        </div>
      )};
      
      {modalImage.show && (
        <div className="modal" >
          <img src={modalImage.src} alt="" />
          <button onClick={() => {
            setModalImage({
              show: false,
              src: ""
            })
          }} >close image modal</button>
        </div>
      )}

      <div>
        <h1>Hi React App!</h1>
        <button onClick={handleModal} >Open Modal</button>
      </div>

      <div className="image_wrapper">
        <img src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=500" alt="" onClick={handleImageModal} />
        <img src="https://images.pexels.com/photos/1181275/pexels-photo-1181275.jpeg?auto=compress&cs=tinysrgb&w=500" alt="" onClick={handleImageModal} />
        <img src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=500" alt="" onClick={handleImageModal} />
      </div>

    </>
  );
}
