import Image from 'next/image';
import styles from '@/styles/components/footer.module.css';

export default function Navbar() {
    return (
        <>
        <footer class="fixed-bottom">
        <div className={styles.container}>
            <button className={styles.logo}>
                <Image 
                    src="/aset/footer/insight.svg" 
                    alt="insight"
                    width={28}
                    height={28}
                />
            </button>

            <button className={styles.logo}>
                <Image 
                    src="/aset/footer/home.svg" 
                    alt="home"
                    width={36}
                    height={36}
                />
            </button>

            <button className={styles.logo}>
                <Image 
                    src="/aset/footer/list.svg" 
                    alt="list"
                    width={28}
                    height={28}
                />
            </button>

            <button className={styles.logo}>
                <Image 
                    src="/aset/footer/chat.svg" 
                    alt="chat"
                    width={36}
                    height={36}
                />
            </button>
        </div>
        </footer>
        </>
    )
}