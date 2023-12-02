// import React from "react";

// const AddStudentclassNameModal = ({openModal}) => {
//     // const studentClassSubmit = (e) => {
//     //     e.preventDefault();
//     //     alert("ssiugfs");
//     //     console.log("Class Name Form submitted");
//     // };

//     return (
//         <>
//         {
//             openModal && (
//                  <form onSubmit={(e)=>studentClassSubmit(e)}>
//             <div
//                 className="modal fade"
//                 id="exampleModal"
//                 aria-labelledby="exampleModalLabel"
//                 aria-hidden="true"
//             >
//                 <div className="modal-dialog w-100">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="exampleModalLabel">
//                                 Add Student Class
//                             </h5>
//                             {/* <button
//                                 type="button"
//                                 className="btn-close"
//                                 data-bs-dismiss="modal"
//                                 aria-label="Close"
//                             ></button> */}
//                         </div>

//                         <div className="modal-body">
//                             <div className="form-group">
//                                 <label className="form-control-label">
//                                     Student Class Name: <span className="tx-danger">*</span>
//                                 </label>
//                                 <input
//                                     className="form-control"
//                                     type="text"
//                                     name="className"
//                                     placeholder="class Name "
//                                 />
//                             </div>
//                         </div>

//                         <div className="modal-footer">
//                             {/* <button
//                                 type="button"
//                                 className="btn btn-secondary"
//                                 data-bs-dismiss="modal"
//                             >
//                                 Close
//                             </button> */}
//                             <button className="btn btn-primary" type="submit">
//                                 Add Class Name
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </form>
//             )
//         }
//         </>

//     );
// };

// export default AddStudentclassNameModal;

import React from "react";

const AddStudentclassNameModal = ({ studentClassSubmit }) => {
   

    return (
        <>
            <form onSubmit={(e) => studentClassSubmit(e)}>
                <div
                    className="modal fade"
                    id="exampleModal"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog w-100">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5
                                    className="modal-title"
                                    id="exampleModalLabel"
                                >
                                    Add Student Class
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>

                            <div className="modal-body">
                                <div className="form-group">
                                    <label className="form-control-label">
                                        Student Class Name:{" "}
                                        <span className="tx-danger">*</span>
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="className"
                                        placeholder="class Name "
                                    />
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button
                                    className="btn btn-primary"
                                    type="submit"
                                >
                                    Add Class Name
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default AddStudentclassNameModal;
