import { useState } from 'react';
import Navbar from '../../components/Navbar';
import styles from '../../styles/performance.module.css';
import { FaStar, FaThumbtack } from 'react-icons/fa';

const employeeData = [
  {
    id: 1,
    name: 'Aarav Sharma',
    designation: 'Frontend Developer',
    image: '/images/employees/aarav.jpg',
  },
  {
    id: 2,
    name: 'Diya Mehta',
    designation: 'HR Manager',
    image: '/images/employees/diya.jpg',
  },
  {
    id: 3,
    name: 'Raj Verma',
    designation: 'UI/UX Designer',
    image: '/images/employees/raj.jpg',
  },
  {
    id: 4,
    name: 'Sanya Kapoor',
    designation: 'Backend Developer',
    image: '/images/employees/raj3.jpg',
  },
  {
    id: 5,
    name: 'Riya Joshi',
    designation: 'Data Analyst',
    image: '/images/employees/raj2.jpg',
  },
];

export default function FeedbackPage() {
  const [ratings, setRatings] = useState({});
  const [feedbackVisible, setFeedbackVisible] = useState(null); // store selected ID
  const [feedbackText, setFeedbackText] = useState({});

  const handleRating = (id, value) => {
    setRatings((prev) => ({ ...prev, [id]: value }));
  };

  const toggleFeedback = (id) => {
    setFeedbackVisible((prev) => (prev === id ? null : id));
  };

  const handleFeedbackChange = (id, value) => {
    setFeedbackText((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const submitFeedback = (id) => {
    if (feedbackText[id]) {
      alert('✅ Feedback submitted!');
      setFeedbackVisible(null);
      setFeedbackText((prev) => ({ ...prev, [id]: '' }));
    } else {
      alert('Please write feedback before submitting.');
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Performance Feedback</h1>
        <div className={styles.grid}>
          {employeeData.map((emp) => (
            <div
              key={emp.id}
              className={`${styles.card} ${
                feedbackVisible === emp.id ? styles.expanded : ''
              }`}
            >
              <img src={emp.image} alt={emp.name} className={styles.avatar} />
              <div className={styles.details}>
                <h2>{emp.name}</h2>
                <p>{emp.designation}</p>

                <div className={styles.rating}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      onClick={() => handleRating(emp.id, star)}
                      color={ratings[emp.id] >= star ? 'gold' : 'gray'}
                      style={{ cursor: 'pointer', fontSize: '20px' }}
                    />
                  ))}
                </div>

                <button
                  className={styles.pinBtn}
                  onClick={() => toggleFeedback(emp.id)}
                >
                  <FaThumbtack /> Pin Feedback
                </button>

                {feedbackVisible === emp.id && (
                  <div className={styles.feedbackBox}>
                    <textarea
                      placeholder="Write feedback..."
                      value={feedbackText[emp.id] || ''}
                      onChange={(e) => handleFeedbackChange(emp.id, e.target.value)}
                    />
                    <button onClick={() => submitFeedback(emp.id)}>Submit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
