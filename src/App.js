import React from 'react';
import './App.css';
import Header from './header.js';
import Main from './main.js';
import Footer from './footer.js';

class App extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
}
export default App;