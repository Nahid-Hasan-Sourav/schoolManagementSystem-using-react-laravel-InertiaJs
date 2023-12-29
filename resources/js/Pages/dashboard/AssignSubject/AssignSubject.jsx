import React, { useContext } from 'react';
import DashBoardLayout from '../../../Layout/DashBoardLayout';
import { AppContext } from '../../../context/AppProvider';
import AssignSubjectModal from '../../../components/modal/AssignSubject/AssignSubjectModal';

const AssignSubject = () => {
    const {setIsDisplayedModal,editModalOpen,seteditModalOpen} = useContext(AppContext)


    const openModal=()=>{
        setIsDisplayedModal((prev)=>!prev)
    }

    return (
        <DashBoardLayout>
            <div className="row">
            <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h1>Assign Subject To Class</h1>
                        <button

                            className="btn btn-success"
                            onClick={openModal}
                        >
                            Assign Subject
                        </button>
                    </div>
                    <div className="card-body ">
                        <table className="table table-striped ">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Fee Category</th>
                                    <th scope="col">Class </th>
                                    <th scope="col">Fee Amount</th>
                                   <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {datas?.map((data,index) => {
                                    return(

                                        <tr key={index}>
                                        <th scope="row">{Number(index)+1}</th>
                                        <td>{data?.fee_category?.name}</td>
                                        <td>{data?.student_class?.name}</td>
                                        <td>{data?.amount}</td>

                                        <td>
                                            <a href={`/edit-fee-category/${data.id}`} className="btn btn-primary m-2" >
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
                                })} */}
                            </tbody>
                        </table>
                    </div>
                    <AssignSubjectModal>

                    </AssignSubjectModal>
                </div>
            </div>
        </DashBoardLayout>
    );
};

export default AssignSubject;
