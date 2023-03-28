import Image from 'next/image';
import styles from '@/styles/components/navbarresto.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';

export default function navbarresto() {

    const [data, setData] = useState([]);
    const router = useRouter();

    const session = useSession();

    console.log(session.data.user.id)

    useEffect(() => {
        fetch("http://localhost:3000/api/auth/data-usaha", {
            method: "GET"
        }).then((res) => res.json()).then((data) => setData(data.data))
        console.log(data)
    }, []);

    function Back() {
    router.back();
    }

    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.backtopleft}>
                    <button onClick={Back} className={styles.btn}>
                        <Image 
                        src="/aset/header/backtopleft.svg" 
                        alt="logo"
                        width={33}
                        height={33}
                        />
                    </button>
                </div>

                <div className={styles.foto_resto}>
                    <Image 
                    src="/aset/header/gambar resto.svg" 
                    alt="image"
                    width={64}
                    height={64}
                    />
                </div>
                {(data.length != 0) && data.map((item) => {if(item.ownerid == session.data.user.id) return (
                    <div className='setting_main'>
                        <div className={styles.line1}>
                            <div className={styles.container}>
                                {item.namaresto}
                                <div className={styles.small}>
                                    {item.alamat}
                                </div>
                            </div>
                        </div>
                    </div>
                )})
                }
            </div>
        </>
    )
}