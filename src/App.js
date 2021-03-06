import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
// import { addMessage } from './redux/state';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.state.navPage} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile 
                                              profilePage={props.state.profilePage}
                                              dispatch={props.dispatch}
                                              // updateNewPostText={props.updateNewPostText}
                                              />}/>
            {/* <Route path='/dialogs/*' element={<Dialogs />}/> */}
            <Route path="/dialogs" element={<Dialogs state={props.state.dialogsPage} 
                                                     addMessage={props.addMessage}
                                                     updateNewMessageText={props.updateNewMessageText}/>} />
            <Route path='/news' element={<News />}/>
            <Route path='/music' element={<Music />}/>
            <Route path='/settings' element={<Settings />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
