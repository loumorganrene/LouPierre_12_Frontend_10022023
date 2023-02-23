// import { useEffect, useState } from "react";
import Header from './components/Header'
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar'
import './App.scss';
import UserMacros from './components/UserMacros';


function App() {
// const [data, setData] = useState(null)
// const [loading, setLoading] = useState(true)
// const [error, setError] = useState(null)

//   useEffect(() => {
//     fetch('/user')
//         .then(response => {
//             if (response.ok) {
//                 return response.json()
//             }
//             throw response;
//         })
//         .then(data => {
//             setData(data);
//         })
//         .catch(error => {
//             console.error('Error fetching data: ', error);
//             setError(error);
//         }) 
//         .finally(() => {
//             setLoading(false)
//         })
// }, [])

// if (loading) return "Loading...";
// if (error) return "Error...";

  return (
    <div className="App">
      <Header />
      <div className="main">
        <Sidebar/>
        <Dashboard />
        <UserMacros />
      </div>
    </div>
  );
}

export default App;
