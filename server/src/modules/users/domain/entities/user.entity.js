// server/src/modules/users/domain/entities/user.entity.js
class User {
  constructor({ id = null, email, passwordHash = null }) {
    if (!email) throw new Error("email is required");
    this.id = id;
    this.email = email;
    this.passwordHash = passwordHash;
  }

  toJSON() {
    return {
      id: this.id,
      email: this.email,
    };
  }
}

export default User
