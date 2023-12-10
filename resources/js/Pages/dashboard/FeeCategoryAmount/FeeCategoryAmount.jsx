// import React from "react";
// import DashBoardLayout from "../../../Layout/DashBoardLayout";
// import { FaPlusSquare } from "react-icons/fa";

// const FeeCategoryAmount = () => {
//     return (
//         <DashBoardLayout>
//             <div className="card">
//                 <div className="card-header d-flex justify-content-between align-items-center">
//                     <h1>Add Fee Category</h1>
//                 </div>
//                 <hr></hr>
//                 <form className="card-body ">
//                     <div className="row">
//                         <div className="col-lg">
//                             <div className="form-group">
//                                 <label className="form-control-label">
//                                     <span className="fs-4">
//                                         Select Fee Category:
//                                     </span>{" "}
//                                     <span className="tx-danger">*</span>
//                                 </label>
//                                 <select
//                                     class="form-select"
//                                     aria-label="Default select example"
//                                 >
//                                     <option selected>
//                                         Select Fee Category
//                                     </option>
//                                     <option value="1">One</option>
//                                     <option value="2">Two</option>
//                                     <option value="3">Three</option>
//                                 </select>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-lg">
//                             <div className="form-group  mg-b-0">
//                                 <label className="form-control-label">
//                                     <span className="fs-4">Student Class:</span>{" "}
//                                     <span className="tx-danger">*</span>
//                                 </label>
//                                 <select
//                                     class="form-select"
//                                     aria-label="Default select example"
//                                 >
//                                     <option selected>
//                                         Select Class
//                                     </option>
//                                     <option value="1">One</option>
//                                     <option value="2">Two</option>
//                                     <option value="3">Three</option>
//                                 </select>
//                             </div>
//                         </div>
//                         <div className="col-lg mg-t-20 mg-lg-t-0">
//                             <div className="form-group  mg-b-0">
//                                 <label className="form-control-label">
//                                     <span className="fs-4">
//                                        Amount:
//                                     </span>{" "}
//                                     <span className="tx-danger">*</span>
//                                 </label>
//                                 <input
//                                     className="form-control"
//                                     placeholder="Input box (warning state)"
//                                     type="text"
//                                 />
//                             </div>
//                         </div>
//                         <div className="col-lg mg-t-20 mg-lg-t-0">
//                             <div className="form-group  mg-b-0" style={{ marginTop:43 }}>

//                                 <div className="from-control">
//                                 <FaPlusSquare className="fs-2"/>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row p-3">
//                         <button type="submit" className="btn btn-lg btn-success w-25">Add</button>
//                     </div>
//                 </form>
//             </div>
//         </DashBoardLayout>
//     );
// };

// // export default FeeCategoryAmount;
// import React, { useState } from "react";
// import DashBoardLayout from "../../../Layout/DashBoardLayout";
// import { FaPlusSquare } from "react-icons/fa";

// const FeeCategoryAmount = () => {
//     const [rows, setRows] = useState([
//         { id: 1, class: "", amount: "" }
//     ]);

//     const handleAddRow = () => {
//         setRows([...rows, { id: rows.length + 1, class: "", amount: "" }]);
//     };

//     const handleRemoveRow = (id) => {
//         const updatedRows = rows.filter((row) => row.id !== id);
//         setRows(updatedRows);
//     };

//     return (
//         <DashBoardLayout>
//             <div className="card">
//                 <div className="card-header d-flex justify-content-between align-items-center">
//                     <h1>Add Fee Category</h1>
//                 </div>
//                 <hr />
//                 <form className="card-body ">
//                     {rows.map((row, index) => (
//                         <div key={row.id} className="row">
//                             <div className="col-lg">
//                                 <div className="form-group">
//                                     <label className="form-control-label">
//                                         <span className="fs-4">Student Class:</span>{" "}
//                                         <span className="tx-danger">*</span>
//                                     </label>
//                                     <select
//                                         className="form-select"
//                                         aria-label="Default select example"
//                                     >
//                                         <option selected>Select Class</option>
//                                         <option value="1">One</option>
//                                         <option value="2">Two</option>
//                                         <option value="3">Three</option>
//                                     </select>
//                                 </div>
//                             </div>
//                             <div className="col-lg mg-t-20 mg-lg-t-0">
//                                 <div className="form-group mg-b-0">
//                                     <label className="form-control-label">
//                                         <span className="fs-4">Amount:</span>{" "}
//                                         <span className="tx-danger">*</span>
//                                     </label>
//                                     <input
//                                         className="form-control"
//                                         placeholder="Input box (warning state)"
//                                         type="text"
//                                     />
//                                 </div>
//                             </div>
//                             <div className="col-lg mg-t-20 mg-lg-t-0">
//                                 <div className="form-group mg-b-0" style={{ marginTop: 43 }}>
//                                     <div className="from-control">
//                                         {index === 0 ? (
//                                             <button onClick={handleAddRow}
//                                             type="button"
//                                             className="btn btn-success btn-sm"
//                                             >
//                                                 <FaPlusSquare className="fs-2"  />
//                                             </button>

//                                         ) : (
//                                             <button
//                                                 type="button"
//                                                 className="btn btn-danger btn-sm"
//                                                 onClick={() => handleRemoveRow(row.id)}
//                                             >
//                                                 Remove
//                                             </button>
//                                         )}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                     <div className="row p-3">
//                         <button type="submit" className="btn btn-lg btn-success w-25">
//                             Add
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </DashBoardLayout>
//     );
// };

// export default FeeCategoryAmount;

import React, { useState } from "react";
import DashBoardLayout from "../../../Layout/DashBoardLayout";
import { FaPlusSquare } from "react-icons/fa";

const FeeCategoryAmount = () => {
    const [rows, setRows] = useState([
        { id: 1, class: "", amount: "" }
    ]);

    const [formData, setFormData] = useState([]);

    const handleAddRow = () => {
        setRows([...rows, { id: rows.length + 1, class: "", amount: "" }]);
    };

    const handleRemoveRow = (id) => {
        const updatedRows = rows.filter((row) => row.id !== id);
        setRows(updatedRows);
    };

    const handleAddForm = () => {
        const formattedData = rows.map((row) => ({
            classname: row.class,
            amount: row.amount
        }));
        setFormData([...formData, ...formattedData]);
        // Optionally, you can clear the rows for a new entry
        setRows([{ id: 1, class: "", amount: "" }]);
    };

    return (
        <DashBoardLayout>
            <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h1>Add Fee Category</h1>
                </div>
                <hr />
                <form className="card-body ">
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
                                        <option value="One">One</option>
                                        <option value="Two">Two</option>
                                        <option value="Three">Three</option>
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
                            onClick={handleAddForm}
                            className="btn btn-lg btn-success w-25"
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
            {/* Display the collected form data for testing purposes */}
            <div>
                <h2>Collected Form Data</h2>
                <pre>{JSON.stringify(formData, null, 2)}</pre>
            </div>
        </DashBoardLayout>
    );
};

export default FeeCategoryAmount;
