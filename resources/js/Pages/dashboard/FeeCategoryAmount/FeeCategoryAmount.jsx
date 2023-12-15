
import React, { useEffect, useState } from "react";
import DashBoardLayout from "../../../Layout/DashBoardLayout";
import { FaPlusSquare } from "react-icons/fa";

const FeeCategoryAmount = () => {




    return (
        <DashBoardLayout>


            <div className="row">
            <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h1>Student Fee Category </h1>
                        <a
                            href="/add-fee-category-view"
                            className="btn btn-success"

                        >
                            Add Fee Category
                        </a>
                    </div>
                    <div className="card-body ">
                        <table className="table table-striped ">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Fee Category</th>
                                    <th scope="col">Class </th>
                                    <th scope="col">Fee Amount</th>
                                   <th scope="col">Action</th>
                                </tr>
                            </thead>
                            {/* <tbody>
                                {feeCategory?.map((data,index) => {
                                    return(

                                        <tr>
                                        <th scope="row">{Number(index)+1}</th>
                                        <td>{data?.name}</td>
                                        <td>
                                            <button className="btn btn-primary m-2" onClick={(e)=>editFeeCategory(e,data)}>
                                                <FiEdit />
                                            </button>
                                            <button className="btn btn-danger" onClick={(e)=>deleteFeeCategory(e,data.id)}>
                                                <MdDelete />
                                            </button>
                                        </td>
                                    </tr>
                                    )
                                })}
                            </tbody> */}
                        </table>
                    </div>

                </div>
            </div>

        </DashBoardLayout>
    );
};

export default FeeCategoryAmount;
