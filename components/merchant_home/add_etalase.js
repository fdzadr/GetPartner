import { useState } from 'react';
import styles from '@/styles/components/merchant/add_etalase/add_etalase.module.css'

export default function ContainerList() {
  const [containers, setContainers] = useState([]);

  const addContainer = () => {
    setContainers([...containers, <div className={styles.etalase}>Etalase Baru</div>]);
  };

  return (
    <div>
      {containers}
      <button onClick={addContainer} className={styles.btn}>Tambah Etalase +</button>
    </div>
  );
}