import React, { Component } from 'react';
import './App.css';
import {Link,Route} from 'react-router-dom';
import MoviesPage from './components/pages/MoviesPage';
import 'semantic-ui-css/semantic.min.css';
import Footer from './components/Footer';
import {Container} from 'semantic-ui-react';
import Header from './components/Header';
class App extends Component {
  render() {
    return (
      <div>       
       <Header/>
        <Container text>
          <Route path="/movies" component={MoviesPage}></Route>
              </Container>
             <Footer/>   
      </div>
    );
  }
}

export default App;
