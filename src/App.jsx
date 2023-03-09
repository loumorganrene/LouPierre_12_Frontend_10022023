import { UserMainDataProvider } from './context/UserMainData'
import { UserActivityDataProvider } from './context/UserActivityData'
import Nav from './components/Nav'
import Dashboard from './pages/Dashboard'
import Sidebar from './components/Sidebar'
import './App.scss'

function App() {

  return (
    <div className="App">
      <Nav />
      <div className="main">
        <Sidebar />
        <UserMainDataProvider>
          <UserActivityDataProvider>
            <Dashboard />
          </UserActivityDataProvider>
        </UserMainDataProvider>
      </div>
    </div>
  )
}

export default App;
