export default function Footer(){
    return (
        <div className="footer-container mt-5 ">
          <div className="footer-content">
            <div className="logo-section">
              <img src="/logo.png" alt="Logo" className="logo3" />
              
            </div>
            <div className="social-media-section">
              <p className="social-media-header">Find us in social media</p>
              <div className="social-media-links">
                <a href="#" className="footer-link">
                  <div className="Icons-media">
                  <div class="circle-background">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24">
	<path fill="black" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path>
</svg></div></div>
                </a>
                <a href="#" className="footer-link">
                  <div className="Icons-media"><div class="circle-background">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24">
	<path fill="black" d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a78.831 78.831 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.883 4.883 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465a72.11 72.11 0 0 1-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78.43 78.43 0 0 1-2.189-.023l-.194-.006a63.036 63.036 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.889 4.889 0 0 1-1.771-1.153a4.904 4.904 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428a74.1 74.1 0 0 1-.03-.712l-.005-.194A79.047 79.047 0 0 1 2 13.028v-2.056a78.82 78.82 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.88 4.88 0 0 1 3.68 3.678a4.897 4.897 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5"></path>
</svg></div></div>
                </a>
                <a href="#" className="footer-link">
                  <div className="Icons-media"><div class="circle-background">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128">
	<path d="M75.916 54.2L122.542 0h-11.05L71.008 47.06L38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303L89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086l-39.42-56.386h16.972L65.19 53.824l4.954 7.086l41.353 59.15h-16.97L60.782 71.793Z"></path>
</svg></div></div>
                </a>
                <a href="#" className="footer-link">
                  <div className="Icons-media"><div class="circle-background">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24">
	<path fill="black" d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"></path>
</svg></div></div>
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