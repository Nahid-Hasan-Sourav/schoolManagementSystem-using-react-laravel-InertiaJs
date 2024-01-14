import { router, usePage } from '@inertiajs/react';
import React, { useState } from 'react';
import DashBoardLayout from '../../../Layout/DashBoardLayout';

const AssignSubjectEdit = () => {
    const {flash, allClass,allSubject,data} = usePage().props;
    const [fullMark,setFullMark]=useState(data?.full_mark);
    const [passMark,setPassMark]=useState(data?.pass_mark);
    const [subjectiveMark,setSubjectiveMark]=useState(data?.subjective_mark);

    const submitAssignSubject=(e)=>{
        e.preventDefault();
        const form = e.target;
        const classId = form.class_id.value;
        const subject = form.subject.value;
        let id = data.id;

        const formData = {
            classId,
            subject,
            fullMark,
            passMark,
            subjectiveMark,
            id


        }
        router.post("/update-assign-subect/", formData, {
            onSuccess: (props) => {
                console.log("object,", props?.props?.flash?.success);
                if (props?.props?.flash?.success) {
                    toast.success("Fee Category Amount Added Successfully");

                }
            },
            onFinish: (props) => {
                // if(props?.props?.flash?.success){
                //     toast.success("Fee Category Amount Added Successfully");

                // }
            },
        });

    }

    return (
        <DashBoardLayout>
        <div className="card">
             <div className="card-header d-flex justify-content-between align-items-center">
                 <h1>Assign Subject To Class(EDIT)</h1>
             </div>
             <hr />

             <form className="card-body " onSubmit={(e)=>submitAssignSubject(e)}>

             <div className="row">
                 <div className="col-lg">
                             <div className="form-group">
                                 <label className="form-control-label">
                                     <span className="fs-4">Class:</span>{" "}
                                     <span className="tx-danger">*</span>
                                 </label>
                                 <select
                                     className="form-select"
                                     name="class_id"

                                 >
                                     <option value="" >Select Class</option>
                                     {
                                         allClass?.map((item)=>{
                                             return(
                                                 <option value={item.id}
                                                 selected={item.id===data?.class_id}
                                                 >{item.name}</option>
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
                                     name='subject'
                                     aria-label="Default select example"
                                 >
                                     <option value="" >Select Subject</option>

                                     {
                                         allSubject?.map((item)=>{
                                            return(
                                             <option selected={item?.id === data.subject_id} value={item.id}>{item.name}</option>

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
                                     value={fullMark}
                                     onChange={(e) => {
                            
                                        setFullMark(e.target.value);
                                     }}
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
                                     value={passMark}
                                     onChange={(e) => {
                                        
                                        setPassMark(e.target.value);
                                     }}
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
                                     value={subjectiveMark}
                                     onChange={(e) => {
                                        setSubjectiveMark(e.target.value);
                                     }}
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
                         type="submit"
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