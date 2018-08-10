import React from 'react'
import { Row, Card } from 'react-materialize'
const Main = ({ quotes }) => (
  <div className="mainEntry">
    <div>
      {quotes && quotes.map(({ quote, author, year }, index) =>
        (<Row key={`quote${index}`} className="cardRow">
          <Card className="teal lighten-2 cardContent" key={`quote${index}`} textClassName="white-text" actions={[<div>{author}, {year}</div>]}>
            <h5>{quote}</h5>
          </Card>
        </Row>)
      )}
      {!quotes.length &&
        <Row>
          <Card className="teal lighten-2" textClassName="white-text">
            <h5>NO RESULT FOUND</h5>
          </Card>
        </Row>}
    </div>
  </div>
)

export default Main
