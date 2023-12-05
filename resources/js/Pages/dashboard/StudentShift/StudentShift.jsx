import React, { useContext } from 'react';
import DashBoardLayout from '../../../Layout/DashBoardLayout';
import { MdDelete } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import StudentShiftModal from '../../../components/modal/StudentShift/StudentShiftModal';
import { AppContext } from '../../../context/AppProvider';

const StudentShift = () => {
    const {isDisplayedModal, setIsDisplayedModal,seteditModalOpen} = useContext(AppContext)

    const addStudentClassModalOpen =()=>{
        setIsDisplayedModal((prev)=>!prev)
    }
    const groupSubmit=()=>{

    }
    const deleteGroup =()=>{

    }
    const editGroup =()=>{
        
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
                                {/* {allGroup?.map((data, index) => {
                                    return ( */}
                                        <tr>
                                            <th scope="row">
                                               1
                                          
                                            </th>
                                            <td>qweqw</td>
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
                                     {/* );
                                })}  */}
                            </tbody>
                        </table>
                    </div>
                 <StudentShiftModal
                 groupSubmit={groupSubmit}
                //  inputGroupValue={inputGroupValue}
                //  setinputGroupValue={setinputGroupValue}
                //  studentGroupData={studentGroupData}
                 />
                </div>
        </DashBoardLayout>
        </>
    );
};

export default StudentShift;