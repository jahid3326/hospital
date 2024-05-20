import React from "react";

const Footer = () => {
    return (
        <footer className="py-1 bg-light mt-auto">
            <div className="container-fluid px-4">
                <div className="d-flex align-items-center justify-content-between small">
                    <div className="text-muted">Copyright &copy; Lab Demo {new Date().getFullYear()}</div>
                    <div>
                        <i>Developed by</i> <a href="#">IT Solution</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;