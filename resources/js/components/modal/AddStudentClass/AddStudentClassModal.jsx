
import React, { useRef } from "react";

const AddStudentclassNameModal = ({ studentClassSubmit,isDisplayedModal,setIsDisplayedModal,editModalOpen,classNameData,setClassNameData,setInputClassName,inputClassName}) => {

//    console.log("Edit modal data ----- : ",classNameData);
    const closeModal = () => {
        setIsDisplayedModal((prev) => !prev);

    };
    return (
        <>
            <form onSubmit={(e) => studentClassSubmit(e)}>
                <div
               
                    className={`modal fade  ${isDisplayedModal ? 'show' : ''}`}
                    style={{ display: isDisplayedModal ? 'block' : 'none', top:-300 }}

                >
                    <div className="modal-dialog w-100">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5
                                    className="modal-title"
                                    id="exampleModalLabel"
                                >
                                    {  editModalOpen? 'Update Student Class' :  'Add Student Class'
                                       
                                    }
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={closeModal}
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
                                        placeholder="class Name"
                                        value={inputClassName}
                                        onChange={(e) => setInputClassName(e.target.value)}
                                       
                                    />
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={closeModal}
                                >
                                    Close
                                </button>
                                <button
                                    className="btn btn-primary"
                                    type="submit"
                                    value={classNameData.id}
                                >
                                     {  editModalOpen? 'Update Class Name' :  'Add Class Name'
                                       
                                    }
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
