import React, { useEffect, useState } from "react";
import BreadCrumb from "../partials/BreadCrumb";
import currency from "../../assets/img/currency-.png";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import http from "../../http";
import GenderButton from "../partials/GenderButton";

const NewInvoice = () =>{

    const [searchTest, setSearchTest] = useState(false);
    const [genderSelected, setGenderSelected] = useState(null);
    const [holdList, setHoldList] = useState([]);
    const [invoicePatientInfo, setInvoicePatientInfo] = useState({});
    const [inoivceTests, setInvoiceTest] = useState([]);

    useEffect(()=>{
        
        $("#search_test").autocomplete({
            source: function(request,cb){
                http.post('/get_test_for_invoice', {search_text:request.term}).then(res=>{
                    // console.log(res); 
                    
                    let result;
                    result = [
                    {
                        label: 'There is no matching test found for '+request.term,
                        value: ''
                    }
                    ];
                    let tests = res.data;
                    if(tests.length){
                    result = $.map(tests, function(obj){
                        return {
                        label: obj.testName,
                        value: obj.testName,
                        data: obj
                        }
                    })
                    }
                    // console.log(result);
                    cb(result);
                    
                }).catch(error=>{
                    console.log(error); 
                })
            },
            search: function(event, ui){
                setSearchTest(true);
            },
            open: function(event, ui){
                setSearchTest(false);
            },
            autoFocus: true
            
        })
    },[])
    
    const handleGender = (e) => {
        setGenderSelected(e.target.value);
    }

    return (
        <>
            <BreadCrumb title={'Invoice New'} showTitle={false}/>
            <div className="row mt-3">
                <div className="col-md-4">
                    <div className="input-group mb-3">
                        <select className="form-select" id="inputGroupSelect02">
                            <option value="">Choose...</option>
                            {holdList.map((holdItem)=>(
                                <option selected={holdItem.selected ? 'selected' : ''} value={holdItem.value}>{holdItem.text}</option>
                            ))}
                        </select>
                        <button className="input-group-text btn btn-secondary">
                            Hold
                        </button>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><i className="fas fa-user"></i></span>
                        <input type="text" className="form-control" placeholder="Patient Name" aria-label="Patient Name" aria-describedby="basic-addon1"/>
                        <span className="input-group-text" id="basic-addon1"><i className="fas fa-plus"></i></span>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><i className="fas fa-phone"></i></span>
                        <input type="text" className="form-control" placeholder="Phone" aria-label="Phone" aria-describedby="basic-addon1"/>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><i className="fas fa-stethoscope"></i></span>
                        <input type="text" autocomplete="off" className="form-control search_test" id="search_test" placeholder="Search Test" aria-label="Search Test" aria-describedby="basic-addon1"/>
                        {searchTest ?
                         <span className="input-group-text" id="basic-addon1">
                            <div className="spinner-border spinner-border-sm text-success" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                         </span>
                        : ''}
                    </div>
                </div>
            </div>
            <div className="row mt-0">
                <div className="col-md-8">
                    <div className="card mb-4">
                        <div className="card-header">
                            <i className="fas fa-stethoscope me-1"></i>
                            Test Information
                        </div>
                        <div className="card-body">
                        <table className="table table-sm">
                            <thead className="table-light">
                                <tr>
                                <th scope="col" className="text-center">&times;</th>
                                <th scope="col" width="50px" className="text-center">SL</th>
                                <th scope="col" width="300px">Test Name</th>
                                <th scope="col" className="text-center">Amount</th>
                                <th scope="col" className="text-center">Dis(%)</th>
                                <th scope="col" className="text-center">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <tr>
                                    <td className="text-center">x</td>
                                    <td className="text-center">1</td>
                                    <td>Tests</td>
                                    <td className="text-center">2500</td>
                                    <td className="text-center">0%</td>
                                    <td className="text-center">2500</td>
                                </tr> */}
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card mb-4">
                                <div className="card-header">
                                    <i className="fas fa-user me-1"></i>
                                    Patient Information
                                </div>
                                <div className="card-body">
                                    <GenderButton genderSelected={genderSelected} handleGender={handleGender} />
                                    <div className="input-group mt-2">
                                        <input type="text" className="form-control text-center" aria-label="Age" placeholder="Age"/>
                                        <select className="form-select" id="inputGroupSelect02">
                                            <option value="year">Year</option>
                                            <option value="month">Month</option>
                                            <option value="day">Day</option>
                                        </select>
                                    </div>
                                    <div className="input-group mt-2">
                                        <input type="text" className="form-control co_input" aria-label="co code" placeholder="C/O Code" style={{width:'30%'}}/>
                                        <input type="text" className="form-control co_input" aria-label="co name" placeholder="C/O Name" style={{width:'70%'}}/>
                                    </div>
                                    <div className="input-group mt-2">
                                        <input type="text" className="form-control refd_input" aria-label="refd name" placeholder="Refd"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="card mb-4">
                                <div className="card-header">
                                    <img src={currency} alt="currency" style={{marginRight:'5px'}}/>
                                    Payment Information
                                </div>
                                <div className="card-body">
                                    <div className="input-group">
                                        <button className="input-group-text btn btn-secondary" style={{width:'115px', textAlign:'left'}}>
                                            Total Amount
                                        </button>
                                        <input type="text" className="form-control text-right" aria-label="Total Amount" placeholder="0.00"/>
                                        <button className="input-group-text btn btn-secondary">
                                            Tk
                                        </button>
                                    </div>
                                    <div className="input-group mt-2">
                                        <button className="input-group-text btn btn-secondary" style={{width:'115px', textAlign:'left'}}>
                                            Discount(%)
                                        </button>
                                        <input type="text" className="form-control text-right" aria-label="Discount % Amount" placeholder="0.00"/>
                                        <button className="input-group-text btn btn-secondary">
                                            Tk
                                        </button>
                                    </div>
                                    <div className="input-group mt-2">
                                        <button className="input-group-text btn btn-secondary" style={{width:'115px', textAlign:'left'}}>
                                            Discount(Tk)
                                        </button>
                                        <input type="text" className="form-control text-right" aria-label="Discount Tk Amount" placeholder="0.00"/>
                                        <button className="input-group-text btn btn-secondary">
                                            Tk
                                        </button>
                                    </div>
                                    <div className="input-group mt-2">
                                        <button className="input-group-text btn btn-secondary" style={{width:'115px', textAlign:'left'}}>
                                            Net Total
                                        </button>
                                        <input type="text" className="form-control text-right" aria-label="Net Amount" placeholder="0.00"/>
                                        <button className="input-group-text btn btn-secondary">
                                            Tk
                                        </button>
                                    </div>
                                    <div className="input-group mt-2">
                                        <button className="input-group-text btn btn-secondary" style={{width:'115px', textAlign:'left'}}>
                                            Accessories
                                        </button>
                                        <input type="text" className="form-control text-right" aria-label="Accessories Amount" placeholder="0.00"/>
                                        <button className="input-group-text btn btn-secondary">
                                            Tk
                                        </button>
                                    </div>
                                    <div className="input-group mt-2">
                                        <button className="input-group-text btn btn-secondary" style={{width:'115px', textAlign:'left'}}>
                                            Gross Total
                                        </button>
                                        <input type="text" className="form-control text-right" aria-label="Gross Amount" placeholder="0.00"/>
                                        <button className="input-group-text btn btn-secondary">
                                            Tk
                                        </button>
                                    </div>
                                    <div className="input-group mt-2">
                                        <button className="input-group-text btn btn-secondary" style={{width:'115px', textAlign:'left'}}>
                                            Payment
                                        </button>
                                        <input type="text" className="form-control text-right" aria-label="Payment Amount" placeholder="0.00"/>
                                        <button className="input-group-text btn btn-secondary">
                                            Tk
                                        </button>
                                    </div>
                                    <div className="input-group mt-2">
                                        <button className="input-group-text btn btn-secondary" style={{width:'115px', textAlign:'left'}}>
                                            Due
                                        </button>
                                        <input type="text" className="form-control text-right" aria-label="due amount" placeholder="0.00"/>
                                        <button className="input-group-text btn btn-secondary">
                                            Tk
                                        </button>
                                    </div>
                                    <div className="input-group mt-2">
                                        <button className="input-group-text btn btn-secondary" style={{width:'115px', textAlign:'left'}}>
                                            Delivery Time
                                        </button>
                                        <input type="text" className="form-control" aria-label="delivery time" placeholder=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default NewInvoice;