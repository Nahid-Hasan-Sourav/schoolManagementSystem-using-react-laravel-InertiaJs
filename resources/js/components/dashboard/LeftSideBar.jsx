import { Link, usePage } from '@inertiajs/react';
import React, { useState } from 'react';
import { IoIosSettings } from "react-icons/io";

const LeftSideBar = () => {
    const [toggle,setToggle]=useState(true);
    const {route,url}=usePage()
    console.log("Url --- : ",url)
    return (
        <>
            <div className="sl-sideleft">
                <div className="input-group input-group-search">
                    <input
                        type="search"
                        name="search"
                        className="form-control"
                        placeholder="Search"
                    />
                    <span className="input-group-btn">
                        <button className="btn">
                            <i className="fa fa-search"></i>
                        </button>
                    </span>
                </div>

                <label className="sidebar-label">Navigation</label>
                <div className="sl-sideleft-menu">
                    <a href="index.html" className="sl-menu-link">
                        <div className="sl-menu-item">
                            <i className="menu-item-icon icon ion-ios-home-outline tx-22"></i>
                            <span className="menu-item-label">Dashboard</span>
                        </div>
                    </a>


                    <a className={`sl-menu-link `} style={{ cursor:'pointer' }}>
                        <div className="sl-menu-item">
                            <IoIosSettings className="menu-item-icon icon  tx-24"/>
                            <span className="menu-item-label" onClick={()=>setToggle((prev)=>!prev)}>Setup Management</span>
                            <i className="menu-item-arrow fa fa-angle-down"></i>
                        </div>
                    </a>

                    <ul className={`sl-menu-sub nav flex-column `}
                    style={{ display:toggle ? 'block' : 'none' }}
                    >
                       <Link href="/student-class-view" className={`sl-menu-link ${url === '/student-class-view' ? 'active' : ''}`}>
                        <div className="sl-menu-item">
                            <i className="menu-item-icon icon ion-ios-photos-outline tx-20"></i>
                            <span className="menu-item-label">
                               Add Class
                            </span>
                        </div>
                    </Link>
                     <Link href="/student-year-view" className={`sl-menu-link ${url === '/student-year-view' ? 'active' : ''}`}>
                        <div className="sl-menu-item">
                            <i className="menu-item-icon ion-ios-pie-outline tx-20"></i>
                            <span className="menu-item-label">Add Year</span>
                            <i className="menu-item-arrow fa fa-angle-down"></i>
                        </div>
                    </Link>
                     <Link href="/group-view" className={`sl-menu-link ${url === '/group-view' ? 'active' : ''}`}>
                        <div className="sl-menu-item">
                            <i className="menu-item-icon ion-ios-pie-outline tx-20"></i>
                            <span className="menu-item-label">Add Group</span>
                            <i className="menu-item-arrow fa fa-angle-down"></i>
                        </div>
                    </Link>
                    <Link href="/shift-view" className={`sl-menu-link ${url === '/shift-view' ? 'active' : ''}`}>
                        <div className="sl-menu-item">
                            <i className="menu-item-icon ion-ios-pie-outline tx-20"></i>
                            <span className="menu-item-label">Add Shift</span>
                            <i className="menu-item-arrow fa fa-angle-down"></i>
                        </div>
                    </Link>

                    <Link href="/fee-category-view" className={`sl-menu-link ${url === '/fee-category-view' ? 'active' : ''}`}>
                        <div className="sl-menu-item">
                            <i className="menu-item-icon ion-ios-pie-outline tx-20"></i>
                            <span className="menu-item-label">Fee Category</span>
                            <i className="menu-item-arrow fa fa-angle-down"></i>
                        </div>
                    </Link>

                    <Link href="/fee-category-amount-view" className={`sl-menu-link ${url === '/fee-category-amount-view' ? 'active' : ''}`}>
                        <div className="sl-menu-item">
                            <i className="menu-item-icon ion-ios-pie-outline tx-20"></i>
                            <span className="menu-item-label">Fee Category Amount</span>
                            <i className="menu-item-arrow fa fa-angle-down"></i>
                        </div>
                    </Link>

                    <Link href="/exam-type-view" className={`sl-menu-link ${url === '/exam-type-view' ? 'active' : ''}`}>
                        <div className="sl-menu-item">
                            <i className="menu-item-icon ion-ios-pie-outline tx-20"></i>
                            <span className="menu-item-label">Exam Type</span>
                            <i className="menu-item-arrow fa fa-angle-down"></i>
                        </div>
                    </Link>

                    <Link href="/school-subject-view" className={`sl-menu-link ${url === '/school-subject-view' ? 'active' : ''}`}>
                        <div className="sl-menu-item">
                            <i className="menu-item-icon ion-ios-pie-outline tx-20"></i>
                            <span className="menu-item-label">School Subject</span>
                            <i className="menu-item-arrow fa fa-angle-down"></i>
                        </div>
                    </Link>
                    <Link href="/school-subject-view" className={`sl-menu-link ${url === '/school-subject-view' ? 'active' : ''}`}>
                        <div className="sl-menu-item">
                            <i className="menu-item-icon ion-ios-pie-outline tx-20"></i>
                            <span className="menu-item-label">Assign Subject</span>
                            <i className="menu-item-arrow fa fa-angle-down"></i>
                        </div>
                    </Link>
                    <Link href="/school-subject-view" className={`sl-menu-link ${url === '/school-subject-view' ? 'active' : ''}`}>
                        <div className="sl-menu-item">
                            <i className="menu-item-icon ion-ios-pie-outline tx-20"></i>
                            <span className="menu-item-label">Designation</span>
                            <i className="menu-item-arrow fa fa-angle-down"></i>
                        </div>
                    </Link>



                    </ul>

                </div>

                <br/>
            </div>
        </>
    );
};

export default LeftSideBar;
