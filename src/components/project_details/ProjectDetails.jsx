import React, { useState } from 'react';
import './Project_details.css'; 
import locationMapImage from '../../assets/locationmap.jpg';
import layoutMapImage from '../../assets/layoutimage.jpg';

const ProjectDetails = () => {
    const [activeMap, setActiveMap] = useState('location');

    const handleMapChange = (mapType) => {
        setActiveMap(mapType);
    };

    return (
        <div id="Projects">
        <div className="project-details-section" style={{paddingTop: '90px'}}>
            <div className="container">
                <h2 className="text-center mb-4">PROJECT DETAILS</h2>
                <div className="d-flex justify-content-center mb-4">
                    <button 
                        className={`btn ${activeMap === 'location' ? 'btn-primary' : 'btn-outline-primary'} me-2`}
                        onClick={() => handleMapChange('location')}
                    >
                        Location Map
                    </button>
                    <button 
                        className={`btn ${activeMap === 'layout' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => handleMapChange('layout')}
                    >
                        Layout Map
                    </button>
                </div>
                <div className="map-container">
                    {activeMap === 'location' && (
                        <img src={locationMapImage} alt="Location Map" className="img-fluid" />
                    )}
                    {activeMap === 'layout' && (
                        <img src={layoutMapImage} alt="Layout Map" className="img-fluid" />
                    )}
                </div>
            </div>
        </div>
        </div>
    );
};

export default ProjectDetails;0