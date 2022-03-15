import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import MyPosts from './components/MyPosts/MyPosts';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';

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
            <Route path="/messages" element={<DialogsContainer store={props.store}/>} />
            <Route path="/profile" element={<MyPosts store={props.store}/>} />
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
