import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const run = await openai.beta.threads.runs.submitToolOutputs("thread_123", "run_123", {
    tool_outputs: [
      {
        tool_call_id: "call_001",
        output: "70 degrees and sunny."
      }
    ]
  });

  console.log(run);
}

main();
