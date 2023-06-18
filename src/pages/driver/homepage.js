import React, { useState, useEffect } from 'react';
import MapContainer from '/components/driver home/map_current';
import Navbar from '/components/navbar';
import Footer from '/components/footer';
import styles from '@/styles/driver/home.module.css';
import { Modal } from 'react-bootstrap';
import { checkout } from 'public/data/checkout';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 10000);
  }, []);

  const handleModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.map}>
          <MapContainer />
        </div>

        <div className='my-3'>
          <img src="/dummy_stats.svg" alt="Image 2" />
        </div>

        <div className='mb-3'>
          <img src="/dummy_hist.svg" alt="Image 2" />
        </div>

        <Modal show={showModal} onHide={handleModal} aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title>Ada Orderan Baru Nih!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className={styles.cont}>
                <h4>Cristiantoro Messi</h4>
                <div className={styles.ket}>
                  <div className={styles.keterangan}>
                    Harga<br/>Rp 20.000
                  </div>
                  <div className={styles.keterangan}>
                    Estimasi<br/>10 menit
                  </div>
                  <div className={styles.keterangan}>
                    Jarak<br/>1.2 Km
                  </div>
                </div>

                <div className={styles.place}>
                    {checkout.map((items) => (

                        <div className={styles.places}>
                          <Image className={styles.logo}
                                  src="/aset/merchant.svg" 
                                  alt="anda"
                                  width={23}
                                  height={24}
                              />
                              <h6>{items.namaRestaurant}<br/><span>{items.alamat}</span></h6>
                        </div>

                    ))}
                        <div className={styles.places}>
                            <Image className={styles.logo}
                                src="/aset/loc.svg" 
                                alt="tujuan"
                                width={21}
                                height={26}
                            />
                            <h6>UGM Central Office<br/><span>69JH+WCH, Karang Malang, Caturtunggal, Depok</span></h6>
                        </div>
                </div>
            </div>
          </Modal.Body>
          <Modal.Footer className={styles.footer}>
            <Link href='/driver/order' className={styles.button}>
              <button onClick={handleModal} className={styles.btn}>
                Lihat Rincian
              </button>
            </Link>
          </Modal.Footer>
        </Modal>
      </div>

      <Footer />
    </>
  );
}
