import Image from 'next/image';
import styles from '@/styles/components/navbar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navback() {
    const router = useRouter();

    function Back() {
    router.back();
    }

    return (
        <>
        <nav class='navbar sticky-top'>
            <div className={styles.navbar}>
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