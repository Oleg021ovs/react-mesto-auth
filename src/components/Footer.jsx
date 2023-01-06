import React from "react";

function Footer() {
  const newDate = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer__copyright">© {newDate} Mesto</p>
    </footer>
  );
}

export default Footer;
