import React from "react";

const Footer = () => {
    return (
        <>
            <div className="sl-pagebody">
                <h1>Main Content</h1>
            </div>
            <footer className="sl-footer">
                <div className="footer-left">
                    <div className="mg-b-2">
                        Copyright &copy; 2017. Starlight. All Rights Reserved.
                    </div>
                    <div>Made by ThemePixels.</div>
                </div>
                <div className="footer-right d-flex align-items-center">
                    <span className="tx-uppercase mg-r-10">Share:</span>
                    <a
                        target="_blank"
                        className="pd-x-5"
                        href="https://www.facebook.com/sharer/sharer.php?u=http%3A//themepixels.me/starlight"
                    >
                        <i className="fa fa-facebook tx-20"></i>
                    </a>
                    <a
                        target="_blank"
                        className="pd-x-5"
                        href="https://twitter.com/home?status=Starlight,%20your%20best%20choice%20for%20premium%20quality%20admin%20template%20from%20Bootstrap.%20Get%20it%20now%20at%20http%3A//themepixels.me/starlight"
                    >
                        <i className="fa fa-twitter tx-20"></i>
                    </a>
                </div>
            </footer>
        </>
    );
};

export default Footer;
