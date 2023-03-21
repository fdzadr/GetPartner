import Image from 'next/image';
import styles from '@/styles/comps/footer.module.css';

export default function Footer() {
    return (
        <>
        <footer class="fixed-bottom">
        <div className={styles.container}>
            <button className={styles.logo}>
                <Image 
                    src="/aset/footer/resto.svg" 
                    alt="logo google"
                    width={40}
                    height={40}
                />
            </button>

            <button className={styles.logo}>
                <Image 
                    src="/aset/footer/home.svg" 
                    alt="logo google"
                    width={40}
                    height={40}
                />
            </button>

            <button className={styles.logo}>
                <Image 
                    src="/aset/footer/cart.svg" 
                    alt="logo google"
                    width={40}
                    height={40}
                />
            </button>
        </div>
        </footer>
        </>
    )
}