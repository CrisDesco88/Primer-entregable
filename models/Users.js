import fetch from "node-fetch";

const fetchAllUsers = async () => {
	try {
		const users = await fetch("https://fakestoreapi.com/users");
		return users.json();
	} catch (error) {
		console.log(error);
	}
};

const fetchFirstThreeUsers = async () => {
	try {
		const firstThreeUsers = await fetch(
			"https://fakestoreapi.com/users?limit=3"
		);
		console.log(firstThreeUsers);
		return firstThreeUsers.json();
	} catch (error) {
		console.log(error);
	}
};

const Users = {
	fetchAllUsers,
	fetchFirstThreeUsers,
};

export default Users;
