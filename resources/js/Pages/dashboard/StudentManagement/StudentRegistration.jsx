import React from 'react';
import DashBoardLayout from '../../../Layout/DashBoardLayout';
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
const StudentRegistration = () => {
    return (
        <>
           <DashBoardLayout>
                <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h1>Student List</h1>
                        <a
                            type="button"
                            className="btn btn-success"
                            href='/student/registration/create'
                            
                        >
                            Add Student
                        </a>
                    </div>
                    <div className="card-body ">
                        <table className="table table-striped ">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">ID No</th>
                                    <th scope="col">Roll</th>
                                    <th scope="col">Year</th>
                                    <th scope="col">Class</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Code</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {feeCategory?.map((data,index) => {
                                    return( */}

                                        <tr>
                                        <th scope="row">1</th>
                                        <td>Nahid Hasan</td>
                                        <td>0041</td>
                                        <td>23</td>
                                        <td>2022</td>
                                        <td>10</td>
                                        <td>--</td>
                                        <td></td>
                                        <td>
                                            <button className="btn btn-primary m-2" onClick={(e)=>editFeeCategory(e,data)}>
                                                <FiEdit />
                                            </button>
                                            <button className="btn btn-danger" onClick={(e)=>deleteFeeCategory(e,data.id)}>
                                                <MdDelete />
                                            </button>
                                        </td>
                                    </tr>
                                    {/* )
                                })} */}
                            </tbody>
                        </table>
                    </div>
                  
                </div>

            </DashBoardLayout>
        </>
    );
};

export default StudentRegistration;