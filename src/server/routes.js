/*
* The MIT License (MIT)
*
* Copyright (c) 2016 TRIOLOGY GmbH
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
*/

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

//////////////
// GET, POST
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

//////////////
// GET, PUT, DELETE by Id

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
