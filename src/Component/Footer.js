export default function Footer(){
    return (
        <div className="footer-container">
          <div className="footer-content">
            <div className="logo-section">
              <img src="https://placehold.co/64x64" alt="Logo" className="logo3" />
              <span className="company-name">E-com World</span>
            </div>
            <div className="social-media-section">
              <p className="social-media-header">Find us in social media</p>
              <div className="social-media-links">
                <a href="#" className="footer-link">
                  <span className="sr-only">Facebook</span>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="footer-link">
                  <span className="sr-only">Instagram</span>
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="footer-link">
                  <span className="sr-only">Twitter</span>
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="footer-link">
                  <span className="sr-only">TikTok</span>
                  <i className="fab fa-tiktok"></i>
                </a>
              </div>
            </div>
            <div className="footer-columns">
              <FooterColumn title="Help" links={["Payment", "Shipping", "Returns"]} />
              <FooterColumn title="Explore" links={["Blog", "Trends", "Brands"]} />
              <FooterColumn title="Company" links={["About", "Locations", "Careers"]} />
            </div>
          </div>
          <div className="copyright-section">
            <p className="copyright-text">Copyright © 2023, E-com World. All rights reserved.</p>
          </div>
        </div>
      );


}
const FooterColumn = ({ title, links }) => {
    return (
      <div className="footer-column">
        <p className="column-title">{title}</p>
        <ul className="footer-links">
          {links.map((link, index) => (
            <li key={index} className="footer-link-item">
              <a href="#" className="footer-link">{link}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  };