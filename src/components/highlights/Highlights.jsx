import React from 'react';

import './Highlights.css'; 
import locationIcon from '../../assets/18972045.jpg'; 

const Highlights = () => {
    const highlightsData = [
        {
            title: 'NEAR TO PROPOSED REGIONAL RING ROAD',
            description: '',
        },
        {
            title: '1KM FROM HYDERABAD-BANGALORE NATIONAL HIGHWAY (PROPOSED 12 LANE)',
            description: '',
        },
        {
            title: 'UNDER MAHBUBNAGAR URBAN DEVELOPMENT AUTHORITY MUDA LIMITS',
            description: '',
        },
        {
            title: 'CELEBRATE YOUR OCCASIONS AT READY AMPHITHEATRE',
            description: '',
        },
        {
            title: '1KM FROM PROPOSED REGIONAL RING ROAD',
            description: '',
        },
        {
            title: '11KM FROM PROPOSED REGIONAL RING ROAD',
            description: '',
        },
    ];

    return (
        <div className="location-highlights-section">
            <div className="container">
                <h2 className="text-center mb-4">LOCATION HIGHLIGHTS</h2>
                <p className="text-center mb-5">Prime Connectivity, Proximity, and Prosperity Await at Iconia's Key Locations!</p>
                <div className="row justify-content-center">
                    {highlightsData.map((highlight, index) => (
                        <div key={index} className="col-md-4 col-sm-5 mb-5">
                            <div className="highlight-card">
                                <img src={locationIcon} alt="Location Icon" className="highlight-icon" />
                                <h3 className="highlight-title">{highlight.title}</h3>
                                {highlight.description && <p className="highlight-description">{highlight.description}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Highlights;