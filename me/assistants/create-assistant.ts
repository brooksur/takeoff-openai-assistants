import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function createAssistant() {
  const assistant = await openai.beta.assistants.create({
    name: "My First API Assistant",
    description: "This is my first assistant created with the OpenAI API",
    model: "gpt-3.5-turbo",
  });

  console.log(assistant);
}

createAssistant();
