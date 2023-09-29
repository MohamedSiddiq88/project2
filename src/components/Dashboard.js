import { MyContext } from '../context/Context'
// import "./Add.css";
import MainPage from "./MainPage";
import React, { useContext, useEffect } from 'react'


function Dashboard() {
    const {studentData,teacherData}=useContext(MyContext);
    return (
        <MainPage
            
        >

            <div className='dashboard'>
            <h1 className='text-center'><b>
                Teachers and Students porfile Management
            </b></h1>

            <div className="container" style={{marginTop:"2.5rem"}}>
                <div className="row">
                    <div className="col-6">
                        <div className="card home-card">
                            <h1 className="length">
                                {studentData.length}
                            </h1>
                            <h1 className="lengthof">
                                Students
                            </h1>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card home-card">
                            <h1 className="length">
                                {teacherData.length}
                            </h1>
                            <h1 className="lengthof">
                                Teachers
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </MainPage>
    );

}

export default Dashboard