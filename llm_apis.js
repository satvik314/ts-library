import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage } from "@langchain/core/messages";
import 'dotenv/config'

// const model = new ChatOpenAI({
//     modelName: "gpt-3.5-turbo-0125",
//     temperature: 0.9,
//     openAIApiKey: process.env.OPENAI_API_KEY
// });

// const response = await model.invoke([new HumanMessage("Write a mail to my boss")]);

// console.log(response)


// Together AI model

// import { ChatTogetherAI } from "@langchain/chat_models";
// import { TogetherAI } from "@langchain/community/llms/togetherai";

// const mixtral = new TogetherAI({
//     modelName: "NousResearch/Nous-Hermes-2-Mixtral-8x7B-DPO",
//     temperature: 0.9,
//     // openAIApiKey: process.env.TOGETHER_API_KEY,
    
// })

// const response_mix = await mixtral.invoke([new HumanMessage("Write a mail to my boss")]);

// console.log(response_mix)


import { TogetherAI } from "@langchain/community/llms/togetherai";
import { PromptTemplate } from "@langchain/core/prompts";

const model = new TogetherAI({
  modelName: "mistralai/Mixtral-8x7B-Instruct-v0.1",
});
const prompt = PromptTemplate.fromTemplate(`System: You are a helpful assistant.
User: {input}.
Assistant:`);
const chain = prompt.pipe(model);
const response = await chain.invoke({
  input: `Tell me a joke about bears`,
});
console.log("response", response);

