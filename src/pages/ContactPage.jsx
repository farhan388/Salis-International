// 
import React from "react";
import { FaPhone, FaEnvelope, FaBuilding, FaMapMarkerAlt } from "react-icons/fa";
import { Navbar } from "../components";

const ContactInfo = () => {
  return (
    <>
            <Navbar />
    <div className="container py-5" style={{ maxWidth: "600px" }}>
      <h2 className="mb-3">Salis International</h2>
      <p className="mb-1"></p>

      <ul className="list-unstyled mt-4">
        <li className="d-flex align-items-center mb-3">
          <FaPhone size={20} className="me-3 text-primary" />
          <span>+353 89 940 0483</span>
        </li>
        <li className="d-flex align-items-center mb-3">
          <FaEnvelope size={20} className="me-3 text-primary" />
          <a href="mailto:mail@morningscore.io" className="text-decoration-none">
            Salisinternational786@gmail.com
          </a>
        </li>
        <li className="d-flex align-items-center mb-3">
          <FaBuilding size={20} className="me-3 text-primary" />
          <span>Daska road near Shell pump Sialkot Pakistan</span>
        </li>
        <li className="d-flex align-items-center mb-3">
          <FaMapMarkerAlt size={20} className="me-3 text-primary" />
          <span>Warehouse Melbourne Australia </span>
        </li>
      </ul>

      <p className="mt-4">
        We strive to answer all inquiries within 24 hours, If you
        need help in tool-specific areas, you can also check out our{" "}
        <a href="/help" className="text-primary text-decoration-none">
          help section
        </a>
        .
      </p>

      <h5 className="mt-4">ORDER SCHDULE:</h5>
      <p>
        <strong> 24 HOURS Everyday</strong>
      </p>
    </div>
      </>
  );
};

export default ContactInfo;
