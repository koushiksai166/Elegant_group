import React from 'react';

function Top_bar() {
    return (
        <div className='Top_bar'>
            <header className="bg-primary text-white text-center py-3">
                <div className="container d-flex flex-column flex-md-row justify-content-md-between align-items-center">
                    <div className="email mb-2 mb-md-0"> 
                        Email ID: info@myelegantgroup.com
                    </div>
                    <div className="social">
                        Follow Us:
                        <a href="https://www.facebook.com/myelegantgroup" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/myelegantgroupofficial/" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/myelegantgroup/" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Top_bar;