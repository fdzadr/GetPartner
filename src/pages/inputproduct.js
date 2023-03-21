import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { Inter } from '@next/font/google';
import styles from '@/styles/inputproduct.module.css';
import Link from 'next/link';
import Footer from '/components/footer';
import Navbar from '/components/navbar';
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

      
        <div className={styles.yuk}>
            Yuk, isi informasi produkmu
        </div>
        <div className={styles.input_box}>
            <div className={styles.paperclip}>
                <Image 
                src="/aset/inputproduk/paperclip.svg" 
                alt="attach"
                width={12}
                height={12}
                />
            </div>
            <div className={styles.line_top}>
                <div className={styles.input}>
                    Foto Produk
                </div>
            </div>

            <div className={styles.line}>
                <div className={styles.input}>
                    Nama Produk
                </div>
            </div>

            <div className={styles.desc_line}>
                <div className={styles.input}>
                    Deskripsi Produk
                </div>
            </div>

            <div class="input-group mb-3" className={styles.non_text_group}>
                <select 
                    class="form-select" 
                    className={styles.setup_select} 
                    id="inputGroupSelect01"
                    onChange={(e) => setKota(e.target.value)}                        >
                        <option selected>Status Produk</option>
                        <option value="1">Makanan</option>
                        <option value="2">Minuman</option>
                </select>
            </div>

            <div class="input-group mb-3" className={styles.non_text_group}>
                <select 
                    class="form-select" 
                    className={styles.setup_select} 
                    id="inputGroupSelect01"
                    onChange={(e) => setKota(e.target.value)}                        >
                        <option selected>Etalase Produk</option>
                        <option value="1">Aktif</option>
                        <option value="2">Non-aktif</option>
                </select>
            </div>

            <div className="buttons">
                <button className={styles.tambah_btn}>Tambahkan Produk</button>
            </div>
        </div>

      <Footer/>
    </>
  )
}