import db from "../config/db.js";

class Post {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }
  async save() {
    let d = new Date();
    let yyy = d.getFullYear();
    let mm = d.getMonth() + 1;
    let dd = d.getDate();
    let created_at = `${yyy}-${mm}-${dd}`;
    let sql = `
        INSERT INTO post (title, body, created_at) VALUES (
        '${this.title}', '${this.body}', '${created_at}'
        )
        `;
    const [newPost, _] = await db.execute(sql);
    return newPost;
    // return db.execute(sql, [this.title, this.body]);
  }
  static fetchAll() {
    let sql = `SELECT * FROM post`;
    return db.execute(sql);
  }
  static fetchById(id) {
    let sql = `SELECT * FROM post WHERE id=${id}`;
    return db.execute(sql, [id]);
  }
  static async deleteById(id) {
    let sql = `DELETE FROM post WHERE id=${id}`;
    const deleteResult = await db.execute(sql, [id]);
    return deleteResult;
  }
  static async updateById(id, title, body) {
    let sql = `
        UPDATE post 
        SET title='${title}', body='${body}' 
        WHERE id=${id}
        `;
    const result = await db.execute(sql);
    return result;
    //db.execute(sql, [id, title, body]);
  }
}
export default Post;
