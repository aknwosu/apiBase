import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar'
import Main from './components/Main';

class App extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      quotes: []
    }
    this.getQuotes();
  }

  getQuotes = async () =>  {
    const { data, status } = await axios.get('/api/v1/quotes');
    if (status === 200) {
      this.setState({quotes: data.data})
    }
    console.log(this.state,status, data);
  }
  createQuote = async (quote, author, year) =>  {
    const  data  = await axios.post('/api/v1/quotes', {
      quote,
      author,
      year,
    });
    console.log("new quote==", data);
    if (data.status === 200) {
      this.setState({quotes: [data.data.data, ...this.state.quotes]})
    }
  }
  searchQuotes = async (searchVal) => {
    const  { data } = await axios.get(`/api/v1/quotes/search?searchTerm=${searchVal}`);
    this.setState({quotes: data.data})

  }
  filter = async (year) => {
    const  {data} = await axios.get(`/api/v1/quotes/years/${year}`);
    this.setState({quotes: data.data})
  }

  render() {

    return (
      <div className="App">
        { /*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
    </p> */}
      <div className="sideBar">
        <SideBar 
          createQuote={this.createQuote}
          searchQuotes={this.searchQuotes}
          filter={this.filter}
          />
      </div>
      <div className="mainView"><Main quotes={this.state.quotes} /></div>
      </div>
    );
  }
}

export default App;
