import React, { Component } from 'react'
import { Row, Card } from 'react-materialize';

export default class Main extends Component {
  render() {
    
    return (
      <div className="mainEntry">

        <div>
        {this.props.quotes && this.props.quotes.map(({quote, author, year}, index) => 
        (<Row key={`quote${index}`}>
            <Card className='teal lighten-2' key={`quote${index}`} textClassName='white-text' actions={[<div>{author}, {year}</div>]}>
              <h5>{quote}</h5>
            </Card>
          </Row>)
        )}
        {!this.props.quotes.length && 
        <Row>
          <Card className='teal lighten-2' textClassName='white-text'>
            <h5>NO RESULT FOUND</h5>
          </Card>
          </Row>}
      </div>
    </div>
    )
  }
}
