import React, { Component } from "react";
import CartScrollBar from "./CartScrollBar";
import Counter from "./Counter";
import EmptyCart from "../empty-states/EmptyCart";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import { findDOMNode } from "react-dom";

import logo from '../images/logo.png';



import VisibilitySensor from "./visibility-sensor";

import  Tourne  from "./Carousel"

import  SimpleHeader  from "./simpleHeader"
import '../scss/group.css';







class Header extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      showCart: false,
      cart: this.props.cartItems,
      mobileSearch: false
    };

  }
  handleCart(e) {
    e.preventDefault();
    this.setState({
      showCart: !this.state.showCart
    });
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
  handleClickOutside(event) {
    const cartNode = findDOMNode(this.refs.cartPreview);
    const buttonNode = findDOMNode(this.refs.cartButton);
    if (cartNode.classList.contains("active")) {
      if (!cartNode || !cartNode.contains(event.target)) {
        this.setState({
          showCart: false
        });
        event.stopPropagation();
      }
    }
  }
  componentDidMount() {
    document.addEventListener(
      "click",
      this.handleClickOutside.bind(this),
      true
    );
  }
  componentWillUnmount() {
    document.removeEventListener(
      "click",
      this.handleClickOutside.bind(this),
      true
    );
  }

  render() {
    let cartItems;
    cartItems = this.state.cart.map(product => {
      return (
        <li className="cart-item" key={product.name}>
          <img className="product-image" src={product.image} />
          <div className="product-info">
            <p className="product-name">{product.name}</p>
            <p className="product-price">{product.price}</p>
          </div>
          <div className="product-total">
            <p className="quantity">
              {product.quantity} {product.quantity > 1 ? "Nos." : "No."}{" "}
            </p>
            <p className="amount">{product.quantity * product.price}</p>
          </div>
          <a
            className="product-remove"
            href="#"
            onClick={this.props.removeProduct.bind(this, product.id)}
          >
            ×
          </a>
        </li>
      );
    });
    let view;
    if (cartItems.length <= 0) {
      view = <EmptyCart />;
    } else {
      view = (
        <CSSTransitionGroup
          transitionName="fadeIn"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          component="ul"
          className="cart-items"
        >
          {cartItems}
        </CSSTransitionGroup>
      );
    }
    // <img
    //   className="logo"
    //   src="https://res.cloudinary.com/sivadass/image/upload/v1493547373/dummy-logo/Veggy.png"
    //   alt="Veggy Brand Logo"
    // />
    return (
      <header>

          <h3 className="numeros"> 
          <span className="contacts">
          NOUS CONTACTER : 65 53 39 21 /
          </span> 73 14 86 61</h3>

        <div className="container">
          <div className="brand" >
            {/* IVOIREPROLUX */}
            <img
              className="logo"
              src={logo}
              alt="Ivoireprolux Logo"
            />
            {/* alternative header in case of scroll */}
          </div>
            <div>
              {this.props.simpleHeader && <SimpleHeader  handleSearch={this.props.handleSearch}/>}
            </div>

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
                <img
                  src="https://res.cloudinary.com/sivadass/image/upload/v1494756030/icons/back.png"
                  alt="back"
                />
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
          {/* div button connexion */}
          <div className="button-connexion">
            <button >Se Connecter</button>
          </div>
          {/* new div for whishlist */}
          <div className="whishlist">
          <img
                height="45"
                width="42"
                className={this.props.cartBounce ? "tada" : " "}
                src="heart-100.png"
                alt="Whishlist"
              />
              <p>Favoris</p>
              
          </div>

          <div className="cart">
            <div className="cart-info">
              <table>
                <tbody>
                  <tr>
                    <td>Nbr. de produits</td>
                    <td>:</td>
                    <td>
                      <strong>{this.props.totalItems}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Sous Total</td>
                    <td>:</td>
                    <td>
                      <strong>{this.props.total}</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <a
              className="cart-icon"
              href="#"
              onClick={this.handleCart.bind(this)}
              ref="cartButton"
            >
              <img
                height="35"
                width="32"
                className={this.props.cartBounce ? "tada" : " "}
                src="iconfinder_simpline_41_2305621.png"
                alt="Cart"
              />
              {this.props.totalItems ? (
                <span className="cart-count">{this.props.totalItems}</span>
              ) : (
                ""
              )}
            </a>
            <div
              className={
                this.state.showCart ? "cart-preview active" : "cart-preview"
              }
              ref="cartPreview"
            >
              <CartScrollBar>{view}</CartScrollBar>
              <div className="action-block">
                <button
                  type="button"
                  className={this.state.cart.length > 0 ? " " : "disabled"}
                >
                  VALIDER LA COMMANDE
                </button>
              </div>
            </div>
          </div>

        </div>
        <div className="row categories">
          <div className="column categorie-item"><a href="#">BOUTIQUE OFFICIELLE</a></div>
          <div className="column categorie-item"><a href="#">DESTOCKAGE</a></div>
          <div className="column categorie-item"><a href="#">DEALS DU JOUR</a></div>
          <div className="column categorie-item"><a href="#">NTIC</a></div>
          <div className="column categorie-item"><a href="#">VEHICULES</a></div>
          <div className="column categorie-item"><a href="#">IMMOBILIER</a></div>
          <div className="column categorie-item"><a href="#">MODE</a></div>
        </div>
        <br/>
        <div className="tourne">
          <Tourne/>
        </div>

      </header>

    );
  }
}

export default Header;
