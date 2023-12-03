import React from "react";

const TopHeader = () => {
    return (
        <>
            <div className="sl-header">
                <div className="sl-header-left">
                    <div className="navicon-left hidden-md-down">
                        <a id="btnLeftMenu" href="">
                            <i className="icon ion-navicon-round"></i>
                        </a>
                    </div>
                    {/* <div className="navicon-left hidden-lg-up">
                        <a id="btnLeftMenuMobile" href="">
                            <i className="icon ion-navicon-round"></i>
                        </a>
                    </div> */}
                </div>
                <div className="sl-header-right">
                    <nav className="nav">
                        <div className="dropdown">
                            <a
                                href=""
                                className="nav-link nav-link-profile"
                                data-toggle="dropdown"
                            >
                                <span className="logged-name">
                                    Jane
                                    <span className="hidden-md-down"> Doe</span>
                                </span>
                                <img
                                    src="../img/img3.jpg"
                                    className="wd-32 rounded-circle"
                                    alt=""
                                />
                            </a>
                            <div className="dropdown-menu dropdown-menu-header wd-200">
                                <ul className="list-unstyled user-profile-nav">
                                    <li>
                                        <a href="">
                                            <i className="icon ion-ios-person-outline"></i>{" "}
                                            Edit Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="icon ion-ios-gear-outline"></i>{" "}
                                            Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="icon ion-ios-download-outline"></i>{" "}
                                            Downloads
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="icon ion-ios-star-outline"></i>{" "}
                                            Favorites
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="icon ion-ios-folder-outline"></i>{" "}
                                            Collections
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="icon ion-power"></i>{" "}
                                            Sign Out
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="navicon-right">
                        <a id="btnRightMenu" href="" className="pos-relative">
                            <i className="icon ion-ios-bell-outline"></i>

                            <span className="square-8 bg-danger"></span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopHeader;
