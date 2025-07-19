import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import styles from '../../styles/dashboard.module.css';

export default function Dashboard() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <div className={styles.card}>
          <img src="/images/leave.png" alt="Leave Request" />
          <div className={styles.cardContent}>
            <h3>Leave Request</h3>
            <p>Someone has requested leave today.</p>
            <button onClick={() => router.push('/dashboard/leave')}>View</button>
          </div>
        </div>

        <div className={styles.card}>
          <img src="/images/report.png" alt="Report Submitted" />
          <div className={styles.cardContent}>
            <h3>Report Submitted</h3>
            <p>New report submitted for this week.</p>
            <button onClick={() => router.push('/dashboard/report')}>View</button>
          </div>
        </div>

        <div className={styles.card}>
          <img src="/images/badge.png" alt="Badge Awarded" />
          <div className={styles.cardContent}>
            <h3>Badge Awarded</h3>
            <p>Top performer received a badge!</p>
            <button onClick={() => router.push('/dashboard/ranking')}>View</button>
          </div>
        </div>
      </main>
    </>
  );
}
