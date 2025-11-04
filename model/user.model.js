import db from "../config/db.js";
import bcrypt from "bcrypt";

class Users {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  async save() {
    // let sql = `
    //     INSERT INTO users (email, password) VALUES (
    //     '${this.email}', '${this.password}'
    //     )
    //     `;
    const hashedPassword = await bcrypt.hash(this.password, 10);
    let sql = `INSERT INTO users (email, password) VALUES (?, ?)`;
    const [result, _] = await db.execute(sql, [this.email, hashedPassword]);
    return result;
  }
}
export default Users;
