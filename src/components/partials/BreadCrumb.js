import React from "react";
import {Helmet} from "react-helmet";

const BreadCrumb = ({title, showTitle=true}) => {

    return (
        <>
            <Helmet>
                <title>{title} | Lab Demo</title>
            </Helmet>
            {showTitle ? 
            <ol className="breadcrumb my-4">
                <li className="breadcrumb-item text-theme-light">Dashboard</li>
                <li className="breadcrumb-item active">{title}</li>
            </ol>
             : ''}
            
        </>
    )

}

export default BreadCrumb;