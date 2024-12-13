const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-icons">
          <a
            href="https://wa.me/9344927627?text=Hi%20Opptiverse!%20👋%20I’m%20interested%20in%20learning%20more%20about%20your%20platform%20and%20opportunities.%20Could%20you%20guide%20me%20on%20how%20to%20get%20started?%20🚀
"
            target="_blank"
          >
            <i className="fa-brands fa-whatsapp" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <i className="fa-brands fa-instagram" />
          </a>
          <a href="https://www.linkedin.com/company/manvian" target="_blank">
            <i className="fa-brands fa-linkedin" />
          </a>
        </div>
        <div className="copy-right-text">
          Developed with love by <a href="#">Manvian</a> ©{" "}
          {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
