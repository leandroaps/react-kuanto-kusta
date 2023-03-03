import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import Router from './components/Router'

const App = () => {
  return (
    <main className="d-flex flex-nowrap">
      <div className="container pt-5">
        <BrowserRouter>
          <Header />
          <Router />
        </BrowserRouter>
      </div>
    </main>
  )
}

export default App
