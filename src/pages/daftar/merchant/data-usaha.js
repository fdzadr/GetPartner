import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/login n signin/Profile-setup.module.css'

export default function Merchant() {
    return (
        <>
        <Head>
            <title>GetPartner</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
        <div class=" box position-relative">
            <div class="position-absolute top-50 start-50 translate-middle">
                <div className={styles.logo}>
                    <Image 
                    src="/aset/login n signin aset/Getjob.svg" 
                    alt="logo"
                    width={150}
                    height={50}
                    />
                </div>

                <div className={styles.title}>
                    <p>
                        Anda Mendaftar Sebagai
                        <br/>
                        <span className={styles.highlight}>Merchant</span>
                        <br/>
                        <br/>
                        Isi Data Usaha Anda
                    </p>
                </div>

                <div className={styles.setup_main}>
                    <div className="merchant_field">
                        <input type="text" className={styles.setup_input} placeholder="Nama Rumah Makan"/>
                    </div>

                    <div className="merchant_field">
                        <input type="text" className={styles.setup_input} placeholder="Alamat Rumah Makan"/>
                    </div>

                    <div class="input-group mb-3" className={styles.non_text_group}>
                        <select class="form-select" className={styles.setup_select} id="inputGroupSelect01">
                            <option selected>Jenis Resto</option>
                            <option value="1">Fast Food</option>
                            <option value="2">Casual Dining</option>
                            <option value="3">Cafe</option>
                            <option value="4">Fine Dining</option>
                            <option value="5">Takeaway Only</option>
                        </select>
                    </div>
            
                    <div class="input-group mb-3" className={styles.non_text_group}>
                        <label class="input-group-text" className={styles.non_text_group_text} for="inputGroupFile01">Foto Rumah Makan</label>
                        <input type="file" class="form-control" className={styles.setup_upload} id="inputGroupFile01" />
                    </div>

                    <div class="form-check" className={styles.setup_check}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" className={styles.check_label} for="flexCheckDefault">
                            Saya telah membaca dan menyetujui <span className={styles.snk}>Syarat & Ketentuan</span> dan siap menjadi Partner Resmi dari GetJob.
                        </label>
                    </div>
            
                    <div className="buttons">
                        <Link href="#"><button className={styles.setup_next_btn}>Selesai</button></Link>
                    </div>
                </div>
            </div>
        </div>
        </main>
        </>
    )
}