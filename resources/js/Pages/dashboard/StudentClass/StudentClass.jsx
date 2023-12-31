import React, { useContext, useEffect, useRef, useState } from "react";
import { router, usePage } from "@inertiajs/react";
import DashBoardLayout from "../../../Layout/DashBoardLayout";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import AddStudentClassModal from "../../../components/modal/AddStudentClass/AddStudentClassModal";
import toast from "react-hot-toast";
import { AppContext } from "../../../context/AppProvider";
import swal from 'sweetalert';


const StudentclassName = () => {
    const {setIsDisplayedModal,editModalOpen,seteditModalOpen} = useContext(AppContext)
    // console.log("Context value test--- : ",isDisplayedModal);
    const { flash, allClassName } = usePage().props;


    
    const [classNameData,setClassNameData] = useState({})
    const [inputClassName,setInputClassName]=useState();

    //open student add class name modal
    const addStudentClassModalOpen = () => {
        setInputClassName("")
        setIsDisplayedModal((prev) => !prev);
        seteditModalOpen(false)
    };

    //submit data from modal form
    const studentClassSubmit = (e) => {
        e.preventDefault();
        console.log("Class Name : ",classNameData);
        let btnText = e.nativeEvent.submitter.textContent;
        let id   =e.nativeEvent.submitter.value
        // console.log("E ----- ", e.nativeEvent.submitter.value);
        // console.log("E ----- ", e.nativeEvent.submitter.textContent);
        const form = e.target;
        // const className = form.className.value;

        const classNameDatas = {
            className:inputClassName,
        };
        if(btnText==="Add Class Name"){
            router.post("/add-class", classNameDatas, {
            onSuccess: (props) => {
                console.log("object,", props?.props?.flash?.success);
                if (props?.props?.flash?.success) {
                    // console.log("Closing modal...");
                    // closeModal();
                }
            },
            onFinish: (visit) => {
                setIsDisplayedModal((prev) => !prev);
                form.reset();
                toast.success("CLASS ADDED SUCCESSFULLY !!");
            },
        });
        }

        else{
            // console.log("Class Name Datas for update -- : ",classNameDatas)
            router.put(`/update-class/${id}`, classNameDatas, {
            onSuccess: (props) => {

                if (props?.props?.flash?.success) {

                }
            },
            onFinish: (visit) => {

                //close the modal and change the state start here
                setIsDisplayedModal((prev) => !prev);
                //close the modal and change the state end here
                form.reset();
                toast.success("CLASS NAME UPDATED SUCCESSFULLY !!");
            },
        });
        }

    };

    //click the edit icon and showing the edit modal start here
    const editClassName =(e,data)=>{

        setIsDisplayedModal((prev) => !prev);

        seteditModalOpen(true);
        //set the data for showing on modal start here
        setClassNameData(data)
        //set the data for showing on modal end here

        //set the data for passed data in classNameDatas object start here
        setInputClassName(data.name)
        //set the data for passed data in classNameDatas object end here

    }
    //click the edit icon and showing the edit modal end here

    const deleteClassName = (e,id) =>{
        swal({
            title: "Are you sure?",
            text: "You Want Top Delete The Class Name ?? ",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                // console.log(willDelete)

                router.delete(`/delete-class/${id}`,{
                    onSuccess: (props) => {

                        if (props?.props?.flash?.success) {

                        }
                    },
                    onFinish: (visit) => {

                        swal("Class Name has been deleted!", {
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
                        <h1>Student Class List</h1>
                        <button
                            type="button"
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
                                {allClassName?.map((data,index) => {
                                    return(

                                        <tr>
                                        <th scope="row">{Number(index)+1}</th>
                                        <td>{data?.name}</td>
                                        <td>
                                            <button className="btn btn-primary m-2" onClick={(e)=>editClassName(e,data)}>
                                                <FiEdit />
                                            </button>
                                            <button className="btn btn-danger" onClick={(e)=>deleteClassName(e,data.id)}>
                                                <MdDelete />
                                            </button>
                                        </td>
                                    </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <AddStudentClassModal
                        studentClassSubmit={studentClassSubmit}
                        editModalOpen={editModalOpen}
                        classNameData={classNameData}
                        setClassNameData={setClassNameData}
                        inputClassName={inputClassName}
                        setInputClassName={setInputClassName}
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
