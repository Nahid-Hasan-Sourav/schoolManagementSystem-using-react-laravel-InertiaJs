import { usePage } from '@inertiajs/react';
import React from 'react';
import DashBoardLayout from '../../../Layout/DashBoardLayout';

const AssignSubjectEdit = () => {
    const { flash, allClass,allSubject,data} = usePage().props;

    return (
        <DashBoardLayout>
        <div className="card">
             <div className="card-header d-flex justify-content-between align-items-center">
                 <h1>Assign Subject To Class(EDIT)</h1>
             </div>
             <hr />

             <form className="card-body ">

             <div className="row">
                 <div className="col-lg">
                             <div className="form-group">
                                 <label className="form-control-label">
                                     <span className="fs-4">Class:</span>{" "}
                                     <span className="tx-danger">*</span>
                                 </label>
                                 <select
                                     className="form-select"
                                     name="fee_category"

                                 >
                                     <option value="" >Select Class</option>
                                     {
                                         allClass?.map((data)=>{
                                             return(
                                                 <option value={data.id}>{data.name}</option>
                                             )
                                         })
                                     }


                                 </select>
                             </div>
                         </div>
             </div>

                 {/* {rows.map((row, index) => ( */}
                     <div  className="row">
                         <div className="col-lg-3">
                             <div className="form-group">
                                 <label className="form-control-label">
                                     <span className="fs-4">Select Subject:</span>{" "}
                                     <span className="tx-danger">*</span>
                                 </label>
                                 <select
                                     className="form-select"
                                     aria-label="Default select example"
                                 >
                                     <option value="" >Select Subject</option>

                                     {
                                         allSubject?.map((data)=>{
                                            return(
                                             <option value={data.id}>{data.name}</option>

                                            )
                                         })
                                     }
                                 </select>
                             </div>
                         </div>
                         <div className="col-lg-2 mg-t-20 mg-lg-t-0">
                             <div className="form-group mg-b-0">
                                 <label className="form-control-label">
                                     <span className="fs-4">Full Mark:</span>{" "}
                                     <span className="tx-danger">*</span>
                                 </label>
                                 <input
                                     className="form-control"
                                     placeholder="Input box (warning state)"
                                     type="text"
                                    //  value={row.fullMark}
                                    //  onChange={(e) => {
                                    //      const updatedRows = [...rows];
                                    //      updatedRows[index].fullMark = e.target.value;
                                    //      setRows(updatedRows);
                                    //  }}
                                 />
                             </div>
                         </div>
                         <div className="col-lg-2 mg-t-20 mg-lg-t-0">
                             <div className="form-group mg-b-0">
                                 <label className="form-control-label">
                                     <span className="fs-4">Pass Mark:</span>{" "}
                                     <span className="tx-danger">*</span>
                                 </label>
                                 <input
                                     className="form-control"
                                     placeholder="Input box (warning state)"
                                     type="text"
                                    //  value={row.passMark}
                                    //  onChange={(e) => {
                                    //      const updatedRows = [...rows];
                                    //      updatedRows[index].passMark = e.target.value;
                                    //      setRows(updatedRows);
                                    //  }}
                                 />
                             </div>
                         </div>
                         <div className="col-lg-3 mg-t-20 mg-lg-t-0">
                             <div className="form-group mg-b-0">
                                 <label className="form-control-label">
                                     <span className="fs-4">Subjective Mark:</span>{" "}
                                     <span className="tx-danger">*</span>
                                 </label>
                                 <input
                                     className="form-control"
                                     placeholder="Input box (warning state)"
                                     type="text"
                                    //  value={row.subjectiveMark}
                                    //  onChange={(e) => {
                                    //      const updatedRows = [...rows];
                                    //      updatedRows[index].subjectiveMark = e.target.value;
                                    //      setRows(updatedRows);
                                    //  }}
                                 />
                             </div>
                         </div>
                         {/* <div className="col-lg-2 mg-t-20 mg-lg-t-0">
                             <div className="form-group mg-b-0" style={{ marginTop: 43 }}>
                                 <div className="from-control">
                                     {index === 0 ? (
                                         <button
                                             onClick={handleAddRow}
                                             type="button"
                                             className="btn btn-success btn-sm"
                                         >
                                             <FaPlusSquare className="fs-2" />
                                         </button>
                                     ) : (
                                         <button
                                             type="button"
                                             className="btn btn-danger btn-sm"
                                             onClick={() => handleRemoveRow(row.id)}
                                         >
                                             Remove
                                         </button>
                                     )}
                                 </div>
                             </div>
                         </div> */}
                     </div>
                 {/* ))} */}
                 <div className="row p-3">
                     <button
                         type="button"
                        //  onClick={handleSubmitForm}
                         className="btn btn-lg btn-success w-25"
                     >
                         Update
                     </button>
                 </div>
             </form>
         </div>
     </DashBoardLayout>
    );
};

export default AssignSubjectEdit;