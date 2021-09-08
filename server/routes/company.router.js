const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/homepage", (req, res) => {
//   const params = [req.query.search];
  let sqlQuery = `  SELECT * FROM "company" WHERE LOWER("companyName") LIKE $1  OR UPPER("companyName") LIKE $1 OR INITCAP("companyName") LIKE $1 `;

//   console.log(params);

  pool
    .query(sqlQuery, [`%${req.query.search}%`])
    .then((dbRes) => {
      console.log(dbRes.rows);
      res.send(dbRes.rows);
    })
    .catch((error) => {
      console.log("Get navbar error is", error);
      res.sendStatus(500);
    });
});

router.get('/information', (reg, res)=>{
   const  sqlQuery = `SELECT * FROM "company"
    ORDER BY "companyName" ASC`;
     pool.query(sqlQuery)
       .then((dbRes) => {
         console.log(dbRes.rows);
         res.send(dbRes.rows);
       })
       .catch((error) => {
         console.log("Get navbar error is", error);
         res.sendStatus(500);
       });
})

module.exports = router;
