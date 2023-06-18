import Navbar from '/components/navbar';
import Footer from '/components/footer';
import MapContainer from '/components/driver home/map_route';
import styles from '@/styles/driver/order.module.css';
import { checkout } from 'public/data/checkout';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';


export default function OrderBerlangsung() {
    const [showModal, setModal] = useState(false);

    const handleAccept = () => {
      setModal(true);
    };

    const handleCloseModal = () => {
        setModal(false);
    };

    const handleSelesai = () => {
        setModal(false);
        window.location.href = '/driver/order/order_selesai';
    };

    return (
        <>
        <Navbar/>

        <div className={styles.status}>
            <h5>Pesanan sedang berlangsung...</h5>
        </div>

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
                <button className={styles.btn} onClick={handleAccept}>
                    Pesanan Selesai
                </button>
            </div>
        </div>
        
        <Footer/>

        <Modal show={showModal} centered>
            <Modal.Header className={styles.modal_header}>
                <Modal.Title>Pastikan semua proses telah selesai.</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Jika terdapat proses yang belum selesai, driver akan dikenakan sanksi.</p>
            </Modal.Body>

            <Modal.Footer className={styles.modal_footer}>
                <button onClick={handleCloseModal} className={styles.modal_btn_kembali}>
                    Kembali
                </button>
                
                <button onClick={handleSelesai} className={styles.modal_btn_selesai}>
                    Selesai
                </button>
            </Modal.Footer>
        </Modal>
        </>
    )
}