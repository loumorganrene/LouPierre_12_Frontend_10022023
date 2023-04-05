import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserMainDataProvider } from './context/UserMainData'
import Dashboard from './pages/Dashboard'
// import Error from './components/Error';
import './App.scss'
import ApiFetcher from './api/ApiFetcher'
import MockFetcher from './api/MockFetcher'

function App() {

  return (
    // <Router>
    //   <Switch>
    //     <Route path="/users/:userId">
          <UserMainDataProvider dataSource={new ApiFetcher() ? new ApiFetcher() : new MockFetcher()}>
            <Dashboard />
          </UserMainDataProvider>
    //     </Route>
    //     <Route path="*" element={<Error />} />
    //   </Switch>
    // </Router>
  )
}

export default App;