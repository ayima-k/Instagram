import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <span>Meta</span>
        <span>About</span>
        <span>Blog</span>
        <span>Jobs</span>
        <span>Help</span>
        <span>API</span>
        <span>Privacy</span>
        <span>Terms</span>
        <span>Top Accounts</span>
        <span>Locations</span>
        <span>Instagram Lite</span>
        <span>Contact Uploading & Non-Users</span>
      </div>
      <div>
        <select defaultValue={'e'}>
          <option>Africaans</option>
          <option>Cestina</option>
          <option>Dansk</option>
          <option>Deutsch</option>
          <option value="e">English</option>
          <option>English (UK)</option>
          <option>Espanol</option>
          <option>Italiano</option>
          <option>Русский</option>
          <option>Portuguse</option>
        </select>
        <span>© 2023 Instagram from Meta</span>
      </div>
    </div>
  );
};

export default Footer;
