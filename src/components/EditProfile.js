// import React from "react";
// import "./Add.css"
// import { useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
// import * as yup from 'yup';
// import { useFormik } from "formik";
// import MainPage from "./MainPage";
// import { useContext } from "react";
// import { MyContext } from "../context/Context";
// import { useState } from "react";




// //field validation
// export const fieldValidationSchema=yup.object({
//   name:yup.string().required("Please enter the Name"),
//   age:yup.number().required("Please enter the Age").min(15,"Please Enter Valid Age minimum Age is 15").max(24,"Please Enter Valid Age maximum Age is 24"),
//   gender:yup.string().required("Please enter the Gender"),
//   clas:yup.string().required("Please enter the Class"),
//   bloodGroup:yup.string().required("Please enter the Blood Group")
// })


// function EditProfile() {
//   const {studentData,setStudentData,teacherData,setTeacherData,ind,setInd,keyArr,setKeyArr,setProfileOf,profileOf,fetchProfiles}=useContext(MyContext);
// const [initialValuesObject,setInitialValuesObject]=useState({});
// const [settingValuesObject,setSettingValuesObject]=useState({});

//   const {handleSubmit, values,setValues, handleChange,handleBlur,touched,errors}=useFormik({
//     initialValues:initialValuesObject,
//     validationSchema:fieldValidationSchema,
//     onSubmit:(newStudentData,e)=>{
//         e.preventDefault();
//       console.log("onsubmit")
//       studentUpdate(newStudentData)
//     }
//   })

//   const history = useNavigate();

//   useEffect(() => {
//     setValues(settingValuesObject)

//   }, [settingValuesObject])

// async  function studentUpdate(newStudentData) {

// console.log("my name")

//     const editedData={
//       name : values.name,
//       age : values.age,
//       gender : values.gender,
//       class : values.class,
//       bloodGroup : values.bloodGroup
//     }
//     studentData[ind]=editedData;

//     const response=await fetch(`https://student-teacher-project2.onrender.com/profile/update/${values.id}`, {
//       method:"PUT",
//       body:JSON.stringify(newStudentData),
//       headers:{
//         "content-Type":"application/json"
//       }
//     }) 



//     const data2=await response.json();
//       if(data2){
//         console.log(data2);
//         setStudentData([...studentData]);
//     history("/profile")
//       }

//   }

// useEffect(()=>{
//     function keyArrHandle(){
//     if(profileOf=="Student"){
//         setKeyArr((pre)=>pre=["Name","Age","Gender","Class","Blood Group"]);
//         // setProfileData(studentData)
//         setInitialValuesObject({
//             name:"",
//             age:"",
//             gender:"", 
//             class:"",
//             bloodGroup:""
//           });
//           console.log(studentData[ind])

//     }else if(profileOf=="Teacher"){
//         setKeyArr((pre)=>pre=["Name","Age","Gender","Subject","Blood Group"])
//         // setProfileData(teacherData)
//         setInitialValuesObject({
//             name:"",
//             age:"",
//             gender:"", 
//             subject:"",
//             bloodGroup:""
//           });

//     }
// }
// // setProfileOf("Student");
// fetchProfiles();
// keyArrHandle();
// },[profileOf])

// useEffect(()=>{
//     function just(){
//         const editStudent = studentData[ind];
// console.log("update",studentData)

// setValues((pre) => {
//   const updatedValues = { ...pre};
// //   updatedValues.id=editStudent._id;

//   for (const [key, value] of Object.entries(initialValuesObject)) {
//     console.log(`${key}: ${editStudent[key]}`);
//     updatedValues[key] = editStudent[key];
//   }

//   return updatedValues;
// });



//     }
//     just();
// },[studentData])

// useEffect(()=>{
//     setInd((pre)=>pre=ind,console.log("welcome",ind));

//     },[])

// function checkObject(){
//     for (const [key, value] of Object.entries(values)) {
//         console.log(`new${key}: ${values[key]}`);

//       }
// }

//   return (


//     <MainPage>


//       <div className="container">
//         {/* row*/}
//         <div className="row add-container">



//           <div className="col-12">
//             {/* col add-form*/}
//             <form className="container add-form" onSubmit={()=>(handleSubmit,console.log("form",handleSubmit))}>
//               <h1 className="add-heading"><b>Edit Student's Data</b></h1>
//               {keyArr.map((ele,ind)=>(
//                  <div key={ind}>
//                  <label>{ele}</label>
//                  <input
//                 className="textField"
//                 fullWidth
//                 placeholder={`Enter the ${ele}`}
//                 name={ele=="Blood Group"?"bloodGroup":ele.toLowerCase()}
//                 // type={ele=="Blood Group"?values["bloodGroup"]:values[ele.toLowerCase()]}
//                 type="text"
//                 value={ele=="Blood Group"?values["bloodGroup"]:values[ele.toLowerCase()]}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               <div style={{ color: "red" }}>
//   {ele=="Blood Group"?(touched["bloodGroup"] && errors["bloodGroup"] ? errors["bloodGroup"] : ""):touched[ele.toLowerCase()] && errors[ele.toLowerCase()] ? errors[ele.toLowerCase()] : ""}
// </div>
//                  </div>
//                                 ))}




//               <button className='btn form-btn btn-outline-success' onClick={()=>checkObject()} >Update</button>
//             </form>
//           </div>



//         </div>
//       </div>

//     </MainPage>
//   );




// }



// export default EditProfile


import React from "react";
import "./Add.css"
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from "formik";
import MainPage from "./MainPage";
import { useContext } from "react";
import { MyContext } from "../context/Context";
import { useState } from "react";




//field validation
// export const fieldValidationSchema =profileOf=="Teacher"?yup.object({
//     name:yup.string().required("Please enter the Name"),
//     age:yup.number().required("Please enter the Age").min(21,"Please Enter Valid Age minimum Age is 21").max(50,"Please Enter Valid Age maximum Age is 50"),
//     gender:yup.string().required("Please enter the Gender"),
//     subject:yup.string().required("Please enter the Subject"),
//     bloodGroup:yup.string().required("Please enter the Blood Group")
//   }): yup.object({
//     name: yup.string().required("Please enter the Name"),
//     age: yup.number().required("Please enter the Age").min(15, "Please Enter Valid Age minimum Age is 15").max(24, "Please Enter Valid Age maximum Age is 24"),
//     gender: yup.string().required("Please enter the Gender"),
//     clas: yup.string().required("Please enter the Class"),
//     bloodGroup: yup.string().required("Please enter the Blood Group")
// })


function EditProfile() {
    //   const {studentData,setStudentData,ind,setInd}=useContext(MyContext);
    const { studentData, setStudentData, teacherData, setTeacherData, ind, setInd, keyArr, setKeyArr, setProfileOf, profileOf, fetchProfiles } = useContext(MyContext);
    const [initialValuesObject, setInitialValuesObject] = useState({});
    //   const [settingValuesObject,setSettingValuesObject]=useState({});

    const fieldValidationSchema =profileOf=="Teacher"?yup.object({
        name:yup.string().required("Please enter the Name"),
        age:yup.number().required("Please enter the Age").min(21,"Please Enter Valid Age minimum Age is 21").max(50,"Please Enter Valid Age maximum Age is 50"),
        gender:yup.string().required("Please enter the Gender"),
        subject:yup.string().required("Please enter the Subject"),
        bloodGroup:yup.string().required("Please enter the Blood Group")
      }): yup.object({
        name: yup.string().required("Please enter the Name"),
        age: yup.number().required("Please enter the Age").min(15, "Please Enter Valid Age minimum Age is 15").max(24, "Please Enter Valid Age maximum Age is 24"),
        gender: yup.string().required("Please enter the Gender"),
        clas: yup.string().required("Please enter the Class"),
        bloodGroup: yup.string().required("Please enter the Blood Group")
    })

    const { handleSubmit, values, setValues, handleChange, handleBlur, touched, errors } = useFormik({
        initialValues: initialValuesObject,
        validationSchema: fieldValidationSchema,
        onSubmit: (newProfileData) => {
            console.log("onsubmit", newProfileData)
            updateProfile(newProfileData)
        }
    })

    const history = useNavigate();



    async function updateProfile(newProfileData) {



        const editedData = (profileOf === "Student") ? {
            name: values.name,
            age: values.age,
            gender: values.gender,
            class: values.clas,
            bloodGroup: values.bloodGroup
        } : {
            name: values.name,
            age: values.age,
            gender: values.gender,
            subject: values.subject,
            bloodGroup: values.bloodGroup
        };
        
        if (profileOf === "Student") {
            studentData[ind] = editedData;
        } else {
            teacherData[ind] = editedData;
        }
        
        
        

        const response = await fetch(`https://student-teacher-project2.onrender.com/profile/update/${values.id}`, {
            method: "PUT",
            body: JSON.stringify(newProfileData),
            headers: {
                "content-Type": "application/json"
            }
        })



        const data2 = await response.json();
        if (data2) {
            (profileOf === "Student") ?
            setStudentData([...studentData])
       : 
       setTeacherData([...teacherData])
            // console.log(data2);
            history("/profiles")
        }

    }


    //   useEffects

    useEffect(() => {
        function keyArrHandle() {
            if (profileOf == "Student") {
                setKeyArr((pre) => pre = ["Name", "Age", "Gender", "Class", "Blood Group"]);
                // setProfileData(studentData)
                setInitialValuesObject({
                    name: "",
                    age: "",
                    gender: "",
                    clas: "",
                    bloodGroup: ""
                });
                //   console.log(studentData[ind])

            } else if (profileOf == "Teacher") {
                setKeyArr((pre) => pre = ["Name", "Age", "Gender", "Subject", "Blood Group"])
                // setProfileData(teacherData)
                setInitialValuesObject({
                    name: "",
                    age: "",
                    gender: "",
                    subject: "",
                    bloodGroup: ""
                });

            }
        }
        // setProfileOf("Student");
        // fetchProfiles();
        keyArrHandle();

    }, [])


    function just() {
        const editProfile = profileOf === "Student" ? studentData[ind] : teacherData[ind];
   
        console.log("update", studentData)

        setValues((pre) => {
            const updatedValues = { ...pre, id: editProfile._id };

            for (const [key, value] of Object.entries(initialValuesObject)) {
                console.log(`what ${key}: ${editProfile[key]}`);
                updatedValues[key] = editProfile[key];
            }

            return updatedValues;
        });
    }
    useEffect(() => {
        just();
    }, [initialValuesObject])



    return (


        <MainPage>


            <div className="container">
                {/* row*/}
                <div className="row add-container">



                    <div className="col-12">
                        {/* col add-form*/}
                        <form className="container add-form" onSubmit={handleSubmit}>
                            <h1 className="add-heading"><b>Edit Student's Data</b></h1>
                            {keyArr.map((ele, ind) => (
                                <div key={ind}>
                                    <label>{ele}</label>
                                    <input
                                        className="textField"
                                        fullWidth
                                        placeholder={`Enter the ${ele}`}
                                        name={ele == "Blood Group" ? "bloodGroup" : ele == "Class" ? "clas" : ele.toLowerCase()}
                                        // type={ele=="Blood Group"?values["bloodGroup"]:values[ele.toLowerCase()]}
                                        type="text"
                                        value={ele == "Blood Group" ? values["bloodGroup"] : ele == "Class" ? values["clas"] : values[ele.toLowerCase()]}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <div style={{ color: "red" }}>
                                        {ele == "Blood Group" ? (touched["bloodGroup"] && errors["bloodGroup"] ? errors["bloodGroup"] : "") : ele == "Class" ? (touched["clas"] && errors["clas"] ? errors["clas"] : "") : touched[ele.toLowerCase()] && errors[ele.toLowerCase()] ? errors[ele.toLowerCase()] : ""}
                                    </div>
                                </div>
                            ))}



                            <button className='btn form-btn btn-outline-success'>Update</button>
                        </form>
                    </div>



                </div>
            </div>

        </MainPage>
    );




}



export default EditProfile