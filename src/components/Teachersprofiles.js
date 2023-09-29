import React from "react";
import { useNavigate } from 'react-router-dom';
import MainPage from "./MainPage";
import { useContext } from "react";
import { MyContext } from "../context/Context";
import { useEffect } from "react";


function Teachersprofiles() {
    const {teacherData,setTeacherData,ind,setInd,setProfileOf,fetchProfiles}=useContext(MyContext);

    const history = useNavigate();

    async function deleteStudent(id) {


        const response = await fetch(`https://student-teacher-project2.onrender.com/profile/delete/${id}`, {
            method: "DELETE"
        })


        const newdata=await response.json();
        // console.log(data2)
        
        
        setTeacherData(teacherData.filter((ele, inx) => ele._id != id))


    }

    useEffect(()=>{
        setProfileOf("Teacher");
        fetchProfiles();
      },[]);

    return (
        <MainPage>





            {/* container */}
            <div className="container page">

            <h1 className="heading">Teacher Profiles</h1>

                {/* add button */}
                {/* <div className="add-btn-div button-container">
                    <button type="button" className="btn btn-primary" onClick={() => history("/addteacher")}>Add Teacher</button>
                    <p className="msg"><mark>Scrollable Table</mark></p>
                </div> */}

                {/* row */}
                <div className="row">


                    {/* col */}
                    <div className="col-12 table-col">




                        {/* Teachers content */}
                        <table className="container-fluid">
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Subject</th>
                                <th>Blood Group</th>
                                <th>Action</th>
                            </tr>

                            {
                                teacherData.map((ele, ind) => (
                                    <tr key={ind}>
                                        <td>{ind + 1}</td>
                                        <td>{ele.name}</td>
                                        <td>{ele.age}</td>
                                        <td>{ele.gender}</td>
                                        <td>{ele.subject}</td>
                                        <td>{ele.bloodGroup}</td>


                                        {/* buttons */}
                                        <td>
                                            <div className="button-group" style={{ display: "flex" }}>


                                                {/* Edit */}
                                                <button className="btn form-btn btn-primary" onClick={() => (history("/editteacher"), setInd(ind))}>Edit</button>


                                                {/* Delete */}
                                                <button className="btn form-btn btn-danger" onClick={() =>deleteStudent(teacherData[ind]._id)}>Delete</button>



                                            </div>
                                        </td>



                                    </tr>
                                ))

                            }

                        </table>

                    </div>

                </div>


            </div>






        </MainPage>
    );
}





export default Teachersprofiles