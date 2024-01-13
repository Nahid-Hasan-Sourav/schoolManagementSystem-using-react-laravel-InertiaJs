import React, { useContext } from 'react';
import DashBoardLayout from '../../../Layout/DashBoardLayout';
import { AppContext } from '../../../context/AppProvider';
import AssignSubjectModal from '../../../components/modal/AssignSubject/AssignSubjectModal';
import { usePage } from '@inertiajs/react';
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";


const AssignSubject = () => {
    const {setIsDisplayedModal,editModalOpen,seteditModalOpen} = useContext(AppContext)
    const { flash,datas} = usePage().props;
    console.log("This is all data : ",datas)
    
     
    // const route = useRoute(Ziggy);

        const openModal=()=>{
        // setIsDisplayedModal((prev)=>!prev)
    }

    return (
        <DashBoardLayout>
            <div className="row">
            <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h1>Assign Subject To Class</h1>
                        <a
                            href={route('view.store.assignsubject')}
                            className="btn btn-success"
                            onClick={openModal}
                        >
                            Assign Subject
                        </a>
                    </div>
                    <div className="card-body ">
                        <table className="table table-striped ">
                            <thead>
                                <tr>
                                    <th scope="col" style={{ width: "10%" }}>#</th>
                                    <th scope="col" style={{ width: "70%" }}>Class Name</th>
                                   <th scope="col"  style={{ width: "20%" }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {datas?.map((data,index) => {
                                    return(

                                        <tr key={index}>
                                        <th scope="row">{Number(index)+1}</th>
                                        <td>{data?.class?.name}</td>
                                     

                                        <td>
                                             <a href={`/assign/subject/details/${data?.class?.id}`} className="btn btn-success m-2" >
                                                <IoEyeSharp />
                                            </a>
                                            <a href={`/assign/subject/edit/${data.id}`} className="btn btn-primary m-2" >
                                                <FiEdit/>
                                            </a>                                          
                                            <button className="btn btn-danger"
                                            onClick={(e)=>deleteFeeCategoryAmount(e,data?.id)}
                                            >
                                                <MdDelete/>
                                            </button>
                                        </td>
                                    </tr>
                                    )
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
