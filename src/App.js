import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import AutocompleteBox from './Component/Autocomplete/AutocompleteBox'

function App() {
  return (
    <>
    <div className='nav'>
      <Link to='/Autocomplete'>Autocomplete</Link>
      <Link>Auto</Link>
    </div>
    <br></br>
    <Switch>
      <Route path='/Autocomplete' component={AutocompleteBox}/>
    </Switch>
    </>
  );
}

export default App;
