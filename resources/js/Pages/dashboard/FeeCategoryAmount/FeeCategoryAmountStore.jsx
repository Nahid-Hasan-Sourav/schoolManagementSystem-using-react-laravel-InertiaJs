import React, { useState } from 'react';
import DashBoardLayout from '../../../Layout/DashBoardLayout';
import { FaPlusSquare } from 'react-icons/fa';
import { router, usePage } from '@inertiajs/react';
import toast from 'react-hot-toast';

const FeeCategoryAmountStore = () => {
    const { flash, feeCategories,classess } = usePage().props;

    console.log("Categories",classess)

    const [rows, setRows] = useState([
        { id: 1, class: "", amount: "" }
    ]);

    const [formData, setFormData] = useState([]);
    const [selectedFeeCategory, setSelectedFeeCategory] = useState("");

    const handleAddRow = () => {
        setRows([...rows, { id: rows.length + 1, class: "", amount: "" }]);
    };

    const handleRemoveRow = (id) => {
        const updatedRows = rows.filter((row) => row.id !== id);

        setRows(updatedRows);
    };

    const handleSubmitForm = () => {
        const formattedData = rows.map((row) => ({
            classname: row.class,
            amount: row.amount
        }));


        const data = {
            selectedFeeCategory,
            formattedData
        }
        console.log("See",data);

        router.post("/add-fee-category-view", data, {
            onSuccess: (props) => {
                console.log("object,", props?.props?.flash?.success);
                if (props?.props?.flash?.success) {
                    // Optionally, you can clear the rows for a new entry

                    // setRows([{id: 1, class: "", amount: "" }]);
                    setRows(rows.map(row => ({ id: row.id, class: "", amount: "" })));

                    toast.success("Fee Category Amount Added Successfully");

                }
            },
            onFinish: (props) => {
                if(props?.props?.flash?.success){
                    toast.success("Fee Category Amount Added Successfully");

                }
            },
        });


    };
    return (
        <DashBoardLayout>
             <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h1>Add Fee Category</h1>
                </div>
                <hr />

                <form className="card-body ">

                <div className="row">
                    <div className="col-lg">
                                <div className="form-group">
                                    <label className="form-control-label">
                                        <span className="fs-4">Fee Category:</span>{" "}
                                        <span className="tx-danger">*</span>
                                    </label>
                                    <select
                                        className="form-select"
                                        name="fee_category"
                                        value={selectedFeeCategory}
                                        onChange={(e) => setSelectedFeeCategory(e.target.value)}

                                    >
                                        <option value="" disabled>Select Class</option>
                                        {
                                            feeCategories?.map((data)=>{
                                                return(
                                                    <option value={data.id}>{data.name}</option>
                                                )
                                            })
                                        }


                                    </select>
                                </div>
                            </div>
                </div>

                    {rows.map((row, index) => (
                        <div key={row.id} className="row">
                            <div className="col-lg">
                                <div className="form-group">
                                    <label className="form-control-label">
                                        <span className="fs-4">Student Class:</span>{" "}
                                        <span className="tx-danger">*</span>
                                    </label>
                                    <select
                                        className="form-select"
                                        aria-label="Default select example"
                                        value={row.class}
                                        onChange={(e) => {
                                            const updatedRows = [...rows];
                                            updatedRows[index].class = e.target.value;
                                            setRows(updatedRows);
                                        }}
                                    >
                                        <option value="" disabled>Select Class</option>

                                        {
                                            classess?.map((data)=>{
                                               return(
                                                <option value={data.id}>{data.name}</option>

                                               )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg mg-t-20 mg-lg-t-0">
                                <div className="form-group mg-b-0">
                                    <label className="form-control-label">
                                        <span className="fs-4">Amount:</span>{" "}
                                        <span className="tx-danger">*</span>
                                    </label>
                                    <input
                                        className="form-control"
                                        placeholder="Input box (warning state)"
                                        type="text"
                                        value={row.amount}
                                        onChange={(e) => {
                                            const updatedRows = [...rows];
                                            updatedRows[index].amount = e.target.value;
                                            setRows(updatedRows);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="col-lg mg-t-20 mg-lg-t-0">
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
                            </div>
                        </div>
                    ))}
                    <div className="row p-3">
                        <button
                            type="button"
                            onClick={handleSubmitForm}
                            className="btn btn-lg btn-success w-25"
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </DashBoardLayout>
    );
};

export default FeeCategoryAmountStore;
