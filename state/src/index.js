import React from "react";
import ReactDOM from "react-dom";

if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  constructor(props) {
    super(props);

    // THIS IS THE ONLY TIME we do direct assignment
    // to this.state
    this.state = { lat: null, errorMessage: "" ,lng:null};

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // we called setstate!!!!
        this.setState({
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				});
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  // React says we have to define render!!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat} ,  <br /> Longitude : {this.state.lng} </div>;
    }

    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
