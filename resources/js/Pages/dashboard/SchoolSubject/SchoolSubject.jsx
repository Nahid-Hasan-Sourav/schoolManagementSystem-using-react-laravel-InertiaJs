
import React, { useContext, useState } from 'react';
import DashBoardLayout from '../../../Layout/DashBoardLayout';
import { AppContext } from '../../../context/AppProvider';
import ExamTypeModal from '../../../components/modal/ExamType/ExamTypeModal';
import { router, usePage } from '@inertiajs/react';
import toast from 'react-hot-toast';
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import SchoolSubjectModal from '../../../components/modal/SchoolSubject/SchoolSubjectModal';

const SchoolSubject = () => {
    const {setIsDisplayedModal,editModalOpen,seteditModalOpen} = useContext(AppContext)
    const { flash, datas } = usePage().props;
    const [subjectData,setsubjectData] = useState({})
    const [inputSubjectType,setinputSubjectType]=useState();
    const addStudentClassModalOpen=()=>{
        setinputSubjectType("")
        setIsDisplayedModal((prev) => !prev);
        seteditModalOpen(false)

    }
        //submit data from modal form
        const subjectSubmit = (e) => {
            e.preventDefault();
            console.log("Class Name : ",subjectData);
            let btnText = e.nativeEvent.submitter.textContent;
            let id   =e.nativeEvent.submitter.value
            const form = e.target;


            const subjectDatas = {
                inputSubjectType,
            };
            if(btnText==="Add New Subject"){
                console.log("Exam type btn == : ",subjectDatas);
                router.post("/add-subject", subjectDatas, {
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
                    toast.success("SUBJECT ADDED SUCCESSFULLY !!");
                },
            });
            }

            else{
                // console.log("Class Name Datas for update -- : ",subjectDatas)
                router.put(`/update-subject/${id}`, subjectDatas, {
                onSuccess: (props) => {

                    if (props?.props?.flash?.success) {

                    }
                },
                onFinish: (visit) => {

                    //close the modal and change the state start here
                    setIsDisplayedModal((prev) => !prev);
                    //close the modal and change the state end here
                    form.reset();
                    toast.success("SUBJECT UPDATED SUCCESSFULLY !!");
                },
            });
            }

        };

          //click the edit icon and showing the edit modal start here
    const editSubject =(e,data)=>{

        setIsDisplayedModal((prev) => !prev);

        seteditModalOpen(true);
        //set the data for showing on modal start here
        setsubjectData(data)
        //set the data for showing on modal end here

        //set the data for passed data in subjectDatas object start here
        setinputSubjectType(data.name)
        //set the data for passed data in subjectDatas object end here

    }
    //click the edit icon and showing the edit modal end here

    const deleteSubject = (e,id) =>{
        swal({
            title: "Are you sure?",
            text: "You Want Top Delete The Fee Category ?? ",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                // console.log(willDelete)

                router.delete(`/delete-subject/${id}`,{
                    onSuccess: (props) => {

                        if (props?.props?.flash?.success) {

                        }
                    },
                    onFinish: (visit) => {

                        swal("Fee Category has been deleted!", {
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
                        <h1>Subject</h1>
                        <button
                            type="button"
                            className="btn btn-success"
                            // data-bs-toggle="modal"
                            // data-bs-target="#exampleModal"
                            onClick={addStudentClassModalOpen}
                        >
                            Add Subject
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
                                {datas?.map((data,index) => {
                                    return(

                                        <tr>
                                        <th scope="row">{Number(index)+1}</th>
                                        <td>{data?.name}</td>
                                        <td>
                                            <button className="btn btn-primary m-2" onClick={(e)=>editSubject(e,data)}>
                                                <FiEdit />
                                            </button>
                                            <button className="btn btn-danger" onClick={(e)=>deleteSubject(e,data.id)}>
                                                <MdDelete />
                                            </button>
                                        </td>
                                    </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                   <SchoolSubjectModal
                    subjectSubmit={subjectSubmit}
                    subjectData={subjectData}
                    setsubjectData={setsubjectData}
                    inputSubjectType={inputSubjectType}
                    setinputSubjectType={setinputSubjectType}
                   />
                </div>


            </DashBoardLayout>
        </>
    );
};

export default SchoolSubject;

