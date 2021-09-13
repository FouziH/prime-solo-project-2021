const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/homepage", (req, res) => {
  let params = [`%${req.query.search}%`];
  let sqlQuery = `SELECT * FROM "company"
 JOIN "review" ON "review"."companyId" = "company".id
 JOIN "user" ON "user".id ="review"."userId"
 WHERE LOWER("company"."companyname") LIKE $1  OR INITCAP("company"."companyname") LIKE $1 OR UPPER("company"."companyname") LIKE $1  `;
 console.log("query search for company name is", params);

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

router.get('/companies', (reg, res)=>{
   const sqlQuery = `SELECT * FROM "company"`;
;
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
router.get("/review/:id", (req, res) => {
  const sqlQuery = `SELECT * FROM "company"
    WHERE id = $1`;

  let params = [req.params.id];
  console.log("params is params yall", params);
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

router.get('/information/:id', (req, res) => {
  let sqlQuery = `SELECT * FROM "review"
JOIN "user" ON "user".id = "review"."userId"
WHERE "companyId" =$1`; 
 pool
   .query(sqlQuery, [req.params.id])

   .then((dbRes) => {
     console.log(dbRes.rows);
     res.send(dbRes.rows);
   })
   .catch((error) => {
     console.log("Get navbar error is", error);
     res.sendStatus(500);
   });
})

router.post("/add", (req, res) => {
  let sqlQuery = `INSERT INTO "company"
("companyname", "address", "city", "state", "zip", "phonenumber", "imageurl")
VALUES
($1, $2, $3, $4, $5, $6, $7)`;
let params = [
  req.body.companyname,
  req.body.address,
  req.body.city,
  req.body.state,
  req.body.zip,
  req.body.phonenumber,
  req.body.imageurl
]
pool.query(sqlQuery, params)
.then(dbRes =>{
  console.log("new company added is", dbRes)
  res.sendStatus(200)
}).catch(error => {
  console.log("new company add error is", error)
})
})



module.exports = router;
