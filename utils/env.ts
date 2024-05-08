import path from "path";
import { config } from "dotenv";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

config({
  path: path.resolve(__dirname, "../.env"),
});

console.log(process.env.OPENAI_API_KEY);
