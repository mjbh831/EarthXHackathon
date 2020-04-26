import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Menu from './components/Menu/Menu';
import SignIn from './components/SignIn/SignIn';
import Profile from './components/Profile/Profile';
import Challenge from './components/Challenges/Challenge';
import Challenge2 from './components/Challenges/Challenge2';
import Challenge3 from './components/Challenges/Challenge3';
import Challenge4 from './components/Challenges/Challenge4';
import Challenge5 from './components/Challenges/Challenge5';
import MaskUpload from './components/MaskUpload/MaskUpload';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: 'home', 
      showSignIn: false,
    };
    this.onRouteChange = this.onRouteChange.bind(this);
    this.handleCommunityClick = this.handleCommunityClick.bind(this);
  }
  onRouteChange = (route) =>{
    this.setState({route: route})
  }
  handleCommunityClick = () => {
    this.setState({showSignIn: true});
  }

  render() {
    const showSignIn = this.state.showSignIn;
    let showSignInPage;

    if(showSignIn === true){
      showSignInPage = <SignIn onRouteChange={this.onRouteChange}/>;
    }
    return (
        <div className="App">
        {
          this.state.route === 'home'
          ? <div>
              <Hero />
              <Menu handleCommunityClick={this.handleCommunityClick}/>
              {showSignInPage};             
          </div>
          : <div>
              <Profile onRouteChange={this.onRouteChange}/>
              <Challenge />
              <Challenge2 />
              <Challenge3 />
              <Challenge4 />
              <Challenge5 />
            </div>
        }

        {
          // <MaskUpload />
        }

        </div>
      );
  }
}
export default App;
