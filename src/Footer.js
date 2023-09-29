import React from 'react';
import './Footer.css'; // Footer için stil dosyası

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <a href="/">Logo</a>
                </div>
                <div className="footer-links">
                    <ul>
                        <li><a href="/hizmetler">Hizmetler</a></li>
                        <li><a href="/referanslar">Referanslar</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/iletisim">İletişim</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-info">
                &copy; 2023 UzAI Teknoloji. Tüm hakları saklıdır.
            </div>
        </footer>
    );
};

export default Footer;
