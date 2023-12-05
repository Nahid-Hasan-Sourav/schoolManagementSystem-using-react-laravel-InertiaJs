import React, { useContext } from 'react';
import { AppContext } from '../../../context/AppProvider';

const StudentYearModal = ({YearSubmit,inputYearValue, setinputYearValue,studentYearData}) => {
    const { isDisplayedModal, editModalOpen, seteditModalOpen,setIsDisplayedModal,} = useContext(AppContext);

    const closeModal = () =>{
       
        setIsDisplayedModal((prev)=>!prev)
    }

    return (
        <>
        <form onSubmit={(e) => YearSubmit(e)}>
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
                                {  editModalOpen? 'Update Student Year' :  'Add Student Year'

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
                                     Year:{" "}
                                    <span className="tx-danger">*</span>
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="year"
                                    placeholder="y e a r"
                                    value={inputYearValue}
                                    onChange={(e) => setinputYearValue(e.target.value)}

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
                                value={studentYearData.id}
                            >
                                 {  editModalOpen? 'Update Student Year' :  'Add Student Year'

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

export default StudentYearModal;