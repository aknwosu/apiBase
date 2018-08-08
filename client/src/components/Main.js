import React, { Component } from 'react'
import { Row, Input, Button, Icon } from 'react-materialize';

export default class Main extends Component {
  render() {
    
    return (
      <div>
      <div>
        <h1>Quote App</h1>
        
      </div>
      <div>
      {console.log("main", this.props)}
      {this.props.quotes && this.props.quotes.map(({quote, author, year}, index) => 
       (<Row key={`quote${index}`}>
        <div>{quote}</div>
        <span>{author}</span>
        <span>{year}</span>
        </Row>)
      )}
      
      </div>
    </div>
    )
  }
}
