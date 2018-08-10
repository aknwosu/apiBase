import React, { Component } from 'react'
import { Row, Input, Button, Icon } from 'react-materialize'

export default class SideBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: '',
      year: '',
      author: '',
      search: '',
      filter: '',
    }
  }
  handleChange = (value, label) => {
    this.setState({ [label]: value })
  }
  createQuote = () => {
    this.props.createQuote(this.state.quote, this.state.author, this.state.year)
    this.setState({
      quote: '',
      year: '',
      author: '',
      search: '',
      filter: '',
    })
  }

  filter = () => {
    this.props.filter(this.state.year)
    this.setState({
      filter: '',
      quote: '',
      year: '',
      author: '',
    })
  }
  search = () => {
    this.props.searchQuotes(this.state.search)
    this.setState({
      search: '',
      quote: '',
      year: '',
      author: '',
    })
  }
  render() {
    return (
      <div>
        <div>
          <Button
            s={12}
            onClick={this.props.getQuotes}
            className="allQuotesButton"
            waves="light"
          >Get All Quotes</Button>
          <h5>Create Quote</h5>
          <Row>
            <Input
              placeholder="Quote here..."
              s={12}
              label="Quote"
              value={this.state.quote}
              onChange={({ target: { value } }) => this.handleChange(value, 'quote')}
            />
            <Input
              s={12}
              label="Year"
              placeholder="2000"
              value={this.state.year}
              onChange={({ target: { value } }) => this.handleChange(value, 'year')}
            />
            <Input
              placeholder="Author Name"
              s={12}
              value={this.state.author}
              label="Author"
              onChange={({ target: { value } }) => this.handleChange(value, 'author')}
            />
            <Button
              className="createQuote"
              waves="light"
              s={3}
              onClick={this.createQuote}
            >Add Quote<Icon left>cloud</Icon></Button>
          </Row>
        </div>
        <div>

          <Row>
            <Input
              type="text"
              placeholder="Enter Search Text"
              value={this.state.search}
              s={8}
              onChange={({ target: { value } }) => this.handleChange(value, 'search')}
            />
            <Button
              className="filterSearch"
              s={3}
              waves="light"
              onClick={this.search}
            >
            Search
            </Button>
          </Row>
          <Row>
            <Input
              placeholder="Filter by year"
              s={8}
              value={this.state.filter}
              onChange={({ target: { value } }) => this.handleChange(value, 'filter')}
            />
            <Button
              s={4}
              className="filterSearch"
              waves="light"
              onClick={this.filter}
            >
            Filter
            </Button>
          </Row>
        </div>
      </div>
    )
  }
}
