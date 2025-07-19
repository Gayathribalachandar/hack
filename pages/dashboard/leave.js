import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import styles from '../../styles/leave.module.css';

const defaultRequests = [
  {
    id: 1,
    name: 'Aarav Sharma',
    reason: 'Need to attend a family function.',
    image: '/images/employees/aarav.jpg',
    subject: 'Family Emergency Leave - 2 Days',
  },
  {
    id: 2,
    name: 'Diya Mehta',
    reason: 'Medical appointment and rest.',
    image: '/images/employees/diya.jpg',
    subject: 'Medical Leave - 1 Day',
  },
  {
    id: 3,
    name: 'Raj Verma',
    reason: 'Personal work at home.',
    image: '/images/employees/raj.jpg',
    subject: 'Casual Leave - Half Day',
  },
];

export default function LeavePage() {
  const [requests, setRequests] = useState([]);

  // Load leave requests from localStorage or default
  useEffect(() => {
    const stored = localStorage.getItem('leaveRequests');
    try {
      const parsed = stored ? JSON.parse(stored) : null;
      if (Array.isArray(parsed) && parsed.length > 0) {
        setRequests(parsed);
      } else {
        // Initialize default only if no valid stored requests
        localStorage.setItem('leaveRequests', JSON.stringify(defaultRequests));
        setRequests(defaultRequests);
      }
    } catch (e) {
      // Reset on parse error
      localStorage.setItem('leaveRequests', JSON.stringify(defaultRequests));
      setRequests(defaultRequests);
    }
  }, []);

  const handleAction = (id) => {
    const updated = requests.filter(req => req.id !== id);
    setRequests(updated);
    localStorage.setItem('leaveRequests', JSON.stringify(updated));
  };

  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Leave Requests</h1>
        <div className={styles.grid}>
          {requests.map((req) => (
            <div className={styles.card} key={req.id}>
              <img src={req.image} alt={req.name} className={styles.avatar} />
              <div className={styles.content}>
                <h3>{req.subject}</h3>
                <p><strong>{req.name}:</strong> {req.reason}</p>
                <div className={styles.actions}>
                  <button className={styles.accept} onClick={() => handleAction(req.id)}>Accept</button>
                  <button className={styles.reject} onClick={() => handleAction(req.id)}>Reject</button>
                </div>
              </div>
            </div>
          ))}
          {requests.length === 0 && (
            <p className={styles.empty}>No pending leave requests.</p>
          )}
        </div>
      </div>
    </>
  );
}
