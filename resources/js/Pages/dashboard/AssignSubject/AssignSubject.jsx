import React, { useContext } from "react";
import DashBoardLayout from "../../../Layout/DashBoardLayout";
import { AppContext } from "../../../context/AppProvider";
import AssignSubjectModal from "../../../components/modal/AssignSubject/AssignSubjectModal";
import { router, usePage } from "@inertiajs/react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const AssignSubject = () => {
    const { setIsDisplayedModal, editModalOpen, seteditModalOpen } =
        useContext(AppContext);
    const { flash, datas } = usePage().props;
    console.log("This is all data : ", datas);

    // const route = useRoute(Ziggy);

    const deleteAssignSubject = (e, id) => {
        Swal.fire({
            title: "Delete Confirmation",
            text: "Are you sure you want to delete?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                
                router.delete(`/delete-assign-subect/${id}`,{
                    onSuccess: (props) => {
                        console.log("object,", props?.props?.flash?.success);
                        if (props?.props?.flash?.success) {
                            Swal.fire("Deleted!", "Your item has been deleted.", "success");        
                        }
                    },
                  
                });
            }
        });
        
    };

    return (
        <DashBoardLayout>
            <div className="">
                <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h1>Assign Subject To Class</h1>
                        <a
                            href={route("view.store.assignsubject")}
                            className="btn btn-success"
                        >
                            Assign Subject
                        </a>
                    </div>
                    <div className="card-body ">
                        <table className="table table-striped ">
                            <thead>
                                <tr>
                                    <th scope="col" style={{ width: "10%" }}>
                                        #
                                    </th>
                                    <th scope="col" style={{ width: "70%" }}>
                                        Class Name
                                    </th>
                                    <th scope="col" style={{ width: "20%" }}>
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {datas?.map((data, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">
                                                {Number(index) + 1}
                                            </th>
                                            <td>{data?.class?.name}</td>

                                            <td>
                                                <a
                                                    href={`/assign/subject/details/${data?.class?.id}`}
                                                    className="m-2 btn btn-success"
                                                >
                                                    <IoEyeSharp />
                                                </a>
                                                <a
                                                    href={`/assign/subject/edit/${data.id}`}
                                                    className="m-2 btn btn-primary"
                                                >
                                                    <FiEdit />
                                                </a>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={(e) =>
                                                        deleteAssignSubject(
                                                            e,
                                                            data?.id
                                                        )
                                                    }
                                                >
                                                    <MdDelete />
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    {/* <AssignSubjectModal>

                    </AssignSubjectModal> */}
                </div>
            </div>
        </DashBoardLayout>
    );
};

export default AssignSubject;
