import React from "react";
import "./Add.css"
import { useState } from "react";
import { useEffect } from "react";
import * as yup from 'yup';
import { useFormik } from "formik";
import { MyContext } from "../context/Context";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import MainPage from "./MainPage";



//field validation
export const fieldValidationSchema=yup.object({
  name:yup.string().required("Please enter the Name"),
  age:yup.number().required("Please enter the Age").min(21,"Please Enter Valid Age minimum Age is 21").max(50,"Please Enter Valid Age maximum Age is 50"),
  gender:yup.string().required("Please enter the Gender"),
  subject:yup.string().required("Please enter the Subject"),
  bloodGroup:yup.string().required("Please enter the Blood Group")
})



function EditTeacher() {

  const {teacherData,setTeacherData,ind,setInd}=useContext(MyContext);
  const history = useNavigate();



  const {handleSubmit, values, setValues,handleChange,handleBlur,touched,errors}=useFormik({
    initialValues:{
      name:"",
      age:"",
      gender:"", 
      subject:"",
      bloodGroup:""
    },
    validationSchema:fieldValidationSchema,
    onSubmit:(newTeacherData)=>{
      console.log("onsubmit",newTeacherData)
      updateTeacher(newTeacherData)
    }
  })

  useEffect(() => {
    const editTeacher = teacherData[ind]
 

    setValues({
      id:editTeacher._id,
      name:  editTeacher.name,
      age:editTeacher.age,
      gender:editTeacher.gender,
      subject:editTeacher.subject,
      bloodGroup:editTeacher.bloodGroup
    })

  }, [teacherData, ind])

  async function updateTeacher(newTeacherData) {
    
    const editedData={
      name : values.name,
      age : values.age,
      gender : values.gender,
      subject : values.subject,
      bloodGroup : values.bloodGroup
    }
    teacherData[ind]=editedData;

    const response=await fetch(`https://student-teacher-project2.onrender.com/profile/update/${values.id}`, {
      method:"PUT",
      body:JSON.stringify(newTeacherData),
      headers:{
        "content-Type":"application/json"
      }
    }) 

    

    const newdata=await response.json();
      if(newdata){
        setTeacherData([...teacherData]);
    history("/teacher")
      }

  }


  return (


    <MainPage>



      <div className="container">
        {/* row*/}
        <div className="row add-container">


          <div className="col-12">
            {/* col add-form*/}
          <form className="container add-form" onSubmit={handleSubmit}>
            <h1 className="add-heading"><b>Edit Teacher's Data</b></h1>
            
            <label>Name</label>

<input
    fullWidth
    placeholder="Enter the Name"
    name="name"
    type="name"
    value={values.name}
    onChange={handleChange}
    onBlur={handleBlur}
    className="textField"
  />
  <div style={{color:"red"}}>{touched.name && errors.name ? errors.name : ""}</div>
  
  <label>Age</label>

  <input
    fullWidth
    placeholder="Enter the Age"
    name="age"
    type="age"
    value={values.age}
    onChange={handleChange}
    onBlur={handleBlur}
    className="textField"
  />
  <div style={{color:"red"}}>{touched.age && errors.age  ? errors.age : ""}</div>
  

  <label>Gender</label>

  <input
    fullWidth
    placeholder="Enter the Gender"
    name="gender"
    type="gender"
    value={values.gender}
    onChange={handleChange}
    onBlur={handleBlur}
    className="textField"
  />
  <div style={{color:"red"}}>{touched.gender && errors.gender  ? errors.gender : ""}</div>
  

  <label>Subject</label>

  <input
    fullWidth
    placeholder="Enter the Subject"
    name="subject"
    type="subject"
    value={values.subject}
    onChange={handleChange}
    onBlur={handleBlur}
    className="textField"
  />
  <div style={{color:"red"}}>{touched.subject && errors.subject  ? errors.subject : ""}</div>
  
  <label>Blood Group</label>

  <input
    fullWidth
    placeholder="Enter the Blood Group"
    name="bloodGroup"
    type="bloodGroup"
    value={values.bloodGroup}
    onChange={handleChange}
    onBlur={handleBlur}
    className="textField"
  />
  <div style={{color:"red"}}>{touched.bloodGroup && errors.bloodGroup  ? errors.bloodGroup : ""}</div>
            <button className='btn form-btn btn-outline-success'>Update</button>
          </form>

          </div>






        </div>
      </div>






    </MainPage>
  );




}



export default EditTeacher