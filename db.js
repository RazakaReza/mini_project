const{Pool}=require('pg');
require('dotenv').config();

constpool=newPool({
    connectionString:process.env.DATABASE_URL,

    ssl:{
        rejectUnauthorized:false
}
});

module.exports={
    query:(text,params)=> pool.query(text,params),
};