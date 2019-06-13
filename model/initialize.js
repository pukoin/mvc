const { Client } = require('pg');

const db = new Client({
    connectionString: process.env.DATABASE_URL || 'postgres://ajczjmbcocgwuo:8e0188add39a3463115f607dfdbac59bcd42b907de0b56e8b1e4b525e3c104b3@ec2-54-225-113-7.compute-1.amazonaws.com:5432/d6l2n5ju3gg2ij',
    ssl: true,
});
const query = async () => {
    await db.connect();

    const text = 'INSERT into items (id, name, weight, height, hair, gpa) VALUES($1, $2, $3, $4, $5, $6) RETURNING id'
    const values = [1, 'bobby', '170', '75', 'red', 4.3]
    db.query(text, values)
    .then(
        res => {
            console.log(res.rows[0])
        }
    )
    .catch(e => console.error(e.stack))

    await db.end()

}

query()
