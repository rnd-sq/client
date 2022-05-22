import User from "../../db/model/User.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function handler(req, res) {
    const { email, password } = req.body;

    // Check if missing any of the required fields
    if (!email || !password) 
        return res.status(400).send({
            message: "Email and password are required"
        });
    
    // Find the user and check if the password is correct
    const user = await User.findOne({ email });

    if (user) 
        return res.status(400).send({
            message: "Email already registered"
        });

    // Create user
    const newUser = new User({
        email,
        password: await bcrypt.hash(password, 10),
    });

    await newUser.save();

    // Set the session
    res.send({
        message: "OK",
        token: jwt.sign({ email }, process.env.JWT_SECRET),
    });
}