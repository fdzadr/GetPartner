import Image from 'next/image';
import styles from '@/styles/components/navbarresto.module.css';
import Link from 'next/link';

export default function navbarresto() {
    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.backtopleft}>
                    <Image 
                    src="/aset/header/backtopleft.svg" 
                    alt="logo"
                    width={33}
                    height={33}
                    />
                </div>
                <div className={styles.foto_resto}>
                    <Image 
                    src="/aset/header/gambar resto.svg" 
                    alt="image"
                    width={64}
                    height={64}
                    />
                </div>
                <div className={styles.container}>
                    Resto Makan Enak
                    <div className={styles.small}>
                        Jl. Dimana Saja
                        <br></br>
                        2.2km
                    </div>
                </div>
            </div>
        </>
    )
}