import React, { Component } from 'react';
import { Navbar, Col, Row } from 'react-materialize'
import axios from 'axios';
import './App.css';
import SideBar from './components/SideBar'
import Main from './components/Main';

class App extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      quotes: [],
      title: "All Quotes"
    }
    this.getQuotes();
  }

  getQuotes = async () =>  {
    const { data, status } = await axios.get('/api/v1/quotes');
    if (status === 200) {
      this.setState({quotes: data.data, title: "All Quotes"})
    }
  }
  createQuote = async (quote, author, year) =>  {
    const  data  = await axios.post('/api/v1/quotes', {
      quote,
      author: author ||  "Unknown",
      year,
    });
    if (data.status === 200) {
      this.getQuotes()      
    }
  }
  searchQuotes = async (searchVal) => {
    let quotes = [];
    try {
      const  { data, status } = await axios.get(`/api/v1/quotes/search?searchTerm=${searchVal}`);
      if (status === 200) {
        quotes = data.data
      }
    } catch (error) {}
    this.setState({quotes, title: `Search result for "${searchVal}"`})
  }
  filter = async (year) => {
    let quotes = [];
    try {
      const  {data, status} = await axios.get(`/api/v1/quotes/years/${year}`);
      if (status === 200) {
        quotes = data.data
      }
    } catch (error) {}
    this.setState({quotes, title: `Filter By Year: ${year}`})

  }

  render() {

    return (
      <div className="App">
        <Navbar className="teal darken-4" brand='Quotes Builder' right>
        </Navbar>
        <Row>
          <Col s={4} className='grid-example'>
          <SideBar 
            createQuote={this.createQuote}
            searchQuotes={this.searchQuotes}
            filter={this.filter}
            getQuotes={this.getQuotes}
          />
          </Col>
          <Col s={8} className='grid-example'>
          <h3>{this.state.title}</h3>
          <Main quotes={this.state.quotes} />
          </Col>
  
        </Row>
      </div>
    );
  }
}

export default App;
