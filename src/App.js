 import Header from "./component/Header/Header"
 import SimpleBottomNavigation from "./component/MainNav"
 import './App.css';
import Trending from "./component/Pages/Trending/Trending"
import Movie from "./component/Pages/Movies/Movies"
import Series from "./component/Pages/Series/Series"
import Search from "./component/Pages/Search/Search"



 import Container from '@material-ui/core/Container';

import {BrowserRouter as Router,Route,Switch} from "react-router-dom"



 function App() {
  return (
    <>
    <Router>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movie} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
      </Container>
      </div>
     

    <SimpleBottomNavigation />

    </Router>
    </>
  );
}

export default App;
