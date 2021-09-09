const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/homepage", (req, res) => {
  let params = [`%${req.query.search}%`];
  let sqlQuery = ` SELECT * FROM "review" as r
JOIN "user" ON "user".id =r."userId"
JOIN "company" on "company".id = r."companyId"WHERE LOWER("companyName") LIKE $1  OR UPPER("companyName") LIKE $1 OR INITCAP("companyName") LIKE $1 `;
 console.log(params);

  pool
    .query(sqlQuery,params )
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
   const sqlQuery = `
   SELECT * FROM "review" as r
JOIN "user" ON "user".id =r."userId"
JOIN "company" on "company".id = r."companyId"
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
router.get("/information/:id", (req, res) => {
  const sqlQuery = `SELECT * FROM "review" as r
JOIN "user" ON "user".id =r."userId"
JOIN "company" on "company".id = r."companyId"
WHERE  r."companyId" = $1`;
    let params = [req.params.id]
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

module.exports = router;
