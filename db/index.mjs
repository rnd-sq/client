import JsonDB from "newer.js/db";
import path from "path";

const db = new JsonDB(path.join(path.resolve(), "main.json"));

export default db;