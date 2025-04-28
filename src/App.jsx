import './App.css'
import Login from './components/Login.jsx';
import './components/Layout.css';
import Success from './components/success.jsx';
import Error from './components/Error.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="content-section">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>

          <Route exact path="/success">
            <Success />
          </Route>

          <Route exact path="/error">
            <Error/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
