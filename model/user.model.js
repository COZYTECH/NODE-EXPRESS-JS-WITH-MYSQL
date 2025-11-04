import db from "../config/db.js";

class users {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  async save() {
    let sql = `
        INSERT INTO users (email, password) VALUES (
        '${this.email}', '${this.password}'
        )
        `;
    const [result, _] = await db.execute(sql);
    return result;
  }
}
export default users;
