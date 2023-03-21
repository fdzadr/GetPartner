import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { Inter } from '@next/font/google';
import styles from '@/styles/pageproduct.module.css';
import Link from 'next/link';
import Footer from '/components/footer';
import Navbar from '/components/navbarresto';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Daftar() {


  return (
    <>
      <Head>
        <title>GetFull</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

    <div className={styles.setting_main}>
        <div className={styles.etalase}>
            <div className={styles.namaeta}>
                Makanan (3)
            </div>
            <div className='setting_main'>
                <div className={styles.line1}>
                    <Image 
                    src="/aset/pageproduk/fotomakan.svg" 
                    alt="image"
                    width={48}
                    height={48}
                    />
                    <div className={styles.container}>
                        Manisan Enak
                        <div className={styles.small}>
                            Makanan
                            <br></br>
                            Rp20.000
                        </div>
                    </div>
                    <div className={styles.status}>
                        <Image 
                            src='/aset/pageproduk/aktif.svg' 
                            alt="aktif"
                            width={48} 
                            height={18} 
                        />
                    </div>
                    <div className={styles.pen2}>
                        <Image
                            src='/aset/pageproduk/penireng.svg'
                            alt="edit"
                            width={12}
                            height={12}
                        />
                    </div>
                </div>
            </div>

            <div className='setting_main'>
                <div className={styles.line1}>
                    <Image 
                    src="/aset/pageproduk/fotomakan.svg"  
                    alt="image"
                    width={48}
                    height={48}
                    />
                    <div className={styles.container}>
                        Manisan Enak
                        <div className={styles.small}>
                            Makanan
                            <br></br>
                            Rp20.000
                        </div>
                    </div>
                    <div className={styles.status}>
                        <Image 
                            src='/aset/pageproduk/aktif.svg' 
                            alt="aktif"
                            width={48} 
                            height={18} 
                        />
                    </div>
                    <div className={styles.pen2}>
                        <Image
                            src='/aset/pageproduk/penireng.svg'
                            alt="edit"
                            width={12}
                            height={12}
                        />
                    </div>
                </div>
            </div>

            <div className='setting_main'>
                <div className={styles.line1}>
                    <Image 
                    src="/aset/pageproduk/fotomakan.svg" 
                    alt="image"
                    width={48}
                    height={48}
                    />
                    <div className={styles.container}>
                        Manisan Enak
                        <div className={styles.small}>
                            Makanan
                            <br></br>
                            Rp20.000
                        </div>
                    </div>
                    <div className={styles.status}>
                        <Image 
                            src='/aset/pageproduk/aktif.svg' 
                            alt="aktif"
                            width={48} 
                            height={18} 
                        />
                    </div>
                    <div className={styles.pen2}>
                        <Image
                            src='/aset/pageproduk/penireng.svg'
                            alt="edit"
                            width={12}
                            height={12}
                        />
                    </div>
                </div>
            </div>
        </div>
        
        <div className={styles.etalase}>
            <div className={styles.namaeta}>
                Minuman (1)
            </div>
            <div className='setting_main'>
                <div className={styles.line1}>
                    <Image 
                    src="/aset/pageproduk/fotomakan.svg" 
                    alt="image"
                    width={48}
                    height={48}
                    />
                    <div className={styles.container}>
                        Resto Makan Enak
                        <div className={styles.small}>
                            Jl. Dimana Saja
                            <br></br>
                            2.2km
                        </div>
                    </div>
                    <div className={styles.status}>
                        <Image 
                            src='/aset/pageproduk/aktif.svg' 
                            alt="aktif"
                            width={48} 
                            height={18} 
                        />
                    </div>
                    <div className={styles.pen2}>
                        <Image
                            src='/aset/pageproduk/penireng.svg'
                            alt="edit"
                            width={12}
                            height={12}
                        />
                    </div>
                </div>
            </div>

            <div className='setting_main'>
                <div className={styles.line1}>
                    <Image 
                    src="/aset/pageproduk/fotomakan.svg"    
                    alt="image"
                    width={48}
                    height={48}
                    />
                    <div className={styles.container}>
                        Resto Makan Enak
                        <div className={styles.small}>
                            Jl. Dimana Saja
                            <br></br>
                            2.2km
                        </div>
                    </div>
                    <div className={styles.status}>
                        <Image 
                            src='/aset/pageproduk/nonaktif.svg' 
                            alt="non-aktif"
                            width={59} 
                            height={18} 
                        />
                    </div>
                    <div className={styles.pen2}>
                        <Image
                            src='/aset/pageproduk/penireng.svg'
                            alt="edit"
                            width={12}
                            height={12}
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="buttons">
                <Link href="/"><button className={styles.ubah_btn}>Ubah Etalase</button>
                    <div className={styles.pen}>
                        <Image 
                            src='/aset/pageproduk/pen.svg' 
                            alt="ubah"
                            width={12} 
                            height={12} 
                        />
                    </div>
                </Link>
        </div>
        <div className="buttons">
                <Link href="/"><button className={styles.tambah_btn}>Tambah Produk</button>
                    <div className={styles.plus}>
                        <Image 
                            src='/aset/pageproduk/plus.svg' 
                            alt="tambah"
                            width={16} 
                            height={16} 
                        />
                    </div>
                </Link>
        </div>
      </div>
      <Footer/>
    </>
  )
}