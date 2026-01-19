
import UserRepository from "@/modules/users/domain/repositories/user.repository";
class MongoUserRepository extends UserRepository {
    async create(user) {
        return { ...user, id: Date.now().toString() };
    }
    async findByEmail(email) {
        return null;
    }
}
export default MongoUserRepository;