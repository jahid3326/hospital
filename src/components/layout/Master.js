import React from "react";
import Nav from "../partials/Nav";
import SideBar from "../partials/SideBar";
import Footer from "../partials/Footer";
import { Navigate, Outlet } from "react-router-dom";

const Master = () => {

    if(localStorage.lab_user_token !== undefined){
        return (
            <>
                <Nav/>
                <div id="layoutSidenav">
                    <SideBar/>
                    <div id="layoutSidenav_content">
                        <main>
                            <div className="container-fluid px-4">
                                <Outlet/>
                            </div>
                        </main>
                        <Footer/>
                    </div>
                </div>
            </>
        )
    }else{
        return <Navigate to='/' replace={true} />
    }

}

export default Master;
