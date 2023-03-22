import styles from '@/styles/merchant/customer_view.module.css'
import Image from 'next/image';
import Navbar from '/components/navbarresto';

export default function CustomerView() {
    return (
        <>
        <Navbar/>

        <div className={styles.title}>
            <div className={styles.title_box}>
                Customer View
            </div>
        </div>

        <div>
            <div className="mt-3">
                Makan Siang (3)
            </div>

            <div className='setting_main mt-2'>
                <div className={styles.line1}>
                    <Image 
                    src="/aset/pageproduk/fotomakan.svg" 
                    alt="image"
                    width={48}
                    height={48}
                    />
                    <div className={styles.container}>
                        Manisan Enak
                        <div className={styles.small}>
                            Makanan
                            <br></br>
                            Rp20.000
                        </div>
                    </div>

                    <div className={styles.status}>
                        <Image 
                            src='/aset/customer_view/hati.svg' 
                            alt="aktif"
                            width={48} 
                            height={18} 
                        />
                    </div>
                </div>

                <div className={styles.line1}>
                    <Image 
                    src="/aset/pageproduk/fotomakan.svg" 
                    alt="image"
                    width={48}
                    height={48}
                    />
                    <div className={styles.container}>
                        Manisan Enak
                        <div className={styles.small}>
                            Makanan
                            <br></br>
                            Rp20.000
                        </div>
                    </div>

                    <div className={styles.status}>
                        <Image 
                            src='/aset/customer_view/hati.svg' 
                            alt="aktif"
                            width={48} 
                            height={18} 
                        />
                    </div>
                </div>

                <div className={styles.line1}>
                    <Image 
                    src="/aset/pageproduk/fotomakan.svg" 
                    alt="image"
                    width={48}
                    height={48}
                    />
                    <div className={styles.container}>
                        Manisan Enak
                        <div className={styles.small}>
                            Makanan
                            <br></br>
                            Rp20.000
                        </div>
                    </div>

                    <div className={styles.status}>
                        <Image 
                            src='/aset/customer_view/hati.svg' 
                            alt="aktif"
                            width={48} 
                            height={18} 
                        />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}