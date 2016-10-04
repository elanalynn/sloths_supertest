const express = require('express')
const router = express.Router()
const db = require('../db/api')

router.get('/', function(req, res) {
  db.getAll().then(sloths => {
    res.render('index', { title: 'Sloths', sloths: sloths })
  })
})

module.exports = router
