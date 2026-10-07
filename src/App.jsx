import './App.css';

function Header() {
  return <h1 className="header">Student Management System</h1>;
}

function StudentProfile({ name, department, year }) {
  return (
    <div className="profile">
      <h2>{name}</h2>
      <p>Department: {department}</p>
      <p>Year: {year}</p>
    </div>
  );
}

function Footer() {
  return <footer>© 2026 Student Management System</footer>;
}

function App() {
  const student1Name = "Anu";
  const student1Department = "CSE";
  const student1Year = "3rd Year";

  const student2Name = "Bala";
  const student2Department = "Computer Science";
  const student2Year = "3rd Year";

  return (
    <>
      <Header />

      <h3>Student 1</h3>
      <StudentProfile
        name={student1Name}
        department={student1Department}
        year={student1Year}
      />

      <h3>Student 2</h3>
      <StudentProfile
        name={student2Name}
        department={student2Department}
        year={student2Year}
      />

      <Footer />
    </>
  );
}

export default App;