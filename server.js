const express = require("express");
const cors = require("cors");
const app = express();
const port = 3032;

app.use(express.json());

// const corsOptions = {
// 	origin: "http://localhost:3000"
// };

app.use(cors());


app.use("/v1", require("./FakeStoreAPI/Logica-BACK/getsFakeStoreAPI"));

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
