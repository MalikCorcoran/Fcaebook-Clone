import React from 'react';
import './App.css';
import Feed from './Components/Feed/Feed';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
// import MessageSender from './Components/MessageSender/MessageSender';
import Sidebar from './Components/Sidebar/Sidebar';
import { useStateValue } from './StateProvider';
// import Widgets from './Components/Widget/Widgets';

function App() {
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login /> ) : (
          <>
          <Header />
      <div className='app__body' >
        <Sidebar/>
        <Feed />
        {/* <Widgets /> */}
        {/* <MessageSender /> */}
       </div>

       </>
        )
      
      }
     
      
      

    </div>

  );
}

export default App;
