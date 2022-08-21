import Products from "../models/Products.js";
import { groupProductsByCategory } from "../helpers/groupProducts.js";
import mostExpensiveProductOfCategory from "../helpers/findMostExpensive.js";

const getAllProducts = async (_req, res) => {
	try {
		const allProducts = await Products.fetchAllProducts();
		res.status(200).json(allProducts);
	} catch (error) {
		console.log(error);
		res.status(404);
	}
};

const getProductsAndCategories = async (_req, res) => {
	try {
		const allCategories = await Products.fetchCategories();
		const productsAndCategories = await groupProductsByCategory(allCategories);
		res.status(200).json(productsAndCategories);
	} catch (error) {
		console.log(error);
	}
};

const getProductsByCategory = async (req, res) => {
	const { category } = req.params;
	try {
		const productsByCategory = await Products.fetchProductsByCategory(category);

		res.status(200).json(productsByCategory);
	} catch (error) {
		console.log(error);
	}
};

const getProductsById = async (req, res) => {
	const { id } = req.params;

	try {
		const product = await Products.fetchProductsById(id);

		res.status(200).json(product);
	} catch (error) {
		console.log(error);
	}
};

const getProductsByPrice = async (req, res) => {
	const { order } = req.query;
	try {
		const products = await Products.fetchAllProducts();
		const productsByPrice = products.map((product) => {
			return {
				id: product.id,
				title: product.title,
				price: product.price,
			};
		});
		productsByPrice.sort((a, b) => a.price - b.price);
		if (order === "desc") productsByPrice.reverse();
		res.status(200).json(productsByPrice);
	} catch (error) {
		console.log(error);
	}
};

const getMostExpensiveProducts = async (_req, res) => {
	try {
		const allProducts = await Products.fetchAllProducts();
		const mostExpensive = mostExpensiveProductOfCategory(allProducts);

		res.status(200).json(mostExpensive);
	} catch (error) {
		console.log(error);
	}
};

const productController = {
	getAllProducts,
	getProductsByCategory,
	getProductsAndCategories,
	getProductsById,
	getProductsByPrice,
	getMostExpensiveProducts,
};

export default productController;
