import React from "react";
import DashBoardLayout from "../../../Layout/DashBoardLayout";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
const StudentclassName = () => {
    return (
        <>
            <DashBoardLayout>
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h1>Student Class List</h1>
                        <button className="btn btn-success">Add Student Class</button>
                    </div>
                    <div class="card-body ">
                    <table class="table table-striped ">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>
                                <button className="btn btn-primary m-2">
                                    <FiEdit />
                                </button>
                                <button className="btn btn-danger">
                                    <MdDelete />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                    </div>
                </div>

            </DashBoardLayout>
        </>
    );
};

export default StudentclassName;
