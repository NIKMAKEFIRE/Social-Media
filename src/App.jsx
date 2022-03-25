import React from 'react'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/MyPosts/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Sidebar from './components/Sidebar/Sidebar';
import LoginPage from './components/Login/Login';
import Footer from './components/Footer/Footer';
import './App.css'
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/Common/Preloader/Preloader';

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader/>
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />

        <div className="grid">
          <Sidebar />

          <div className="content">
            <img className="img" />
            <Switch>
              <Route exact path="/messages"><DialogsContainer /></Route>
              <Route exact path="/profile"><ProfileContainer /></Route>
              <Route exact path="/users"><UsersContainer /></Route>
              <Route exact path="/login"><LoginPage /></Route>
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App) 
