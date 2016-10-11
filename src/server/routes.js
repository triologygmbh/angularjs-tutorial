var router = require('express').Router();
var four0four = require('./utils/404')();
var Hero = require('./utils/models/hero'); // mongoose model

router.get('/watchmen', getWatchmen); // <host-ip>:<port>/api/watchmen
router.post('/watchmen', postWatchmen);
router.get('/watchmen/:heroId', getWatchmenById);
router.put('/watchmen/:heroId', updateWatchmenById);
router.delete('/watchmen/:heroId', deleteWatchmenById);
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

function getWatchmen(req, res, next) {
  Hero.find(function (err, heroes) {
    if (err) {
      res.send(err);
    }
    else {
      res.json(heroes);
    }
  });
}

function postWatchmen(req, res, next) {
  var hero = new Hero();
  hero.firstName = req.body.firstName;
  hero.lastName = req.body.lastName;
  hero.alias = req.body.alias;

  hero.save(function (err) {
    if (err) {
      res.send(err);
    }
    else {
      res.json({ message: 'Hero ' + req.body.alias + ' created!' });
    }
  });
}

function getWatchmenById(req, res, next) {
  Hero.findById(req.params.heroId, function (err, hero) {
    if (err) {
      res.send(err);
    }
    else {
      res.json(hero);
    }
  });
}

function updateWatchmenById(req, res, next) {
  Hero.findById(req.params.heroId, function (err, hero) {
    if (err) {
      res.send(err);
    }
    else {
      hero.firstName = req.body.firstName;
      hero.lastName = req.body.lastName;
      hero.alias = req.body.alias;
    }
    hero.save(function (err) {
      if (err) {
        res.send(err);
      }
      else {
        res.json({ message: 'Hero ' + req.body.alias + ' updated!' });
      }
    });
  });
}

function deleteWatchmenById(req, res, next) {
  Hero.remove({
    _id: req.params.heroId
  }, function (err, hero) {
    if (err) {
      res.send(err);
    }
    else {
      res.json({ message: 'Hero with id ' + req.params.heroId + ' successfully deleted!' });
    }
  });
}