import React, { createContext, useEffect, useState } from 'react'


const MyContext = createContext();
function Context({children}) {
  const [ind,setInd]=useState(0);  
    const [studentData,setStudentData]=useState([]);
    const [teacherData,setTeacherData]=useState([]);
    const[profileOf,setProfileOf]=useState("Student");
    const[keyArr,setKeyArr]=useState([]);
    
      async function fetchProfiles(){
        let response = await fetch("https://student-teacher-project2.onrender.com/profile/all", {
          method:"GET"
        });
        let result = await response.json();
        const teachers = result.data.filter((ele) => ele.category === "teacher");
        setTeacherData(teachers);
        const students = result.data.filter((ele) => ele.category === "student");
        setStudentData(students);

      }
    
      useEffect(() => {
        // fetchStudents();
        fetchProfiles();
      }, []);

      useEffect(()=>{
        console.log(studentData)
      },[studentData,teacherData])
  return (
    <MyContext.Provider value={
      {studentData,setStudentData,teacherData,setTeacherData,ind,setInd,setProfileOf,profileOf,fetchProfiles,keyArr,setKeyArr}
      }>
      {children}
    </MyContext.Provider>
  )
}

export  { Context, MyContext }
