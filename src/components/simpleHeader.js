import React from 'react';

import logo from '../images/logo.png';

import '../scss/components/_simpleHeader.scss';


const divStyle = {
    padding: '1%',
    // marginTop : '-105px',
    top  : '0',
    // border: '5px solid pink',
    position : 'fixed',
    zIndex : '10',
    display: 'flex',
    width : '100%',
    backgroundColor : 'white',
    display: '-webkit-flex'
  };

     
export default class SimpleHeader extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            mobileSearch: true
        };  
    }
    
    handleSubmit(e) {
        e.preventDefault();
    }
    handleMobileSearch(e) {
        e.preventDefault();
        this.setState({
            mobileSearch: true
        });
    }
    handleSearchNav(e) {
        e.preventDefault();
        this.setState(
          {
            mobileSearch: false
          },
          function() {
            this.refs.searchBox.value = "";
            this.props.handleMobileSearch();
          }
        );
      }
    render() {
        return( 
    <div style={divStyle}>
        <div className="brand" >
            {/* IVOIREPROLUX */}
            <img
                className="logo"
                src={logo}
                alt="Ivoireprolux Logo"
            />
        {/* alternative header in case of scroll */}
        </div>
            {/* <h1>TEST DIV IN HEADER</h1> */}
            <div className="search">
            <a
              className="mobile-search"
              href="#"
              onClick={this.handleMobileSearch.bind(this)}
            >
              <img
                src="https://res.cloudinary.com/sivadass/image/upload/v1494756966/icons/search-green.png"
                alt="search"
              />
            </a>
            <form
              action="#"
              method="get"
              className={
                this.state.mobileSearch ? "search-form active" : "search-form"
              }
            >
              <a
                className="back-button"
                href="#"
                onClick={this.handleSearchNav.bind(this)}
              >
              </a>
              <input
                type="search"
                ref="searchBox"
                placeholder="Recherche de produits"
                className="search-keyword"
                onChange={this.props.handleSearch}
              />
              <button
                className="search-button"
                type="submit"
                onClick={this.handleSubmit.bind(this)}
              />
            </form>
          </div>
        </div>        ) 
    }
}
