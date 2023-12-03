import React, { useEffect, useRef, useState } from "react";
import { router, usePage } from '@inertiajs/react'
import DashBoardLayout from "../../../Layout/DashBoardLayout";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import AddStudentClassModal from "../../../components/modal/AddStudentClass/AddStudentClassModal";
import toast from "react-hot-toast";

const StudentclassName = () => {
    const { success } = usePage().props.flash;
     console.log('Message:', success);
     const [isDisplayed, setIsDisplayed] = useState(false);


    const addStudentClassModalOpen =()=>{
        setIsDisplayed((prev) => !prev);
    }
    const studentClassSubmit = (e,closeModal) => {
        e.preventDefault();
        const form = e.target;
        const className = form.className.value;

        const classNameData ={
            className
        }


        router.post('/add-class', classNameData, {
            onSuccess: (props) => {
                console.log("object,",props?.props?.flash?.success);
                if (props?.props?.flash?.success) {
                    // console.log("Closing modal...");
                    // closeModal();

                }

            },
            onFinish: visit => {
                setIsDisplayed((prev) => !prev);
                toast.success("CONGRATULATION !! THE ITEM IS BOOKED");
            },
        });






    };


    return (
        <>
            <DashBoardLayout>
                <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h1>Student Class List</h1>
                        <button type="button"
                        className="btn btn-success"
                        // data-bs-toggle="modal"
                        // data-bs-target="#exampleModal"
                        onClick={addStudentClassModalOpen}
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
                    setIsDisplayed={setIsDisplayed}
                    isDisplayed={isDisplayed}


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
