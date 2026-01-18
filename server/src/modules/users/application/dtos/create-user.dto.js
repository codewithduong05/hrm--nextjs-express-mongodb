// server/src/modules/users/application/dtos/create-user.dto.js
function validateCreateUserDTO(payload = {}) {
  const { email, password } = payload;
  if (!email || typeof email !== "string") throw new Error("Invalid email");
  if (!password || typeof password !== "string" || password.length < 6) throw new Error("Invalid password (min 6)");
  return { email: email.trim(), password };
}

export default validateCreateUserDTO;
