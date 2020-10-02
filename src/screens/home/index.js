import './style.scss';
import Style from './style.js';
import React from "react";
import history from "../../config/history";
import {Shop} from '@material-ui/icons';
class Home extends React.Component {
  handleClick = () => {
    history.push("/shop")
  }

  render() {
    return(
      <div className="home">
        <div className="opening" style={Style}>
          <div className="content">
            <div className="title">
            Find The Best Product from Our Shop
            </div>

            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in massa elit. Quisque ut erat nec orci volutpat varius. Mauris et ipsum ut augue feugiat.
            </div>

            <Shop className="shop-icon" onClick={this.handleClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
