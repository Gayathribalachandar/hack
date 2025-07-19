import { useState } from 'react';
import Navbar from '../../components/Navbar';
import styles from '../../styles/salary.module.css';

const employees = [
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
    designation: 'QA Engineer',
    image: '/images/employees/raj2.jpg',
  },
];

export default function SalarySlipPage() {
  const [visibleUploader, setVisibleUploader] = useState(null);
  const [slips, setSlips] = useState({});

  const handleUpload = (id) => {
    setVisibleUploader(id);
  };

  const handleFileChange = (e, id) => {
    const file = e.target.files[0];
    setSlips((prev) => ({ ...prev, [id]: file }));
  };

  const handleConfirm = (id) => {
    setVisibleUploader(null);
    alert(`Slip uploaded successfully for ${employees.find(emp => emp.id === id).name}`);
  };

  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Upload Salary Slips</h1>

        <div className={styles.grid}>
          {employees.map((emp) => (
            <div key={emp.id} className={styles.card}>
              <img src={emp.image} alt={emp.name} className={styles.avatar} />
              <div className={styles.details}>
                <h3>{emp.name}</h3>
                <p>{emp.designation}</p>
                <button className={styles.uploadBtn} onClick={() => handleUpload(emp.id)}>
                  Upload Slip
                </button>

                {visibleUploader === emp.id && (
                  <div className={styles.uploadArea}>
                    <input type="file" onChange={(e) => handleFileChange(e, emp.id)} />
                    <button className={styles.okBtn} onClick={() => handleConfirm(emp.id)}>
                      OK
                    </button>
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
