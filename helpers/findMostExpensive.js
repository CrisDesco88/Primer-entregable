const mostExpensiveProductOfCategory = (products) => {
	const expensives = [];
	products.map((product) => {
		const index = expensives.findIndex(
			(item) => item.category === product.category
		);

		console.log(index);
		if (index !== -1) {
			if (expensives[index].product.price < product.price) {
				expensives[index].product = product;
			}
		} else {
			expensives.push({ category: product.category, product });
		}
	});

	return expensives;
};

export default mostExpensiveProductOfCategory;
