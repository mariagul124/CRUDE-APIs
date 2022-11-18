const Pool = require('pg').Pool
require('dotenv').config()
console.log(process.env);

const pool = new Pool({

     user: process.env.DB_USER,
     host: process.env.DB_HOST,
     database: process.env.DB,
     password: process.env.DB_PASS,
     port: process.env.DB_PORT,
     ssl:
     {
        rejectUnauthorized: false
     }
    });

 module.exports = pool;