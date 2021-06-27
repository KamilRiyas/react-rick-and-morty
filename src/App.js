import Header from './Components/Header';
import Characters from './Components/Characters/Characters';
import Episodes from './Components/Episodes/Episodes';
import Locations from './Components/Locations/Locations';
import Footer from './Components/Footer';
import Welcome from './Welcome';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path='/characters'>
            <Characters />
          </Route>
          <Route path='/episodes'>
            <Episodes />
          </Route>
          <Route path='/locations'>
            <Locations />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router >
  );
}

export default App;
