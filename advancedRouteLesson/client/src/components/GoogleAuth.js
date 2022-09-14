
import React , {Component} from 'react'

class GoogleAuth extends Component {
  state = {isSignedIn:null}
  componentDidMount(){
    window.gapi.load('client:auth2', ()=>{
      window.gapi.client.init({
				clientId:
					"536111871904-qlpq50f6487s325f3ekbl4kp80hni5sv.apps.googleusercontent.com",
          scope:'email'
			}).then(()=>{
        this.auth = window.gapi.auth2.getAuthInstance()
        this.setState({isSignedIn:this.auth.isSignedIn.get()})
      })
    })
  }

  renderAuthButon(){
    if(this.state.isSignedIn === null) {
      return <div>I dont if they have signed in </div>
    }
    else if (this.state.isSignedIn) {
      return <div>I am signed in</div>
    }
    else {
      return <div>I am not signed in</div>
    }
  }
  render() {
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    )
  }
}

export default GoogleAuth