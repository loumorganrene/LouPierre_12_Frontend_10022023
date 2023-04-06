import React from 'react'
import { UserMainDataProvider } from '../context/UserMainData'
import { useParams } from 'react-router-dom'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import Dashboard from '../pages/Dashboard'
import ApiFetcher from '../api/ApiFetcher'
import MockFetcher from '../api/MockFetcher'
import Error from '../components/Error'
import './App.scss'

function App() { 
  
  const users = ['12', '18']
  const paramId = useParams()

  if(!users.includes(paramId.userId)) {
    return (
    <div className='App'>
      <Error />
    </div> )
  }

  return (
    <div className="App">
      <Nav />
      <div className="main">
        <Sidebar />
        <UserMainDataProvider dataSource={new ApiFetcher(paramId.userId) ? new ApiFetcher(paramId.userId) : new MockFetcher(paramId.userId)}>
          <Dashboard />
        </UserMainDataProvider>
      </div>
    </div>
  )
}

export default App;