import "utils/env";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function main() {
  const myThread = await openai.beta.threads.retrieve(
    "thread_NnfAswHDvgzlChOviIV9haUa"
  );

  console.log(myThread);
}

main();
