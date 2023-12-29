import React, { useContext, useState } from "react";
import { AppContext } from "../../../context/AppProvider";
import { FaPlusSquare } from "react-icons/fa";
import '../AssignSubject/AssignSubjectModal.css'
const AssignSubjectModal = () => {
    const { isDisplayedModal, editModalOpen, closeModal } =
        useContext(AppContext);

    const [rows, setRows] = useState([{ id: 1, class: "", amount: "" }]);

    const [formData, setFormData] = useState([]);
    const [selectedFeeCategory, setSelectedFeeCategory] = useState("");

    const handleAddRow = () => {
        setRows([...rows, { id: rows.length + 1, class: "", amount: "" }]);
    };

    const handleRemoveRow = (id) => {
        const updatedRows = rows.filter((row) => row.id !== id);

        setRows(updatedRows);
    };

    return (
        <>
            <>
                <form onSubmit={(e) => studentClassSubmit(e)}>
                    <div
                        className={`modal fade  ${
                            isDisplayedModal ? "show" : ""
                        }`}
                        style={{
                            display: isDisplayedModal ? "block" : "none",
                            // top: -250,
                        }}
                    >
                        <div className="modal-dialog modal-dialog-scrollable"
                        style={{ maxWidth:"100% !important"}}
                        >
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5
                                        className="modal-title"
                                        id="exampleModalLabel"
                                    >
                                        {editModalOpen
                                            ? "Update Student Class"
                                            : "Add Student Class"}
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={closeModal}
                                    ></button>
                                </div>

                                <div className="modal-body">
                                    <form className="card-body ">
                                        <div className="row">
                                            <div className="col-lg">
                                                <div className="form-group">
                                                    <label className="form-control-label">
                                                        <span className="fs-4">
                                                            Class Name:
                                                        </span>{" "}
                                                        <span className="tx-danger">
                                                            *
                                                        </span>
                                                    </label>
                                                    <select
                                                        className="form-select"
                                                        name="fee_category"
                                                        value={
                                                            selectedFeeCategory
                                                        }
                                                        onChange={(e) =>
                                                            setSelectedFeeCategory(
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        <option
                                                            value=""
                                                            disabled
                                                        >
                                                            Select Class
                                                        </option>
                                                        {/* {
                            feeCategories?.map((data)=>{
                                return(
                                    <option value={data.id}>{data.name}</option>
                                )
                            })
                        } */}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        {rows.map((row, index) => (
                                            <div key={row.id} className="row">
                                                <div className="col-lg">
                                                    <div className="form-group">
                                                        <label className="form-control-label">
                                                            <span className="fs-4">
                                                                Student Subject:
                                                            </span>{" "}
                                                            <span className="tx-danger">
                                                                *
                                                            </span>
                                                        </label>
                                                        <select
                                                            className="form-select"
                                                            aria-label="Default select example"
                                                            value={row.class}
                                                            onChange={(e) => {
                                                                const updatedRows =
                                                                    [...rows];
                                                                updatedRows[
                                                                    index
                                                                ].class =
                                                                    e.target.value;
                                                                setRows(
                                                                    updatedRows
                                                                );
                                                            }}
                                                        >
                                                            {/* <option value="" disabled>Select Class</option>

                        {
                            classess?.map((data)=>{
                               return(
                                <option value={data.id}>{data.name}</option>

                               )
                            })
                        } */}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2 mg-t-20 mg-lg-t-0">
                                                    <div className="form-group mg-b-0">
                                                        <label className="form-control-label">
                                                            <span className="fs-4">
                                                                Full Mark:
                                                            </span>{" "}
                                                            <span className="tx-danger">
                                                                *
                                                            </span>
                                                        </label>
                                                        <input
                                                            className="form-control"
                                                            placeholder="Input box (warning state)"
                                                            type="text"
                                                            value={row.amount}
                                                            onChange={(e) => {
                                                                const updatedRows =
                                                                    [...rows];
                                                                updatedRows[
                                                                    index
                                                                ].amount =
                                                                    e.target.value;
                                                                setRows(
                                                                    updatedRows
                                                                );
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-2 mg-t-20 mg-lg-t-0">
                                                    <div className="form-group mg-b-0">
                                                        <label className="form-control-label">
                                                            <span className="fs-4">
                                                                Pass Mark:
                                                            </span>{" "}
                                                            <span className="tx-danger">
                                                                *
                                                            </span>
                                                        </label>
                                                        <input
                                                            className="form-control"
                                                            placeholder="Input box (warning state)"
                                                            type="text"
                                                            value={row.amount}
                                                            onChange={(e) => {
                                                                const updatedRows =
                                                                    [...rows];
                                                                updatedRows[
                                                                    index
                                                                ].amount =
                                                                    e.target.value;
                                                                setRows(
                                                                    updatedRows
                                                                );
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 mg-t-20 mg-lg-t-0">
                                                    <div className="form-group mg-b-0">
                                                        <label className="form-control-label">
                                                            <span className="fs-4">
                                                                Subjective Mark:
                                                            </span>{" "}
                                                            <span className="tx-danger">
                                                                *
                                                            </span>
                                                        </label>
                                                        <input
                                                            className="form-control"
                                                            placeholder="Input box (warning state)"
                                                            type="text"
                                                            value={row.amount}
                                                            onChange={(e) => {
                                                                const updatedRows =
                                                                    [...rows];
                                                                updatedRows[
                                                                    index
                                                                ].amount =
                                                                    e.target.value;
                                                                setRows(
                                                                    updatedRows
                                                                );
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-2 mg-t-20 mg-lg-t-0">
                                                    <div
                                                        className="form-group mg-b-0"
                                                        style={{
                                                            marginTop: 43,
                                                        }}
                                                    >
                                                        <div className="from-control">
                                                            {index === 0 ? (
                                                                <button
                                                                    onClick={
                                                                        handleAddRow
                                                                    }
                                                                    type="button"
                                                                    className="btn btn-success btn-sm"
                                                                >
                                                                    <FaPlusSquare className="fs-2" />
                                                                </button>
                                                            ) : (
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-danger btn-sm"
                                                                    onClick={() =>
                                                                        handleRemoveRow(
                                                                            row.id
                                                                        )
                                                                    }
                                                                >
                                                                    Remove
                                                                </button>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="row p-3">
                                            <button
                                                type="button"
                                                // onClick={handleSubmitForm}
                                                className="btn btn-lg btn-success w-25"
                                            >
                                                Add
                                            </button>
                                        </div>
                                    </form>
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
                                        // value={classNameData.id}
                                    >
                                        {editModalOpen
                                            ? "Update Class Name"
                                            : "Add Class Name"}
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

export default AssignSubjectModal;
