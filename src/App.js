import './App.css';
import Intro from './pages/introScreen/index';
import Chat from './pages/chatScreen/index';
import Main from './pages/mainScreen/index';
import Setting from './pages/settingsScreen/index';

function App() {
  const routeCurrent = window.location.pathname;

  return (
    <div className="App">
      {(routeCurrent === '/intro' || routeCurrent === '/') && <Intro />}
      {(routeCurrent === '/chat') && <Chat />}
      {(routeCurrent === '/main') && <Main />}
      {(routeCurrent === '/setting') && <Setting />}
    </div>
  );
}

export default App;
