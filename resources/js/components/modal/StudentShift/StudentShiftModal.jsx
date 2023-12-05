import React, { useContext } from 'react';
import { AppContext } from '../../../context/AppProvider';

const StudentShiftModal = ({groupSubmit,inputShiftValue,setinputShiftValue,studentShiftData}) => {
    const{isDisplayedModal,setIsDisplayedModal,editModalOpen,closeModal} = useContext(AppContext)

    return (
        <>
        <form onSubmit={(e) => groupSubmit(e)}>
            <div

                className={`modal fade  ${isDisplayedModal ? 'show' : ''}`}
                style={{ display: isDisplayedModal ? 'block' : 'none', top:-250 }}

            >
                <div className="modal-dialog w-100">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5
                                className="modal-title"
                                id="exampleModalLabel"
                            >
                                {  editModalOpen? 'Update Student Shift' :  'Add Student Shift'

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
                                     Shift:{" "}
                                    <span className="tx-danger">*</span>
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="group"
                                    placeholder="y e a r"
                                    value={inputShiftValue}
                                    onChange={(e) => setinputShiftValue(e.target.value)}

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
                                value={studentShiftData.id}
                            >
                                 {  editModalOpen? 'Update Student Shift' :  'Add Student Shift'

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

export default StudentShiftModal;
