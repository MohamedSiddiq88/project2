import React from "react";
import "./Add.css"
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from "formik";
import MainPage from "./MainPage";
import { useContext } from "react";
import { MyContext } from "../context/Context";




//field validation
export const fieldValidationSchema=yup.object({
  name:yup.string().required("Please enter the Name"),
  age:yup.number().required("Please enter the Age").min(15,"Please Enter Valid Age minimum Age is 15").max(24,"Please Enter Valid Age maximum Age is 24"),
  gender:yup.string().required("Please enter the Gender"),
  clas:yup.string().required("Please enter the Class"),
  bloodGroup:yup.string().required("Please enter the Blood Group")
})


function Edit() {
  const {studentData,setStudentData,ind,setInd}=useContext(MyContext);

  const {handleSubmit, values,setValues, handleChange,handleBlur,touched,errors}=useFormik({
    initialValues:{
      name:"",
      age:"",
      gender:"", 
      clas:"",
      bloodGroup:""
    },
    validationSchema:fieldValidationSchema,
    onSubmit:(newStudentData)=>{
      console.log("onsubmit",newStudentData)
      studentUpdate(newStudentData)
    }
  })

  const history = useNavigate();

  useEffect(() => {
    const editStudent = studentData[ind]
    setValues({
      id:editStudent._id,
      name:  editStudent.name,
      age:editStudent.age,
      gender:editStudent.gender,
      clas:editStudent.class,
      bloodGroup:editStudent.bloodGroup
    })

  }, [studentData, ind])

async  function studentUpdate(newStudentData) {



    const editedData={
      name : values.name,
      age : values.age,
      gender : values.gender,
      class : values.clas,
      bloodGroup : values.bloodGroup
    }
    studentData[ind]=editedData;

    const response=await fetch(`https://student-teacher-project2.onrender.com/profile/update/${values.id}`, {
      method:"PUT",
      body:JSON.stringify(newStudentData),
      headers:{
        "content-Type":"application/json"
      }
    }) 

    

    const data2=await response.json();
      if(data2){
        console.log(data2);
        setStudentData([...studentData]);
    history("/student")
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
              <h1 className="add-heading"><b>Edit Student's Data</b></h1>
              
              
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
                name="clas"
                type="clas"
                value={values.clas}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div style={{color:"red"}}>{touched.clas && errors.clas  ? errors.class : ""}</div>
              
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
              

              

              <button className='btn form-btn btn-outline-success'>Update</button>
            </form>
          </div>



        </div>
      </div>

    </MainPage>
  );




}



export default Edit