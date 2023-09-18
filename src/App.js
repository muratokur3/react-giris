import { useState } from "react";
import "./App.css";

function App() {
  const [student, setStudent] = useState("");
  const [studentInput, setStudentInput] = useState("");
  const [studentInputErr, setStudentInputErr] = useState("");

  const [instructor, setInstructor] = useState("");
  const [instructorInput, setInstructorInput] = useState("");
  const [instructorInputErr, setInstructorInputErr] = useState("");

  const [course, setCourse] = useState("");
  const [courseInput, setCourseInput] = useState("");
  const [courseInputErr, setCourseInputErr] = useState("");

  const addStudent = () => {
    
      setStudentInputErr("");
      setInstructorInputErr("");
      setCourseInputErr("");

    if (studentInput && instructorInput && courseInput) {

      setStudent(studentInput);
      setInstructor(instructorInput);
      setCourse(courseInput);

      setStudentInput("");
      setInstructorInput("");
      setCourseInput("");

      
    } else {
      !studentInput.trim() && setStudentInputErr("isim bış olmamalı");
      !instructorInput.trim() && setInstructorInputErr("eğitmen bış olmamalı");
      !courseInput.trim() && setCourseInputErr("kurs bış olmamalı");
    }
  };

  return (
    <main>
      <form>
        <input
          onChange={(e) => {
            setStudentInput(e.target.value);
          }}
          type="text"
          placeholder="Student Name"
          value={studentInput}
        ></input>
        {studentInputErr && <p>{studentInputErr}</p>}
        <input
          onChange={(e) => {
            setInstructorInput(e.target.value);
          }}
          type="text"
          placeholder="instructor Name"
          value={instructorInput}
        ></input>
        {instructorInputErr && <p>{instructorInputErr}</p>}

        <input
          onChange={(e) => {
            setCourseInput(e.target.value);
          }}
          type="text"
          placeholder="Course Name"
          value={courseInput}
        ></input>
        {courseInputErr && <p>{courseInputErr}</p>}
      </form>
      <button type="submit" onClick={addStudent}>
        Listing
      </button>
     

      <hr />
      <ul>
        <li>{student}</li>
        <li>{instructor}</li>
        <li>{course}</li>
      </ul>
    </main>
  );
}

export default App;
