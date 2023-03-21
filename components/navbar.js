import Image from 'next/image';
import styles from '@/styles/components/navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
    return (
        <>
        <nav class='navbar sticky-top'>
            <div className={styles.navbar}>
                <div className={styles.backtopleft}>
                    <Image 
                    src="/aset/header/backtopleft.svg" 
                    alt="logo"
                    width={33}
                    height={33}
                    />
                </div>
                <div className={styles.logo_getjob}>
                    <Link href="/homepage">
                    <Image 
                    src="/aset/header/getjob.svg" 
                    alt="logo"
                    width={90}
                    height={35}
                    />
                    </Link>
                </div>

                <div className={styles.logo_profile}>
                    <Link href="/setting">
                    <Image 
                    src="/aset/header/profile.svg" 
                    alt="logo"
                    width={40}
                    height={40}
                    />
                    </Link>
                </div>
            </div>
        </nav>
        </>
    )
}