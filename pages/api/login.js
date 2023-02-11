import { Magic } from "@magic-sdk/admin";

let mAdmin = new Magic(process.env.MAGIC_SECRET_KEY);

export default async function login(req, res) {
  try {
    const didToken = mAdmin.utils.parseAuthorizationHeader(
      req.headers.authorization
    );
    await mAdmin.token.validate(didToken);
    res.status(200).json({ authenticated: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
