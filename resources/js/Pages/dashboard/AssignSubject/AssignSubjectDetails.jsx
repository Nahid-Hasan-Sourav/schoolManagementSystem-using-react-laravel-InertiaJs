import { usePage } from '@inertiajs/react';
import React from 'react';
import DashBoardLayout from '../../../Layout/DashBoardLayout';

const AssignSubjectDetails = () => {
    const { flash,details} = usePage().props;
    console.log("This is all data : ",details)
    return (
        <>
        <DashBoardLayout>
           <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h1>Assign Subject Details</h1>
                    <a
                            href={route('view.store.assignsubject')}
                            className="btn btn-success"
                            // onClick={openModal}
                        >
                            Assign Subject
                        </a>
                </div>
                <hr></hr>
                <div className='card-footer d-flex'>
                    <h5>Subject Details : </h5><span className='mx-2'>{details[0]?.class?.name}</span>
                </div>
                
                <hr />

                <div className="card-body ">
                        <table className="table table-striped ">
                            <thead>
                                <tr>
                                    <th scope="col" style={{ width: "20%" }}>#</th>
                                    <th scope="col" style={{ width: "20%" }}>Subject</th>
                                   <th scope="col"  style={{ width: "20%" }}>Full Mark</th>
                                   <th scope="col"  style={{ width: "20%" }}>Pass Mark</th>
                                   <th scope="col"  style={{ width: "20%" }}>Subjective Mark</th>
                                </tr>
                            </thead>
                            <tbody>
                                {details?.map((data,index) => {
                                    return(

                                        <tr key={index}>
                                        <th scope="row">{Number(index)+1}</th>
                                        <td>{data?.subject?.name}</td>
                                        <td>{data?.full_mark}</td>
                                        <td>{data?.pass_mark}</td>
                                        <td>{data?.subjective_mark}</td>
                                     
                                    </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
            </div>
        </DashBoardLayout>
        </>
    );
};

export default AssignSubjectDetails;