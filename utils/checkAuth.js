import jwt from "jsonwebtoken";

export default async (req) => {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) return null;

    let { _id } = jwt.verify(token, process.env.JWT_SECRET);
    return _id;
  } catch (error) {
    return null;
  }
};
