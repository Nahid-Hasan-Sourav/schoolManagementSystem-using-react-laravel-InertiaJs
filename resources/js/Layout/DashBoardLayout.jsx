import React from 'react';
import LeftSideBar from '../components/dashboard/LeftSideBar';
import TopHeader from '../components/dashboard/TopHeader';

const DashBoardLayout = ({children}) => {
    return (
        <div>
        <div className="sl-logo">
            <a href="">
                {/* <i className="icon ion-android-star-outline"></i> starlight */}
                My School
            </a>
        </div>

        <LeftSideBar/>

        <TopHeader/>

        {/* <Notificatio/> */}

        <div className="sl-mainpanel">
            <nav className="breadcrumb sl-breadcrumb">
                <a className="breadcrumb-item" href="index.html">
                    Starlight
                </a>
                <span className="breadcrumb-item active">Dashboard</span>
            </nav>
            <div className="sl-pagebody">
                {children}
            </div>

            {/* <Footer/> */}
        </div>
    </div>
    );
};

export default DashBoardLayout;
