
import UserRepository from "@/modules/users/domain/repositories/user.repository.js";
import User from "./user.model";
class MongooseUserRepository extends UserRepository {
   async create(domainUser) {
    const created = await User.create({
      email: domainUser.email,
      name: domainUser.name,
      passwordHash: domainUser.passwordHash
    });

    const obj = created.toObject();

    return {
      id: obj._id.toString(),   // ✅ map _id → id
      email: obj.email,
      name: obj.name,
    };
  }

  async findByEmail(email) {
    const user = await User.findOne({ email }).lean();
    if (!user) return null;

    return {
      id: user._id.toString(),
      email: user.email,
      name: user.name
    };
  }

  async findById(id) {
    const user = await User.findById(id).lean();
    if (!user) return null;

    return {
      id: user._id.toString(),
      email: user.email,
      name: user.name
    };
  }
}