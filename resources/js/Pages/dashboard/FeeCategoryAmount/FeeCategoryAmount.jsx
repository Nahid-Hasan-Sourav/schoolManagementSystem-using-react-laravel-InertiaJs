
import React, { useEffect, useState } from "react";
import DashBoardLayout from "../../../Layout/DashBoardLayout";
import { router, usePage } from "@inertiajs/react";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";


const FeeCategoryAmount = () => {

    const {datas} = usePage().props;

    console.log("All Data ",datas);

    const deleteFeeCategoryAmount = (e,id) =>{
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

                router.delete(`/delete-fee-category/amount/${id}`,{
                    onSuccess: (props) => {

                        if (props?.props?.flash?.success) {
                            swal("Fee Category has been deleted!", {
                                icon: "success",
                              });
                        }
                    },
                    onFinish: (visit) => {


                    },
                });
            } else {
              swal("You Don't Want to delete it.");
            }
          });
    }

    return (
        <DashBoardLayout>


            <div className="row">
            <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h1>Student Fee Category </h1>
                        <a
                            href="/add-fee-category-view"
                            className="btn btn-success"

                        >
                            Add Fee Category
                        </a>
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
                                {datas?.map((data,index) => {
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
                                })}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

        </DashBoardLayout>
    );
};

export default FeeCategoryAmount;
