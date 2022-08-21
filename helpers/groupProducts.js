import Products from "../models/Products.js";

export const groupProductsByCategory = async (categories) => {
	try {
		const categoriesArray = categories.map(async (category) => {
			const products = await Products.fetchProductsByCategory(category);
			return {
				category,
				products: products,
			};
		});

		return await Promise.all(categoriesArray);
	} catch (error) {
		console.log(error);
	}
};
