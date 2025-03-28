import React, { useState, useRef, useEffect } from "react";
import logo from "../../assets/logo.jpg";
import "./Navbar.css";

const Navbar = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const navRef = useRef(null);
    const [showSubmitPopup, setShowSubmitPopup] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        location: "",
    });

    const resetForm = () => {
        setFormData({ name: "", mobile: "", location: "" });
    };

    const handleOpenPopup = () => {
        setShowPopup(true);
        resetForm();
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 992);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile && navRef.current) {
            navRef.current.classList.remove("show");
        }
    }, [isMobile]);

    const toggleNav = () => {
        if (navRef.current) {
            navRef.current.classList.toggle("show");
        }
    };

    const handleNavLinkClick = () => {
        if (isMobile && navRef.current) {
            navRef.current.classList.remove("show");
        }
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data:", formData);
        setShowSubmitPopup(true);
    };

    const handleCloseSubmitPopup = () => {
        setShowSubmitPopup(false);
        setShowPopup(false);
        resetForm();
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom px-0" style={{ position: "sticky", top: "0", zIndex: "10" }}>
            <div className="container">
                <a className="navbar-brand" href="#Logo">
                    <img src={logo} alt="Logo" style={{ height: "50px" }} className="img-fluid" />
                </a>
                <button className="navbar-toggler" type="button" onClick={toggleNav} aria-controls="navbarNav" aria-expanded={isMobile ? "false" : "true"} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between align-items-center" id="navbarNav" ref={navRef}>
                    <ul className="navbar-nav mx-auto">
                        {["Home", "About", "Amenities", "Gallery", "Contact", "Projects"].map((item) => (
                            <li className="nav-item" key={item}>
                                <a className="nav-link" href={`#${item}`} onClick={handleNavLinkClick}>{item}</a>
                            </li>
                        ))}
                    </ul>
                    <button className="btn btn-outline-primary" onClick={handleOpenPopup}>Enquiry</button>
                </div>
            </div>
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <div className="popup-header">
                            <h3>Schedule Site Visit</h3>
                            <button className="close-button" onClick={handleClosePopup}>
                                <i className="bi bi-x"></i>
                            </button>
                        </div>
                        <form className="popup-form" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Your Name</label>
                                <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} required autoFocus />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="mobile" className="form-label">Mobile Number</label>
                                <input type="tel" className="form-control" id="mobile" name="mobile" value={formData.mobile} onChange={handleInputChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="location" className="form-label">Your Location</label>
                                <input type="text" className="form-control" id="location" name="location" value={formData.location} onChange={handleInputChange} />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Submit</button>
                        </form>
                    </div>
                </div>
            )}
            {showSubmitPopup && (
                <div className="popup-overlay">
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <div className="popup-header">
                            <h3>Submitted Successfully!</h3>
                            <button className="close-button" onClick={handleCloseSubmitPopup}>
                                <i className="bi bi-x"></i>
                            </button>
                        </div>
                        <div className="popup-body">
                            <p>Thank you for your submission!</p>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
