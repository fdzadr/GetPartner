import MapContainer from '/components/driver home/map_current';
import Navbar from '/components/navbar'
import Footer from '/components/footer'
import styles from '@/styles/driver/home.module.css'

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className={styles.container}>
      <div className={styles.map}>
        <MapContainer />
      </div>

      <div className='my-3'>
        <img
          src="/dummy_stats.svg"
          alt="Image 2"
          />
      </div>

      <div className='mb-3'>
        <img
          src="/dummy_hist.svg"
          alt="Image 2"
          />
      </div>
      
    </div>
    <Footer/>
    </>
  );
}
