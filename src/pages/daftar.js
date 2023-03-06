import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { Inter } from '@next/font/google';
import styles from '../styles/login n signin/Signin.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';

export default function Daftar() {

  const router = useRouter();

  const [phonenumber, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const handler = async (e) => {
    e.preventDefault();

    let pn = phonenumber;
    let p = password;
    let cp = cpassword;

    console.log(phonenumber,password)

    const options = {
      method:"POST",
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({phonenumber:pn, password:p, cpassword:cp})
    }

    await fetch('http://localhost:3000/api/auth/signup', options)
      .then(res=>res.json())
      .then((data)=>{
        console.log(data);
        if(data.status)router.push('http://localhost:3000');
        else alert(data.message);
      })

  }



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
                    <input 
                    type="text" 
                    className={styles.signin_input} 
                    placeholder="Phone Number"
                    onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                <div className="signin_field">
                    <input 
                    type="text" 
                    className={styles.signin_input} 
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
        
                <div className="signin_field">
                    <input 
                    type="password" 
                    className={styles.signin_input} 
                    placeholder="Confirm Password"
                    onChange={(e) => setCpassword(e.target.value)}
                    />
                </div>
        
                <div className="buttons">
                    <Link href="/daftar/portal"><button onClick={(e) => handler(e)} className={styles.signin_btn}>Daftar</button></Link>
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