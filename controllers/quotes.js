const { Quote } = require('../models');

class QuotesController {
	static createQuote(req, res) {
		Quote.create(req.body, { fields: Object.keys(req.body) })
			.then((newQuote) => {
				return res.status(200).send({ success: true, message: 'quote created', data: newQuote });
			}).catch(err => res.status(400).send({ success: false, message: err.message }));
	}

	static getAllQuotes (req, res) {
		Quote.findAll().then((quotes) => {
			if (!quotes.length) {
				return res.status(404).send({success: false, message: 'No quotes by that author found'});
			}
			return res.status(200).send({success: true, data: quotes});
		}).catch(err => res.status(400).send({ success: false, message: err.message }));
	}
