// server/src/modules/users/application/usecases/get-user.usecase.js
import User from "@/modules/users/domain/entities/user.entity.js";

class GetUserUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(id) {
    const found = await this.userRepository.findById(id);
    if (!found) throw new Error("User not found");
    return new User({
      id: found.id || found._id,
      email: found.email,
    });
  }
}
export default GetUserUseCase