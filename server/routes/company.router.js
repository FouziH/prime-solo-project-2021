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

router.get('/companies', (reg, res)=>{
   const sqlQuery = ` SELECT * FROM "company"`
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
  const sqlQuery = 
`SELECT 
    "company".id, "company"."companyName","company".address,"company".city, "company"."state", "company"."zip","company"."imageUrl", "company"."phoneNumber",ARRAY_AGG("company".id) FROM "company"
JOIN 
    "review" ON "review"."companyId" = company.id
WHERE 
    "company".id  = $1
GROUP BY 
    "company".id`;

  let params = [req.params.id];
  console.log("params is params yall");
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



module.exports = router;
