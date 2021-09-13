const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get('/:id', (req, res) => {
    console.log(req.body)
    let sqlQuery = `SELECT 
r.id, r.commenttitle, r.usercomment, r.joblifebalance, 
r.compensationbenefit,r.jobsecurityandadvancement, 
r.management, r.jobculture, r."userId", 
c.companyname, c.address, 
c.city,c.phonenumber, c.zip, c.imageurl, u.username
FROM "review" as r
JOIN "company"  as c ON r."companyId" = c.id
JOIN "user" as u  ON r."userId" = u.id
WHERE r."userId" = $1`;
console.log("req is", req.params.id)
let params = [
    req.params.id
]
pool.query(sqlQuery, params)
.then(dbRes  => {
    res.send(dbRes.rows)
}).catch(error => {
    console.log("get user review error is", error)
})
})

router.delete('/:id', (req, res) => {
    console.log("req params id is", req.params.id);
    let sqlQuery = `DELETE FROM "review"
WHERE id = $1; `;
let params = [req.params.id]
pool.query(sqlQuery, params)
.then(dbRes => {
    console.log("delete item is", dbRes)
    res.sendStatus(200)
}).catch(error => {
    res.sendStatus(500)
})
})

module.exports = router;