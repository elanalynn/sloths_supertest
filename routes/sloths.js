const express = require('express')
const router = express.Router()
const db = require('../db/api')


router.get('/', (req, res) => {
  db.getAll().then(sloths => res.send(sloths))
})

module.exports = router
