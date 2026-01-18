// server/src/modules/users/application/usecases/create-user.usecase.js
import User from "@/modules/users/domain/entities/user.entity.js";
import validateCreateUserDTO from "@/modules/users/application/dtos/create-user.dto.js";
import crypto from "crypto"

class CreateUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository
    }

    async execute(payload) {
        const { email, password } = validateCreateUserDTO(payload)

        const existing = await this.userRepository.findByEmail(email);
        if (existing) throw new Error("User already exists");

        // simple hash (replace with bcrypt in prod)
        const passwordHash = crypto.createHash("sha256").update(password).digest("hex");

        const domainUser = new User({ email, passwordHash });
        const created = await this.userRepository.create(domainUser);

        return new User({
            id: created.id || created._id,
            email: created.email,
        });
    }
}