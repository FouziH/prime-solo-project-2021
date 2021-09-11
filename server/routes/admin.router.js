const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/", (req, res) => {
    let sqlQuery = `SELECT * FROM "review"
JOIN "company" ON "company".id = "review"."companyId"
ORDER BY "review".isflagged ASC`;
pool.query(sqlQuery)
.then(dbRes => {
    console.log("admin get data request is", dbRes)
    res.send(dbRes.rows)
}).catch(error => {
    console.log("error getting admin data request is", error)
    res.sendStatus(500)
})
})


module.exports = router;