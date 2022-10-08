import Jwt from "jsonwebtoken";
import "dotenv/config";
import { promisify } from "util";

class JwtUtils {
  constructor() {
    this.secret = process.env.JWT_SECRET;
  }

  generateToken(payload, options) {
    options
      ? options
      : {
          expiresIn: "1h",
        };
    return Jwt.sign({ id: payload }, this.secret, options);
  }

  verifyToken(token) {
    const newToken = Jwt.verify(token, this.secret);
    if (newToken) {
      return newToken;
    }
  }
}

const jwtUtils = new JwtUtils();
export default jwtUtils;
