import { AppContextProvider } from './Context';
import Header from './components/Header'
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar'
import './App.scss';

function App() {

  return (
    <div className="App">
      <Header />
      <div className="main">
        <Sidebar/>
        <AppContextProvider>
          <Dashboard />
        </AppContextProvider>
      </div>
    </div>
  );
}

export default App;
