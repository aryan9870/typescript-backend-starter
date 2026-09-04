import jwt from "jsonwebtoken";

const generateToken = (id: number) => {
    return jwt.sign(
        { id },
        "aryan_nandini",
        { expiresIn: "7d" }
    );
};


export default generateToken;