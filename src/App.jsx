import React from 'react'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/MyPosts/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Settings from './components/Settings/Settings';
import Sidebar from './components/Sidebar/Sidebar';
import LoginPage from './components/Login/Login';
import Footer from './components/Footer/Footer';
import Music from './components/Music/Music';
import News from './components/News/News';

import './App.css'

const App = (props) => {

  return (

      <div className="app-wrapper">
        <HeaderContainer />
        
        <div className="grid">
          <Sidebar />

          <div className="content">
            <img className="img" />
            <Switch>
            {/* <Route path="/messages" element={<DialogsContainer />} /> */}
            <Route exact path="/messages"><DialogsContainer /></Route>
            <Route exact path="/profile"><ProfileContainer /></Route>
            {/* <Route exact path="/profile/:userId"><ProfileContainer /></Route> */}
            <Route exact path="/users"><UsersContainer /></Route>
            <Route exact path="/login"><LoginPage /></Route>
            {/* <Route exact path="/news"><News /></Route>
            <Route exact path="/music"><Music /></Route>
            <Route exact path="/settings"><Settings /></Route> */}
          </Switch>
        </div>

        </div>
        <Footer />
      </div>
      
  );
}

export default App;
