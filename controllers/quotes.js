const { Quote } = require('../models');

class QuotesController {
  static createQuote(req, res) {
    Quote.create(req.body, { fields: Object.keys(req.body) })
      .then(newQuote => res.status(200).send({ success: true, message: 'quote created', data: newQuote })).catch(err => res.status(400).send({ success: false, message: err.message }));
  }

  static getAllQuotes(req, res) {
    Quote.findAll(
      {
        order: [
          ['updatedAt', 'DESC']],
      },
    ).then((quotes) => {
      if (!quotes.length) {
        return res.status(404).send({ success: false, message: 'No quotes by that author found' });
      }
      return res.status(200).send({ success: true, data: quotes });
    }).catch(err => res.status(400).send({ success: false, message: err.message }));
  }

  static getQuotesById(req, res) {
    Quote.findOne({
      where: {
        id: req.params.quoteId,
      },
    }).then((quote) => {
      if (!quote) {
        return res.status(404).send({ success: false, message: 'not found' });
      }
      return res.status(200).send({ success: true, data: quote });
    }).catch(err => res.status(400).send({ success: false, message: err.message }));
  }

  static getQuoteByAuthor(req, res) {
    Quote.findAll({
      where: {
        author: req.params.author,
      },
    }).then((quotes) => {
      if (!quotes.length) {
        return res.status(404).send({ success: false, message: 'No quotes by that author found' });
      }
      return res.status(200).send({ success: true, data: quotes });
    }).catch(err => res.status(400).send({ success: false, message: err.message }));
  }

  static getQuoteByYear(req, res) {
    Quote.findAll({
      where: {
        year: req.params.year,
      },
    }).then((quotes) => {
      if (!quotes.length) {
        return res.status(404).send({ message: 'not found' });
      }
      return res.status(200).send({ success: true, data: quotes });
    }).catch(err => res.status(400).send({ success: false, message: err.message }));
  }

  static getLongestWordInQuote(req, res) {
    Quote.findOne({
      where:
      { id: req.params.quoteId },
    }).then((quote) => {
      if (!quote) {
        return res.status(404).send({ message: 'not found' });
      }
      let fullQuote = quote.quote;
      fullQuote = fullQuote.replace(/[^A-Za-z0-9 ]/g, '').split(' ');
      let longest = fullQuote[0];
      fullQuote.forEach((word) => {
        if (word.length > longest.length) {
          longest = word;
        }
        return -1;
      });
      return res.status(200).send({
        success: true,
        data: {
          quote: quote.quote,
          author: quote.author,
          longest_word: longest,
          length: longest.length,
        },
      });
    }).catch(err => res.status(400).send({ success: false, message: err.message }));
  }

  static editQuote(req, res) {
    Quote.findOne({
      where: {
        id: req.params.quoteId,
      },
    }).then((quote) => {
      if (!quote) {
        return res.status(404).send({ message: 'not found' });
      }
      return quote.update({
        author: req.body.author || quote.author,
        year: req.body.year || quote.year,
        quote: req.body.quote || quote.quote,
      }).then((updatedQuote) => {
        res.status(200).send({ message: 'updated', data: updatedQuote });
      });
    }).catch(err => res.status(400).send({ success: false, message: err.message }));
  }

  static deleteById(req, res) {
    return Quote.findOne({
      where: {
        id: req.params.quoteId,
      },
    }).then((quote) => {
      if (!quote) {
        return res.status(404).send({ message: 'Not found' });
      }
      return quote.destroy().then(() => res.status(200).send({ success: true, message: 'Deleted successfully' }));
    }).catch(err => res.status(400).send({ success: false, message: err.message }));
  }

  static deleteByAuthor(req, res) {
    Quote.findAll({
      where: {
        author: req.params.author,
      },
    }).then((quotes) => {
      if (!quotes.length) {
        return res.status(404).send({ success: false, message: 'Not found' });
      }
      return Quote.destroy({
        where: {
          author: req.params.author,
        },
      }).then(() => res.status(200).send({ success: true, message: 'Deleted successfully' }));
    }).catch(err => res.status(400).send({ success: false, message: err.message }));
  }

  static deleteByYear(req, res) {
    Quote.findAll({
      where: {
        author: req.params.author,
      },
    }).then((quotes) => {
      if (!quotes.length) {
        return res.status(404).send({ success: false, message: 'Not found' });
      }
      return Quote.destroy({
        where: {
          author: req.params.author,
        },
      }).then(() => res.status(200).send({ success: true, message: 'Deleted successfully' }));
    }).catch(err => res.status(400).send({ success: false, message: err.message }));
  }

  static searchQuotes(req, res) {
    Quote.findAll({
      where: {
        quote: {
          $iLike: `%${req.query.searchTerm}%`,
        },
      },
    }).then((searchResult) => {
      if (!searchResult.length) {
        return res.status(404).send({ success: false, message: 'Not found' });
      }
      return res.status(200).send({ success: true, data: searchResult });
    }).catch(err => res.status(400).send({ success: false, message: err.message }));
  }
}
export default QuotesController;
