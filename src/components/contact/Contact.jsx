import React, { useState } from 'react';
import './Contact.css'; // Import your CSS file

const Contact = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [showSubmitPopup, setShowSubmitPopup] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        location: '',
    });

    const handleContactUsClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
        setShowSubmitPopup(true);
    };

    const handleCloseSubmitPopup = () => {
        setShowSubmitPopup(false);
        setShowPopup(false);
        setFormData({ name: '', mobile: '', location: '' }); 
    };

    return (
        <div id="Contact">
            <div className="container" style={{ paddingTop: '50px' }}>
                <div className="row bg-primary text-white text-center py-5">
                    <div className="col">
                        <h2>Get in Touch, Let's Turn Your Investment into Reality!</h2>
                        <button className="btn btn-light mt-3" onClick={handleContactUsClick}>
                            CONTACT US
                        </button>
                    </div>
                </div>
                <div className="row py-5" style={{ backgroundColor: '#f8f9fa' }}>
                    <div className="col-md-6 offset-md-1">
                        <div className="card p-4" style={{marginTop: '20px'}}>
                            <h3 className="text-center mb-4">Contact Us</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name*</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="mobile" className="form-label">Mobile Number*</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="mobile"
                                        placeholder="Mobile Number"
                                        value={formData.mobile}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="location" className="form-label">Location</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="location"
                                        placeholder="Your Location"
                                        value={formData.location}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-md-4" style={{ marginTop: '20px' }}>
                        <div className="card p-4">
                            <iframe
                                title="Property Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30456.987654321!2d78.10243!3d16.50033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sWMF%20Peddyspelle%2C%20Telangana!5e0!3m2!1sen!2sus!4v1628787878787!5m2!1sen!2sus"
                                width="100%"
                                height="350"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <div className="popup-header">
                            <h3>Contact Details</h3>
                            <button className="close-button" onClick={handleClosePopup}>
                                <i className="bi bi-x"></i>
                            </button>
                        </div>
                        <div className="popup-body">
                            <p><strong>Email:</strong> info@myelegantgroup.com</p>
                            <p><strong>Phone:</strong> +1 123 456 7890</p>
                            <p><strong>Address:</strong> My Home Hub, 7th Floor, Block 2, Madhapur, Hitechcity, Hyderabad,India</p>
                            <p><strong>Website:</strong><a href='https://myelegantgroup.com/index.html'>My Elegant Group</a></p>
                        </div>
                    </div>
                </div>
            )}
            {showSubmitPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
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
        </div>
    );
};

export default Contact;