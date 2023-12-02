import React, { useState } from "react";
import { router } from '@inertiajs/react'
// import { Inertia } from "@inertiajs/inertia-react";
import DashBoardLayout from "../../../Layout/DashBoardLayout";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import AddStudentClassModal from "../../../components/modal/AddStudentClass/AddStudentClassModal";
const StudentclassName = () => {
    const[openModal,setOpenModal]=useState(true);

    // const addStudentClassModalOpen=(e)=>{
    //     setOpenModal(!openModal);console.log("Class Name Form",e);
    // }
    const studentClassSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const className = form.className.value;

        const classNameData ={
            className
        }
        // console.log("This is form data",classNameData )
        // router.visit('/add-class', {
        //     method: 'post',
        //     data: {classNameData},
        //     replace: false,
        //     preserveState: false,
        //     preserveScroll: false,
        //     only: [],
        //     headers: {},
        //     errorBag: null,
        //     forceFormData: false,
        //     onCancelToken: cancelToken => {},
        //     onCancel: () => {},
        //     onBefore: visit => {},
        //     onStart: visit => {},
        //     onProgress: progress => {},
        //     onSuccess: page => {console.log("Success",page)},
        //     onError: errors => {console.log("Errors",errors)},
        //     onFinish: visit => {console.log("Errors",visit)},
        //   })
        router.visit("/add-class", {
            method: 'post',
            data: {classNameData},
            onSuccess: (resp) => {
                console.log(resp);
            }
        });
        // Inertia.post('/add-class', { classNameData }, {
        //     onSuccess: (data) => {
        //         console.log("Form submitted successfully:", data);
        //     },
        //     onError: (errors) => {
        //         console.log("Form submission failed with errors:", errors);
        //     },
        // });

    };
    return (
        <>
            <DashBoardLayout>
                <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h1>Student Class List</h1>
                        <button type="button"
                        className="btn btn-success"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        // onClick={(e)=>addStudentClassModalOpen(e)}
                        >
                            Add Student Class
                        </button>
                    </div>
                    <div className="card-body ">
                    <table className="table table-striped ">
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
                    <AddStudentClassModal
                    studentClassSubmit={studentClassSubmit}
                    />
                </div>

                <>
                {/* {
                    openModal && (
                        <AddStudentClassModal />
                    )
                } */}

                </>
            </DashBoardLayout>
        </>
    );
};

export default StudentclassName;
