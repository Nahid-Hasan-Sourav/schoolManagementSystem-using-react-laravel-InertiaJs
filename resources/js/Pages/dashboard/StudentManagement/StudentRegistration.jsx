import React from 'react';
import DashBoardLayout from '../../../Layout/DashBoardLayout';

const StudentRegistration = () => {
    return (
        <>
           <DashBoardLayout>
                <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h1>Student Registration</h1>
                        <button
                            type="button"
                            className="btn btn-success"
                            
                        >
                            Registration
                        </button>
                    </div>
                    <div className="card-body ">
                        <table className="table table-striped ">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            {/* <tbody>
                                {feeCategory?.map((data,index) => {
                                    return(

                                        <tr>
                                        <th scope="row">{Number(index)+1}</th>
                                        <td>{data?.name}</td>
                                        <td>
                                            <button className="btn btn-primary m-2" onClick={(e)=>editFeeCategory(e,data)}>
                                                <FiEdit />
                                            </button>
                                            <button className="btn btn-danger" onClick={(e)=>deleteFeeCategory(e,data.id)}>
                                                <MdDelete />
                                            </button>
                                        </td>
                                    </tr>
                                    )
                                })}
                            </tbody> */}
                        </table>
                    </div>
                  
                </div>

            </DashBoardLayout>
        </>
    );
};

export default StudentRegistration;