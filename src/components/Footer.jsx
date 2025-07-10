import React from "react";

const Footer = () => {
  return (
    <footer style={{ marginTop: '2rem', padding: '1rem', textAlign: 'center', color: '#555' }}>
      <p>&copy; {new Date().getFullYear()} - Hecho con ❤️</p>
    </footer>
  );
};

export default Footer;
