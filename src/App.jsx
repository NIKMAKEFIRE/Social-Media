import React from 'react'
import { Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/MyPosts/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import News from './components/News/News';

import './App.css'


const App = (props) => {

  return (

      <div className="app-wrapper">
        <Header />
        
        <div className="grid">
          <Sidebar />

          <div className="content">
            <img className="img" />
            <Routes>
            <Route path="/messages" element={<DialogsContainer />} />
            <Route path="/profile" element={<ProfileContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>

        </div>
        <Footer />
      </div>
      
  );
}

export default App;
