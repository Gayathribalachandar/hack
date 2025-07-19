import { useState } from 'react';
import styles from '../../styles/employee.module.css';
import Navbar from '../../components/Navbar';

const employeeData = [
  {
    id: 1,
    name: 'Aarav Sharma',
    role: 'Frontend Developer',
    department: 'Engineering',
    image: '/images/employees/aarav.jpg',
  },
  {
    id: 2,
    name: 'Diya Mehta',
    role: 'HR Manager',
    department: 'Human Resources',
    image: '/images/employees/diya.jpg',
  },
  {
    id: 3,
    name: 'Raj Verma',
    role: 'UI/UX Designer',
    department: 'Design',
    image: '/images/employees/raj.jpg',
  },
  {
    id: 4,
    name: 'Sanya Kapoor',
    role: 'Marketing Specialist',
    department: 'Marketing',
    image: '/images/employees/raj3.jpg',
  },
  {
    id: 5,
    name: 'Kabir Joshi',
    role: 'Backend Developer',
    department: 'Engineering',
    image: '/images/employees/raj2.jpg',
  },
];

export default function EmployeePage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEmployees = employeeData.filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Employee Management</h1>

        <div className={styles.topBar}>
          <input
            type="text"
            placeholder="Search employee..."
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className={styles.addButton}>+ Add Employee</button>
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Role</th>
              <th>Department</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map(emp => (
              <tr key={emp.id}>
                <td>
                  <img src={emp.image} alt={emp.name} className={styles.avatar} />
                </td>
                <td>{emp.name}</td>
                <td>{emp.role}</td>
                <td>{emp.department}</td>
                <td>
                  <button className={styles.editBtn}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
