import { UserMainDataProvider } from './context/UserMainData'
import Nav from './components/Nav'
import Dashboard from './pages/Dashboard'
import Sidebar from './components/Sidebar'
import './App.scss'
// import ApiFetcher from './api/ApiFetcher'
import MockFetcher from './api/MockFetcher'

function App() {

  return (
    <div className="App">
      <Nav />
      <div className="main">
        <Sidebar />
        <UserMainDataProvider dataSource={new MockFetcher()}>
            <Dashboard />
        </UserMainDataProvider>
      </div>
    </div>
  )
}

export default App;
