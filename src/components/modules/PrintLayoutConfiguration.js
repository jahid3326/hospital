import React, { useEffect } from "react";
import BreadCrumb from "../partials/BreadCrumb";
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import HorizontalSplitOutlinedIcon from '@mui/icons-material/HorizontalSplitOutlined';

const PrintLayoutConfiguration = () =>{

    useEffect(()=>{
        console.log('ok');
        
    },[])
    
    return (
        <>
            <BreadCrumb title={'Print Layout Configuration'} showTitle={false}/>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-12 layout-tab">
                        <div className="layout-tab-item active">
                            <div className="tab-item-icon">
                                <InsertDriveFileOutlinedIcon fontSize="large"/>
                            </div>
                            <div className="tab-item-text">
                                <h3>Page Setup</h3>
                                <p>Prescription</p>
                            </div>
                        </div>
                        <div className="layout-tab-item">
                            <div className="tab-item-icon">
                                <CreditCardOutlinedIcon fontSize="large"/>
                            </div>
                            <div className="tab-item-text">
                                <h3>Header Section</h3>
                                <p>Prescription</p>
                            </div>
                        </div>
                        <div className="layout-tab-item">
                            <div className="tab-item-icon">
                                <PersonPinOutlinedIcon fontSize="large"/>
                            </div>
                            <div className="tab-item-text">
                                <h3>Patient Section</h3>
                                <p>Prescription</p>
                            </div>
                        </div>
                        <div className="layout-tab-item">
                            <div className="tab-item-icon">
                                <TableChartOutlinedIcon fontSize="large"/>
                            </div>
                            <div className="tab-item-text">
                                <h3>Body Section</h3>
                                <p>Prescription</p>
                            </div>
                        </div>
                        <div className="layout-tab-item">
                            <div className="tab-item-icon">
                                <HorizontalSplitOutlinedIcon fontSize="large"/>
                            </div>
                            <div className="tab-item-text">
                                <h3>Footer Section</h3>
                                <p>Prescription</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default PrintLayoutConfiguration;