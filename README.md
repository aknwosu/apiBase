# Quotes Application
### [Check Out the Quotes Builder App Here!!!](https://quotesappserver.herokuapp.com/)

This is a quotes application that will
- Store a quote with its author name, year.
- Get quotes by ID, year, by author name.
- Edit quotes
- Get the longest word in a quote and its length
- Delete by ID, by author name and all the quotes related and by year.
- Search through quotes and using one word 

### PreInstallation Checks
  * Postico/PgAdmin
  * Postgres

## Installation 
1. Clone this repo
``` git clone https://github.com/aknwosu/apiBase.git ```

2. Install Dependencies ``` npm install ```

3. Start the server. ``` npm start``` Server is set to start on localhost:4000

4. Create the database in postico or ```creeatedb <DB_NAME>``` and change the settings in config/config.js to correspond 

5. Run migrations ``` sequelize db:migrate ```

### Routes
#### Create quote:

* POST: '/api/v1/quotes'

  Body:
  ```
  {
    "author": "author name",
    "year": 2000,
    "quote": "Your thoughts become things."
  }
  ```

#### Get all quotes:
GET: '/api/v1/quotes'

#### Search quotes:

* GET: ``` '/api/v1/quotes/search?searchTerm=some_search_term'``` 


#### Quotes by ID:
* GET: '/api/v1/quotes/:quoteId'
* DELETE: '/api/v1/quotes/:quoteId'
* PUT: '/api/v1/quotes/:quoteId'

  Body:
  ```
  {
    "author": "author name",
    "year": 2007,
    "quote": "There is no greater power in the Universe than the power of love. "
  }
  ```

#### Get longest word in a quote

* GET: ``` '/api/v1/quotes/:quoteId/longest'``` 


#### Quotes by authors
*  GET: ``` '/api/v1/quotes/authors/:author'```

* DELETE: ```'/api/v1/quotes/authors/:author'```

#### Quotes by year
*  GET: ``` '/api/v1/quotes/years/:year'```

* DELETE: ```'/api/v1/quotes/years/:year'```
