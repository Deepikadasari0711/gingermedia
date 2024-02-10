import mysql from "mysql2"

const pool = mysql.createPool({
    host: "sql6.freesqldatabase.com",
    user: "sql6682994",
    password: "gEvaCBrPG8",
    database: "sql6682994"
}).promise()

export async function getUser(id) {
    const [rows] = await pool.query(`SELECT * FROM user WHERE mobile=${id}`)
    return rows[0]
}

export async function registerUser(userObj) {
    let name = userObj.name
    let mobile = userObj.mobile
    let email = userObj.email
    let gender = userObj.gender
    let country = userObj.country
    let age = userObj.age
    const result = await pool.query(`INSERT INTO user (name,mobile,email,gender,country,age) VALUES(?,?,?,?,?,?)`, [name, mobile, email, gender, country, age])
    return result
}
export async function updateUser(userObj) {
    let name = userObj.name
    let mobile = userObj.mobile
    let email = userObj.email
    let gender = userObj.gender
    let country = userObj.country
    let age = userObj.age
    const result = await pool.query(`UPDATE user set name=?,mobile=?,email=?,gender=?,country=?,age=?`, [name, mobile, email, gender, country, age])
    return result
}

