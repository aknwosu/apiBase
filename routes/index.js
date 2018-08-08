
module.exports = (app) => {
	app.get('/api/v1/', (req, res) => {
		res.send({ message: 'Quotes routes base' });
	});

	app.route('/api/v1/quotes')
		.post(QuotesController.createQuote)
		.get(QuotesController.getAllQuotes);

};
