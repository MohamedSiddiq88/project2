import React, { createContext, useEffect, useState } from 'react'


const MyContext = createContext();
function Context({children}) {
  const [ind,setInd]=useState();  
    const [studentData,setStudentData]=useState([]);
    const [teacherData,setTeacherData]=useState([]);
    const[profileOf,setProfileOf]=useState("Student");

    // async function fetchStudents(){
    //     let response = await fetch("https://645899734eb3f674df7800be.mockapi.io/students", {
    //       method:"GET"
    //     });
    //     let result = await response.json();
    //     setStudentData(result);
    //   }
    
      async function fetchProfiles(){
        let response = await fetch("https://student-teacher-project2.onrender.com/profile/all", {
          method:"GET"
        });
        let result = await response.json();
        console.log(result)
        const teachers = result.data.filter((ele) => ele.category === "teacher");
        setTeacherData(teachers);
        const students = result.data.filter((ele) => ele.category === "student");
        setStudentData(students);
      }
    
      useEffect(() => {
        // fetchStudents();
        fetchProfiles();
      }, []);
  return (
    <MyContext.Provider value={
      {studentData,setStudentData,teacherData,setTeacherData,ind,setInd,setProfileOf,profileOf,fetchProfiles}
      }>
      {children}
    </MyContext.Provider>
  )
}

export  { Context, MyContext }
