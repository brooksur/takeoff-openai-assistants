import "utils/env";
import OpenAI from "openai";
import { AssistantCreateParams } from "openai/resources/beta/assistants";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function createAssistant() {
  const assistantData: AssistantCreateParams = {
    model: "gpt-3.5-turbo",
    name: "Accounting Assistant",
    description: "An assistant to help with accounting tasks within Cloud9X",
    instructions: `
      You are an assistant that helps with accounting tasks within Cloud9X. 
      Your users are accoutants and defining data sources, creating invoice mappings, and exporting invoices from the system.
    `,
  };

  const assistant = await openai.beta.assistants.create(assistantData);

  console.log(assistant);
  return assistant;
}

async function createThread() {
  const thread = await openai.beta.threads.create();

  console.log(thread);
  return thread;
}

async function retrieveThread(threadId: string) {
  const thread = await openai.beta.threads.retrieve(threadId);

  console.log(thread);
  return thread;
}

async function createMessage(threadId: string, content: string) {
  const threadMessages = await openai.beta.threads.messages.create(threadId, {
    role: "user",
    content: content,
  });

  console.log(threadMessages);
  return threadMessages;
}

async function createRun(threadId: string, assistantId: string) {
  const run = await openai.beta.threads.runs.create(threadId, {
    assistant_id: assistantId,
  });

  console.log(run);
  return run;
}

async function retrieveRun(threadId: string, runId: string) {
  const run = await openai.beta.threads.runs.retrieve(threadId, runId);

  console.log(run);
  return run;
}

async function main() {
  let assistantId = "asst_AFAwXb35r8N6G3pryVPkKC2W";
  let threadId = "thread_p3Id8Ib5HXhdFf0OZtLoTNkt";
  let messageId = "msg_JVKeU6HzzEXYtlKzWSp1SiEc";
  let runId = "run_sp6Dnm8jR8mG4yAZFCQIhupI";

  if (!assistantId) {
    const assistant = await createAssistant();
    assistantId = assistant.id;
  }

  if (!threadId) {
    const thread = await createThread();
    threadId = thread.id;
  }

  if (!messageId) {
    const message = await createMessage(
      threadId,
      "Hello! How can you help me?"
    );
    messageId = message.id;
  }

  if (!runId) {
    const run = await createRun(threadId, assistantId);
    runId = run.id;
  }

  const thread = await retrieveThread(threadId);
  console.log(thread);
}

main();
