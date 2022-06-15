// import logo from './logo.svg';
import './App.css';
import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';

function App() {
  return (
    <main>
      <h1>Attendance</h1>
      Here's the first rendered student list:
      <StudentList></StudentList>
      Here's the second rendered student list:
      <StudentList></StudentList>
    </main>
  );
}

export default App;
