const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  let params = [
    req.body.commentitle,
    req.body.comment,
    req.body.jobsecurity,
    req.body.joblifelalance,
    req.body.jobsecurityandadvancementr,
    req.body.management,
    req.body.compensationbenefit,
    req.params.userId,
    req.params.companyId,
  ];
  console.log("post params are:", params)
  let sqlQuery = `
INSERT INTO "review"
  ("commenttitle", "usercomment", "joblifelalance", "compensationbenefit",  "jobsecurityandadvancementr",  "management", "jobculture", "userId", "companyId")
VALUES
  ($1, $2, $3, $4, $5, $6, $7, $8, $9);`;
  pool.query(sqlQuery, params)
  .then(dbRes => {
    console.log("POST review data response is", dbRes)
    res.sendStatus(201)
  }).catch(error => {
    console.log("POST review error is", error)
  })
});

module.exports = router;
