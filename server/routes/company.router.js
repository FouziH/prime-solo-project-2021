const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/homepage", (req, res) => {
  let sqlQuery = `SELECT * FROM "company" 
  WHERE "companyName" = $1;`
  const params = [req.query.search];

  pool
    .query(sqlQuery, params)
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
