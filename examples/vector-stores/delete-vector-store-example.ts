import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const deletedVectorStore = await openai.beta.vectorStores.del("vs_SxpuAWEq6SOfebCoXArc1WFl");

  console.log(deletedVectorStore);
}

main();
