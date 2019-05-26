import React, { Component } from "react";

const NoResults = () => {
  return (
    <div className="products">
      <div className="no-results">
        <img
          src="https://res.cloudinary.com/sivadass/image/upload/v1494699523/icons/bare-tree.png"
          alt="Empty Tree"
        />
      <h2>Desole , pas de produits corresponds a votre recherche!</h2>
        <p>Entrer un autre mot cle.</p>
      </div>
    </div>
  );
};

export default NoResults;
