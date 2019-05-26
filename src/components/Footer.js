import React, { Component } from "react";

const Footer = props => {
  return (
    <footer>
      <p className="footer-links">
        <a
          href="https://github.com/sivadass/react-shopping-cart"
          target="_blank"
        >
          View Source on Github
        </a>
        <span> / </span>
        <a href="mailto:contact@sivadass.in" target="_blank">
          Need any help?
        </a>
        <span> / </span>
        <a href="https://twitter.com/NSivadass" target="_blank">
          Say Hi on Twitter
        </a>
        <span> / </span>
        <a href="https://sivadass.in" target="_blank">
          Read My Blog
        </a>
      </p>
      <p>
        &copy; 2019 <strong>IVOIREPROLUX</strong> - LA VENTE EN LIGNE PRO
      </p>
    </footer>
  );
};

export default Footer;
