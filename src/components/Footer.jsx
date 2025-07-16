
import { FiShoppingBag } from "react-icons/fi";
import { FaMapMarkerAlt,FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  // {
  //   title: "About",
  //   link: "/#about",
  // },
  // {
  //   title: "Contact",
  //   link: "/#contact",
  // },
  
];

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row gy-5">
          {/* Company Details */}
          <div className="col-md-4">
            <h1 className="h4 d-flex align-items-center gap-2 mb-3">
              <FiShoppingBag size="30" />
              Salis International
            </h1>
            <p>
              Discover premium quality shirts at Salis International, where style meets comfort. Our curated collection features designs that fit every occasion—be it formal, casual, or a special event.
            </p>
          </div>

          {/* Footer Links */}
          <div className="col-md-4">
            <div>
              <h5 className="mb-3">Links</h5>
              <ul className="list-unstyled">
                {FooterLinks.map((link) => (
                  <li key={link.title} className="mb-2">
                    <a href={link.link} className="text-decoration-none text-light">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
               Owner Of Salis International: <hr/> <b>Ch. Afzaal Cheema</b>
            </div>
          </div>

          {/* Social Links and Contact */}
          <div className="col-md-4">
            <h5 className="mb-3">Connect with Us</h5>
            <div className="d-flex gap-3 mb-3">
              {/* <a href="#" className="text-light fs-4">
                <FaInstagram />
              </a> */}
              <a href="https://www.facebook.com/profile.php?id=61571059807591&mibextid=ZbWKwL" target="_blank" className="text-light fs-4">
                     <FaFacebook />
                </a>
                <a href = "https://wa.me/+353899400483" target="_blank" className = "text-light fs-4" >  <FaWhatsapp />
              </a>
              {/* <a href="#" className="text-light fs-4" target="_blank">
                <FaLinkedin />
              </a> */}
            </div>
            <div>
              <p className="mb-2 d-flex align-items-center gap-2">
                <FaMapMarkerAlt />
                Headoffice Daska road near Shell Pump Sialkot
              </p>
              <p className="mb-2 d-flex align-items-center gap-2">
                <FaMapMarkerAlt />
                 Warehouse Archerstreet lot, kilkenny, Ireland
                </p>
                <p className="mb-2 d-flex align-items-center gap-2">
                <FaMapMarkerAlt />
                Warehouse Melbourne Australia
                </p>
              <p className="d-flex align-items-center gap-2">
                <IoCall />
                +353 8922 12717
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
