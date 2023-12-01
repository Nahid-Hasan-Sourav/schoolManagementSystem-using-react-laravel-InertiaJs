import React from "react";

const Notification = () => {
    return (
        <>
            <div className="sl-sideright">
                <ul
                    className="nav nav-tabs nav-fill sidebar-tabs"
                    role="tablist"
                >
                    <li className="nav-item">
                        <a
                            className="nav-link active"
                            data-toggle="tab"
                            role="tab"
                            href="#messages"
                        >
                            Messages (2)
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            data-toggle="tab"
                            role="tab"
                            href="#notifications"
                        >
                            Notifications (8)
                        </a>
                    </li>
                </ul>

                <div className="tab-content">
                    <div
                        className="tab-pane pos-absolute a-0 mg-t-60 active"
                        id="messages"
                        role="tabpanel"
                    >
                        <div className="media-list">
                            <a href="" className="media-list-link">
                                <div className="media">
                                    <img
                                        src="../img/img3.jpg"
                                        className="wd-40 rounded-circle"
                                        alt=""
                                    />
                                    <div className="media-body">
                                        <p className="mg-b-0 tx-medium tx-gray-800 tx-13">
                                            Donna Seay
                                        </p>
                                        <span className="d-block tx-11 tx-gray-500">
                                            2 minutes ago
                                        </span>
                                        <p className="tx-13 mg-t-10 mg-b-0">
                                            A wonderful serenity has taken
                                            possession of my entire soul, like
                                            these sweet mornings of spring.
                                        </p>
                                    </div>
                                </div>
                            </a>

                            <a href="" className="media-list-link">
                                <div className="media">
                                    <img
                                        src="../img/img4.jpg"
                                        className="wd-40 rounded-circle"
                                        alt=""
                                    />
                                    <div className="media-body">
                                        <p className="mg-b-0 tx-medium tx-gray-800 tx-13">
                                            Samantha Francis
                                        </p>
                                        <span className="d-block tx-11 tx-gray-500">
                                            3 hours ago
                                        </span>
                                        <p className="tx-13 mg-t-10 mg-b-0">
                                            My entire soul, like these sweet
                                            mornings of spring.
                                        </p>
                                    </div>
                                </div>
                            </a>
                            <a href="" className="media-list-link">
                                <div className="media">
                                    <img
                                        src="../img/img7.jpg"
                                        className="wd-40 rounded-circle"
                                        alt=""
                                    />
                                    <div className="media-body">
                                        <p className="mg-b-0 tx-medium tx-gray-800 tx-13">
                                            Robert Walker
                                        </p>
                                        <span className="d-block tx-11 tx-gray-500">
                                            5 hours ago
                                        </span>
                                        <p className="tx-13 mg-t-10 mg-b-0">
                                            I should be incapable of drawing a
                                            single stroke at the present
                                            moment...
                                        </p>
                                    </div>
                                </div>
                            </a>
                            <a href="" className="media-list-link">
                                <div className="media">
                                    <img
                                        src="../img/img5.jpg"
                                        className="wd-40 rounded-circle"
                                        alt=""
                                    />
                                    <div className="media-body">
                                        <p className="mg-b-0 tx-medium tx-gray-800 tx-13">
                                            Larry Smith
                                        </p>
                                        <span className="d-block tx-11 tx-gray-500">
                                            Yesterday, 8:34pm
                                        </span>

                                        <p className="tx-13 mg-t-10 mg-b-0">
                                            When, while the lovely valley teems
                                            with vapour around me, and the
                                            meridian sun strikes...
                                        </p>
                                    </div>
                                </div>
                            </a>
                            <a href="" className="media-list-link">
                                <div className="media">
                                    <img
                                        src="../img/img3.jpg"
                                        className="wd-40 rounded-circle"
                                        alt=""
                                    />
                                    <div className="media-body">
                                        <p className="mg-b-0 tx-medium tx-gray-800 tx-13">
                                            Donna Seay
                                        </p>
                                        <span className="d-block tx-11 tx-gray-500">
                                            Jan 23, 2:32am
                                        </span>
                                        <p className="tx-13 mg-t-10 mg-b-0">
                                            A wonderful serenity has taken
                                            possession of my entire soul, like
                                            these sweet mornings of spring.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="pd-15">
                            <a
                                href=""
                                className="btn btn-secondary btn-block bd-0 rounded-0 tx-10 tx-uppercase tx-mont tx-medium tx-spacing-2"
                            >
                                View More Messages
                            </a>
                        </div>
                    </div>

                    <div
                        className="tab-pane pos-absolute a-0 mg-t-60 overflow-y-auto"
                        id="notifications"
                        role="tabpanel"
                    >
                        <div className="media-list">
                            <a href="" className="media-list-link read">
                                <div className="media pd-x-20 pd-y-15">
                                    <img
                                        src="../img/img8.jpg"
                                        className="wd-40 rounded-circle"
                                        alt=""
                                    />
                                    <div className="media-body">
                                        <p className="tx-13 mg-b-0 tx-gray-700">
                                            <strong className="tx-medium tx-gray-800">
                                                Suzzeth Bungaos
                                            </strong>{" "}
                                            tagged you and 18 others in a post.
                                        </p>
                                        <span className="tx-12">
                                            October 03, 2017 8:45am
                                        </span>
                                    </div>
                                </div>
                            </a>

                            <a href="" className="media-list-link read">
                                <div className="media pd-x-20 pd-y-15">
                                    <img
                                        src="../img/img9.jpg"
                                        className="wd-40 rounded-circle"
                                        alt=""
                                    />
                                    <div className="media-body">
                                        <p className="tx-13 mg-b-0 tx-gray-700">
                                            <strong className="tx-medium tx-gray-800">
                                                Mellisa Brown
                                            </strong>{" "}
                                            appreciated your work{" "}
                                            <strong className="tx-medium tx-gray-800">
                                                The Social Network
                                            </strong>
                                        </p>
                                        <span className="tx-12">
                                            October 02, 2017 12:44am
                                        </span>
                                    </div>
                                </div>
                            </a>
                            <a href="" className="media-list-link read">
                                <div className="media pd-x-20 pd-y-15">
                                    <img
                                        src="../img/img10.jpg"
                                        className="wd-40 rounded-circle"
                                        alt=""
                                    />
                                    <div className="media-body">
                                        <p className="tx-13 mg-b-0 tx-gray-700">
                                            20+ new items added are for sale in
                                            your{" "}
                                            <strong className="tx-medium tx-gray-800">
                                                Sale Group
                                            </strong>
                                        </p>
                                        <span className="tx-12">
                                            October 01, 2017 10:20pm
                                        </span>
                                    </div>
                                </div>
                            </a>
                            <a href="" className="media-list-link read">
                                <div className="media pd-x-20 pd-y-15">
                                    <img
                                        src="../img/img5.jpg"
                                        className="wd-40 rounded-circle"
                                        alt=""
                                    />
                                    <div className="media-body">
                                        <p className="tx-13 mg-b-0 tx-gray-700">
                                            <strong className="tx-medium tx-gray-800">
                                                Julius Erving
                                            </strong>{" "}
                                            wants to connect with you on your
                                            conversation with{" "}
                                            <strong className="tx-medium tx-gray-800">
                                                Ronnie Mara
                                            </strong>
                                        </p>
                                        <span className="tx-12">
                                            October 01, 2017 6:08pm
                                        </span>
                                    </div>
                                </div>
                            </a>
                            <a href="" className="media-list-link read">
                                <div className="media pd-x-20 pd-y-15">
                                    <img
                                        src="../img/img8.jpg"
                                        className="wd-40 rounded-circle"
                                        alt=""
                                    />
                                    <div className="media-body">
                                        <p className="tx-13 mg-b-0 tx-gray-700">
                                            <strong className="tx-medium tx-gray-800">
                                                Suzzeth Bungaos
                                            </strong>{" "}
                                            tagged you and 12 others in a post.
                                        </p>
                                        <span className="tx-12">
                                            September 27, 2017 6:45am
                                        </span>
                                    </div>
                                </div>
                            </a>
                            <a href="" className="media-list-link read">
                                <div className="media pd-x-20 pd-y-15">
                                    <img
                                        src="../img/img10.jpg"
                                        className="wd-40 rounded-circle"
                                        alt=""
                                    />
                                    <div className="media-body">
                                        <p className="tx-13 mg-b-0 tx-gray-700">
                                            10+ new items added are for sale in
                                            your{" "}
                                            <strong className="tx-medium tx-gray-800">
                                                Sale Group
                                            </strong>
                                        </p>
                                        <span className="tx-12">
                                            September 28, 2017 11:30pm
                                        </span>
                                    </div>
                                </div>
                            </a>
                            <a href="" className="media-list-link read">
                                <div className="media pd-x-20 pd-y-15">
                                    <img
                                        src="../img/img9.jpg"
                                        className="wd-40 rounded-circle"
                                        alt=""
                                    />
                                    <div className="media-body">
                                        <p className="tx-13 mg-b-0 tx-gray-700">
                                            <strong className="tx-medium tx-gray-800">
                                                Mellisa Brown
                                            </strong>{" "}
                                            appreciated your work{" "}
                                            <strong className="tx-medium tx-gray-800">
                                                The Great Pyramid
                                            </strong>
                                        </p>
                                        <span className="tx-12">
                                            September 26, 2017 11:01am
                                        </span>
                                    </div>
                                </div>
                            </a>
                            <a href="" className="media-list-link read">
                                <div className="media pd-x-20 pd-y-15">
                                    <img
                                        src="../img/img5.jpg"
                                        className="wd-40 rounded-circle"
                                        alt=""
                                    />
                                    <div className="media-body">
                                        <p className="tx-13 mg-b-0 tx-gray-700">
                                            <strong className="tx-medium tx-gray-800">
                                                Julius Erving
                                            </strong>{" "}
                                            wants to connect with you on your
                                            conversation with{" "}
                                            <strong className="tx-medium tx-gray-800">
                                                Ronnie Mara
                                            </strong>
                                        </p>
                                        <span className="tx-12">
                                            September 23, 2017 9:19pm
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Notification;
