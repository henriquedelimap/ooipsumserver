export const AuthenticationAssurance = ({ context }) => {
  const authHeader = context.token;

  if (!authHeader) {
    return false;
  }
  const [, token] = authHeader.splite(" ");

  try {
    const decoded = verify(token, AuthConfig.jwt.secret);
    return !!decoded;
  } catch (error) {
    return false;
  }
};
