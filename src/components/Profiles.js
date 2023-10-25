import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import MainPage from "./MainPage";
import { MyContext } from '../context/Context';
import { useState } from 'react';


function Profiles() {
    
    const {studentData,setStudentData,teacherData,setTeacherData,setInd,setProfileOf,profileOf,fetchProfiles,keyArr,setKeyArr}=useContext(MyContext);
    const history = useNavigate()
    const [profileData,setProfileData]=useState([]);
    const [loading, setLoading] = useState(true);

   


    async function deleteProfile(id) {


        const response = await fetch(`https://student-teacher-project2.onrender.com/profile/delete/${id}`, {
            method: "DELETE"
        })


        const data2=await response.json();
        // console.log(data2)
        
        
        setProfileData(profileData.filter((ele, inx) => ele._id != id))


    }

    useEffect(()=>{
        function keyArrHandle(){
            if(profileOf=="Student"){
                setKeyArr((pre)=>pre=["No","Name","Age","Gender","Class","Blood Group","Action"]);
                setProfileData(studentData)
            }else if(profileOf=="Teacher"){
                setKeyArr((pre)=>pre=["No","Name","Age","Gender","Subject","Blood Group","Action"])
                setProfileData(teacherData)
            }
        }
        // setProfileOf("Student");
        // fetchProfiles();
        keyArrHandle();
      },[studentData,profileOf]);
      useEffect(()=>{
        function isLoading() {
            if (profileData.length === 0) {
                setTimeout(isLoading, 1000);
            } else {
                setLoading(false);
            }
        }
    
        if (profileData.length === 0) {
            isLoading();
        console.log("prfile",profileData,profileOf,studentData)

        } else {
            setLoading(false);

        }

      },[profileData])

   

    return (
        <MainPage>



            <div className="container student-page page">

                <h1 className='heading'>{profileOf} Profiles</h1>
                
                

                <div className="row">
                    <div className="col-12 table-col">
                    {loading ? (
                            <p>Loading...</p>
                        ) : (
                        <table className="container">
                            <tr>
                                {keyArr.map((ele,ind)=>(
                                <th>{ele}</th>
                                ))}
                                
                            </tr>

                            {
                                profileData.map((ele, ind) => (
                                    <tr key={ind}>
                                        <td>{ind + 1}</td>
                                        <td>{ele.name}</td>
                                        <td>{ele.age}</td>
                                        <td>{ele.gender}</td>
                                        <td>{ele.class}</td>
                                        <td>{ele.bloodGroup}</td>


                                        {/* buttons */}
                                        <td>
                                            <div className="button-group" style={{ display: "flex" }}>

                                                {/* Edit */}
                                                <button className="btn form-btn btn-primary" onClick={() => (history(`/edit-profile/${ind}`), setInd(ind))}>Edit</button>

                                                {/* Delete */}
                                                <button className="btn form-btn btn-danger" onClick={() => deleteProfile(profileData[ind]._id)}>Delete</button>


                                            </div>
                                        </td>



                                    </tr>
                                ))

                            }

                        </table>

)}
                    </div>
                </div>
            </div>



        </MainPage>
    );
}





export default Profiles
