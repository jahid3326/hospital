import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const SideBar = () => {

    const [activeMenu, setActiveMenu] = useState(null);
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    useEffect(()=>{
        let filename = window.location.pathname.slice(1).split('/');
        
        if(typeof filename[0] === 'undefined') {
            setActiveMenu(null);
        }
        else {
            setActiveMenu(filename[0]);
        }

        if(typeof filename[1] === 'undefined') {
            setActiveSubMenu(null);
        }
        else {
            setActiveSubMenu(filename[1]);
        }
        
    },[])

    const menuItems = [
        {
            id:1,
            name: 'Dashboard',
            icon: 'fas fa-tachometer-alt',
            submenu: [],
            link: '/dashboard',
            linkName:'dashboard'
        },
        {
            id:2,
            name: 'Invoice',
            icon: 'fas fa-file-invoice',
            submenu: [
                {
                    id:1,
                    name:'New Invoice',
                    link:'invoice/new',
                    linkName:'new'
                },
                {
                    id:2,
                    name:'Invoice List',
                    link:'invoice/list',
                    linkName:'list'
                }
            ],
            link: '/invoice',
            linkName:'invoice'
        },
        {
            id:3,
            name: 'Settings',
            icon: 'fas fa-gear',
            submenu: [
                {
                    id:1,
                    name:'Preset Data Setting',
                    link:'settings/preset-data-setting',
                    linkName:'preset-data-setting'
                },
                {
                    id:2,
                    name:'Print Layout Configuration',
                    link:'settings/print-layout-configuration',
                    linkName:'print-layout-configuration'
                }
            ],
            link: '/settings',
            linkName:'settings'
        },
    ];

    const handleSubmenu = (e) =>{
        let link_name = e.target.getAttribute('data-menu_link');
        setActiveMenu(link_name);
    }
    
    const handleSingleMenu = (e) => {
        let link_name = e.target.getAttribute('data-menu_link');
        setActiveMenu(link_name);
    }

    const handleSubMenuLink = (e) => {
        let link_name = e.target.getAttribute('data-menu_link');
        setActiveSubMenu(link_name);
    }

    return (

        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion bg-theme-basic" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        {menuItems.map((item) => (
                            item.submenu.length > 0 ? (
                            <>
                                <button className={activeMenu === item.linkName ? 'nav-link active' : 'nav-link collapsed'} onClick={handleSubmenu} data-menu_link={item.linkName} data-bs-toggle="collapse" data-bs-target={'#collapse'+item.name} aria-expanded="false" aria-controls={'collapse'+item.name}>
                                    <div className="sb-nav-link-icon"><i className={item.icon}></i></div>
                                    {item.name}
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </button>
                                <div className={activeMenu === item.linkName ? 'collapse show' : 'collapse'} id={'collapse'+item.name} aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        {item.submenu.map((sub) => (
                                            <Link onClick={handleSubMenuLink} data-menu_link={sub.linkName} className={activeSubMenu === sub.linkName ? 'nav-link active': 'nav-link'} to={sub.link}>{sub.name}</Link>
                                        ))}
                                    </nav>
                                </div>
                            </>
                            ) :
                            <Link onClick={handleSingleMenu} data-menu_link={item.linkName} className={activeMenu === item.linkName ? 'nav-link active' : 'nav-link'} to={item.link}>
                                <div className="sb-nav-link-icon"><i className={item.icon}></i></div>
                                {item.name}
                            </Link>
                        ))}
                        {/* <Link className="nav-link" to={'dashboard'}>
                            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                            Dashboard {activeMenu}
                        </Link>
                        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div className="sb-nav-link-icon"><i className="fas fa-file-invoice"></i></div>
                            Invoice {activeMenu}
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>
                        <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                                <Link className="nav-link" to={'invoice-new'}>New Invoice{activeSubMenu}</Link>
                                <Link className="nav-link" to={'invoice-list'}>Invoice List{activeSubMenu}</Link>
                            </nav>
                        </div> */}
                    </div>
                </div>
                <div className="sb-sidenav-footer bg-theme-footer">
                    <div className="small">Logged in as:</div>
                    {localStorage.lab_user_name !== undefined ? localStorage.lab_user_name : null}
                </div>
            </nav>
        </div>
    )
}


export default SideBar;