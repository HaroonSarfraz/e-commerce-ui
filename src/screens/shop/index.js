import './style.scss';
import React from "react";
import { fetchCategories } from "../../services/api/category";
import { fetchProducts } from "../../services/api/product";
// import { Products } from '../../components'
import coverImage from "../../assets/images/shopping-image.jpg";

import { Search } from '@material-ui/icons'

class Shop extends React.Component {
  state = {
    isLoading: true,
    isModalOpen: false,
    categories: [],
    products: [],
    selectedCategoryId: 'all',
    searchProductKeyword: '',
    selectedProductId: null
  }

  componentDidMount() {
    this._getCategoriesFromApi();
    this._getProductsFromApi();
  }

  // Api Calls

  _getCategoriesFromApi = () => {
    fetchCategories()
      .then((response) => {
        this.setState({
          categories: response.data
        })
      })
  }

  _getProductsFromApi = (category_id = 'all', searchProductKeyword = '') => {
    fetchProducts(category_id, searchProductKeyword)
      .then((response) => {
        this.setState({
          isLoading: false,
          products: response.data
        })
      })
  }

  // Handlers

  closeProductModal = () => {
    this.setState({
      isModalOpen: false,
      selectedProductId: null
    })
  }

	openProductModal = (productId) => {
    this.setState({
      selectedProductId: productId,
      isModalOpen: true
    })
  }

  handleCategoryChange = (e) => {
    const selectedCategoryId = e.target.value;
    this.setState({ selectedCategoryId })
    this._getProductsFromApi(selectedCategoryId);
  }

  handleProductSearchKeyword = (e) => {
    this.setState({
      searchProductKeyword: e.target.value
    })
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleSearch();
    }
  }

  handleSearch = () => {
    const { selectedCategoryId, searchProductKeyword } = this.state;
    this._getProductsFromApi(selectedCategoryId, searchProductKeyword);
  }

  setListView = () => {
    this.setState({
      listView: true
    })
  }

  unsetListView = () => {
    this.setState({
      listView: false
    })
  }

  // Renders

  renderHeader() {
    const { categories, selectedCategoryId, searchProductKeyword, listView } = this.state;

    const category = categories.find(category => category.id.toString() === selectedCategoryId);
    let image;

    if (selectedCategoryId === 'all') {
      image = coverImage
    }
    else if (category && category.image) {
      image = category.image
    }


    return (
      <div className="header">
        <div className="form-group row">
          <div className="col-md-3 col-sm-4 col-xs-12">
            <select
              name="select-category"
              id="select-category"
              onChange={this.handleCategoryChange}
              className="form-control input-field"
              defaultValue={selectedCategoryId}
            >
              <option value="all">All categories</option>
              {categories.map((category, index) => (
                <option
                  key={index}
                  value={category.id}
                >
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-12 search-product">
            <input
              type="text"
              name="search-product"
              placeholder="Search"
              className="form-control input-field"
              value={searchProductKeyword}
              onChange={this.handleProductSearchKeyword}
              onKeyPress={this.handleKeyPress}
            />
            <button
              className="btn btn-default"
              onClick={this.handleSearch}
            >
              <Search />
            </button>
          </div>
        </div>

        <div className="image-container">
          {image && <img src={image} alt="coverimage" />}
          {category &&
            <div className="category-info">
              <h2>{category.name}</h2>
              <h5>{category.description}</h5>
            </div>
          }
        </div>
      </div>
    );
  }

  renderProducts = () => {
    return (
      <div className="products-container">
        Holla
      </div>
    )
  }

  render() {
    return (
      <div className="shop">
        {this.renderHeader()}
        {this.renderProducts()}
      </div>
    );
  }
}

export default Shop;
