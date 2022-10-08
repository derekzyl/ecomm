const { createHmac } = await import("node:crypto");
const secret = Math.random().toString(36).substring(2, 15);
export const hash = createHmac("sha256", secret)
  .update(process.env.CRYPTO)
  .digest("hex");
