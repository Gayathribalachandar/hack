import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>
        <li><Link href="/dashboard">🏠 Main Widget</Link></li>
        <li><Link href="/dashboard/employee">👤 Employee Management</Link></li>
        <li><Link href="/dashboard/salary">💰 Salary Slip</Link></li>
        <li><Link href="/dashboard/leave">📝 Leave Request</Link></li>
        <li><Link href="/dashboard/performance">📊 Performance</Link></li>
        <li><Link href="/dashboard/ranking">🏆 Ranking</Link></li>
        <li><Link href="/dashboard/reports">📄 Report</Link></li>
      </ul>
      
    </nav>
  );
}
