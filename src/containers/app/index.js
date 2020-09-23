import React from 'react';
import { connect } from 'react-redux';

import PrivateContainer from '../private';
import PublicContainer from '../public';

class App extends React.Component {
  render() {
    const { isSignedIn, isLoading } = this.props;
    if(isLoading) {
      return(
        <div>
          Loading...
        </div>
      )
    }
    else if(isSignedIn) {
      return(<PrivateContainer/>)
    }
    else {
      return(<PublicContainer/>)
    }
  }
}

const mapStateToProps = state => ({
  isSignedIn: state.reduxTokenAuth.currentUser.isSignedIn,
  isLoading: state.reduxTokenAuth.currentUser.isLoading
})

export default connect(mapStateToProps, null)(App);
