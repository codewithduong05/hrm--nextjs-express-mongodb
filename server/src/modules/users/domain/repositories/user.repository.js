// server/src/modules/users/domain/repositories/user.repository.js
/**
 * @typedef {Object} CreatedUser
 * @property {string|any} id
 * @property {string} email
 * @property {string} name
 */

class UserRepository {
   /**
   * @param {Object} domainUser
   * @returns {Promise<CreatedUser>}  <-- thay đổi ở đây
   */
 async create(domainUser) {
    throw new Error("UserRepository.create() not implemented");
  }

  async findByEmail(email) {
    throw new Error("UserRepository.findByEmail() not implemented");
  }

  async findById(id) {
    throw new Error("UserRepository.findById() not implemented");
  }
}

export default UserRepository
