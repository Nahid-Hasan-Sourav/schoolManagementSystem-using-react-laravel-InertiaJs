
import React, { useContext } from 'react';
import { AppContext } from '../../../context/AppProvider';

const SchoolSubjectModal = ({subjectSubmit,subjectData,setsubjectData,inputSubjectType,setinputSubjectType}) => {
    const {isDisplayedModal,setIsDisplayedModal,closeModal,editModalOpen} = useContext(AppContext)

    return (
        <>
        <form onSubmit={(e) => subjectSubmit(e)}>
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
                                {  editModalOpen? 'Update Subject Name' :  'Add New Subject'

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
                                    Subject Name:{" "}
                                    <span className="tx-danger">*</span>
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="subject"
                                    placeholder="Subject..."
                                    value={inputSubjectType}
                                    onChange={(e) => setinputSubjectType(e.target.value)}

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
                                value={subjectData.id}
                            >
                                 {  editModalOpen? 'Update Subject' :  'Add New Subject'

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

export default SchoolSubjectModal;
