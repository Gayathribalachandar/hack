import Navbar from '../../components/Navbar';
import styles from '../../styles/reports.module.css';

const reportData = [
  {
    id: 1,
    name: 'Aarav Sharma',
    subject: 'Q2 Progress & Milestone Report',
    date: 'Friday, July 19, 2025',
    time: '10:45 AM',
    image: '/images/r1.jpg', // You can change this image
  },
  {
    id: 2,
    name: 'Diya Mehta',
    subject: 'HR Policy Review Summary',
    date: 'Thursday, July 18, 2025',
    time: '3:10 PM',
    image: '/images/r1.jpg',
  },
  {
    id: 3,
    name: 'Raj Verma',
    subject: 'UX Feedback Compilation',
    date: 'Wednesday, July 17, 2025',
    time: '1:30 PM',
    image: '/images/r1.jpg',
  },
];

export default function ReportPage() {
  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Employee Reports</h1>
        <div className={styles.grid}>
          {reportData.map((report) => (
            <div key={report.id} className={styles.card}>
              <img src={report.image} alt="report icon" className={styles.image} />
              <div className={styles.content}>
                <h3>{report.name}</h3>
                <p><strong>Subject:</strong> {report.subject}</p>
                <p><strong>Date:</strong> {report.date}</p>
                <p><strong>Time:</strong> {report.time}</p>
                <button className={styles.viewBtn}>View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
