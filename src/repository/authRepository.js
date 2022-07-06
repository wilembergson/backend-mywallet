import connection from "../database.js";

export async function findUser(email){
    return connection.query(
        `SELECT * FROM "users" WHERE "email"=$1`,
        [email]
    );
}

export async function saveUser(name, email, hashedPassword){
    await connection.query(
        `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
        [name, email, hashedPassword]
      );
}