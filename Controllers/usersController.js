import Users from "../models/Users.js";

const getAllUsers = async (_req, res) => {
	try {
		const allUsers = await Users.fetchAllUsers();
		res.status(200).json(allUsers);
	} catch (error) {
		console.log(error);
		res.status(404);
	}
};

const getFirstThreeUsers = async (_req, res) => {
	try {
		const firstThreeUsers = await Users.fetchFirstThreeUsers();
		res.status(200).json(firstThreeUsers);
	} catch (error) {}
};

const userController = {
	getAllUsers,
	getFirstThreeUsers,
};

export default userController;
