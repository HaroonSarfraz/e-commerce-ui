import "./style.scss";
import React from "react";
import defaultImage from "../../assets/images/default-image.png";

import * as alert from "../../actions/alert";

import { addItemToCart, fetchCart } from "../../services/customerApi";

class ProductItem extends React.Component {
  // Handle Events

  handleView = () => {
    this.props.viewProduct(this.props.product.id);
  }

  handleAddToCart = () => {
    const product = this.props.product;

    fetchCart().then((response) => {
      const lineItem = response.data.line_items.find(line_item => line_item.product_id === product.id);
      const quantity = lineItem ? (lineItem.quantity + 1) : 1

      const item = {
        product_id: product.id,
        quantity: quantity
      }

      addItemToCart(item)
      .then(alert.success("Item has been added to cart."))
      .catch((error) => {
        if (error.response) {
          alert.error(error.response.data.message)
        }
        else {
          alert.error('Something went wrong')
        }
      })  
    })
  }

  // Render

  renderGridItem = () => {
    const { name, image, price } = this.props.product;
    const imageSrc = image === "" || image === null ? defaultImage : image;

    return(
      <div className="grid-product-item">
        <div className="product-image">
          <img src={imageSrc} alt="product"/>
        </div>
        <div className="product-details">
          <h5>{name}</h5>
          <p>{price}$</p>
        </div>
        <div className="product-options">
          <p>{price}$</p>
          <button
            className="btn"
            onClick={this.handleAddToCart}
          >
            Add to Cart
          </button>

          <button
            className="btn view-btn"
            onClick={this.handleView}
          >
            View
          </button>
        </div>
      </div>
    );
  }

  renderListItem = () => {
    const { name, image, price, description } = this.props.product;
    const imageSrc = image === "" || image === null ? defaultImage : image;

    return(
      <div className="row list-product-item">
        <div className="col-md-3 product-image">
          <img src={imageSrc} alt="product"/>
        </div>
        <div className="col-md-6 col-md-offset-1 product-details">
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
        <div className="col-md-2 product-options">
          <div>
            <p>Price: {price}$</p>
          </div>
          <div>
            <button
              className="btn view-btn"
              onClick={this.handleView}
            >
              View
            </button>
          </div>
          <div>
            <button
              className="btn"
              onClick={this.handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const {listView} = this.props

    return(
      listView ? this.renderListItem() : this.renderGridItem()
    )
  }
}

export default ProductItem;
