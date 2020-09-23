import "./style.scss";
import React from "react";
import { Link } from "react-router-dom";

import { fetchCart, removeItemFromCart, updateCart } from "../../services/api/cart";
import { DeleteForever, Forward } from '@material-ui/icons';

import defaultImage from "../../assets/images/default-image.png";

import * as alert from "../../actions/alert";

class Cart extends React.Component {
  state = {
    isLoading: true,
    isUpdated: false,
    lineItems: [],
    totalItemsAmount: null,
    totalAmount: null
  }

  componentDidMount() {
    this._getCartFromApi();
  }

  // Api Calls

  _getCartFromApi = () => {
    fetchCart()
      .then((response) => {
        const cart = response.data;
        this.setState({
          lineItems: cart.line_items,
          totalItemsAmount: cart.total_items_amount,
          totalAmount: cart.total_amount,
          isLoading: false,
          isUpdated: false
        })
      })
  }

  // Event Handles

  _handleDeleteLineItem = (lineItemId) => {
    removeItemFromCart(lineItemId)
    .then((response) => {
      const cart = response.data;

      this.setState({
        lineItems: cart.line_items,
        totalItemsAmount: cart.total_items_amount,
        totalAmount: cart.total_amount,
      })
    })
    .catch((error) => {
      if (error.response) {
        alert.error(error.response.data.message)
      }
      else {
        alert.error('Something went wrong')
      }
    })
  }

  _handleQuantityChange = (lineItemId, newQuantity) => {
    var lineItems = [...this.state.lineItems];
    const index = lineItems.findIndex((lineItem) => lineItem.id === lineItemId)
    lineItems[index].quantity = newQuantity

    this.setState({
      isUpdated: true,
      lineItems
    })
  }

  _handleUpdateBtn = () => {
    const cart = {
      line_items: this.state.lineItems.map((lineItem) => ({
        id: lineItem.id,
        quantity: lineItem.quantity
      })),
    }

    updateCart(cart)
    .then(
      this._getCartFromApi()
    )
    .catch((error) => {
      if (error.response) {
        alert.error(error.response.data.message)
      }
      else {
        alert.error('Something went wrong')
      }
    })
  }

  // Render

  renderLineItem = (lineItem, index) => {
    return(
      <div className="line-item row" key={index}>
        <div className="col-md-1 image">
          <img src={lineItem.image || defaultImage} alt={lineItem.product_name} />
        </div>

        <div className="col-md-2 name">
          <h5>{lineItem.product_name}</h5>
        </div>

        <div className="col-md-1 col-md-offset-2 name">
          <h5>Quantity: </h5>
        </div>

        <div className="col-md-1 quantity">
          <input
            type="number"
            min="1"
            name="quantitySelected"
            className="form-control input-field"
            value={lineItem.quantity}
            onChange={(e) => this._handleQuantityChange(lineItem.id, e.target.value)}
          />
        </div>

        <div className="col-md-1 col-md-offset-1 name">
          <h5>Item cost: </h5>
        </div>

        <div className="col-md-1 price">
          <h5>{lineItem.total}$</h5>
        </div>

        <div className="col-md-1 col-md-offset-1 actions">
          <button
            className="delete-line-item btn btn-link"
            onClick={() => this._handleDeleteLineItem(lineItem.id)}
          >
            <DeleteForever />
          </button>
        </div>
      </div>
    );
  }

  renderList = () => {
    const { lineItems } = this.state;

    if (lineItems && lineItems.length > 0) {
      return(
        <div className="item-list">
          {lineItems.map((lineItem, index) => (
            this.renderLineItem(lineItem, index)
          ))}
        </div>
      );
    }
    else {
      return(
        <div className="text-center">
          <h4>Your shopping cart is empty.</h4>
          <Link to="/shop" className="btn btn-link btn-lg">Let's shop</Link>
        </div>
      );
    }
  }

  renderCheckoutSection = () => {
    const { totalItemsAmount, totalAmount, isUpdated } = this.state;

    return(
      <div className="checkout-section">
        <div className="row">
          <div className="net-prices col-md-6 col-md-offset-3">
            <div className="text-center">
              <h5>Items Cost: {totalItemsAmount}$</h5>
            </div>

            <div className="text-center">
              <h5>Shipping Cost: 10.0$</h5>
            </div>

            <div className="text-center">
              <h5>Total Cost: {totalAmount}$</h5>
            </div>
          </div>
        </div>

        <div className="text-center checkout-action">
          {
            isUpdated ?
            (
              <button className="btn btn-default" onClick={this._handleUpdateBtn}>Update</button>
            )
            :
            (
              <Link
                className="btn btn-success"
                to="/checkout"
              >
                Checkout <Forward />
              </Link>
            )
          }
        </div>
      </div>
    );
  }

  render() {
    const { lineItems } = this.state;

    return(
      <div className='cart'>
        <h3 className='title'>Shopping Cart</h3>
        {this.renderList()}
        {lineItems && lineItems.length > 0 && this.renderCheckoutSection()}
      </div>
    );
  }
}

export default Cart;
