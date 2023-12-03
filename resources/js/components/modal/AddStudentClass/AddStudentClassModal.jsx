
import React, { useRef } from "react";

const AddStudentclassNameModal = ({ studentClassSubmit,isDisplayed,setIsDisplayed}) => {


    const closeModal = () => {
        setIsDisplayed((prev) => !prev);

    };
    return (
        <>
            <form onSubmit={(e) => studentClassSubmit(e)}>
                <div
                    // className={`modal fade ${additionalClass}`}
                    // id="exampleModal"
                    // aria-labelledby="exampleModalLabel"
                    // aria-hidden="true"
                    className={`modal fade  ${isDisplayed ? 'show' : ''}`}
                    style={{ display: isDisplayed ? 'block' : 'none' }}

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
                                        placeholder="class Name "
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
