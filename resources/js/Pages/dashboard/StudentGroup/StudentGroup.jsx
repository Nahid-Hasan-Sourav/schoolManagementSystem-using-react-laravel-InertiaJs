import React, { useContext, useState } from 'react';
import DashBoardLayout from '../../../Layout/DashBoardLayout';
import { MdDelete } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import { AppContext } from '../../../context/AppProvider';
import StudentGroupModal from '../../../components/modal/StudentGroup/StudentGroupModal';
import { router, usePage } from '@inertiajs/react';
import toast from 'react-hot-toast';

const StudentGroup = () => {
    const {isDisplayedModal, setIsDisplayedModal,seteditModalOpen} = useContext(AppContext)
    const [inputGroupValue,setinputGroupValue] = useState();
    const [studentGroupData, setStudentGroupData] = useState({});

    const { flash, allGroup } = usePage().props;

    const addStudentClassModalOpen =()=>{
        setinputGroupValue('')
        seteditModalOpen(false);
        setIsDisplayedModal((prev)=>!prev)
       
    }

    const groupSubmit =(e)=>{
        e.preventDefault();
        const form = e.target;
        let btnText = e.nativeEvent.submitter.textContent;
        let id = e.nativeEvent.submitter.value;

        const groutData = {
            inputGroupValue,
        };

        if (btnText === "Add Student Group") {
            router.post("/add-group", groutData, {
                onSuccess: (props) => {
                    // console.log("object,", props?.props?.flash?.success);
                    if (props?.props?.flash?.success) {
                    }
                },
                onFinish: (visit) => {
                    console.log("Working on finish");
                    setIsDisplayedModal((prev) => !prev);
                    form.reset();
                    toast.success("GROUP ADDED SUCCESSFULLY !!");
                },
            });
        }
        if (btnText === "Update Student Group") {
            // console.log("Update Year : ", yearData);
            // console.log("Id : ", id);
            router.put(`/update-group/${id}`, groutData, {
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
    }

    const editGroup = (e,data) =>{
        setIsDisplayedModal((prev)=>!prev)
        seteditModalOpen(true);
        setinputGroupValue(data.name)
        setStudentGroupData(data)
    }

    const deleteGroup =(e,id)=>{
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

                router.delete(`/delete-group/${id}`,{
                    onSuccess: (props) => {

                        if (props?.props?.flash?.success) {

                        }
                    },
                    onFinish: (visit) => {

                        swal("Group has been deleted!", {
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
        <DashBoardLayout>
             <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h1>Student Group List</h1>
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={addStudentClassModalOpen}
                        >
                            Add Student Group
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
                                {allGroup?.map((data, index) => {
                                    return (
                                        <tr>
                                            <th scope="row">
                                                {Number(index) + 1}
                                          
                                            </th>
                                            <td>{data.name}</td>
                                            <td>
                                                <button
                                                    className="btn btn-primary m-2"
                                                    
                                                    onClick={(e) =>
                                                        editGroup(e, data)
                                                    }
                                                >
                                                    <FiEdit />
                                                </button>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={(e) =>
                                                        deleteGroup(
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
                 <StudentGroupModal
                 groupSubmit={groupSubmit}
                 inputGroupValue={inputGroupValue}
                 setinputGroupValue={setinputGroupValue}
                 studentGroupData={studentGroupData}
                 />
                </div>
        </DashBoardLayout>
    );
};

export default StudentGroup;