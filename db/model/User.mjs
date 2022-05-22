import db from "../index.mjs";
import JsonDB from "newer.js/db";

const User = db.collection("users", {
    email: JsonDB.Email,
    password: JsonDB.String, 
});

export default User;