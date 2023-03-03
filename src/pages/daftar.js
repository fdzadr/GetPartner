import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/login n signin/Signin.module.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Daftar() {
  return (
    <>
      <Head>
        <title>GetPartner</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div class="box position-relative" className="box">
        <div className="position-absolute top-50 start-50 translate-middle">
            <div className={styles.logo}>
              <Image 
              src='/aset/login n signin aset/Getjob.svg' 
              width={150} 
              height={50} 
              />
            </div>
        
            <div className={styles.signin_main}>
                <div className="signin_field">
                    <input type="text" className={styles.signin_input} placeholder="Phone Number"/>
                </div>

                <div className="signin_field">
                    <input type="text" className={styles.signin_input} placeholder="Password"/>
                </div>
        
                <div className="signin_field">
                    <input type="password" className={styles.signin_input} placeholder="Confirm Password"/>
                </div>
        
                <div className="buttons">
                    <Link href="/daftar/portal"><button className={styles.signin_btn}>Daftar</button></Link>
                </div>
        
                <div className={styles.loginask}>
                    Sudah punya akun? <Link href="/index" className="gologin">Masuk</Link>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}