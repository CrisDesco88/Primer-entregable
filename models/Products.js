import fetch from "node-fetch";

const fetchAllProducts = async () => {
	try {
		const data = await fetch("https://fakestoreapi.com/products");
		return data.json();
	} catch (error) {
		console.log(error);
	}
};

const fetchProductById = async (id) => {
	try {
		const data = await fetch("https://fakestoreapi.com/products" + "/" + id);
		return data.json();
	} catch (error) {
		console.log(error);
	}
};

const fetchCategories = async () => {
	try {
		const categories = await fetch(
			"https://fakestoreapi.com/products/categories"
		);
		return categories.json();
	} catch (error) {
		console.log(error);
	}
};

const fetchProductsByCategory = async (category) => {
	try {
		const data = await fetch(
			`https://fakestoreapi.com/products/category/${category}`
		);
		return data.json();
	} catch (error) {
		console.log(error);
	}
};

const fetchProductsById = async (id) => {
	try {
		const products = await fetch(`https://fakestoreapi.com/products/${id}`);
		return products.json();
	} catch (error) {
		console.log(error);
	}
};

const Products = {
	fetchAllProducts,
	fetchProductById,
	fetchCategories,
	fetchProductsByCategory,
	fetchProductsById,
};

export default Products;
