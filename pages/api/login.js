import User from "../../db/model/User.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

/**
 * @type {import("express").RequestHandler}
 */
export default async function handler(req, res) {
    const { email, password } = req.body;

    // Check if missing any of the required fields
    if (!email || !password) 
        return res.status(400).send({
            message: "Missing email or password"
        });
    
    // Find the user and check if the password is correct
    const user = await User.findOne({ email });

    if (!user || !await bcrypt.compare(password, user.password)) 
        return res.status(400).send({
            message: "Invalid email or password"
        });

    // Set the session
    res.send({
        message: "OK",
        token: jwt.sign({ email: user.email }, process.env.JWT_SECRET),
    });
}