import React, { useState } from 'react';
import './Header.css';
import backgroundImage from '../../assets/background1.jpg';

function Header() {
    const [formData, setFormData] = useState({ name: "", mobile: "", location: "" });
    const [showPopup, setShowPopup] = useState(false);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
        setFormData({ name: "", mobile: "", location: "" }); 
    };

    return (
        <div id='Home'>
            <div className="head-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="container" style={{ marginTop: "40px" }}>
                    <div className="row" style={{ display: "flex", justifyContent: "space-between" }}>
                        <div className="col-md-6 head-content">
                            <h1>Invest in Iconia</h1>
                            <p>A Premium 100-Acre Gated Community on Hyderabad-Bangalore Highway, Near Balanagar, Shadnagar.</p>
                            <h2>DTCP & RERA Approved Plots @ Hyderabad-Bangalore Highway</h2>
                            <p>1km from National Highway | 100-Acre Residential Community Under MUDA Limits</p>
                            <div className="features">
                                <div className="feature"><i className="bi bi-house-fill"></i> Grand Entrance Arch</div>
                                <div className="feature"><i className="bi bi-check-circle-fill"></i> DTCP & RERA Approved</div>
                                <div className="feature"><i className="bi bi-sign-intersection-side-fill"></i> 33' & 40' Black Top Roads</div>
                                <div className="feature"><i className="bi bi-tree-fill"></i> Landscaped Garden</div>
                                <div className="feature"><i className="bi bi-trophy-fill"></i> Multipurpose Stadium</div>
                                <div className="feature"><i className="bi bi-trophy-fill"></i> Sand Volleyball Court</div>
                                <div className="feature"><i className="bi bi-bicycle"></i> Cycling Track</div>
                                <div className="feature"><i className="bi bi-house-door-fill"></i> Clubhouse with Restaurant & Rooms</div>
                                <div className="feature"><i className="bi bi-water"></i> Swimming Pool</div>
                                <div className="feature"><i className="bi bi-controller"></i> Indoor Games (Chess, Carrom, Table Tennis)</div>
                                <div className="feature"><i className="bi bi-lightbulb-fill"></i> Electricity with Street Lights</div>
                                <div className="feature"><i className="bi bi-shield-check"></i> 100% Clear Title & Assured Maintenance</div>
                            </div>
                        </div>
                        <div className="col-md-4 form-container" style={{ padding: "40px", marginTop: "50px" }}>
                            <div className="form-content">
                                <h2>Book a Free Consultation</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="name" className="form-label">Name *</label>
                                        <input type="text" className="form-control" id="name" value={formData.name} onChange={handleInputChange} required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="mobile" className="form-label">Mobile Number *</label>
                                        <input type="tel" className="form-control" id="mobile" value={formData.mobile} onChange={handleInputChange} required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="location" className="form-label">Location</label>
                                        <input type="text" className="form-control" id="location" value={formData.location} onChange={handleInputChange} />
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">SUBMIT</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <div className="popup-header">
                            <h3>Successfully Booked!</h3>
                            <button className="close-button" onClick={closePopup}>
                                <i className="bi bi-x"></i>
                            </button>
                        </div>
                        <div className="popup-body">
                            <p>Thank you! Your consultation has been booked.</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
