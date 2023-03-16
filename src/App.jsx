import { UserMainDataProvider } from './context/UserMainData'
import Nav from './components/Nav'
import Dashboard from './pages/Dashboard'
import Sidebar from './components/Sidebar'
import './App.scss'
import ApiFetcher from './api/ApiFetcher'

// class FetcherMock {
//   async getUser() {
//       return {
//         id: 1,
//         firstName: 'Titi'
//       }
//     }
// }

// class FetcherApi {
//   async getUser() {
//       return fetch('http://localhost:3001/user/12').then((response) => response.json()).then((r => r.data))
//     }
// }

function App() {

  return (
    <div className="App">
      <Nav />
      <div className="main">
        <Sidebar />
        <UserMainDataProvider dataSource={new ApiFetcher()}>
            <Dashboard />
        </UserMainDataProvider>
      </div>
    </div>
  )
}

export default App;
