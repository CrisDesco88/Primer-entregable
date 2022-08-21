import express from "express";
import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js";
import usersRouter from "./routes/users.router.js";
import dateLog from "./middlewares/date.js";

const app = express();
const PORT = 3001;

app.use(dateLog);
app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);
app.use("/api/users", usersRouter);

app.listen(PORT, () => {
	console.log(`Escuchando puerto ${PORT}`);
});

app.all("*", (_req, res) => {
	res.status(404).send("resourse not found");
});
