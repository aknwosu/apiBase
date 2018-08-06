
module.exports = (app) => {
  app.get('/api/v1/', (req, res) => {
    res.send({ message: 'routes base' });
  });
};
