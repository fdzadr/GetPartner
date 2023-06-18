import Navbar from '/components/navbar';
import Footer from '/components/footer';
import MapContainer from '/components/driver home/map_route';
import styles from '@/styles/driver/order.module.css';
import { checkout } from 'public/data/checkout';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';


export default function Order() {
    const [showModalTolak, setModalTolak] = useState(false);

    const handleAccept = () => {
      setModalTolak(true);
    };

    const handleCloseModal = () => {
        setModalTolak(false);
    };

    const handleTolak = () => {
        setModalTolak(false);
        window.location.href = '/driver/homepage';
      };

    return (
        <>
        <Navbar/>

        <div className={styles.container}>
            <div className={styles.map}>
                <MapContainer />
            </div>

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

            <div>
                <Link href='/driver/order/order_berlangsung' className={styles.button}>
                    <button className={styles.btn}>
                        Terima
                    </button>
                </Link>

                <button className={styles.btn_tolak} onClick={handleAccept}>
                    Tolak
                </button>

                
            </div>
        </div>

        <Footer/>

        <Modal show={showModalTolak} centered>
            <Modal.Header className={styles.modal_header}>
                <Modal.Title>Apakah Anda yakin ingin menolak pesanan ini?</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Pesanan yang sudah ditolak tidak dapat diambil kembali.</p>
            </Modal.Body>

            <Modal.Footer className={styles.modal_footer}>
                <button onClick={handleCloseModal} className={styles.modal_btn_kembali}>
                    Kembali
                </button>
                
                <button onClick={handleTolak} className={styles.modal_btn_tolak}>
                    Tolak
                </button>
            </Modal.Footer>
        </Modal>
        </>
    )
}