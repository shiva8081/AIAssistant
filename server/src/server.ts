import dotenv from "dotenv";
import { createServer } from "./index.ts";

dotenv.config();

const app = createServer();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});