import { Link, usePage } from '@inertiajs/react';
import React from 'react';

const LeftSideBar = () => {
    const {route}=usePage()
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
                    <a href="index.html" className="sl-menu-link active">
                        <div className="sl-menu-item">
                            <i className="menu-item-icon icon ion-ios-home-outline tx-22"></i>
                            <span className="menu-item-label">Dashboard</span>
                        </div>
                    </a>
                    <Link href="/add-class" className="sl-menu-link">
                        <div className="sl-menu-item">
                            <i className="menu-item-icon icon ion-ios-photos-outline tx-20"></i>
                            <span className="menu-item-label">
                               Add Class
                            </span>
                        </div>
                    </Link>
                    <a href="#" className="sl-menu-link">
                        <div className="sl-menu-item">
                            <i className="menu-item-icon ion-ios-pie-outline tx-20"></i>
                            <span className="menu-item-label">Charts</span>
                            <i className="menu-item-arrow fa fa-angle-down"></i>
                        </div>
                    </a>
                    <ul className="sl-menu-sub nav flex-column">
                        <li className="nav-item">
                            <a href="chart-morris.html" className="nav-link">
                                Morris Charts
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="chart-flot.html" className="nav-link">
                                Flot Charts
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="chart-chartjs.html" className="nav-link">
                                Chart JS
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="chart-rickshaw.html" className="nav-link">
                                Rickshaw
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="chart-sparkline.html" className="nav-link">
                                Sparkline
                            </a>
                        </li>
                    </ul>
                    <a href="#" className="sl-menu-link">
                        <div className="sl-menu-item">
                            <i className="menu-item-icon icon ion-ios-gear-outline tx-24"></i>
                            <span className="menu-item-label">Forms</span>
                            <i className="menu-item-arrow fa fa-angle-down"></i>
                        </div>
                    </a>
                    <ul className="sl-menu-sub nav flex-column">
                        <li className="nav-item">
                            <a href="form-elements.html" className="nav-link">
                                Form Elements
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="form-layouts.html" className="nav-link">
                                Form Layouts
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="form-validation.html" className="nav-link">
                                Form Validation
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="form-wizards.html" className="nav-link">
                                Form Wizards
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="form-editor-text.html"
                                className="nav-link"
                            >
                                Text Editor
                            </a>
                        </li>
                    </ul>
                    <a href="#" className="sl-menu-link">
                        <div className="sl-menu-item">
                            <i className="menu-item-icon icon ion-ios-filing-outline tx-24"></i>
                            <span className="menu-item-label">UI Elements</span>
                            <i className="menu-item-arrow fa fa-angle-down"></i>
                        </div>
                    </a>
                    <ul className="sl-menu-sub nav flex-column">
                        <li className="nav-item">
                            <a href="accordion.html" className="nav-link">
                                Accordion
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="alerts.html" className="nav-link">
                                Alerts
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="buttons.html" className="nav-link">
                                Buttons
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="cards.html" className="nav-link">
                                Cards
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="icons.html" className="nav-link">
                                Icons
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="modal.html" className="nav-link">
                                Modal
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="navigation.html" className="nav-link">
                                Navigation
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pagination.html" className="nav-link">
                                Pagination
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="popups.html" className="nav-link">
                                Tooltip &amp; Popover
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="progress.html" className="nav-link">
                                Progress
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="spinners.html" className="nav-link">
                                Spinners
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="typography.html" className="nav-link">
                                Typography
                            </a>
                        </li>
                    </ul>
                    <a href="#" className="sl-menu-link">
                        <div className="sl-menu-item">
                            <i className="menu-item-icon icon ion-ios-bookmarks-outline tx-20"></i>
                            <span className="menu-item-label">Tables</span>
                            <i className="menu-item-arrow fa fa-angle-down"></i>
                        </div>
                    </a>
                    <ul className="sl-menu-sub nav flex-column">
                        <li className="nav-item">
                            <a href="table-basic.html" className="nav-link">
                                Basic Table
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="table-datatable.html" className="nav-link">
                                Data Table
                            </a>
                        </li>
                    </ul>
                    <a href="#" className="sl-menu-link">
                        <div className="sl-menu-item">
                            <i className="menu-item-icon icon ion-ios-navigate-outline tx-24"></i>
                            <span className="menu-item-label">Maps</span>
                            <i className="menu-item-arrow fa fa-angle-down"></i>
                        </div>
                    </a>
                    <ul className="sl-menu-sub nav flex-column">
                        <li className="nav-item">
                            <a href="map-google.html" className="nav-link">
                                Google Maps
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="map-vector.html" className="nav-link">
                                Vector Maps
                            </a>
                        </li>
                    </ul>
                    <a href="mailbox.html" className="sl-menu-link">
                        <div className="sl-menu-item">
                            <i className="menu-item-icon icon ion-ios-email-outline tx-24"></i>
                            <span className="menu-item-label">Mailbox</span>
                        </div>
                    </a>
                    <a href="#" className="sl-menu-link">
                        <div className="sl-menu-item">
                            <i className="menu-item-icon icon ion-ios-paper-outline tx-22"></i>
                            <span className="menu-item-label">Pages</span>
                            <i className="menu-item-arrow fa fa-angle-down"></i>
                        </div>
                    </a>
                    <ul className="sl-menu-sub nav flex-column">
                        <li className="nav-item">
                            <a href="blank.html" className="nav-link">
                                Blank Page
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="page-signin.html" className="nav-link">
                                Signin Page
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="page-signup.html" className="nav-link">
                                Signup Page
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="page-notfound.html" className="nav-link">
                                404 Page Not Found
                            </a>
                        </li>
                    </ul>
                </div>

                <br/>
            </div>
        </>
    );
};

export default LeftSideBar;
