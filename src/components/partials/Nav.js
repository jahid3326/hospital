import React, { useState } from "react";
import $ from "jquery";
import logo from "../../assets/img/labLogo.png";
import Swal from "sweetalert2";
import http from "../../http";
import GlobalFunction from "../../GlobalFunction";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    const [isLoading, setLoading] = useState(false);

    const handleSideBar = () => {
        $('body').toggleClass('sb-sidenav-toggled')
    }

    const handleLogout = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You will be logged out",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, logout"
          }).then((result) => {
            if (result.isConfirmed) {
                setLoading(true);
                http.post('/logout').then(res=>{
                    setLoading(false);
                    GlobalFunction.logout();
                }).catch(function (errors) {
                    setLoading(false);
                    // console.log('ok');
                    // GlobalFunction.logout();
                });
            }
          });
    }

    return (
        <>
        <div className={isLoading ? 'loader-line' : 'loader-line hide'}></div>
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-theme">
            <Link className="navbar-brand ps-3" to="/dashboard">
                <img src={logo} alt="logo"/>
            </Link>
            <button onClick={handleSideBar} className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
            <ul className="navbar-nav align-items-center ms-auto me-3 me-lg-4">
                <p className="text-white">{localStorage.lab_user_name !== undefined ? localStorage.lab_user_name : null}</p>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#!">Settings</a></li>
                        <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><button onClick={handleLogout} className="dropdown-item">Logout</button></li>
                    </ul>
                </li>
            </ul>
        </nav>
        </>
        
    )
}

export default Nav;