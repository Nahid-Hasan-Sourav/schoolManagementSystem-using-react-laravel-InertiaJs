import React, { useContext, useState } from "react";
import DashBoardLayout from "../../../Layout/DashBoardLayout";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { AppContext } from "../../../context/AppProvider";
import StudentYearModal from "../../../components/modal/StudentYear/StudentYearModal";
import { router, usePage } from "@inertiajs/react";
import toast from "react-hot-toast";

const StudentYear = () => {
    const { setIsDisplayedModal, editModalOpen, seteditModalOpen } =
        useContext(AppContext);
    const [inputYearValue, setinputYearValue] = useState();
    const [studentYearData, setStudentYearData] = useState({});

    const { flash, allYear } = usePage().props;

    const addStudentClassModalOpen = () => {
        setinputYearValue("");
        seteditModalOpen(false);
        setIsDisplayedModal((prev) => !prev);
    };

    //submit year data from modal
    const YearSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        let btnText = e.nativeEvent.submitter.textContent;
        let id = e.nativeEvent.submitter.value;

        const yearData = {
            inputYearValue,
        };

        if (btnText === "Add Student Year") {
            router.post("/add-year", yearData, {
                onSuccess: (props) => {
                    // console.log("object,", props?.props?.flash?.success);
                    if (props?.props?.flash?.success) {
                    }
                },
                onFinish: (visit) => {
                    setIsDisplayedModal((prev) => !prev);
                    form.reset();
                    toast.success("YEAR ADDED SUCCESSFULLY !!");
                },
            });
        }
        if (btnText === "Update Student Year") {
            // console.log("Update Year : ", yearData);
            // console.log("Id : ", id);
            router.put(`/update-year/${id}`, yearData, {
                onSuccess: (props) => {
                    //console.log("object,", props?.props?.flash?.success);
                    if (props?.props?.flash?.success) {

                    }
                },
                onFinish: (visit) => {
                    setIsDisplayedModal((prev) => !prev);
                    form.reset();
                    toast.success("YEAR UPDATED SUCCESSFULLY !!");
                },
            });
        }
    };

    const editYear = (e, data) => {
        seteditModalOpen(true);
        setIsDisplayedModal((prev) => !prev);
        setinputYearValue(data.name);
        setStudentYearData(data);
    };
    const deleteYear = (e,id) =>{
        swal({
            title: "Are you sure?",
            text: "You Want Top Delete The Year  ?? ",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                // console.log(willDelete)

                router.delete(`/delete-year/${id}`,{
                    onSuccess: (props) => {

                        if (props?.props?.flash?.success) {

                        }
                    },
                    onFinish: (visit) => {

                        swal("Year has been deleted!", {
                            icon: "success",
                          });
                    },
                });
            } else {
              swal("You Don't Want to delete it.");
            }
          });
    }
    return (
        <>
            <DashBoardLayout>
                <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h1>Student Year List</h1>
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={addStudentClassModalOpen}
                        >
                            Add Student Year
                        </button>
                    </div>
                    <div className="card-body ">
                        <table className="table table-striped ">
                            <thead>
                                <tr>
                                    <th scope="col" style={{ width: "10%" }}>
                                        #
                                    </th>
                                    <th scope="col" style={{ width: "70%" }}>
                                        Name
                                    </th>
                                    <th scope="col" style={{ width: "20%" }}>
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {allYear?.map((data, index) => {
                                    return (
                                        <tr>
                                            <th scope="row">
                                                {Number(index) + 1}
                                            </th>
                                            <td>{data?.name}</td>
                                            <td>
                                                <button
                                                    className="btn btn-primary m-2"
                                                    onClick={(e) =>
                                                        editYear(e, data)
                                                    }
                                                >
                                                    <FiEdit />
                                                </button>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={(e) =>
                                                        deleteYear(
                                                            e,
                                                            data.id
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
                    <StudentYearModal
                        YearSubmit={YearSubmit}
                        inputYearValue={inputYearValue}
                        setinputYearValue={setinputYearValue}
                        studentYearData={studentYearData}
                    />
                </div>
            </DashBoardLayout>
        </>
    );
};

export default StudentYear;
