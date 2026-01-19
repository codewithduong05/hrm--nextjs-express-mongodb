import CreateUserUseCase from "@/modules/users/application/usecases/create-user.usecase"
import MongoUserRepository from "./persistence/mongo-user.repository"
function buildUsersModule() {
    const userRepository = new MongoUserRepository()

    const createUserUseCase = new CreateUserUseCase()

    return {
        createUserController: userController(createUserUseCase),
    };
}
export default buildUsersModule;