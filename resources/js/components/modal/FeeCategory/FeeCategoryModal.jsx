import React, { useContext } from 'react';
import { AppContext } from '../../../context/AppProvider';

const FeeCategoryModal = ({feeCategorySubmit,feeCategoryData,setfeeCategoryData,inputfeeCategory,setInputfeeCategory}) => {
    const {isDisplayedModal,setIsDisplayedModal,closeModal,editModalOpen} = useContext(AppContext)

    return (
        <>
        <form onSubmit={(e) => feeCategorySubmit(e)}>
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
                                {  editModalOpen? 'Update Fee Category' :  'Add Fee Category'

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
                                    Fee Category Name:{" "}
                                    <span className="tx-danger">*</span>
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="FeeCategory"
                                    placeholder="Fee Category"
                                    value={inputfeeCategory}
                                    onChange={(e) => setInputfeeCategory(e.target.value)}

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
                                value={feeCategoryData.id}
                            >
                                 {  editModalOpen? 'Update Fee Category' :  'Add Fee Category'

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

export default FeeCategoryModal;
