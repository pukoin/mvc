const { Client } = require('pg');

const db = new Client({
    connectionString: process.env.DATABASE_URL || 'postgres://ajczjmbcocgwuo:8e0188add39a3463115f607dfdbac59bcd42b907de0b56e8b1e4b525e3c104b3@ec2-54-225-113-7.compute-1.amazonaws.com:5432/d6l2n5ju3gg2ij',
    ssl: true,
});
const query = async () => {
    await db.connect();

    const result  = await db.query(
        'CREATE TABLE items(id SERIAL PRIMARY KEY, name VARCHAR(40) not null, weight VARCHAR(40) not null, height VARCHAR(40) not null, hair VARCHAR(40) not null, gpa REAL)');

    console.log(result)
    await db.end()

}

query()
