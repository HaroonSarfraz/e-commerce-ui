import './style.scss';
import React from "react";
import Style from './style.js';

class About extends React.Component {
  render() {
    return(
      <div className="about">
        <div className="opening" style={Style}>
          <div className="content">
            <div className="title">
              OUR STORY
            </div>
          </div>
        </div>
        <div className="content">
          <h1>Title 1</h1>
          <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt,
            explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos, qui ratione
          </p>
        </div>
      </div>
    );
  }
}

export default About;
