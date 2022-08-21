import fetch from "node-fetch";

const fetchAllCarts = async () => {
	try {
		const carts = await fetch("https://fakestoreapi.com/carts");
		return carts.json();
	} catch (error) {
		console.log(error);
	}
};

const Carts = {
	fetchAllCarts,
};

export default Carts;
