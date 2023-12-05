import React, { useContext, useState } from 'react';
import DashBoardLayout from '../../../Layout/DashBoardLayout';
import { MdDelete } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import StudentShiftModal from '../../../components/modal/StudentShift/StudentShiftModal';
import { AppContext } from '../../../context/AppProvider';
import { router, usePage } from '@inertiajs/react';
import toast from 'react-hot-toast';

const StudentShift = () => {
    const { flash, allShift } = usePage().props;

    const {isDisplayedModal, setIsDisplayedModal,seteditModalOpen} = useContext(AppContext)
    const [inputShiftValue,setinputShiftValue] = useState();
    const [studentShiftData,setstudentShiftData] = useState({});

    const addStudentClassModalOpen =()=>{
        setstudentShiftData('');
        seteditModalOpen(false);
        setIsDisplayedModal((prev)=>!prev);
    }
    const groupSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        let btnText = e.nativeEvent.submitter.textContent;
        let id = e.nativeEvent.submitter.value;

        const shiftData = {
            inputShiftValue,
        };

        if (btnText === "Add Student Shift") {

            router.post("/add-shift", shiftData, {
                onSuccess: (props) => {
                    // console.log("object,", props?.props?.flash?.success);
                    if (props?.props?.flash?.success) {
                    }
                },
                onFinish: (visit) => {
                    setIsDisplayedModal((prev) => !prev);
                    form.reset();
                    toast.success("Shift ADDED SUCCESSFULLY !!");
                },
            });
        }
        if (btnText === "Update Student Shift") {
            // console.log("Update Year : ", yearData);
            // console.log("Id : ", id);
            router.put(`/update-shift/${id}`, shiftData, {
                onSuccess: (props) => {
                    //console.log("object,", props?.props?.flash?.success);
                    if (props?.props?.flash?.success) {

                    }
                },
                onFinish: (visit) => {
                    setIsDisplayedModal((prev) => !prev);
                    form.reset();
                    toast.success("SHIFT UPDATED SUCCESSFULLY !!");
                },
            });
        }
    };

    const editShift = (e, data) => {
        seteditModalOpen(true);
        setIsDisplayedModal((prev) => !prev);
        setinputShiftValue(data.name);
        setstudentShiftData(data);
    };
    const deleteShift = (e,id) =>{
        swal({
            title: "Are you sure?",
            text: "You Want Top Delete The Shift  ?? ",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                // console.log(willDelete)

                router.delete(`/delete-shift/${id}`,{
                    onSuccess: (props) => {

                        if (props?.props?.flash?.success) {

                        }
                    },
                    onFinish: (visit) => {

                        swal("Shift has been deleted!", {
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
                        <h1>Student Shift List</h1>
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={addStudentClassModalOpen}
                        >
                            Add Student Shift
                        </button>
                    </div>
                    <div className="card-body ">
                        <table className="table table-striped ">
                            <thead>
                                <tr>
                                    <th scope="col" style={{ width: "10%" }}>
                                        SL NO
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
                               {allShift?.map((data, index) => {
                                    return (
                                        <tr>
                                            <th scope="row">
                                              {Number(index)+1}

                                            </th>
                                            <td>{data?.name}</td>
                                            <td>
                                                <button
                                                    className="btn btn-primary m-2"

                                                    onClick={(e) =>
                                                        editShift(e, data)
                                                    }
                                                >
                                                    <FiEdit />
                                                </button>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={(e) =>
                                                        deleteShift(
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
                 <StudentShiftModal
                 groupSubmit={groupSubmit}
                 inputShiftValue={inputShiftValue}
                 setinputShiftValue={setinputShiftValue}
                 studentShiftData={studentShiftData}
                 setstudentShiftData={setstudentShiftData}
                 />
                </div>
        </DashBoardLayout>
        </>
    );
};

export default StudentShift;
