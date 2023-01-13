import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Contact, About, Drinks, SignIn } from './Components';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import './styles.css';
import { firebaseConfig } from './firebaseConfig';
import 'firebase/auth'; 
import { Provider } from 'react-redux';
import { Store } from './Redux/Store'; 



let myTitle = "Tequila Inventory"

ReactDOM.render(
  <React.StrictMode>
<FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
<Provider store={Store}>
    <Router>
      <Switch>

        <Route exact path="/">
          <Home title={myTitle}/>
        </Route>

        <Route path='/drinks'>
          <Drinks></Drinks>
        </Route>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route> 
        <Route path='/signin'>
          <SignIn></SignIn>
        </Route> 

      </Switch>
    </Router>
    </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
