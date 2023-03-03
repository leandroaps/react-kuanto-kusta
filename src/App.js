import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import Header from './components/Header.jsx'
import Router from './components/Router.jsx'

const App = () => {
  return (
    <div className="container">
      <Header />
      <Router />
    </div>
  )
}

export default App
