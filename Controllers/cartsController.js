import Carts from "../models/Carts.js";
import Users from "../models/Users.js";


const getAllCarts = async (_req, res) => {
	try {
		const allCarts = await Carts.fetchAllCarts();
		console.log(typeof allCarts);
		res.status(200).json(allCarts);
	} catch (error) {
		console.log(error);
		res.status(404);
	}
};
const getBigCarts = async (_req, res) => {
	try {
		const allCarts = await Carts.fetchAllCarts();
		const allUsers = await Users.fetchAllUsers();
		const bigCarts = allCarts.filter((cart) => {
			if (cart.products.length > 2) {
				const cartUser = allUsers.find((user) => user.id === cart.userId);
				return {
					cart,
					user: cartUser.name,
				};
			}
		});
		res.status(200).json(bigCarts);
	} catch (error) {
		console.log(error);
		res.status(404);
	}
};

const cartsController = {
	getAllCarts,
	getBigCarts,
};

export default cartsController;
