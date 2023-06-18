import Navbar from '/components/navbar';
import Footer from '/components/footer';
import styles from '@/styles/driver/order.module.css';
import { checkout } from 'public/data/checkout';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function OrderSelesai() {

    const handleSelesai = () => {
        window.location.href = '/driver/homepage';
    };

    return (
        <>
        <Navbar/>

        <div className={styles.container}>

            <div className={styles.jumbotron}>
                <h2>Hore, Pesanan Sudah Selesai</h2>
                <Image
                    className='mb-5 mt-3'
                    src="/aset/pesananselesai.svg" 
                    alt="pesanan selesai"
                    width={150}
                    height={150}
                />
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
                <button className={styles.btn} onClick={handleSelesai}>
                    Selesai
                </button>
            </div>
        </div>

        <Footer/>
        </>
    )
}