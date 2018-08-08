import React, { Component } from 'react';
import { Row, Input, Button, Icon } from 'react-materialize';

export default class SideBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: null,
      year: '',
      author: '',
      search: null,
      year: null
    }
  }
  handleChange = (value, label) => {
    console.log('handle changer', value, label)
    this.setState({[label]: value})
  }
  render() {
    return (
      <div>
        <div>
          <h3>Create Quote</h3>
          <Row>
            <Input placeholder="Quote here..." s={3} label="Quote" onChange={({target: {value}}) => this.handleChange(value, 'quote')}/>
            <Input s={3} label="Year" placeholder='2000' onChange={({target: {value}}) => this.handleChange(value, 'year')} />
            <Input placeholder="Author Name" s={3} label="Author" onChange={({target: {value}}) => this.handleChange(value, 'author')} />
            <Button waves='light' onClick={()=> this.props.createQuote(this.state.quote, this.state.author, this.state.year)}>Add Quote<Icon left>cloud</Icon></Button>
          </Row>
        </div>
        <div>
        <Row>
          <Input placeholder="Enter Search Text" s={3} onChange={({target: {value}}) => this.handleChange(value, 'search')}/>
          <Button waves='light' onClick={() => this.props.searchQuotes(this.state.search)}>Search<Icon left>cloud</Icon></Button>
        </Row>
        <Row>
          <Input placeholder="Filter by year" s={3} onChange={({target: {value}}) => this.handleChange(value, 'year')}/>
          <Button waves='light' onClick={() => this.props.filter(this.state.year)}>Filter<Icon left>cloud</Icon></Button>
        </Row>
        </div>
      </div>
    )
  }
}
