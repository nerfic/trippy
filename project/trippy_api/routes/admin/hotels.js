const express = require('express');
const router = express.Router();
const Model = require('../../models').Hotel;

router.get('/', function(req, res) {
  Model.getAll()
    .then(function(data) {
      console.log('routes/admin/hotels data', data);
      res.render('hotels/list', {
        hotels: data
      });
    })
    .catch(function(err) {
      res.render('error', {
        message: err.toJSON()
      });
    });
});

router.get('/new', (req, res) => {
  res.render('hotels/edit', {
    action: 'add'
  });
});

router.get('/:id', (req, res) => {
  Model.getById(req.params.id)
    .then(function(datum) {
      //   console.log('routes/admin/hotels req.params.id', req.params.id);
      //   console.log('routes/admin/hotels datum', datum);
      var data = Object.assign(datum, { action: 'edit' });
      //   console.log('routes/admin/hotels data', data);
      res.render('hotels/edit', data);
    })
    .catch(function(err) {
      res.render('error', {
        message: err
      });
    });
});

module.exports = router;
