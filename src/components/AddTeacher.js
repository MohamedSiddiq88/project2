import React from "react";
import "./Add.css";
import * as yup from 'yup';
import { useFormik } from "formik";
import MainPage from "./MainPage";
import { useContext } from "react";
import { MyContext } from "../context/Context";


 //field validation
 export const fieldValidationSchema=yup.object({
  name:yup.string().required("Please enter the Name"),
  age:yup.number().required("Please enter the Age").min(21,"Please Enter Valid Age minimum Age is 21").max(50,"Please Enter Valid Age maximum Age is 50"),
  gender:yup.string().required("Please enter the Gender"),
  subject:yup.string().required("Please enter the Subject"),
  bloodGroup:yup.string().required("Please enter the Blood Group")
})


function AddTeacher() {

  const {teacherData,setTeacherData,fetchProfiles}=useContext(MyContext);

  const {handleSubmit, values, handleChange,handleBlur,touched,errors, resetForm}=useFormik({
    initialValues:{
      name:"",
      age:"",
      gender:"", 
      subject:"",
      bloodGroup:"",
      category:"teacher"
    },
    validationSchema:fieldValidationSchema,
    onSubmit:(newTeacherData)=>{
      createTeacher(newTeacherData)
    }
  })

  // to ahndel onsubmit
  const createTeacher = async(newTeacherData) => {
  
     //fetch data
     const response=await fetch("https://student-teacher-project2.onrender.com/profile/create", {
      method:"POST",
      body:JSON.stringify(newTeacherData),
      headers:{
        "content-Type":"application/json"
      }
    })


    if (response.ok) {
      const newdata=await response.json();
      setTeacherData([...teacherData, newdata]);
      resetForm();
      fetchProfiles();
      
      //when data is added successfully
      window.alert("Data added successfully!");
    } else {
      //where adding data failed (ex: network error)
      window.alert("Failed to add data. Please try again later.");
    }


  }

  return (
    <MainPage>


      {/* container */}
      <div className="container">

        {/* row*/}
        <div className="row add-container">




          {/* col add-form*/}
          <div className="col-12">
          <form className="container-fluid add-form" onSubmit={handleSubmit}>
            <h1 className="heading"><b>Add Teacher's Data</b></h1>
            
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
              



            <button className='btn form-btn btn-outline-primary'>Add</button>
          </form>
          </div>




          

        </div>


      </div>



    </MainPage>
  );

}



export default AddTeacher