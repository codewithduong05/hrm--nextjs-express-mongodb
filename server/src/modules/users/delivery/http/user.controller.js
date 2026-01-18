 function buildUserController({ createUserUseCase, getUserUseCase }) {
  return {
    createUser: async (req, res) => {
      try {
        const result = await createUserUseCase.execute(req.body);
        return res.status(201).json(result.toJSON());
      } catch (err) {
        return res.status(400).json({ message: err.message });
      }
    },

    getUser: async (req, res) => {
      try {
        const id = req.params.id;
        const result = await getUserUseCase.execute(id);
        return res.json(result.toJSON());
      } catch (err) {
        return res.status(404).json({ message: err.message });
      }
    }
  };
};

export default buildUserController;