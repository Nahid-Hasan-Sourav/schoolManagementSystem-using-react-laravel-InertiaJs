import React, { useContext, useState } from 'react';
import DashBoardLayout from '../../../Layout/DashBoardLayout';
import { AppContext } from '../../../context/AppProvider';
import ExamTypeModal from '../../../components/modal/ExamType/ExamTypeModal';
import { usePage } from '@inertiajs/react';

const ExamType = () => {
    const {setIsDisplayedModal,editModalOpen,seteditModalOpen} = useContext(AppContext)
    const { flash, feeCategory } = usePage().props;
    const [examTypeData,setexamTypeData] = useState({})
    const [inputExamType,setinputExamType]=useState();
    const addStudentClassModalOpen=()=>{
        setinputExamType("")
        setIsDisplayedModal((prev) => !prev);
        seteditModalOpen(false)

    }
        //submit data from modal form
        const examTypeSubmit = (e) => {
            e.preventDefault();
            console.log("Class Name : ",examTypeData);
            let btnText = e.nativeEvent.submitter.textContent;
            let id   =e.nativeEvent.submitter.value
            // console.log("E ----- ", e.nativeEvent.submitter.value);
            // console.log("E ----- ", e.nativeEvent.submitter.textContent);
            const form = e.target;
            // const className = form.className.value;

            const examTypeDatas = {
                feeCategory:inputExamType,
            };
            if(btnText==="Add Exam Type"){
                router.post("/add-fee-category", examTypeDatas, {
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
                    toast.success("FEE CATEGORY ADDED SUCCESSFULLY !!");
                },
            });
            }

            else{
                // console.log("Class Name Datas for update -- : ",examTypeDatas)
                router.put(`/update-fee-category/${id}`, examTypeDatas, {
                onSuccess: (props) => {

                    if (props?.props?.flash?.success) {

                    }
                },
                onFinish: (visit) => {

                    //close the modal and change the state start here
                    setIsDisplayedModal((prev) => !prev);
                    //close the modal and change the state end here
                    form.reset();
                    toast.success("FEE CATEGORY UPDATED SUCCESSFULLY !!");
                },
            });
            }

        };

          //click the edit icon and showing the edit modal start here
    const editFeeCategory =(e,data)=>{

        setIsDisplayedModal((prev) => !prev);

        seteditModalOpen(true);
        //set the data for showing on modal start here
        setexamTypeData(data)
        //set the data for showing on modal end here

        //set the data for passed data in examTypeDatas object start here
        setinputExamType(data.name)
        //set the data for passed data in examTypeDatas object end here

    }
    //click the edit icon and showing the edit modal end here

    const deleteFeeCategory = (e,id) =>{
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

                router.delete(`/delete-fee-category/${id}`,{
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
                        <h1>Student Class List</h1>
                        <button
                            type="button"
                            className="btn btn-success"
                            // data-bs-toggle="modal"
                            // data-bs-target="#exampleModal"
                            onClick={addStudentClassModalOpen}
                        >
                            Add Exam
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
                            {/* <tbody>
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
                            </tbody> */}
                        </table>
                    </div>
                   <ExamTypeModal
                    examTypeSubmit={examTypeSubmit}
                    examTypeData={examTypeData}
                    setexamTypeData={setexamTypeData}
                    inputExamType={inputExamType}
                    setinputExamType={setinputExamType}
                   />
                </div>


            </DashBoardLayout>
        </>
    );
};

export default ExamType;
