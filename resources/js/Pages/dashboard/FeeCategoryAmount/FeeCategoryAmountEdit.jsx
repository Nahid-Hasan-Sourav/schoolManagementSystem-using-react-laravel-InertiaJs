import React, { useState } from 'react';
import DashBoardLayout from '../../../Layout/DashBoardLayout';
import { FaPlusSquare } from 'react-icons/fa';
import { router, usePage } from '@inertiajs/react';
import toast from 'react-hot-toast';

const FeeCategoryAmountEdit = () => {
    const { flash, feeCategories,classess,data} = usePage().props;

    console.log("Categories",data)






    const handleSubmitForm = (e) => {
        e.preventDefault();

        const form=e.target;
        const formData={
            id:data?.id,
            feeCategory  :form.fee_category.value,
            classId      :form.select_class.value,
            new_amount   :form.new_amount.value,
            fixed_amount :form. fixed_amount.value

        }
        console.log("See",data);

        router.post("/update-fee-category-amount", formData, {
            onSuccess: (props) => {
                console.log("object,", props?.props?.flash?.success);
                if (props?.props?.flash?.success) {
                    toast.success("Fee Category Amount Added Successfully");

                }
            },
            onFinish: (props) => {
                // if(props?.props?.flash?.success){
                //     toast.success("Fee Category Amount Added Successfully");

                // }
            },
        });


    };
    return (
        <DashBoardLayout>
             <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h1>Edit Fee Category</h1>
                </div>
                <hr />

                <form className="card-body "
                onSubmit={(e)=> handleSubmitForm(e)}
                >

                <div className="row">
                    <div className="col-lg">
                                <div className="form-group">
                                    <label className="form-control-label">
                                        <span className="fs-4">Fee Category:</span>{" "}
                                        <span className="tx-danger">*</span>
                                    </label>
                                    <select
                                        className="form-select"
                                        name="fee_category"


                                    >
                                        <option value="" disabled>Select Category</option>
                                        {
                                            feeCategories?.map((item)=>{
                                                return(
                                                    <option value={item.id}
                                                    selected={item.id===data?.fee_category_id}
                                                    >{item.name}</option>
                                                )
                                            })
                                        }


                                    </select>
                                </div>
                            </div>
                </div>

                        <div  className="row">
                            <div className="col-lg">
                                <div className="form-group">
                                    <label className="form-control-label">
                                        <span className="fs-4">Student Class:</span>{" "}
                                        <span className="tx-danger">*</span>
                                    </label>
                                    <select
                                        className="form-select"
                                        aria-label="Default select example"
                                        name="select_class"
                                    >
                                        <option value="" disabled>Select Class</option>

                                        {
                                            classess?.map((item)=>{
                                               return(
                                                <option value={item.id}
                                                selected={item.id === data?.class_id}
                                                >{item.name}</option>

                                               )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg mg-t-20 mg-lg-t-0">
                                <div className="form-group mg-b-0">
                                    <label className="form-control-label">
                                        <span className="fs-4">Amount:</span>{" "}
                                        <span className="tx-danger">*</span>
                                    </label>
                                    <input
                                        className="form-control"
                                        placeholder="Input box (warning state)"
                                        type="text"
                                        name="fixed_amount"
                                        value={data?.amount}
                                    />
                                </div>
                            </div>
                            <div className="col-lg mg-t-20 mg-lg-t-0">
                                <div className="form-group mg-b-0">
                                    <label className="form-control-label">
                                        <span className="fs-4">Set New Amount:</span>{" "}
                                        <span className="tx-danger">*</span>
                                    </label>
                                    <input
                                        className="form-control"
                                        placeholder="Input box (warning state)"
                                        type="text"
                                        name='new_amount'
                                        readOnly={false}

                                    />
                                </div>
                            </div>

                        </div>

                    <div className="row p-3">
                        <button
                            type="submit"
                            className="btn btn-lg btn-success w-25"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </DashBoardLayout>
    );
};

export default FeeCategoryAmountEdit;
