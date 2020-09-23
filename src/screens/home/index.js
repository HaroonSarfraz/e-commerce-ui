import './style.scss';
import Style from './style.js';
import React from "react";

class Home extends React.Component {
  handleClick = () => {
    window.scrollTo(0, document.body.scrollHeight);
  }

  render() {
    return(
      <div className="home">
        <div className="opening" style={Style}>
          <div className="content">
            <div className="title">
              MY WEBSITE
            </div>

            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in massa elit. Quisque ut erat nec orci volutpat varius. Mauris et ipsum ut augue feugiat.
            </div>

            <div className="down-icon" onClick={this.handleClick}>
              Down
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
