import QuotesController from '../controllers/quotes';

module.exports = (app) => {
  app.get('/api/v1/', (req, res) => {
    res.send({ message: 'Quotes routes base' });
  });

  app.route('/api/v1/quotes')
    .post(QuotesController.createQuote)
    .get(QuotesController.getAllQuotes);

  app.route('/api/v1/quotes/search')
    .get(QuotesController.searchQuotes);

  app.route('/api/v1/quotes/:quoteId')
    .get(QuotesController.getQuotesById)
    .put(QuotesController.editQuote)
    .delete(QuotesController.deleteById);

  app.route('/api/v1/quotes/:quoteId/longest')
    .get(QuotesController.getLongestWordInQuote);

  app.route('/api/v1/quotes/authors/:author')
    .get(QuotesController.getQuoteByAuthor)
    .delete(QuotesController.deleteByAuthor);

  app.route('/api/v1/quotes/years/:year')
    .get(QuotesController.getQuoteByYear)
    .delete(QuotesController.deleteByYear);
};
