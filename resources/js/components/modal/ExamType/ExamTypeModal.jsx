import React, { useContext } from "react";
import { AppContext } from "../../../context/AppProvider";

const ExamTypeModal = ({inputExamType,setinputExamType,examTypeData,examTypeSubmit}) => {
    const {isDisplayedModal,setIsDisplayedModal,closeModal,editModalOpen} = useContext(AppContext)

    return (
        <>
            <>
                <form onSubmit={(e) => examTypeSubmit(e)}>
                    <div
                        className={`modal fade  ${
                            isDisplayedModal ? "show" : ""
                        }`}
                        style={{
                            display: isDisplayedModal ? "block" : "none",
                            top: -250,
                        }}
                    >
                        <div className="modal-dialog w-100">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5
                                        className="modal-title"
                                        id="exampleModalLabel"
                                    >
                                        {editModalOpen
                                            ? "Update Exam Type"
                                            : "Add Exam Type"}
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
                                            Exam Type:{" "}
                                            <span className="tx-danger">*</span>
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="exam"
                                            placeholder="E x a m T y p e"
                                            value={inputExamType}
                                            onChange={(e) =>
                                                setinputExamType(
                                                    e.target.value
                                                )
                                            }
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
                                        value={examTypeData.id}
                                    >
                                        {editModalOpen
                                            ? "Update Exam Type"
                                            : "Add Exam Type"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </>
        </>
    );
};

export default ExamTypeModal;
