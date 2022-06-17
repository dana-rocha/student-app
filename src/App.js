// import logo from './logo.svg';
import './App.css';
import StudentList from './components/StudentList';
// import ClassInfo from './components/ClassInfo';
import { useState } from 'react';

function App() {
  const [studentData, setStudentData] = useState([
    {
      id: 1,
      nameData: 'Ada',
      emailData: 'ada@dev.org',
      isPresentData: false
    },
    {
      id: 2,
      nameData: 'Soo-ah',
      emailData: 'sooah@dev.org',
      isPresentData: false
    },
    {
      id: 3,
      nameData: 'Chrissy',
      emailData: 'chrissy@dev.org',
      isPresentData: true
    }
  ]);

  return (
    <main>
      <h1>Attendance</h1>
      {/* <ClassInfo memberCount={studentData.length}></ClassInfo> */}
      <StudentList students={studentData}></StudentList>
    </main>
  );
}

export default App;
