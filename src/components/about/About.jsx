import React from 'react';
import "./About.css";
import iconiaImage from '../../assets/gallery4.jpg';
import iconiaImage2 from "../../assets/gallery3.jpg";

function About() {
  return (
    <div id='About'>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="position-relative">
              <img
                src={iconiaImage2}
                alt="Iconia Project"
                className="img1 w-50"
              />
              <img
                src={iconiaImage}
                alt="Iconia Project"
                className="img2 w-50"
              />
            </div>
          </div>
          <div className="col-md-6 bg-light p-3 p-md-6" style={{ marginTop: '70px' }}>
            <div className="text-section">
              <div className="d-flex align-items-center mb-3">
                <h2>ABOUT ICONIA</h2>
              </div>
              <p>
                Invest in ICONIA, a luxurious 100-acre gated community project located on the Hyderabad-Bangalore Highway near Balanagar, Shadnagar. DTCP & RERA approved project with 100% clear title plots guarantee great returns on investment. Iconia Balanagar is strategically situated just 1 km from the Hyderabad-Bangalore National Highway-44 (soon to become a 12-lane Digital National Highway) at Balanagar near Shadnagar.
              </p>
              <p>
                This prime location is very near to the proposed Regional Ring Road (RRR), which will connect various districts, enhancing the transportation infrastructure and providing seamless connectivity to key destinations. With these upcoming developments, Iconia Balanagar stands out as a premier investment opportunity.
              </p>
            </div>
            <div className="stats-section mt-4">
              <div className="row justify-content-around">
                <div className="col-6 col-md-3 text-center mb-3 mb-md-0">
                  <i className="fas fa-map-marked-alt fa-3x"></i>
                  <h3 className="mt-2">100+</h3>
                  <p>ACRES</p>
                </div>
                <div className="col-6 col-md-3 text-center mb-3 mb-md-0">
                  <i className="fas fa-home fa-3x"></i>
                  <h3 className="mt-2">700+</h3>
                  <p>PLOTS</p>
                </div>
                <div className="col-6 col-md-3 text-center mb-3 mb-md-0">
                  <i className="fas fa-building fa-3x"></i>
                  <h3 className="mt-2">150+</h3>
                  <p>COTTAGES</p>
                </div>
                <div className="col-6 col-md-3 text-center">
                  <i className="fas fa-users fa-3x"></i>
                  <h3 className="mt-2">6+</h3>
                  <p>SOCIAL ZONES</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;