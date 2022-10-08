import bcrypt from "bcrypt";

class Bcrypt {
  constructor() {}

  async hashing(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }

  async compare(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
  }
}
const bc = new Bcrypt();
export default bc;
