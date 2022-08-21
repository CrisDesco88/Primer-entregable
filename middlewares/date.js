const dateLog = (req, _res, next) => {
	let now = new Date();
	console.log(
		`${req.method} ${req.url} ${
			"at " + now.toLocaleTimeString() + " of " + now.toLocaleDateString()
		}`
	);
	next();
};

export default dateLog;
