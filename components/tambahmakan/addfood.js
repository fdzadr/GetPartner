import styles from '@/styles/components/tambahmakan/addfood.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function addFood() {
    return (
        <>
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
        </>
    )
}