import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import MainPage from "./MainPage";
import { MyContext } from '../context/Context';


function Studentsprofiles() {
    
    const {studentData,setStudentData,setInd,setProfileOf,fetchProfiles}=useContext(MyContext);
    const history = useNavigate()

    async function deleteStudent(id) {


        const response = await fetch(`https://student-teacher-project2.onrender.com/profile/delete/${id}`, {
            method: "DELETE"
        })


        const data2=await response.json();
        // console.log(data2)
        
        
        setStudentData(studentData.filter((ele, inx) => ele._id != id))


    }

    useEffect(()=>{
        setProfileOf("Student");
        fetchProfiles();
      },[]);

    return (
        <MainPage>



            <div className="container student-page page">

                <h1 className='heading'>Student Profiles</h1>
                {/* add button */}
                {/* <div className="add-btn-div">
                    <button className="btn btn-primary" onClick={() => history("/add")}>Add Student</button>
                    <p className="msg"><mark>Scrollable Table</mark></p>
                </div> */}

                <div className="row">
                    <div className="col-12 table-col">

                        {/* student content */}
                        <table className="container">
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Class</th>
                                <th>Blood Group</th>
                                <th>Action</th>
                            </tr>

                            {
                                studentData.map((ele, ind) => (
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
                                                <button className="btn form-btn btn-primary" onClick={() => (history(`/edit/${ind}`), setInd(ind))}>Edit</button>

                                                {/* Delete */}
                                                <button className="btn form-btn btn-danger" onClick={() => deleteStudent(studentData[ind]._id)}>Delete</button>


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





export default Studentsprofiles
