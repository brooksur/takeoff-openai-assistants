import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function main() {
  const message = await openai.beta.threads.messages.update(
    "thread_p3Id8Ib5HXhdFf0OZtLoTNkt",
    "msg_XsIa4biEPcH0GWBsfPSa8sjX",
    {
      metadata: {
        modified: "true",
        user: "abc123",
      },
    }
  );

  console.log(message);
}

main();
