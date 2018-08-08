
module.exports = (app) => {
	app.get('/api/v1/', (req, res) => {
		res.send({ message: 'Quotes routes base' });
	});

	app.route('/api/v1/quotes')
		.post(QuotesController.createQuote)
		.get(QuotesController.getAllQuotes);

	app.route('/api/v1/quotes/:quoteId')
		.get(QuotesController.getQuotesById)
	app.route('/api/v1/quotes/authors/:author')
		.get(QuotesController.getQuoteByAuthor)
	app.route('/api/v1/quotes/years/:year')
		.get(QuotesController.getQuoteByYear)
};
