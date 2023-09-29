import "./Add.css";
import * as yup from 'yup';
import { useFormik } from "formik";
import MainPage from "./MainPage";
import { MyContext } from "../context/Context";
import React, { useContext, useEffect } from 'react'



  //field validation
  export const fieldValidationSchema=yup.object({
    name:yup.string().required("Please enter the Name"),
    age:yup.number().required("Please enter the Age").min(15,"Please Enter Valid Age minimum Age is 15").max(24,"Please Enter Valid Age maximum Age is 24"),
    gender:yup.string().required("Please enter the Gender"),
    class:yup.string().required("Please enter the Class"),
    bloodGroup:yup.string().required("Please enter the Blood Group")
  })


function Add() {
  const {studentData,setStudentData, }=useContext(MyContext);

  const {handleSubmit, values, handleChange,handleBlur,touched,errors, resetForm }=useFormik({
    initialValues:{
      name:"",
      age:"",
      gender:"", 
      class:"",
      bloodGroup:"",
      category:"student"
    },
    validationSchema:fieldValidationSchema,
    onSubmit:(newStudentData)=>{
      createStudent(newStudentData)
    }
  })


  //to ahndel onsubmit
  const createStudent = async(newStudentData) => {
    
    //fetch data
    // const response=await fetch("https://645899734eb3f674df7800be.mockapi.io/students", {
    const response=await fetch("https://student-teacher-project2.onrender.com/profile/create", {

      method:"POST",
      body:JSON.stringify(newStudentData),
      headers:{
        "content-Type":"application/json" 
      }
    })
    if (response.ok) {
      const data2 = await response.json();
      setStudentData([...studentData, data2]);
      resetForm();
      
      //when data is added successfully
      window.alert("Data added successfully!");
    } else {
      //where adding data failed (ex: network error)
      window.alert("Failed to add data. Please try again later.");
    }
  }

  return (
    <MainPage>

      <div className="container add">
        {/* row*/}
        <div className="row  add-container">


          {/* col */}
          <div className="col-12">

            {/* col add-form*/}
            <form className="container add-form " onSubmit={handleSubmit}>
              <h1 className="add-head heading"><b>Add Student's Data</b></h1>

              <label>Name</label>
              <input
                className="textField"
                fullWidth
                placeholder="Enter the Name"
                name="name"
                type="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div style={{color:"red"}}>{touched.name && errors.name ? errors.name : ""}</div>
              

              <label>Age</label>

              <input
                className="textField"
                fullWidth
                placeholder="Enter the Age"
                name="age"
                type="age"
                value={values.age}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div style={{color:"red"}}>{touched.age && errors.age  ? errors.age : ""}</div>
              

              <label>Gender</label>

              <input
                className="textField"
                fullWidth
                placeholder="Enter the Gender"
                name="gender"
                type="gender"
                value={values.gender}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div style={{color:"red"}}>{touched.gender && errors.gender  ? errors.gender : ""}</div>
              

              <label>Class</label>

              <input
                className="textField"
                fullWidth
                placeholder="Enter the Class"
                name="class"
                type="class"
                value={values.class}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div style={{color:"red"}}>{touched.class && errors.class  ? errors.class : ""}</div>
              
              <label>Blood Group</label>

              <input
                className="textField"
                fullWidth
                placeholder="Enter the Blood Group"
                name="bloodGroup"
                type="bloodGroup"
                value={values.bloodGroup}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div style={{color:"red"}}>{touched.bloodGroup && errors.bloodGroup  ? errors.bloodGroup : ""}</div>
              






              <button type="submit" className='btn form-btn btn-outline-primary' >Add</button>
            </form>
          </div>
        </div>
      </div>






    </MainPage>
  );

}



export default Add