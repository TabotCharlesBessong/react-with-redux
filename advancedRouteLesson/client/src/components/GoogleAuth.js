
import React , {Component} from 'react';
import { gapi } from 'gapi-script'

class GoogleAuth extends Component {

  state = { isSignedIn : null }
	componentDidMount() {
		gapi.load("client:auth2", ()=>{
      gapi.client
				.init({
					clientId:
						"536111871904-o8eld1cnfknoqqttv0d7ehgvk9sabvdu.apps.googleusercontent.com",
					scope: "email",
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.setState({ isSignedIn: this.auth.isSignedIn.get() });
				});
    });
	}

  renderAuthButton () {
    if(this.state.isSignedIn === null) {
      return (<div>i dont knw if they are signed in</div>)
    }
    else if (this.state.isSignedIn) {
      return (<div>i am signed in</div>)
    }
    else {
      return (<div>i am not signed in</div>)
    }
  }
	render() {
		return <div>
      {this.renderAuthButton()}
    </div>;
	}
}

export default GoogleAuth