
import React, { useContext, useEffect, useRef, useState } from "react";
import { router, usePage } from "@inertiajs/react";
import DashBoardLayout from "../../../Layout/DashBoardLayout";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import AddStudentClassModal from "../../../components/modal/AddStudentClass/AddStudentClassModal";
import toast from "react-hot-toast";
import { AppContext } from "../../../context/AppProvider";
import swal from 'sweetalert';
import FeeCategoryModal from "../../../components/modal/FeeCategory/FeeCategoryModal";


const FeeCategory = () => {
    const {setIsDisplayedModal,editModalOpen,seteditModalOpen} = useContext(AppContext)
    // console.log("Context value test--- : ",isDisplayedModal);
    const { flash, feeCategory } = usePage().props;



    const [feeCategoryData,setfeeCategoryData] = useState({})
    const [inputfeeCategory,setInputfeeCategory]=useState();

    //open student add class name modal
    const addFeeCategoryModalOpen = () => {
        setInputfeeCategory("")
        setIsDisplayedModal((prev) => !prev);
        seteditModalOpen(false)
    };

    //submit data from modal form
    const feeCategorySubmit = (e) => {
        e.preventDefault();
        console.log("Class Name : ",feeCategoryData);
        let btnText = e.nativeEvent.submitter.textContent;
        let id   =e.nativeEvent.submitter.value
        // console.log("E ----- ", e.nativeEvent.submitter.value);
        // console.log("E ----- ", e.nativeEvent.submitter.textContent);
        const form = e.target;
        // const className = form.className.value;

        const feeCategoryDatas = {
            feeCategory:inputfeeCategory,
        };
        if(btnText==="Add Fee Category"){
            router.post("/add-fee-category", feeCategoryDatas, {
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
            // console.log("Class Name Datas for update -- : ",feeCategoryDatas)
            router.put(`/update-fee-category/${id}`, feeCategoryDatas, {
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
        setfeeCategoryData(data)
        //set the data for showing on modal end here

        //set the data for passed data in feeCategoryDatas object start here
        setInputfeeCategory(data.name)
        //set the data for passed data in feeCategoryDatas object end here

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
                            onClick={addFeeCategoryModalOpen}
                        >
                            Add Fee
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
                                {feeCategory?.map((data,index) => {
                                    return(

                                        <tr>
                                        <th scope="row">{Number(index)+1}</th>
                                        <td>{data?.name}</td>
                                        <td>
                                            <button className="btn btn-primary m-2" onClick={(e)=>editFeeCategory(e,data)}>
                                                <FiEdit />
                                            </button>
                                            <button className="btn btn-danger" onClick={(e)=>deleteFeeCategory(e,data.id)}>
                                                <MdDelete />
                                            </button>
                                        </td>
                                    </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <FeeCategoryModal
                        feeCategorySubmit={feeCategorySubmit}
                        feeCategoryData={feeCategoryData}
                        setfeeCategoryData={setfeeCategoryData}
                        inputfeeCategory={inputfeeCategory}
                        setInputfeeCategory={setInputfeeCategory}
                    />
                </div>

            </DashBoardLayout>
        </>
    );
};

export default FeeCategory;
