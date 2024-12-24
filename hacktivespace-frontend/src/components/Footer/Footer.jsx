import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="/about" target="_blank" rel="noopener noreferrer">About Us</a>
                    <a href="/contact" target="_blank" rel="noopener noreferrer">Contact</a>
                    <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                    <a href="/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a>
                </div>
                <div className="footer-social">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                <div className="footer-copyright">
                    <p>&copy; {new Date().getFullYear()} Research Blog. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;