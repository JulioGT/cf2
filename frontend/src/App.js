import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import configureStore from './config/configureStore';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

const saveToLocalStorage = (state) => { 
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.log(e);
  }
};

store.subscribe(() => saveToLocalStorage(store.getState()));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/">
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </BrowserRouter>
      </Provider>
  );
}

export default App;
